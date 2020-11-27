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
  });
});

//=========== Progress bars ============

$(function () {
  $("#progress-elements").waypoint(
    function () {
      $(".progress-bar").each(function () {
        $(this).animate({
          width: $(this).attr("aria-valuenow") + "%",
        });
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
