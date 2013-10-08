$(document).ready( function() {

  var $header = $('#header'),
      $menu = $('#menu'),
      $nav_menu = $('#nav'),
      $tabs = $('#bestof-tabs a'),
      $windows = $('#bestof .window'),
      $formats = $('#types'),
      $format_list = $('#types p'),
      $format_icons = $('#types p a');

  var $current_format = $('#current-format'),
      current_format = $formats.data('format'),
      $current_element = $('#' + current_format),
      current_format_text = $current_element.text();

  $current_format.text(current_format_text);
  if (current_format != 'all') {
    $format_icons.not($current_element).fadeTo(125, 0.29, 'easeOutExpo');
  }

  $menu.click( function() {
    $nav_menu.toggle();
  });

  $tabs.click( function() {
    var index = $(this).parent().index();
    var target = $windows.eq(index);
    $tabs.removeClass();
    $(this).addClass('active');
    $windows.not(target).slideUp('slow', 'easeOutExpo');
    target.slideDown('slow', 'easeOutExpo');
  });

  $format_list.mouseleave( function() {
    $current_format.text(current_format_text);
  });

  $format_icons.hover(
    function() {
      var index = $(this).index();
      var type = $(this).text();
      if (index == 0) {
        $format_icons.stop().fadeTo(125, 1, 'easeOutExpo');
      } else {
        $format_icons.stop().fadeTo(125, 1, 'easeOutExpo');
        $format_icons.not($(this)).stop().fadeTo(125, 0.29, 'easeOutExpo');
      }
      $current_format.text(type);
    }, function() {
      if (current_format == 'all' ){
        $format_icons.stop().fadeTo(125, 1, 'easeOutExpo');
      } else {
        $current_element.stop().fadeTo(125, 1, 'easeOutExpo');
        $format_icons.not($current_element).stop().fadeTo(125, 0.29, 'easeOutExpo');
      }
    }
  );

  var resize_timer;
  $(window).resize(function() {
    var inner_width = window.innerWidth;
    clearTimeout(resize_timer);
    resize_timer = setTimeout(function() {
      if (inner_width > 700) {
        $header.css('position', 'fixed');
        $nav_menu.show();
      } else {
        $header.css('position', 'static');
        $nav_menu.hide();
      }
    }, 125);
  });

});