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
    echo '<div class="cours-posts">';
    while ($query->have_posts()) : $query->the_post();
        // Output the post title and content
        echo '<h2>' . get_the_title() . '</h2>'; // Display post title
        echo '<div>' . get_the_content() . '</div>'; // Display post content
    endwhile;
    echo '</div>';
else :
    echo '<p>No posts found in this category.</p>';
endif;

// Reset the post data
wp_reset_postdata();
?>
<?php get_footer(); ?>