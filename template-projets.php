<?php

/**

 * Template name: Projets

 *

 */

?>
<?php get_header(); ?>
<main>
    <div class="titrePage">
        <h1><?php the_title(); ?></h1>
    </div>
    <?php the_content(); ?>
    <nav class="projet-menu">
    <?php
    // Récupérer l'objet de la catégorie parente "Projet"
    $parent_category = get_category_by_slug('projets');
    ?>
    <ul class="menu-projet">
        <?php if ($parent_category): ?>
            <?php
            $child_categories_args = array(
                'child_of' => $parent_category->term_id,
                'hide_empty' => false
            );
            $child_categories = get_categories($child_categories_args);

            if (!empty($child_categories)) :
                foreach ($child_categories as $child_category) :
                    $shortened_name = $child_category->name;
            ?>
                    <li><a href="?child_category=<?php echo $child_category->slug; ?>"><?php echo $shortened_name; ?></a></li>
            <?php
                endforeach;
            else :
                echo '<li>Aucune catégorie</li>';
            endif;
        else:
            echo '<li>Catégorie parente "Projet" non trouvée.</li>';
        endif;
        ?>
    </ul>
</nav>
    <div class="projet">
        <?php
        // Récupérer les articles en fonction de la catégorie parente "Projet"
        $args = array(
            'category_name' => 'projets',
            'posts_per_page' => -1,
            'order' => 'DESC',
            'orderby' => 'date',
        );
        if (isset($_GET['child_category'])) {
            $args['category_name'] = $_GET['child_category'];
        }
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