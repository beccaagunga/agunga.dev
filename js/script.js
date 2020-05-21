// Hamburger toggle
$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(document).ready(function () {
    $(".lang").on("click", function () {
      $(".hidden-lang").toggleClass("slide-down-lang");
    });
  });

  $(document).ready(function () {
    $(".tools").on("click", function () {
      $(".hidden-tools").toggleClass("slide-down-tools");
    });
  });

  $(document).ready(function () {
    $(".skills").on("click", function () {
      $(".hidden-skills").toggleClass("slide-down-skills");
    });
  });

  // AOS
  AOS.init({
    easing: "ease",
    duration: 1800,
    once: true,
  });

  // text on overlay slides up
  TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut,
  });

  // slides overlay up
  TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
    ease: Expo.easeInOut,
  });

  // Closes nav when link is clicked
  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });

  // Smooth scroll nav links
  $('nav a[href*="#"]').on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );

    // When the user scrolls the page, execute myFunction
    window.onscroll = function () {
      myFunction();
    };

    // Get the header
    var header = document.getElementById(".nav-strip");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add(".sticky");
      } else {
        header.classList.remove(".sticky");
      }
    }
  });
});
