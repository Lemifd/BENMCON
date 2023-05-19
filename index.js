
$(window).scroll(function () {
  var $heightScrolled = $(window).scrollTop();
  const winh=window.innerHeight
  if ($heightScrolled>winh){
$('nav').css('background','rgb(255,255,255,1)');

 
  }
  else if ($heightScrolled<=winh){
    $('nav').css('background','rgb(255,255,255,0.9)');
    var a=$('.nav-item').css('color','rgb(255,255,255)');



  }
  

});

