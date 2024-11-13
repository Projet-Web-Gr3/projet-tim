<?php get_header() ?>
<div id="main-content">
        <div id="container3D"></div>
    <!-- Contenu du site -->
        <main>   
			<?php 
					// Récupération de la page d'accueil
					$page = get_page_by_title('Accueil');

					if ($page) {
						$contenu = apply_filters('the_content', $page->post_content);

						// Ajout du contenu de la page d'accueil
						echo $contenu;
					} else {
						echo '<p>Page "Acceuil" not found.</p>';
					}
				?>
		</main>
        <?php get_footer(); ?>