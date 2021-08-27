


$(document).ready(function() {


// initialise the hamburger - right option
  $(".hamburger-button").click(function(){
      $(".mobile-menu").slideToggle();
      $(this).toggleClass("active");
    });

    // initialise the hamburger - left option
  $(".hamburger-button-left").click(function(){
      $(".mobile-menu").slideToggle();
      $(this).toggleClass("active");
    });


// initialise the script for slick
  $('.slider-container').slick({
      autoplay: true, // Do we want it to autoplay? true or false
        autoplaySpeed: 3000, // How long between each slide when auto-playing
        speed: 1000, // How fast is the transition in milliseconds
        arrows: false, // Do you want to show arrows to trigger each slide
        accessibility: true, // Enables keyboard tabbing and arrow key navigation
        dots: true, // Enables the dots below to show how many slides
        fade: false, // Changes the animate from slide to fade if true
        infinite: true, // When true, means that it will scroll in a circle
        pauseOnHover: true, // When true means the autoplay pauses when hovering
        pauseOnDotsHover: true, // Pauses the autoplay when hovering over the dots
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1,
      //       infinite: true,
      //       dots: true
      //     }
      //   }
      ]
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });


    
 // This creates a new typing animation in vanilla javascript 

 var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
	loop: true,
  loopCount: 1,
  // backSpeed: 0,
  // backDelay: 500,
	typeSpeed: 100
});
    
// for dropdown descriptions - product pages
var allPanels = $('.accordion > div').hide();

	$('.accordion > h4').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > h4 ').removeClass('open');
    $(this).not(".closing").addClass('open').next().slideDown();
    $('.accordion > h4').removeClass('closing');
    
    return false;
	});


// for dropdown descriptions - hb-menu 
var allPanels = $('.hb-menu-accordion > div').hide();

$('.hb-menu-accordion > a').click(function() {
  allPanels.slideUp();

  $(this).filter('.open').removeClass('open').addClass('closing')
  $('.hb-menu-accordion > a ').removeClass('open');
  $(this).not(".closing").addClass('open').next().slideDown();
  $('.hb-menu-accordion > a').removeClass('closing');
  
  return false;
});

// This is the instagram gallery
  $('[data-fancybox="gallery"]').fancybox({
    protect: true,
    keyboard: true,
    arrows: true,
    infobar: false,
    buttons: [
    "close"
    ],
  });

  });
  