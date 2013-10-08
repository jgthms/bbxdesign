<a class="type entry-type" href="<?php echo esc_url( get_permalink() ); ?>" title="Billet">Billet</a>
<?php if ( is_single() ): ?>
  <h1 class="entry-title"><?php the_title(); ?></h1>
<?php else: ?>
  <h3 class="entry-title"><a href="<?php echo esc_url( get_permalink() ); ?>" title="<?php echo esc_attr( sprintf( 'Permalien pour %s', the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php the_title(); ?></a></h3>
<?php endif; ?>
<div class="entry-content">
  <?php the_content( 'Lire la suite &rarr;' ); ?>
</div>
<div style="clear: both;"></div>