$(window).on('load', function () {
    $('#status').fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});

// =========== team =================

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

//=========== Progress bars ============

$(function () {

    $('#progress-elements').waypoint(function () {

        $('.progress-bar').each(function () {

            $(this).animate({
                width: $(this).attr('aria-valuenow') + "%"
            });

        });

        this.destroy();

    }, {
        offset: "bottom-in-view"
    });


});

//=========== Responsive Tabs ==================

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

//=========== Portfolio ==================

$(window).on('load', function () {
    //Initialize Isotope 
    $('#isotope-container').isotope({});

    //Button filter 
    $('#isotope-filters').on('click', 'button', function () {
        // Get filter value 
        var filterValue = $(this).attr('data-filter');
        $('#isotope-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

//=========== Magnifier ==================

$(function () {

    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

// =========== Testimonial =================

$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

// =========== Stats-CounterUp =============

$(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1300
    });
});

// =========== Clients section =============

$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        nav: true,
        loop: true,
        dots: false,
        autoplay: false,
        smartSpeed: 700,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});