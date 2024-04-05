// $(document).ready(function()
//     {
//         $('carouselExampleFade').carousel({
//             interval: 3000,
//             cycle: true
//           }); 
//     });


// const the_animation = document.querySelectorAll('.trainer-card')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('train-card-animation')
//         }
//             else {
//                 entry.target.classList.remove('train-card-animation')
//             }
//         if(entry.isIntersecting){
//             observer.unobserve(entry.target)
//         }
//     })
// },
//    { threshold: 0.5
//    }
   
//    );


//   for (let i = 0; i < the_animation.length; i++) {
//    const elements = the_animation[i];

//     observer.observe(elements);
//   } 



  







// const the_animation_1 = document.querySelector('.our-trainers');

// const the_observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('our-trainers-animation');

//         } 
//         else {

//             entry.target.classList.remove('our-trainers-animation');
//         }
//     //    if (entry.isIntersecting)
//     //    {
//     //     the_observer.unobserve(entry.target)
//     //    }
//     });
// }, {
//     threshold: 0.5
// });

// the_observer.observe(the_animation_1);


// $(document).ready(function(){
//     $(".inside-testimony").owlCarousel();
//   });


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     items:3,
    
//     autoplay:true,
  
//     autoplayTimeout:1000,
//     autoplayHoverPause:true,
//     responsive:{
//       0:{
//       items:1,
//       nav:false
//       },
//       600:{
//       items:1,
//       nav:false
//       },
//       1000:{
//       items:3,
     
//       loop:false
//       }
//     }
    
 
// })