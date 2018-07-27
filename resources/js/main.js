$(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true
  });
});

var oldScrollTop = 0;
$(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - oldScrollTop > 50){
    var navHeight = $('.navbar').outerHeight(true);
    $('.navbar').animate({top: '-' + navHeight}, 150);
  } else if (oldScrollTop - scrollTop > 50) {
    $('.navbar').animate({top: '0'}, 150);
  }
  oldScrollTop = scrollTop;
});
