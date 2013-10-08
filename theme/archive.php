<?php get_header(); ?>
<div id="main" class="wrap">
  <?php if ( is_category() ): ?>
    <h1 id="chapter">Cat&eacute;gorie : <strong><?php single_cat_title(); ?></strong></h1>
  <?php elseif ( is_tag() ): ?>
    <h1 id="chapter">Tag : <strong><?php single_tag_title(); ?></strong></h1>
  <?php elseif ( is_day() ): ?>
    <h1 id="chapter"><?php the_time( 'F jS, Y' ); ?></h1>
  <?php elseif ( is_month() ): ?>
    <h1 id="chapter"><?php the_time( 'F, Y' ); ?></h1>
  <?php elseif ( is_year() ): ?>
    <h1 id="chapter"><?php the_time( 'Y' ); ?></h1>
  <?php endif; ?>
  <div id="lead">
    <?php if ( have_posts() ) : ?>
      <?php while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class( 'entry' ); ?>>
          <?php get_template_part( 'content', get_post_format() ); ?>
        </article>
      <?php endwhile; ?>
      <?php bbx_pagination( $wp_query ); ?>
    <?php else: ?>
      <p id="no-results">Ben y a rien du tout, d&eacute;sol&eacute;.</p>
    <?php endif; ?>
  </div>
  <?php get_sidebar(); ?>
  <div style="clear: both;"></div>
</div>
<?php get_footer(); ?>