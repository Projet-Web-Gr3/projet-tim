<?php get_header() ?>

    <section id="categorieSection">
    <div class="titrePage">
    <?php
        $category = single_cat_title('', false);
        echo "<h1>Articles arrangés par la catégorie: $category</h1>";
    ?>
    </div>
    <div class="articlesCategorie">
        <?php if(have_posts()):
            while(have_posts()): the_post(); ?>
                <div class="articleCarte">
                    <div class="articleContenu">
                        <h3><?= get_the_title() ?></h3>
                        <p><?= wp_trim_words(get_the_content(), 35); ?></p>
                    </div>
                    <div class="articleCatégorie">
                            <h4>Catégories</h4>
                            <?= the_category();  ?>
                        </div>
                    <button class="boutonCategorie"><a href="<?php the_permalink(); ?>">Voir l'article -></a></button>
                 </div>
                <?php endwhile; ?> 
            <?php endif; ?>     
    </div>
</section>
<?php get_footer(); ?>