$(window).load( function() {
  setTimeout(function() {
    $('#loading').addClass('go');
  }, 1000);
  setTimeout(function() {
    $('#loading').addClass('end');
    $hello.addClass('go');
  }, 2000);
  setTimeout(function() {
    $('#loading').remove();
  }, 3000);

  var $header = $('#header'),
      $hello = $('#hello'),
      $menu = $('#menu'),
      $nav_menu = $('#nav'),
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
      $preview = $('#preview'),
      $calendar = $('#calendar'),
      $contact = $('#contact'),
      $sections = $('section'),
      $zones = $('#testimonials, #skills, #portfolio, #timeline, #contact');

  var current_zone = $('body').data('zone'),
      navigating = false,
      previewing = false,
      moving = false,
      loading = false,
      hello_width = $hello.width(),
      projects_count = $projects.length;

  history.replaceState(null, '', $nav.eq(current_zone).attr('href'));

  if (current_zone != '0') {
    setTimeout(function() {
      $('html, body').scrollTop($sections.eq(current_zone).offset().top - 59);
    }, 125);
  } else{
    $('html, body').scrollTop(0);
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
  }

  function Navigate(element) {
    navigating = true;
    if (!moving && !loading) {
      if (previewing) {
        setTimeout(function() {
          $('html, body').stop().animate({
            scrollTop: Math.max(element.offset().top - 59, 0)
          }, 1000, 'easeInOutExpo', function() {
            setTimeout(function() {
              navigating = false;
            }, 1000);
          });
        }, 1750);
      } else {
        $('html, body').stop().animate({
          scrollTop: Math.max(element.offset().top - 59, 0)
        }, 1000, 'easeInOutExpo', function() {
          setTimeout(function() {
            navigating = false;
          }, 1000);
        });
      }
    }
  }

  // Header

  $header.mouseleave( function(event) {
    if ($(window).scrollTop() == 0) {
      $header.stop().animate({
        top: -66
      }, 1000, 'easeOutExpo');
    }
  });

  $nav.click( function() {
    if (!navigating) {
      var s = $(this).parent().index();
      Navigate($sections.eq(s));
    }
    if (previewing) {
      Close();
    }
    return false;
  });

  $menu.click( function() {
    $nav_menu.toggle();
  });

  // Hello

  if (window.innerWidth > 1000) {
    $hello.height($(window).height());
  }

  $view_portfolio.click( function() {
    if (!navigating) {
      Navigate($portfolio);
    }
  });

  $send_email.click( function() {
    if (!navigating) {
      Navigate($contact);
    }
  });

  // Testimonials

  var testimonials = $testimonials.bbxslider();

  // Portfolio

  function Space() {
    var width = $(window).width();
    var divider = Math.floor(width / 300);
    var space = width / divider;
    $projects_container.height(space * Math.ceil($projects.length / divider));
    $projects.height(space);
    $projects.width(space);
    $projects.each( function(index) {
      $(this).css('left', index % divider * space);
      $(this).css('top', Math.floor(index / divider) * space);
    });
  }

  Space();

  function Detail() {
    $('#detail').width($(window).width() - 120);
    $('#detail').height($(window).height() - 180);
  }

  Detail();

  function Preload(url) {
    loading = true;
    $.get(url, function() {
      loading = false;
      $preview.addClass('loaded');
    });
  }

  function Preview(element) {
    previewing = true;
    var detail_index = element.index();
    var detail_image_url = 'http://bbxdesign.com/wp-content/themes/the-bbx/previews/' + element.attr('id') + '.jpg';
    var detail_image = 'url(' + detail_image_url + ')';
    var detail_name = element.find('.project-name').text();
    var detail_description = element.find('.project-description').text();
    var detail_text = element.data('text');
    var detail_url = element.attr('href');
    var detail_apps = element.find('.project-apps').html();
    Preload(detail_image_url);
    $('#detail').data('index', detail_index);
    $('#detail-image').css('background-image', detail_image);
    $('#detail-name').text(detail_name);
    $('#detail-description').text(detail_description);
    $('#detail-text').text(detail_text);
    $('#detail-link').attr('href', detail_url);
    $('#detail-apps').html(detail_apps);
  }

  function Switch(target) {
    moving = true;
    if (target > (projects_count - 1)) {
      n = 0;
    } else if (target < 0) {
      n = projects_count - 1;
    } else {
      n = target;
    }
    $preview.addClass('removing');
    setTimeout(function() {
      $preview.removeClass('loaded removing');
      Preview($projects.eq(n));
    }, 1750);
    setTimeout(function() {
      moving = false;
    }, 3500);
  }

  function Close() {
    if (!moving && !loading) {
      $preview.addClass('close');
      setTimeout(function() {
        $preview.removeClass();
        previewing = false;
      }, 1750);
    }
  }

  $projects.click( function() {
    if ($(window).width() > 1000) {
      moving = true;
      Preview($(this));
      $preview.addClass('go');
      setTimeout(function() {
        moving = false;
      }, 1750);
      return false;
    }
  });

  $('#detail-close').click( function() {
    Close();
  });

  $('html').click(function() {
    Close();
  });

  $('#detail').click( function(event) {
    event.stopPropagation();
  });

  $('#detail-next').click( function(event) {
    var index = $(this).parent().parent().parent().data('index');
    if (!moving) {
      Switch(index + 1);
    }
  });

  $('#detail-previous').click( function(event) {
    var index = $(this).parent().parent().parent().data('index');
    if (!moving) {
      Switch(index - 1);
    }
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
      started_stories = false,
      current_story = 0;
  
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
    current_story = e.index();
    var story_width = Math.min($(window).width(), 820);
    var story_space = story_width - 120;
    $story.width(story_space);
    $story.not(e).removeClass('current');
    var related = e.data('related');
    Focus(related);
    e.addClass('current');
    var page = e.index();
    var flow = story_width * page; // 820
    flow = -flow;
    flow += half - story_width / 2; // 410
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

  var zone_timer;
  $(window).scroll( function() {
    var position = $(window).scrollTop();
    var height = $(window).height();
    var trigger = height / 2;
    var new_zone = current_zone;
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
        // setTimeout(function() {
          new_zone = index;
        // }, 1000);
      }
    });
    clearTimeout(zone_timer);
    zone_timer = setTimeout(function() {
      if (new_zone != current_zone) {
        history.replaceState(null, '', $nav.eq(new_zone).attr('href'));
        current_zone = new_zone;
      }
    }, 1000);
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
  });
      
  var resize_timer;
  $(window).resize(function() {
    var width = $(window).width();
    var inner_width = window.innerWidth;
    var height = $(window).height();
    half = width / 2;
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      if (inner_width > 700) {
        $header.css('position', 'fixed');
        $nav_menu.show();
      } else {
        $header.css('position', 'static');
        $nav_menu.hide();
      }
      if (inner_width > 1000) {
        $hello.stop().animate({
          height: height
        }, 1000, 'easeOutExpo');
      } else {
        $hello.height('auto');
      }
      testimonials.resize(width);
      Space();
      Detail();
      Read($story.eq(current_story));
    }, 125);
  });

});