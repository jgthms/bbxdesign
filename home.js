$(document).ready( function() {

  var $header = $('#header'),
      $hello = $('#hello'),
      $nav = $('.nav'),
      $hey = $('#hey'),
      $view_portfolio = $('#view-portfolio'),
      $send_email = $('#send-email'),
      $testimonials = $('#testimonials'),
      $testimonials_reel = $('#testimonials .reel'),
      $skill = $('.skill'),
      $portfolio = $('#portfolio'),
      $projects_container = $('#projects'),
      $projects = $('.project'),
      $calendar = $('#calendar'),
      $contact = $('#contact'),
      $sections = $('section'),
      $zones = $('#testimonials, #skills, #portfolio, #timeline, #contact');

  var navigating = false;

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
      scrollTop: Math.max($sections.eq(s).offset().top - 59, 0)
    }, 1000, 'easeInOutExpo');
  });

  // Hello

  $hello.height($(window).height());

  function Navigate(element) {
    navigating = true;
    $('html, body').stop().animate({
      scrollTop: element.offset().top - 59
    }, 1000, 'easeInOutExpo', function() {
      element.addClass('go');
      setTimeout(function() {
        navigating = false;
      }, 1000);
    });
  }

  $view_portfolio.click( function() {
    Navigate($portfolio);
  });

  $send_email.click( function() {
    Navigate($contact);
  });

  // Testimonials

  $testimonials.bbxslider();

  // Portfolio

  var space = $(window).width() / 4;
  $projects_container.height(space * 2);
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

  $('.detail').width($(window).width() - 120);
  $('.detail').height($(window).height() - 180);

  $('#jt').click( function() {
    $('#preview').addClass('go');
  });

  $('.detail-close').click( function() {
    $('#preview').addClass('revert');
    setTimeout(function() {
      $('#preview').removeClass();
    }, 1750);
  });

  // Timeline

  var $chapters = $('#chapters'),
      $chapters = $('#chapters'),
      $chapter = $('.chapter'),
      $stories = $('#stories'),
      $stories_reel = $('#stories-reel'),
      $story = $('.story'),
      $restart = $('#restart');

  var half = $(window).width() / 2,
      started_stories = false;
  
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
      left: target,
      opacity: 1
    }, 1000, 'easeInOutExpo');
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
    $stories_reel.stop().animate({
      left: flow,
      opacity: 1
    }, 1000,'easeOutExpo');
  }

  $story.click( function() {
    Read($(this));
    started_stories = true;
  });

  $restart.click( function() {
    Read($story.eq(0));
  });

  // Window Events

  $(window).scroll( function() {
    var position = $(window).scrollTop();
    var width = $(window).width();
    var height = $(window).height();
    var trigger = height / 2;
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
    // if (!navigating) {
      var testimonials_offset = $testimonials.offset();
      var testimonials_height = $testimonials.height();
      if (position > testimonials_offset.top + testimonials_height || position + height - 1 < testimonials_offset.top) {
        $testimonials_reel.stop().animate({
          opacity: 0
        }, 1000, 'easeOutExpo');
      } else if (position + trigger > testimonials_offset.top) {
        $testimonials_reel.stop().animate({
          opacity: 1
        }, 2000, 'easeOutExpo');
      }
      $zones.each( function(index) {
        var zone_offset = $(this).offset();
        var zone_height = $(this).height();
        if (position > zone_offset.top + zone_height || position + height - 1 < zone_offset.top) {
          $(this).removeClass('go');
        } else if (position + trigger > zone_offset.top) {
          $(this).addClass('go');
        }
      });
      var calendar_offset = $calendar.offset();
      var calendar_height = $calendar.height();
      if (position > calendar_offset.top + calendar_height || position + height - 1 < calendar_offset.top) {
        if (started_stories) {
          $chapters.stop().animate({
            opacity: 0
          }, 1000, 'easeOutExpo');
          $stories_reel.stop().animate({
            opacity: 0
          }, 1000, 'easeOutExpo');
        } else {
          $chapters.stop().animate({
            left: 2000,
            opacity: 0
          }, 1000, 'easeOutExpo');
          $stories_reel.stop().animate({
            left: -2000,
            opacity: 0
          }, 1000, 'easeOutExpo');
        }
      } else if (position + trigger > calendar_offset.top) {
        if (started_stories) {
          $chapters.stop().animate({
            opacity: 1
          }, 1000, 'easeOutExpo');
          $stories_reel.stop().animate({
            opacity: 1
          }, 1000, 'easeOutExpo');
        } else {
          Read($story.eq(0));
        }
      }
    // }
  });

});