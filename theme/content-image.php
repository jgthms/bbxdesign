<a class="type type-image entry-type" href="<?php echo esc_url( get_permalink() ); ?>" title="Image">Image</a>
<?php the_post_thumbnail( 'medium' ); ?>
<?php if( !empty( $post->post_content ) ): ?>
  <div class="entry-content">
    <?php the_content(); ?>
  </div>
<?php endif; ?>
