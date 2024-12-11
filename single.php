<?php get_header() ?>
<section class="singleSection">
    <div class="contenuSingle">
        <?php if(have_posts()): the_post() ?>
            <h2><?= the_title(); ?></h2>
            <div class="acfSingle">
                <?php 
                    if (has_category('profs')) : 
                ?>
                    <h3>Type: <?php the_field('type'); ?></h3>
                    <h3>Cours: <?php the_field('cours'); ?></h3>
                    <p><?php the_field('Description'); ?> </p>
                <?php 
                    elseif (has_category('cours')) : 
                ?>
                    <h3>Heures au total: <?php the_field('Heures'); ?>h</h3>
                    <h3>Ponderation: <?php the_field('poderation'); ?></h3>
                <?php 
                    endif; 
                ?>
            </div>
            <div id="photoSingle">
                <?= the_post_thumbnail('medium'); ?>
            </div>
            <p><?= the_content(); ?></p>
            <?php endif; ?>     
    </div>
</section>
<?php get_footer(); ?>