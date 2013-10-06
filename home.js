$(document).ready( function() {

  var $header = $('#header'),
      $hello = $('#hello'),
      $nav = $('.nav'),
      $hey = $('#hey'),
      $testimonials = $('#testimonials'),
      $testimonials_reel = $('#testimonials .reel'),
      $skill = $('.skill'),
      $portfolio = $('#projects'),
      $projects = $('.project'),
      $calendar = $('#calendar'),
      $sections = $('section'),
      $zones = $('#testimonials, #skills, #portfolio, #timeline, #contact');

  // Header

  $header.mouseleave( function(event) {
    if ($(window).scrollTop() == 0) {
      $header.stop().animate({
        top: -66
      }, 1000, 'easeOutExpo');
    }
  });

  $nav.click( function() {
    var s = $(this).parent().index();
    $('html, body').stop().animate({
      scrollTop: $sections.eq(s).offset().top - 59
    }, 1000, 'easeInOutExpo');
  });

  // Hello

  $hello.height($(window).height());

  // Testimonials

  $testimonials.bbxslider();

  // Portfolio

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
    // }, 1000, 'easeOutExpo');
  });

  // Timeline

  var $chapters = $('#chapters'),
      $chapters = $('#chapters'),
      $chapter = $('.chapter'),
      $stories = $('#stories'),
      $stories_reel = $('#stories-reel'),
      $story = $('.story'),
      $restart = $('#restart'),
      half = $(window).width() / 2;
  
  function Time(target) {
    target = -(target * 20) + half;
    $chapters.stop().animate({
      left: target
    }, 1000, 'easeOutExpo');
  }
  
  function Focus(n) {
    var star = $chapter.eq(n);
    var width = star.width();
    var target = star.position().left;
    target = -target;
    target -= width / 2;
    target += half;
    if (target > 0) {
      target = 0;
    }
    $chapters.stop().animate({
      left: target
    },1000,'easeOutExpo');
  };
  
  function Read(e) {
    $story.not(e).removeClass('current');
    var related = e.data('related');
    Focus(related);
    e.addClass('current');
    var page = e.index();
    var flow = 860 * page;
    flow = -flow;
    flow += half - 430;
    $stories.stop().animate({
      height: e.height(),
    }, 1000,'easeOutExpo');
    $stories_reel.stop().delay(250).animate({
      left: flow,
      opacity: 1
    }, 1000,'easeOutExpo');
  }

  $story.click( function() {
    Read($(this));
  });

  $restart.click( function() {
    Read($story.eq(0));
  });

  // Window Events

  $(window).scroll( function() {
    var position = $(window).scrollTop();
    var trigger = $(window).height() / 2;
    if (position == 0) {
      if (!($header.is(":hover"))) {
        $header.stop().animate({
          top: -66
        }, 1000, 'easeOutExpo');
      }
    } else {
      $header.stop().animate({
        top: 0
      }, 1000, 'easeOutExpo');
    }
    $sections.each( function(index) {
      var section_offset = $(this).offset();
      if ((position + 61) > section_offset.top) {
        $nav.removeClass('on');
        $nav.eq(index).addClass('on');
      }
    });
    var testimonials_offset = $testimonials.offset();
    if (position + trigger > testimonials_offset.top) {
      $testimonials_reel.stop().animate({
        left: 0,
        opacity: 1
      }, 1000, 'easeOutExpo');
    }
    $zones.each( function(index) {
      var zone_offset = $(this).offset();
      if (position + trigger > zone_offset.top) {
        $(this).addClass('go');
      }
    });
    var calendar_offset = $calendar.offset();
    if (position + trigger > calendar_offset.top) {
      Read($story.eq(0));
    }
  });

});