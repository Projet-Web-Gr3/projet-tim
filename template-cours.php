<?php
/**
 * Template name: Cours
 *
 *
 * Template name: Cours
 *
 */
?>
<?php get_header(); ?>
<div class="cours-container">
    <div class="titrePage">
        <h1><?php the_title(); ?></h1>
        <?php echo do_shortcode("[wtp_session_menu]");?>
    </div>
    <?php
    $args = array(
        'category_name' => 'Cours', 
        'posts_per_page' => 20,
    );

    $query = new WP_Query($args);

    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post(); 
            $content = get_the_content();
            $gallery_shortcode = '[gallery]';

            if (strpos($content, $gallery_shortcode) !== false) {
                $content_parts = explode($gallery_shortcode, $content);
                $text_content = $content_parts[0];
                $gallery_content = $gallery_shortcode . (isset($content_parts[1]) ? $content_parts[1] : '');
            } else {
                $text_content = $content;
                $gallery_content = '';
            }
            
            $categories = get_the_category();
            $nomSession="";
            
            if(isset($categories[1])){
                $nomSession=$categories[1]->term_id;
            }
            ?>
          
            <div class="cours-contenu" data-session="<?php echo $nomSession; ?>">
                <div class="desktopAffichage">
                    <button class="dropdown-toggle"><h3><?php the_title(); ?></h23><span class="arrow">▼</span></button>
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
        <?php endwhile; ?>
    <?php else : ?>
        <p>No posts found in this category.</p>
    <?php endif; ?>

    <?php wp_reset_postdata(); ?>
</div>


<?php get_footer(); ?>
