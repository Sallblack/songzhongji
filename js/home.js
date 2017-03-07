$(function () {
  // 预加载
  var prestrainArr = ['b1.jpg','header.png',]

  var $header = $(".header"),
      $heart = $(".heart"),
      $head4 = $(".head4"),
      $head1 = $(".head1"),
      $head2 = $(".head2"),
      $head3 = $(".head3"),
      $song = $(".song"),
      $page1 = $(".page1"),
      $demond = $(".demond"),
      $face = $(".face"),
      $home = $(".home"),
      $content = $(".content");

  $page1.on('click',function (ev) {
    ev.preventDefault();
    $home.hide();
    $content.show();
  })
})
