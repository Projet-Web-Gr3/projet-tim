<?php

/**
 * Template name: Projets
 *
 */
?>
<?php get_header(); ?>
<div>
    <div class="titrePage">
        <h1><?php the_title(); ?></h1>
    </div>
    <?php the_content(); ?>
    <nav class="projet-menu">
        <?php
        // Affiche le menu "Projet Menu" créé dans le panneau d'administration
        wp_nav_menu(array(
            'theme_location' => 'projet_menu',
            'container' => false,
            'menu_class' => 'slide'
        ));
        ?>
    </nav>
</div>
<?php get_footer(); ?>