<?php get_header(); ?>
<section id="rechercheSection">
        <div class="titrePage">
            <h1>Résultats de la recherche: (<?php echo $wp_query->found_posts; ?>)</h1>
        </div>
        <div class="resultatsRecherche">
        <?php if ( have_posts() ) : ?>
                <?php while ( have_posts() ) : the_post(); ?>
                    <div class="articleRecherche">
                        <div class="articleContenu">
                            <h3><?= get_the_title() ?></h3>
                            <p><?= wp_trim_words(get_the_content(), 35); ?></p>
                        </div>
                        <div class="articleCatégorie">
                            <h4>Catégories</h4>
                            <?= the_category();  ?>
                        </div>
                        <button class="boutonRecherche"><a href="<?php the_permalink(); ?>">Voir l'article -></a></button>
                    </div>
                <?php endwhile; ?>
        <?php else : ?>
            <p><?php esc_html_e( 'No results found.' ); ?></p>
        <?php endif; ?>
        </div>
    </section>

<?php get_footer(); ?>
