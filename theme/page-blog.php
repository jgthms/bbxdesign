<?php get_header(); ?>
<div id="main" class="wrap">
  <div id="lead">
    <?php
      global $more;
      $paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
      $args = array(
        'paged' => $paged,
        'posts_per_page' => 10,
        'post_type' => 'post',
        'post_status' => 'publish'
      );
    ?>
    <?php $query = new WP_Query( $args ); ?>
    <?php if ( $query->have_posts() ) : ?>
      <?php while ( $query->have_posts() ) : $query->the_post(); ?>
        <?php $more = 0; ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
          <?php get_template_part( 'content', get_post_format() ); ?>
        </article>
      <?php endwhile; ?>
      <?php bbx_pagination( $query ); ?>
    <?php endif; ?>
    <?php wp_reset_postdata(); ?>
  </div>
  <?php get_sidebar(); ?>
  <div style="clear: both;"></div>
</div>
<?php get_footer(); ?>