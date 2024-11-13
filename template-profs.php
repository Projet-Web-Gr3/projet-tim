<?php
/**
 * Template name: Profs
 *
 */
?>
<?php get_header(); ?>
<?php
// Define your custom query arguments
$args = array(
    'category_name' => 'Profs', // Replace 'cours' with your actual category slug
    'posts_per_page' => 15, // Adjust the number of posts displayed
);

// Create a new query
$query = new WP_Query($args);

// Check if the query returns any posts
if ($query->have_posts()) :
    echo '<div class="prof-posts">';
    while ($query->have_posts()) : $query->the_post();
        echo '<div class="prof-post">';
        // Display post title outside the image container
        echo '<h2 class="prof-title">' . get_the_title() . '</h2>';
        echo '<div class="titre-image-prof">';
        echo the_post_thumbnail('medium');
        // Add the text overlay inside the image container
        echo '<div class="texte-prof">' . get_the_content() . '</div>';
        echo '</div>'; // Close titre-image-prof div
        echo '</div>'; // Close prof-post div
    endwhile;
    echo '</div>';
else :
    echo '<p>No posts found in this category.</p>';
endif;

// Reset the post data
wp_reset_postdata();
?>
<?php get_footer(); ?>
