(function ($) {
  'use strict';

  $.fn.bbxslider = function() {
    var slider = this;
    var aperture = slider.find('.aperture');
    var reel = slider.find('.reel');
    var items = slider.find('.item');
    var dots = slider.find('.dots a');
    var previous = slider.find('.arrow-previous');
    var next = slider.find('.arrow-next');
    var easing = 'easeInOutExpo';
    var count = items.length;
    var n = 0;
    var width = $(window).width();

    slider.size = function(new_width) {
      width = new_width;
      reel.width(new_width * count);
      items.width(new_width);
    }

    slider.move = function(target) {
      if (target > (count - 1)) {
        n = 0;
      } else if (target < 0) {
        n = count - 1;
      } else {
        n = target;
      }
      aperture.stop().animate({
        height: items.eq(n).height()
      }, 500, easing);
      reel.stop().animate({
        left: -(width * n)
      }, 500, easing);
      dots.removeClass('current');
      dots.eq(n).addClass('current');
    }

    slider.resize = function(new_width) {
      width = new_width;
      reel.width(new_width * count);
      items.width(new_width);
      this.move(n);
    }

    next.click( function() {
      slider.move(n + 1);
    });

    previous.click( function() {
      slider.move(n - 1);
    });

    dots.click( function() {
      slider.move($(this).index());
    });

    slider.size(width);

    return slider;
  };
})(jQuery);