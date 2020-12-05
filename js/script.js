$(window).on("load", function () {
  $("#status").fadeOut();
  $("#preloader").delay(350).fadeOut("slow");
});

// =========== team =================

$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      }
    }
  });
});

//=========== Progress bars ============

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({
          width: $(this).attr("aria-valuenow") + "%",
        }, 1500);
      });

      this.destroy();
    },
    {
      offset: "bottom-in-view",
    }
  );
});

//=========== Responsive Tabs ==================

$(function () {
  $("#services-tabs").responsiveTabs({
    animation: "slide",
  });
});

//=========== Portfolio ==================

$(window).on("load", function () {
  //Initialize Isotope
  $("#isotope-container").isotope({});

  //Button filter
  $("#isotope-filters").on("click", "button", function () {
    // Get filter value
    var filterValue = $(this).attr("data-filter");
    $("#isotope-container").isotope({
      filter: filterValue,
    });
    //active button
    $("#isotope-filters").find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

//=========== Magnifier ==================

$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

// =========== Testimonial =================

$(function () {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  });
});

// =========== Stats-CounterUp =============

$(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1300,
  });
});

// =========== Clients section =============

$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    nav: true,
    loop: true,
    dots: false,
    autoplay: false,
    smartSpeed: 700,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 6
      }
    }
  });
});

// =========== Google map =============
$(window).on("load", function () {
  var addressString = "230 Broadway, NY New York 10007, USA";
  var location = { lat: 40.712684, lng: -74.22592 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: location,
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Click To See Address",
  });
  var infowindow = new google.maps.InfoWindow({
    content: addressString,
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  // Resize function
  google.maps.event.addDomListener(window, 'resize', function() {
    var cent = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(cent);
  })
});

//============== Show & Hide white-nav-top ===============

$(function () {
  showHideNav();

  $(window).scroll(function () {
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      //show back-to-top button

      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("white-nav-top");
      $(".navbar-brand img").attr("src", "img/logo/logo.png");
      $("#back-to-top").fadeOut();
    }
  }
});

//============== Smooth scrolling ===============

$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    //get section id of clicked section
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 64,
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// ================ remove text-right class for service icon on window < 769px

$(window).on('resize', function(){
  var win = $(this);
  if (win.width() < 768) { 
    $('.icon').removeClass('text-right');
  } else
  {
    $('.icon').addClass('text-right');
  }

});

function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 768) {
      $('.icon').removeClass('text-right');
    }
    else {
        if (!init) {
          $('.icon').addClass('text-right');
        }
    }
}

function hideNav() {
  if($(window).width() < 768) {
    // alert('hello');
    $('.navbar-nav').hide();
    $('.mobile-nav').show();
  } else {
    $('.navbar-nav').show();
    $('.mobile-nav').hide();
  }
}

$(document).ready(function() {
  checkWidth(true);
  hideNav();

  $(window).resize(function() {
    checkWidth(false);
    hideNav();
  });
});

// ================== Mobile menu =======================
// show white nav top
$(function() {
  $('#mobile-nav-close-btn').hide();
  $('#mobile-nav-open-btn').click(function() {
    $("nav").addClass("white-nav-top");
    $('.mobile-nav').css('height', '100vh');
    $('#mobile-nav-open-btn').hide();
    $('#mobile-nav-close-btn').show();
  });
})

// hide white nav top
$(function() {
  $('#mobile-nav-close-btn, .mobile-nav a').click(function() {
    $('.mobile-nav').css('height', '0');
    $("nav").removeClass("white-nav-top");
    $('#mobile-nav-open-btn').show();
    $('#mobile-nav-close-btn').hide();
  });
})

// ================== Animation =======================

$(function() {
  new WOW().init();
})

$(window).on('load', function() {
  $('#home-heading-1').addClass('animate__animated animate__fadeInDown');
  $('#home-heading-2').addClass('animate__animated animate__fadeInLeft');
  $('#home-text').addClass('animate__animated animate__zoomIn');
  $('#home-btn').addClass('animate__animated animate__zoomIn');
  $('#arrow-down').addClass('animate__animated animate__fadeInDown animate__infinite');
});