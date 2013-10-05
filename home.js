$(document).ready( function() {
  
  var easing = 'easeOutExpo';

  var $hello = $('#hello'),
      $hey = $('#hey'),
      $hey = $('#hey'),
      $testimonials = $('#testimonials'),
      $portfolio = $('#projects'),
      $projects = $('.project'),
      $skill = $('.skill'),
      $header = $('#header');

  $hello.height($(window).height());

  $testimonials.bbxslider();

  var space = $(window).width() / 4;
  $portfolio.height(space * 2);
  $projects.height(space);
  $projects.width(space);
  $projects.each( function(index) {
    $(this).css('left', index % 4 * space);
    $(this).css('top', Math.floor(index / 4) * space);
    // $(this).stop().animate({
    //   left: index % 4 * space,
    //   top: Math.floor(index / 4) * space
    // }, 1000, easing);
  });

  $(window).scroll( function() {
    var scroll_position = $(window).scrollTop();
    // $hey.text(scroll_position);
    if (scroll_position == 0) {
      $header.stop().animate({
        top: -66
      }, 1000, easing);
    } else {
      $header.stop().animate({
        top: 0
      }, 1000, easing);
    }
  });

});