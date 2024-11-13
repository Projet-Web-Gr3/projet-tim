<?php
/**
 * Template name: vie-étudiants
 *
 */
?>
<?php get_header(); ?>

<?php
			
// Récupération de la page vie étudiante
$page = get_page_by_title('VIE ÉTUDIANTE');

if ($page) {
    echo 'h1'. get_the_title() . '</h1>';
    $contenu = apply_filters('the_content', $page->post_content);

    // Ajout du contenu de la page vie étudiante
    echo $contenu;
} else {
    echo '<p>Page "VIE ÉTUDIANTE" not found.</p>';
}
        

?>

<?php get_footer(); ?>