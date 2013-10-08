<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title>
      <?php

      global $page, $paged;

      if ( $paged >= 2 || $page >= 2 )
        echo sprintf( 'Page %s | ', max( $paged, $page ) );

      wp_title( '@', true, 'right' );

      echo 'bbxdesign : Web Designer / Intégrateur WordPress';

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
      <a id="logo" href="http://bbxdesign.com/home">
        <h1 id="name">bbxdesign</h1>
        <h2 id="description">Web Designer / Intégrateur WordPress</h2>
      </a>
      <a id="menu"></a>
      <nav id="nav">
        <ul>
          <li><a id="nav-home" class="nav" href="http://bbxdesign.com/home">Home</a></li>
          <li><a id="nav-skills" class="nav" href="http://bbxdesign.com/skills">Skills</a></li>
          <li><a id="nav-portfolio" class="nav" href="http://bbxdesign.com/portfolio">Portfolio</a></li>
          <li><a id="nav-timeline" class="nav" href="http://bbxdesign.com/timeline">Timeline</a></li>
          <li><a id="nav-contact" class="nav" href="http://bbxdesign.com/contact">Contact</a></li>
          <li><a id="nav-blog" class="nav on" href="http://bbxdesign.com/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
    <div id="heading">
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
    </div>