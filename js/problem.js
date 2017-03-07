$problem = $('.problem');
$head1_bg = $('.head1_bg');
$head2_bg = $('.head2_bg');
$head3_bg = $('.head3_bg');
$ul = $('ul');
$li = $('li');
$next_btn = $('.next_btn');
$fruit = $('.fruit');
$nanny = $('.nanny');
$sister = $('.sister');
$mrs = $('.mrs');
$bg1 = $('.bg1');
$zaogao = $('.zaogao');
$shadow = $('.shadow');
$share = $('.share');

var num = 0;
var arr = [["装修好的房子你知道怎么检验吗？","A、会","B、不会","C、略懂一点"],["关于家具的颜色你怎样选择？","A、自己选","B、听老公的","C、略懂一点"],["装修开工后的第一步应该做什么？","A、水电改造","B、吊顶","C、贴瓷砖"],["地砖应该比实际铺设面积多购买多少？","A、20%","B、15%","C、10%"],["装修风格选择你的选择是?","A、我喜欢","B、老公喜欢","C、多照顾一下对方喜欢"]];

// 题目随机抽取
function rndFn(min,max){
  return parseInt(Math.random() * (max - min + 1)) + min;
}

var a = 4;
var b = [];
// answer();
function answer() {
  num++;
  var num1 = rndFn(0,3);
  while (b.indexOf(num1) != -1) {
    num1 = rndFn(0,3);
  }
  b.push(num1);
  // console.log(num1);
  for(var i = 0; i < arr.length-1; i++){
    if(i == 0){
      $li.eq(0).html(num + ".&nbsp" + arr[num1][0]);
    }else{
      $li.eq(i).html(arr[num1][i]);
    }
    if (num == 3 ) {
      if(i == 0){
        $li.eq(i).html(num + ".&nbsp" + arr[4][0]);
      }else{
        $li.eq(i).html(arr[4][i]);
      }
    }
  }
}

// $li.eq(1).on("click",function () {
//   $li.eq(1).css({color:"green"});
// })
// for (var j = 1; j <= 3 ; j++ ) {
//   $li.eq(j).on('click',function () {
//     $li.css({color:"black"})
//     $(this).css({color:"green"});
//   })
// }

var time = 0; // 记录下一题的次数
var fenshu = 0; // 记录3道题目的提分
var score = 0; // 记录每道选择题的分数
var space = false; // 布尔值
var $ali = $ul.find('li:gt(0)');
console.log($ali);
$ali.on('click',function(){
  // $ali.onclick = null;
  // $(this).unbind();
  var index = $ali.index($(this));
  $ali.removeClass('change fuck');
  $(this).addClass('change fuck');
  if(index == 0) {
    score = 1;
  }
  if(index == 1) {
    score = 2;
  }
  if(index == 2) {
    score = 3;
  }
  space = true;
  console.log(score);
})

$next_btn.on('click',function () {
  time++;
  if(space){
    fenshu += score;
    answer();
    $ali.removeClass('change fuck');
    space=false;
  }
  console.log(fenshu);

  if(fenshu == 3 && time == 3){
    $problem.hide();
    $fruit.show();
    $nanny.show();
  }
  if(fenshu > 3 && fenshu < 5 && time == 3){
    $problem.hide();
    $fruit.show();
    $sister.show();
  }
  if(fenshu >= 5 && fenshu < 10 && time == 3){
    $problem.hide();
    $fruit.show();
    $mrs.show();
  }
})

$bg1.on("click",function () {
	window.location.href = 'http://www.525j.com.cn/Trans.aspx?sourceSalesMan=weixinTG51&url=http://m.525j.com.cn/ajzx/home_5.shtml'
})

$zaogao.on('touchstart',function (e) {
  e.stopPropagation();
  // $fruit.hide();
  // $fruit.show();
  $shadow.show();
})
$(this).on("touchstart",function (){
  $(".shadow").hide();
});
$(document).on('touchstart touchmove touchend click'),function (e) {
  e.stopPropagation();
}
