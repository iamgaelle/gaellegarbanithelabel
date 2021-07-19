// initialise the hamburger
$(".hamburger-button").click(function(){
    $(".mobile-menu").slideToggle();
    $(this).toggleClass("active");
  });


// initialise the script for slick
$('.slider-container').slick({
    autoplay: true, // Do we want it to autoplay? true or false
      autoplaySpeed: 3000, // How long between each slide when auto-playing
      speed: 1000, // How fast is the transition in milliseconds
      arrows: true, // Do you want to show arrows to trigger each slide
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
  