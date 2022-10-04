$(document).ready(function(){
  $('.slider').slick({
    arrows:false,
    mobileFirst:true,
    slidesToShow:1,
    dots:true,
    initialSlide:0,
    autoplay:true,
    autoplaySpeed:4000,
    slidesToScroll:1,
    speed:1000,
    Infinity:true,
    responsive:[
      {
        breakpoint:767,
        settings: {
        arrows:true,
        }
      },
      {
        breakpoint:1023,
        settings: {
          arrows:true,
          slidesToShow:2,
        }
      },
      {
        breakpoint:1439,
        settings: {
          arrows:true,
          slidesToShow:3,
        }
      }
    ]
  });
});