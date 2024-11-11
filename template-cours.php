<?php
/**
* Template name: Cours
*
*/
?>
<?php get_header(); ?>
 
<div class="cours-container">
<div class="titrePage">
<h1><?php the_title(); ?></h1>
</div>
 
    <?php
    // Get the 'Cours' parent category
    $parent_category = get_category_by_slug('cours');
    if ($parent_category) {
        // Get all child categories of 'Cours'
        $child_categories = get_categories(array(
            'child_of' => $parent_category->term_id,
            'hide_empty' => true,
        ));
 
        // Loop through each child category (each session)
        foreach ($child_categories as $child_category) {
            echo '<div class="session-category">';
            echo '<h2>' . esc_html($child_category->name) . '</h2>';
 
            // Query posts in the current child category
            $args = array(
                'category_name' => $child_category->slug,
                'posts_per_page' => 20,
            );
 
            $query = new WP_Query($args);
 
            if ($query->have_posts()) :
                while ($query->have_posts()) : $query->the_post(); 
                    $content = get_the_content();
                    $gallery_shortcode = '[gallery]';
 
                    // Separate text content and gallery if gallery shortcode exists
                    if (strpos($content, $gallery_shortcode) !== false) {
                        $content_parts = explode($gallery_shortcode, $content);
                        $text_content = $content_parts[0];
                        $gallery_content = $gallery_shortcode . (isset($content_parts[1]) ? $content_parts[1] : '');
                    } else {
                        $text_content = $content;
                        $gallery_content = '';
                    }
                    ?>
<div class="cours-contenu">
<div class="desktopAffichage">
<button class="dropdown-toggle"><h3><?php the_title(); ?></h3><span class="arrow">▼</span></button>
<div class="post-text">
<?php
                                    $trimmed_content = wp_trim_words($text_content, 75, '...');
                                    $read_more_link = sprintf('<a href="%s" class="read-more"> Lire plus</a>', get_permalink());
                                    echo apply_filters('the_content', $trimmed_content . " " . $read_more_link); 
                                ?>
</div>
</div>
<?php if (!empty($gallery_content)): ?>
<div class="post-gallery"><?php echo apply_filters('the_content', $gallery_content); ?></div>
<?php endif; ?>
</div>
<?php endwhile;
            else :
                echo '<p>No posts found in this category.</p>';
            endif;
 
            wp_reset_postdata();
            echo '</div>'; // End session-category
        }
    } else {
        echo '<p>No parent category "Cours" found.</p>';
    }
    ?>
</div>
 
<?php get_footer(); ?>