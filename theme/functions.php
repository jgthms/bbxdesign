<?php


add_theme_support( 'post-thumbnails' );
add_theme_support( 'post-formats', array('link', 'image', 'quote', 'status') );
add_action( 'add_meta_boxes', 'cd_meta_box_add' );


function bbx_entry_images( $html ) {
   $html = preg_replace( '/(width|height)="\d*"\s/', "", $html );
   return $html;
}
add_filter( 'the_content', 'bbx_entry_images', 10 );


function bbx_pagination( $query ) {
  $big = 999999999; // need an unlikely integer
  echo '<div class="pagination">';
  echo paginate_links(
    array(
      'base'    => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
      'format'  => '?paged=%#%',
      'current' => max( 1, get_query_var( 'paged' ) ),
      'total'   => $query->max_num_pages
    )
  );
  echo '</div>';
}


function bbx_standard_format( $query ) {
  if (isset($query->query_vars['post_format']) && $query->query_vars['post_format'] == 'post-format-standard') {
    if (($post_formats = get_theme_support('post-formats')) && is_array($post_formats[0]) && count($post_formats[0])) {
      $terms = array();
      foreach ($post_formats[0] as $format) {
        $terms[] = 'post-format-'.$format;
      }
      $query->is_tax = null;
      unset($query->query_vars['post_format']);
      unset($query->query_vars['taxonomy']);
      unset($query->query_vars['term']);
      unset($query->query['post_format']);
      $query->set('tax_query', array(
        'relation' => 'AND',
        array(
          'taxonomy' => 'post_format',
          'terms' => $terms,
          'field' => 'slug',
          'operator' => 'NOT IN'
        )
      ));
    }
  }
}
// add_action( 'pre_get_posts', 'bbx_standard_format' );


function cd_meta_box_add() {
  add_meta_box( 'link-url', 'Tumblr', 'cd_meta_box_cb', 'post', 'normal', 'high' );
}


function cd_meta_box_cb( $post ) {
  $values = get_post_custom( $post->ID );
  $link_url = isset( $values['link_url'] ) ? esc_attr( $values['link_url'][0] ) : '';
  wp_nonce_field( 'my_meta_box_nonce', 'meta_box_nonce' );
  echo '<p><input type="text" placeholder="Link URL" name="link_url" id="link_url" value="'.$link_url.'"></p>';
}


add_action( 'save_post', 'cd_meta_box_save' );
function cd_meta_box_save( $post_id ) {
  // Bail if we're doing an auto save
  if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) return;

  // if our nonce isn't there, or we can't verify it, bail
  if( !isset( $_POST['meta_box_nonce'] ) || !wp_verify_nonce( $_POST['meta_box_nonce'], 'my_meta_box_nonce' ) ) return;

  // if our current user can't edit this post, bail
  if( !current_user_can( 'edit_post' ) ) return;

  // Make sure your data is set before trying to save it
  if( isset( $_POST['link_url'] ) )
    update_post_meta( $post_id, 'link_url', $_POST['link_url'] );
}


add_action('init', 'my_custom_init');
function my_custom_init() {
  register_post_type(
    'astuce-css',
    array(
      'label' => __('Astuces CSS'),
      'singular_label' => __('Astuce CSS'),
      'public' => true,
      'show_ui' => true,
      'capability_type' => 'post',
      'hierarchical' => false,
      'supports' => array(
        'title',
        'editor'
      )
    )
  );
}


add_filter('the_content_feed', 'tumblr_content');
function tumblr_content( $content ) {
  global $post;
  $format = get_post_format( $post->ID );
  $permalink = get_permalink( $post->ID );
  if ( $format == 'image' ) {
    $thumbnail = get_the_post_thumbnail($post->ID, 'medium');
    $content = '<p>' . $thumbnail . '</p>' . $content;
  }
  if ( $format == 'quote' ) {
    $excerpt = $post->post_excerpt;
    $content = '<blockquote><p>' . $excerpt . '</p></blockquote>' . $content;
  }
  if ( $format == 'link' ) {
    $content = $content . '<p><a href="' . $permalink . '">&#8734;  Permalien</a></p>';
  }
  return $content;
}


add_filter('the_permalink_rss', 'tumblr_link');
function tumblr_link( $link  ) {
  global $post;
  $format = get_post_format( $post->ID );
  if ( $format == 'link' ) {
    $link_url = get_post_meta( $post->ID, 'link_url', true );
    $link = $link_url;
  }
  return $link;
}


add_filter('the_title_rss', 'tumblr_title');
function tumblr_title( $title ) {
  global $post;
  $format = get_post_format( $post->ID );
  if ( $format == 'link' ) {
    $title = '&#8594; ' . $title;
  }
  return $title;
}


?>