<?php
/**
 * Template name: avenir
 *
 */
?>
<?php get_header(); ?>
<main>
    <section class="intro-avenir">
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
    <section class="ate"></section>
    <section class="fin-etudes"></section>
</main>

<?php get_footer(); ?>