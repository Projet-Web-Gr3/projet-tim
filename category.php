<?php get_header(); ?>
<div class="titrePage">
    <h1><?php single_cat_title(); ?></h1>
</div>
<h1>CATEGORY.PHP</h1>

<nav class="session-menu">
        <?php
        // Affiche le menu "Projet Menu" créé dans le panneau d'administration
        wp_nav_menu(array(
            'theme_location' => 'projet_menu',
            'container' => false,
            'menu_class' => 'slide'
        ));
        ?>
    </nav>
<div class="projets">
    <?php
    $category = get_queried_object();

    $args = array(
        'cat' => $category->term_id,
        'posts_per_page' => -1,
        'order' => 'DESC',
        'orderby' => 'date',
    );

    $projets = new WP_Query($args);

    if ($projets->have_posts()) :
        while ($projets->have_posts()) :
            $projets->the_post();
    ?>
            <div class="projet">
                <div>
                    <div class="projet-image">
                        <?php the_post_thumbnail(); ?>
                    </div>
                    <div class="projet-content">
                        <h2><?php the_title(); ?></h2>
                        <p><?php the_excerpt(); ?></p>
                    </div>
        </div>
            </div>
    <?php
        endwhile;
    else :
        echo '<p>Aucun projet trouvé.</p>';
    endif;
    ?>
</div>
<?php get_footer(); ?>