jQuery(window).on('scroll', function() {
    if($(window).scrollTop() >= $('#desktopTabs').offset().top && $(window).scrollTop() <= $('#section8').offset().top){
       $('#tabs').addClass('sticky');
    }
    else{
       $('#tabs').removeClass('sticky');
    }
});
$(document).ready(function() {
    //slick 
  $(".slick.marquee").slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
  }); 
  //toggle the component with class accordion_body
  $(".accordion_head").click(function() {

    $('html, body').animate({
      scrollTop: $('#MobileAccordian').offset().top
    }, 0);
    
    if($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(100);
      $(".plusminus").text('+');
    }
    if($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(100);
      $(this).children(".plusminus").text('+');
    } else {
      $(this).next(".accordion_body").slideDown(100);
      $(this).children(".plusminus").text('-');
    }
  });
// one pagenav js
  $('.scroll').onePgaeNav({
      wrapper : '#onepage-nav'
  });
 
});

(function ($) {
    $.fn.onePgaeNav = function (options) {
        var settings = $.extend(
                {
                    activeClass: "active",
                    wrapper: "", // Nav wrapper selector for scroll effect
                    speed: 100, // animation speed
                    navStop: 0, // stop before top
                    navStart: 0, // change class before navstart pixel
                },
                options
            ),
            $that = $(this);

        $(this).on("click", clickScroll);

        if (settings.wrapper) {
            $(window).on("scroll", function () {
                var sectionTop = [],
                    windowTop = $(window).scrollTop();

                $that.each(function () {
                    var hash = $(this).attr("href"),
                        hashOffset = $(hash).offset();
                    if (typeof hashOffset !== "undefined") {
                        sectionTop.push(hashOffset.top);
                    }
                });

                $.each(sectionTop, function (index) {
                    if (windowTop > sectionTop[index] - settings.navStart) {
                        $that.removeClass(settings.activeClass).eq(index).addClass(settings.activeClass);
                    }
                });
            });
        }

        function clickScroll(event) {
            event.preventDefault();

            var hash = $(this).attr("href"),
                hashOffset = $(hash).offset(),
                hashTop = hashOffset.top + 5;

            $("html, body").animate(
                {
                    scrollTop: hashTop - settings.navStop,
                },
                settings.speed
            );
        }
    };
})(jQuery);
