<?php

/*
Template Name: Page Redirect
*/

session_start();
$_SESSION['zone'] = $post->menu_order;
header( 'Location: http://bbxdesign.com' );
exit();

?>