


$(document).ready(function() {


  // initialise palmtree menu
  $(".mob-menu-palmtree").click(function(){
    $(".mobile-menu").slideToggle();
    $(this).toggleClass("active");
  });

// initialise the hamburger - right option
  // $(".hamburger-button").click(function(){
  //     $(".mobile-menu").slideToggle();
  //     $(this).toggleClass("active");
  //   });

  // initialise the hamburger - left option
$(".hamburger-button-left").click(function(){
    $(".mobile-menu").slideToggle();
    $(this).toggleClass("active");
  });

  // initialise the mobile menu dropdwown
//   $(".hb-menu-dropdown a").click(function(){
//   $(".mobile-menu").slideToggle();
//   $(this).toggleClass("active");
// });


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
var hbMenu = $('.hb-menu-accordion > div').hide();

$('.hb-menu-accordion > span').click(function() {
  hbMenu.slideUp();

  $(this).filter('.open').removeClass('open').addClass('closing')
  $('.hb-menu-accordion > span ').removeClass('open');
  $(this).not(".closing").addClass('open').next().slideDown();
  $('.hb-menu-accordion > span').removeClass('closing');
  
  return false;
});



    
 // This creates a new typing animation in vanilla javascript 

 var typed = new Typed('#typed', {
  stringsElement: '#typed-strings',
	loop: true,
  loopCount: 1,
  // backSpeed: 0,
  backDelay: 2000,
	typeSpeed: 100
});

var headertyped = new Typed('#header-typed', {
stringsElement: '#header-typed-strings',
loop: true,
loopCount: 1,
// backSpeed: 0,
backDelay: 2000,
typeSpeed: 100
});
    

// This is the instagram gallery
  // $('[data-fancybox="gallery"]').fancybox({
  //   protect: true,
  //   keyboard: true,
  //   arrows: true,
  //   infobar: false,
  //   buttons: [
  //   "close"
  //   ],
  // });



  });
  