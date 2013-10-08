    <?php $template_url = get_bloginfo('template_url') . '/'; ?>
    <script src="<?php echo $template_url; ?>jquery-1.10.2.min.js"></script>
    <script src="<?php echo $template_url; ?>jquery.easing.1.3.js"></script>
    <script src="<?php echo $template_url; ?>blog.js"></script>
    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-5349320-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>
    <?php wp_footer(); ?>
  </body>
</html>