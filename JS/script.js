/* ------- WOW.JS ------------*/
//activating wow.js



new WOW().init();

$(".content-title-underline").animate({
    "width": "50px",
    "height": "3px"
}, 2000);




/*----------magnific.JS .............*/

//activating magnific wow.js
$('#work').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {

        enabled: true
    }
});






/*--------------- owl-carousel ------------------*/

//activating owl-carousel.js
// team section //

$(".all-team-members").owlCarousel({
    items: 3,
    autoplay: true,
    loop: true,
    autoplaySpeed: 500,
    mouseDrag: true,
    autoplayHoverPause: true,

responsive : {
    // breakpoint from 0 up
    0 : {
      items :1  
    },
    // breakpoint from 480 up
    480 : {
      items :2
    },
    // breakpoint from 768 up
    768 : {
      items :3 
    },
        
    992 : {
      items :4 
    }
}
});


/*--------------- owl-carousel ------------------*/

//activating owl-carousel.js
// testimonial section //

$(".testimonial-customers").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplaySpeed: 500,
    mouseDrag: true,
    autoplayHoverPause: true,
     smartSpeed:400,



});



/*----------- owl-carousel ----------------*/

//activating owl-carousel.js
// clients sections

$(".clients-items").owlCarousel({
            items: 5,
            autoplay: true,
            loop: true,
            autoplaySpeed: 500,
            mouseDrag: true,
            autoplayHoverPause: true,
            smartSpeed:400,
    responsive : {
    // breakpoint from 0 up
    0 : {
      items :1  
    },
    // breakpoint from 480 up
    480 : {
      items :3
    },
    // breakpoint from 768 up
    768 : {
      items :5 
    },
        
    992 : {
      items :6 
    }
}
    
    
});
            /*----------------Counter-up------------- */

            //activating counter-up
            $('.counter').counterUp({
                delay: 20,
                time: 3000
            });



/* ------------ scrolling to Elements ----- */

$(".nav-link , .btn-back-to-top").click(function(e){
    e.preventDefault();
 $("body , html").animate({
    scrollTop :$($(this).data("scroll")).offset().top},800);    
    
});


/*------------------ background-size ---------------------*/

/* ----------- background toggle ------------------- */

$(window).scroll(function(){
           
       if($(this).scrollTop() < 360)
           {
              $('nav').removeClass("navs-color");
           }
       else
           {
               $('nav').addClass("navs-color");
   
           }
});
                  
/* ------------------ butoon back to top  ---------*/
  


     $(window).scroll(function(){
       if($(this).scrollTop() < 360)
           {
              $(".btn-back-to-top").fadeOut(); 
           }
       else
           {
               $(".btn-back-to-top").fadeIn();
           }
   
      }); 
                  
        


/* ------------- menu navbar close when you click/ touch on menu ------*/

$(".navbar-collapse ul li a").on("click touch",function(){
   $(".navbar-toggler-icon").click(); 
});