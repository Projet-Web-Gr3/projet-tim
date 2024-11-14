<?php get_header(); ?>
<div class="titrePage">
    <h1><?php the_title(); ?></h1>

</div>


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
<section class="projet">
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
            <div class="solo_projet">
                <div class="projet_image">
                    <!-- affiche l'images qui est dans le content pas post thumbnail -->
                    <?php
                    $content = get_the_content();
                    $image = '';
                    if (preg_match('/<img[^>]+>/i', $content, $matches)) {
                        $image = $matches[0];
                    }
                    echo $image;
                    ?>
                </div>
                <div class="projet-content">
                    <h2><?php the_title(); ?></h2>
                    <?php
                    $subtitle = '';
                    $paragraph = '';
                    if (preg_match('/<h3[^>]*>(.*?)<\/h3>/i', $content, $matches)) {
                        $subtitle = $matches[0];
                    }
                    if (preg_match('/<p[^>]*>(.*?)<\/p>/i', $content, $matches)) {
                        $paragraph = $matches[0];
                    }
                    ?>
                    <h3><?php echo $subtitle; ?></h3>
                    <p><?php echo $paragraph; ?></p>
                    ?>
                </div>


            </div>
    <?php
        endwhile;
    else :
        echo '<p>Aucun projet trouvé.</p>';
    endif;
    ?>
</section>
<?php get_footer(); ?>