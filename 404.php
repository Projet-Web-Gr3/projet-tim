<?php get_header() ?>
    <section class="page404">
        <div class="texte404">
            <h1>Erreur 404</h1>
            <h3>Vous essayez d'accéder à une page qui n'existe pas</h3>
            <p> Pour reveneir à la page d'accueil cliquer sur le lien suivant</p>
            <button class="button404"><h3><a href="<?= get_bloginfo('url'); ?>"><?= get_bloginfo('name'); ?></a></h3></button>
        </div>
        <img src="/4w4_joules/wp-content/themes/projet-tim/images/pato-girando.gif" alt="duck">
    </section>
<?php get_footer() ?>