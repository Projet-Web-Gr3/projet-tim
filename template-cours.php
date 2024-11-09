<?php
/**
 * Template name: Cours
 *
 */
?>
<?php get_header(); ?>
<div class="cours-container">
<h1><?php the_title(); ?></h1>
    <?php
    // Define your custom query arguments
    $args = array(
        'category_name' => 'Cours', // Replace 'Cours' with your actual category slug
        'posts_per_page' => 20, // Adjust the number of posts displayed
    );

    // Create a new query
    $query = new WP_Query($args);

    // Check if the query returns any posts
    if ($query->have_posts()) :
        while ($query->have_posts()) : $query->the_post(); 
            // Get the content and check for the gallery shortcode
            $content = get_the_content();
            $gallery_shortcode = '[gallery]'; // This is a simple check for the gallery shortcode

            // Check if the content contains the gallery shortcode
            if (strpos($content, $gallery_shortcode) !== false) {
                // Split content to separate the gallery
                $content_parts = explode($gallery_shortcode, $content);
                $text_content = $content_parts[0]; // Text before the gallery
                $gallery_content = $gallery_shortcode . (isset($content_parts[1]) ? $content_parts[1] : ''); // Gallery shortcode part
            } else {
                $text_content = $content; // No gallery found, use the full content
                $gallery_content = ''; // No gallery content
            }
            ?>
            <div class="cours-contenu">
                <div class="post-text">
                    <h3><?php the_title(); ?></h3> <!-- Display post title -->
                    <?php echo apply_filters('the_content', $text_content); ?></div> <!-- Display post text -->
                <?php if (!empty($gallery_content)): ?>
                    <div class="post-gallery"><?php echo apply_filters('the_content', $gallery_content); ?></div> <!-- Display the gallery if it exists -->
                    <?php endif; ?>
            </div>
        <?php endwhile; ?>
    <?php else : ?>
        <p>No posts found in this category.</p>
    <?php endif; ?>

    <?php
    // Reset the post data
    wp_reset_postdata();
    ?>
</div>

<?php get_footer(); ?>
