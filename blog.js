$(document).ready( function() {

  var $tabs = $('#bestof-tabs a'),
      $windows = $('#bestof .window'),
      $current_format = $('#current-format'),
      $formats = $('#formats p'),
      $format_icons = $('#formats p a');

    var current_format = $current_format.text();

  $tabs.click( function() {
    var index = $(this).parent().index();
    var target = $windows.eq(index);
    $tabs.removeClass();
    $(this).addClass('active');
    $windows.not(target).slideUp('slow', 'easeOutExpo');
    target.slideDown('slow', 'easeOutExpo');
  });

  $formats.mouseleave( function() {
    $current_format.text(current_format);
  });

  $format_icons.hover( function() {
    var type = $(this).text();
    $current_format.text(type);
  });

});