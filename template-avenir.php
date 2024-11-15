<?php
/**
 * Template name: avenir
 *
 */
?>
<?php get_header(); ?>
<main>
    <section class="intro">
        <div>
            <div class="titrePage">
                <h1><?php the_title(); ?></h1>
            </div>
            <?php the_content(); ?>
            <!-- Carousel -->
            <div id="avenir-carousel" class="avenir-carousel">
                <div class="avenir-carousel-inner"></div>
                <button class="carousel-control-prev" onclick="prevSlide()">&#10094;</button>
                <button class="carousel-control-next" onclick="nextSlide()">&#10095;</button>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>

<?php
// Enqueue the JavaScript file only for the "Avenir" page
if (is_page_template('template-avenir.php')) {
    wp_enqueue_script('avenir-carousel', get_template_directory_uri() . '/js/avenir-carousel.js', array(), null, true);
}
?>