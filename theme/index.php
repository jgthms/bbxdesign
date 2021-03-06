<?php get_header(); ?>
<div id="main" class="wrap">
  <div id="lead">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
          <?php get_template_part( 'content', get_post_format() ); ?>
        </article>
      <?php endwhile; ?>
      <?php bbx_pagination( $wp_query ); ?>
    <?php endif; ?>
  </div>
  <?php get_sidebar(); ?>
  <div style="clear: both;"></div>
</div>
<?php get_footer(); ?>