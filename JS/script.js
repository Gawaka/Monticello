// $(document).ready(function(){
//     $('.slider').each(function(key, item) {

//         var sliderIdName = 'slider' + key;
//         var sliderNavIdName = 'sliderItems' + key;
      
//         this.id = sliderIdName;
//         $('.slider-news__items')[key].id = sliderNavIdName;
      
//         var sliderId = '#' + sliderIdName;
//         var sliderNavId = '#' + sliderNavIdName;
      
//         $(sliderId).slick({
//             arrows:false,
//             dots:true,
//             adaptiveHeight:true,
//             slidesToShow:1,
//             centerMode:true,
//             adaptiveHeight:true,
//             dots:true,
//             speed:1000,
//             isFinite:true,
//             autoplay:true,
//             autoplaySpeed:4000,
//             pauseOnFocus:true,
//             vaiableWidht:true,
//           asNavFor: sliderNavId
//         });
      
//         $(sliderNavId).slick({
//             arrows:true,
//             slidesToShow:3,
//             Infinity:true,
//             centerMode:true,
//           asNavFor: sliderId,
        
//         });
      
//       });
// });

// function scrollTo(element) {
//     window.scroll({
//         left: 0,
//         top: element.offsetTop,
//         behavior: "smooth",
//     })
// }

// let arrow = document.querySelector('.arrow__link');
// let projects = document.querySelector('#projects');

// arrow.addEventListener('click', () => {
//     scrollTo(projects);
// })


$(document).ready(function(){
  $('.slider').slick({
    slidesToShow:3,
    dots:true,
  });
});