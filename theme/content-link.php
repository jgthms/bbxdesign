<?php $link_url = get_post_meta( $post->ID, 'link_url', true ); ?>
<a class="type type-link entry-type" href="<?php echo esc_url( get_permalink() ); ?>" title="Lien">Lien</a>
<h3 class="entry-title"><a href="<?php echo $link_url; ?>">&rarr; <?php the_title(); ?></a></h3>
<div class="entry-content">
  <?php the_content( 'Lire la suite &rarr;' ); ?>
</div>
