$content = $('.content');
$shelf_bg = $('.shelf_bg');
$shelf = $('.shelf');
$sofa = $('.sofa');
$lamp = $('.lamp');
$finger = $('.finger');
// console.log($shelf_bg,$shelf,$sofa,$lamp,$finger);

$shelf.on('touchstart',moveStart);
$shelf.on('touchend',moveEnd);
$sofa.on('touchstart',moveStart);
$sofa.on('touchend',moveEnd);
$lamp.on('touchstart',moveStart);
$lamp.on('touchend',moveEnd);

function check(){
  var $shelfX = $shelf.offset().left,
      $shelfY = $shelf.offset().top,
      $shelfW = $shelf.width() + $shelfX,
      $shelfH = $shelf.height() + $shelfY;
  var $sofaX = $sofa.offset().left,
      $sofaY = $sofa.offset().top,
      $sofaW = $sofa.width() + $sofaX,
      $sofaH = $sofa.height() + $sofaY;
  var $lampX = $lamp.offset().left,
      $lampY = $lamp.offset().top,
      $lampW = $lamp.width() + $lampX,
      $lampH = $lamp.height() + $lampY;
  var $x = $shelf_bg.offset().left,
      $y = $shelf_bg.offset().top,
      $w = $shelf_bg.width() + $x,
      $h = $shelf_bg.height() + $y;
  var bol1 = false, bol2 = false, bol3 = false;
  if($shelfX>$x && ($shelfW)<($w) && $shelfY>$y && ($shelfH)<($h)){ bol1 = true;}
  if($sofaX>$x && ($sofaW)<($w) && $sofaY>$y && ($sofaH)<($h)){ bol2 = true;}
  if($lampX>$x && ($lampW)<($w) && $lampY>$y && ($lampH)<($h)){ bol3 = true;}
  if(bol1 && bol2 && bol3){
    console.log('到里面了')
    $content.hide();
    $problem.show();
    answer();
  }
}
function moveStart(ev){
  ev.preventDefault();
  var ox = ev.changedTouches[0].pageX - $(this).offset().left,
      oy = ev.changedTouches[0].pageY - $(this).offset().top;
  $(this).on('touchmove',{"ox":ox,"oy":oy},move);
  $finger.css({display:"none"});
}
function move(ev){
  var ox = ev.data.ox,
      oy = ev.data.oy;
  var x = ev.changedTouches[0].pageX - ox,
      y = ev.changedTouches[0].pageY - oy;
  $(this).css( { left:x,top:y, } );
}
function moveEnd(ev){
  $(this).off('touchmove',move);
  check();
}

// var num = 0;
// // 书桌拖拽
// hShelf.on('tap',function (e) {
//   // console.log(e)
//   finger.style.display = "none";
//   num = 0;
//   return false;
// })
// hShelf.on('panstart',function () {
//   shelfLeft = shelf.offsetLeft;
//   shelfTop = shelf.offsetTop;
//   num = 0;
//   return false;
// })
//
// // Hammer 默认禁止了上下滑动事件，
// hShelf.get('swipe').set({direction:Hammer.DIRECTION_ALL});
//
// // 沙发拖拽
// // hsofa.on('tap',function () {
// //   finger.style.display = 'none';
// //   num = 1;
// // })
// hsofa.on('panstart',function () {
//   sofaLeft = sofa.offsetLeft;
//   sofaTop = sofa.offsetTop;
//   num = 1;
// })
// // Hammer 默认禁止了上下滑动事件，
// hsofa.get('swipe').set({direction:Hammer.DIRECTION_ALL});
//
// // 台灯拖拽
// // hlamp.on('tap',function (e) {
// //   finger.style.display = "none";
// //   num = 2;
// // })
// hlamp.on('panstart',function () {
//   lampLeft = lamp.offsetLeft;
//   lampTop = lamp.offsetTop;
//   num = 2;
// })
// // Hammer 默认禁止了上下滑动事件，
// hlamp.get('swipe').set({direction:Hammer.DIRECTION_ALL});
//
// hdoc.on('panmove',function (e) {
//   console.log(num)
//   if (num == 0) {
//     shelf.style.left = e.deltaX + shelfLeft + 'px';
//     shelf.style.top = e.deltaY + shelfTop + 'px';
//   } else if (num == 1) {
//     // num = shelf;
//     sofa.style.left = e.deltaX + sofaLeft + 'px';
//     sofa.style.top = e.deltaY + sofaTop + 'px';
//   } else if(num==2){
//     lamp.style.left = e.deltaX + lampLeft + 'px';
//     lamp.style.top = e.deltaY + lampTop + 'px';
//   }
//   finger.style.display = "none";
// })
// hdoc.get('swipe').set({direction:Hammer.DIRECTION_ALL});
