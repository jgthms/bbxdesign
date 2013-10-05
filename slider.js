(function ($) {
  'use strict';

  $.fn.bbxslider = function (options) {
    var slider = this;
    var aperture = slider.find('.aperture');
    var reel = slider.find('.reel');
    var items = slider.find('.item');
    var dots = slider.find('.dots a');
    var previous = slider.find('.arrow-previous');
    var next = slider.find('.arrow-next');
    var easing = 'easeInOutExpo';
    var c = items.length;
    var n = 0;
    var w = $(window).width();

    reel.width(w * c);
    items.width(w);

    function Move (target) {
      if (target > (c - 1)) {
        n = 0;
      } else if (target < 0) {
        n = c - 1;
      } else {
        n = target;
      }
      aperture.stop().animate({
        height: items.eq(n).height()
      }, 500, easing);
      reel.stop().animate({
        left: -(w * n)
      }, 500, easing);
      dots.removeClass('current');
      dots.eq(n).addClass('current');
    }

    next.click( function() {
      Move(n + 1);
    });

    previous.click( function() {
      Move(n - 1);
    });

    dots.click( function() {
      Move($(this).index());
    });

    var settings = $.extend({
      'url': slider.attr('action')
    }, options);

    return this;
  };
})(jQuery);