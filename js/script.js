$(document).ready(function(){

  $("#nav-about").click(function(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 2000);
  });

  $("#nav-exp").click(function(){
    $('html, body').animate({
        scrollTop: $("#exp").offset().top - 80
    }, 2000);
  });

  $("#nav-proj").click(function(){
    $('html, body').animate({
        scrollTop: $("#proj").offset().top - 80
    }, 2000);
  });
});
