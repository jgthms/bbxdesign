<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title>
      <?php

      global $page, $paged;
      wp_title( '@', true, 'right' );

      // Add the blog name.
      bloginfo( 'name' );

      // Add the blog description for the home/front page.
      $site_description = get_bloginfo( 'description', 'display' );
      if ( $site_description && ( is_page( 'blog' ) ) )
        echo " @ $site_description : Web Designer / Intégrateur WordPress";

      // Add a page number if necessary:
      if ( $paged >= 2 || $page >= 2 )
        echo ' @ ' . sprintf( 'Page %s', max( $paged, $page ) );

      ?>
    </title>
    <meta name="author" content="bbx">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'template_url' ); ?>/fonts.css">
    <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <link rel="icon" href="/the-bbx.ico">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <header id="header">
      <a id="logo" href="http://bbxdesign.com">
        <h1 id="name">bbxdesign</h1>
        <h2 id="description">Web Designer / Intégrateur WordPress</h2>
      </a>
      <a id="menu"></a>
      <nav id="nav">
        <ul>
          <li><a id="nav-home" class="nav" href="http://bbxdesign.com">Home</a></li>
          <li><a id="nav-skills" class="nav" href="http://bbxdesign.com">Skills</a></li>
          <li><a id="nav-portfolio" class="nav" href="http://bbxdesign.com">Portfolio</a></li>
          <li><a id="nav-timeline" class="nav" href="http://bbxdesign.com">Timeline</a></li>
          <li><a id="nav-contact" class="nav" href="http://bbxdesign.com">Contact</a></li>
          <li><a id="nav-blog" class="nav on" href="http://bbxdesign.com/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
    <hgroup id="heading">
      <div class="wrap">
        <a id="home" href="http://bbxdesign.com/blog">
          <h3 id="title">blog</h3>
          <h4 id="subtitle">Vestiges d’un CSS Guru</h4>
        </a>
        <a id="rss" href="http://feeds.feedburner.com/bbxdesign">
          <img src="http://feeds.feedburner.com/~fc/bbxdesign?bg=ffffff&amp;fg=d44a3f&amp;anim=0" height="26" width="88" style="border:0" alt="">
        </a>
        <div id="twitter">
          <a href="https://twitter.com/bbx" class="twitter-follow-button" data-show-count="true" data-lang="en">Follow @bbx</a>
          <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
        </div>
        <div style="clear: both;"></div>
      </div>
    </hgroup>