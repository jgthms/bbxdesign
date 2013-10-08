<a class="type type-quote entry-type" href="<?php echo esc_url( get_permalink() ); ?>" title="Citation">Citation</a>
<h3 class="entry-title">&#8220; <?php echo $post->post_excerpt; ?> &#8221;</h3>
<?php if( !empty( $post->post_content ) ): ?>
  <div class="entry-content">
    <?php the_content(); ?>
  </div>
<?php endif; ?>
