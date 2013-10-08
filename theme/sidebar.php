<aside id="sidebar">
  <?php get_search_form(); ?>
    <?php $current_format = get_query_var( 'post_format' ); ?>
    <?php if ( $current_format != '' ): ?>
      <section id="types" class="box" data-format="<?php echo substr( $current_format, 12 ); ?>">
    <?php else: ?>
      <section id="types" class="box" data-format="all">
    <?php endif; ?>
    <h4 class="box-title">format : <em id="current-format"></em></h4>
    <p>
      <a id="all" class="type type-all" href="http://bbxdesign.com/blog">tous</a>
      <a id="link" class="type type-link" href="<?php echo esc_url( get_post_format_link( 'link' ) ); ?>">liens</a>
      <a id="image" class="type type-image" href="<?php echo esc_url( get_post_format_link( 'image' ) ); ?>">images</a>
      <a id="quote" class="type type-quote" href="<?php echo esc_url( get_post_format_link( 'quote' ) ); ?>">citations</a>
      <a id="status" class="type type-status" href="<?php echo esc_url( get_post_format_link( 'status' ) ); ?>">br&egrave;ves</a>
    </p>
    <div style="clear: left;"></div>
  </section>
  <ul id="bestof-tabs" class="tabs">
    <li><a class="active">populaire</a></li>
    <li><a>tutoriels</a></li>
    <li><a>fun</a></li>
  </ul>
  <section id="bestof" class="box box-content windows">
    <ul class="list window" style="display: block;">
      <li><a href="http://bbxdesign.com/2012/02/22/comprendre-le-line-height/">Comprendre le line-height<span></span></a></li>
      <li><a href="http://bbxdesign.com/2012/03/13/retour-a-firefox/">Retour à Firefox<span></span></a></li>
      <li><a href="http://bbxdesign.com/2012/01/24/colonnes-marges-et-nth-child-en-css-3/">Colonnes, marges et nth-child en CSS&nbsp;3<span></span></a></li>
      <li><a href="http://bbxdesign.com/2011/12/11/les-interfaces-tactiles-ne-le-sont-pas/">Les interfaces tactiles ne le sont pas<span></span></a></li>
    </ul>
    <ul class="list window" style="display: none;">
      <li><a href="http://bbxdesign.com/2010/03/24/tutoriel-formulaire-css3-sans-image-sans-javascript/">Tutoriel : formulaire 100% CSS3 sans image et sans JavaScript<span></span></a></li>
      <li><a href="http://bbxdesign.com/2010/05/31/introduction-a-wordpress-3-custom-post-type-et-custom-taxonomy/">Introduction à WordPress 3 : custom post type et custom taxonomy<span></span></a></li>
      <li><a href="http://bbxdesign.com/2009/04/21/comment-realiser-un-bon-formulaire-html/">Comment réaliser un bon formulaire HTML<span></span></a></li>
      <li><a href="http://bbxdesign.com/2009/06/08/introduction-au-html-5/">Introduction au HTML 5<span></span></a></li>
    </ul>
    <ul class="list window" style="display: none;">
      <li><a href="http://bbxdesign.com/2012/02/01/carte-not-sent-from-my-iphone/">Carte “Not sent from my iPhone”<span></span></a></li>
      <li><a href="http://bbxdesign.com/2008/02/23/bdbx-11-provocation/">bdbx 11 : provocation<span></span></a></li>
      <li><a href="http://bbxdesign.com/2009/05/13/new-york-vu-du-ciel-a-360%C2%B0/">New York vu du ciel à 360°<span></span></a></li>
      <li><a href="http://bbxdesign.com/2008/01/26/bdbx-04-css-insiders/">bdbx 04 : CSS insiders<span></span></a></li>
      <li><a href="http://bbxdesign.com/2010/07/23/creer-un-casque-daft-punk/">Créer un casque Daft Punk<span></span></a></li>
      <li><a href="http://bbxdesign.com/2008/01/13/bdbx-01-les-joies-de-css-3/">bdbx 01 : les joies de CSS 3<span></span></a></li>
    </ul>
  </section>
  <section id="categories" class="box box-content">
    <h4 class="box-title">cat&eacute;gories</h4>
    <ul>
      <?php wp_list_categories( 'orderby=name&show_count=0&title_li=' ); ?>
    </ul>
    <div style="clear: left;"></div>
  </section>
</aside>