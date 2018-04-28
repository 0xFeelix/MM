$(function() {

       /* Scroll To Top */
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
         });
	
	
        $('.scroll-to-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
          });


		/*Smooth Scrolling*/
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });



		/*HOME PAGE ANIMATE START*/

/*SCROLL REVEAL*/
	window.sr = ScrollReveal();

$(window).width(function(){

if ($(window).width() > 992){
	// HEADER
	sr.reveal('.navbar-nav', {
		duration: 3000, //Продолжительность
		origin: 'right', //Первопричина 
		distance: '300px', //Дистанция
		viewFactor: 0.2, // 20% элемента должно быть видимым для его обнаружения
	});

}

if ($(window).width() > 600) {

	sr.reveal('#header .header-title', {
		duration: 3000, 
		origin: 'left', 
		distance: '300px', 
		viewFactor: 0.2, 
	});


// FOCUS
	sr.reveal('#focus .row div', {
		duration: 2000, 
		origin: 'left', 
		distance: '200px', 
		viewFactor: 0.1, 
	});



// ME
	sr.reveal('#me .me_left_slide, #portfolio .card_left_slide', {
		duration: 2000, 
		origin: 'left', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	sr.reveal('#me .me_right_slide, #portfolio .card_right_slide', {
		duration: 2000, 
		origin: 'right', 
		distance: '200px', 
		viewFactor: 0.1, 
	});

// Contact
	sr.reveal('#contact form', {
		duration: 2000, 
		origin: 'right', 
		distance: '300px', 
		viewFactor: 0.1, 
	});


// Footer
	sr.reveal('footer .navigation', {
		duration: 2000, 
		origin: 'left', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	sr.reveal('footer .adress', {
		duration: 2000, 
		origin: 'top', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	sr.reveal('footer .social', {
		duration: 2000, 
		origin: 'right', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	/*HOME PAGE ANIMATE END*/



	/*ABOUT ANIMATE START*/
	sr.reveal('#about_me .main-title', {
		duration: 1000, 
		origin: 'right', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	sr.reveal('#about_me .album .l1', {
		duration: 1000, 
		origin: 'left', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	sr.reveal('#about_me .album .r1', {
		duration: 1000, 
		origin: 'right', 
		distance: '200px', 
		viewFactor: 0.1, 
	});
	/*ABOUT ANIMATE END*/


	/*RESUME ANIMATE START*/
	sr.reveal('#resume .resume_technologies', {
		duration: 1000, 
		origin: 'left', 
		distance: '400px', 
		viewFactor: 0.1, 
	});
	sr.reveal('#resume .resume_experience', {
		duration: 1000, 
		origin: 'right', 
		distance: '400px', 
		viewFactor: 0.3, 
	});
	sr.reveal('#resume .resume_education', {
		duration: 1000, 
		origin: 'left',
		distance: '400px', 
		viewFactor: 0.1, 
	});
	/*RESUME ANIMATE END*/







} 
});


});
