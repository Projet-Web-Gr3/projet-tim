<?php
    add_theme_support( 'menus' );

    add_theme_support('custom-logo');

    add_theme_support('post-thumbnails');

    $defaults = array(
        'width'                  => 0,
        'height'                 => 0,
        'flex-height'            => false,
        'flex-width'             => false,
    );

    /**
 * Modifie la requete principale de Wordpress avant qu'elle soit exécuté
 * le hook « pre_get_posts » se manifeste juste avant d'exécuter la requête principal
 * Dépendant de la condition initiale on peut filtrer un type particulier de requête
 * Dans ce cas çi nous filtrons la requête de la page d'accueil
 * @param WP_query  $query la requête principal de WP
 */
function _4w4_modifie_requete_principal( $query ) {
    if ( $query->is_home() && $query->is_main_query() && ! is_admin() ) {
      $query->set( 'category_name', 'populaire' );
      $query->set( 'orderby', 'title' );
      $query->set( 'order', 'ASC' );
      }
     }
     add_action( 'pre_get_posts', '_4w4_modifie_requete_principal' );

     function modifier_titre_par_Categorie($titre, $separator, $sep_location) {
        // Check if it's a category page
        if (is_category()) {
            // Get the category object
            $category = get_queried_object();
            
            // Get category name
            $category_name = $category->name;
            
            // Modify the titre
            $titre = "Destination arranged by $category_name $separator";
        }
        return $titre;
    }
    
    add_filter('wp_title', 'modify_category_page_title', 10, 3);

    function custom_image_size_for_gallery( $sizes ) {

        return array_merge( $sizes, array(
    
            'thumbnail' => __('Thumbnail'),
    
            'medium'    => __('Medium'),
    
            'large'     => __('Large'),
    
            'full'      => __('Full Size'),
    
        ));
    }
    
    add_filter( 'image_size_names_choose', 'custom_image_size_for_gallery' );