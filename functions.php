<?php
    add_theme_support( 'menus' );
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    add_theme_support('image-size');

    $defaults = array(
        'width'                  => 0,
        'height'                 => 0,
        'flex-height'            => false,
        'flex-width'             => false,
    );

// Optional: Enable custom image sizes in the media library
function my_custom_sizes($sizes) {
    return array_merge($sizes, array(
        'custom-size' => __('Custom Size'),
    ));
}
add_filter('image_size_names_choose', 'my_custom_sizes');

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

    function _4w4_joules_enqueue_style() {
        $version_css = filemtime(get_template_directory() . '/style.css');
        // $version_js = filemtime(get_template_directory() . '/js/model3d.js');
        $version_anim = filemtime(get_template_directory() . '/js/index.js');
        $version_cours = filemtime(get_template_directory() . '/js/coursDropDown.js');
        $version_avenir = filemtime(get_template_directory() . '/js/avenir.js');
		$version_particle = filemtime(get_template_directory(). '/js/particles.js');

       //wp_enqueue_style( 'style', get_stylesheet_uri() );
        wp_enqueue_style( 'style', get_template_directory_uri() . '/style.css', array(), $version_css, 'all'    );
        // wp_enqueue_script( 'model3d', get_template_directory_uri() . '/js/model3d.js', array(), $version_js, true );
        wp_enqueue_script('animation', get_template_directory_uri() . '/js/index.js', array(), $version_anim, true);
        wp_enqueue_script('coursDropDown', get_template_directory_uri() . '/js/coursDropDown.js', array(), $version_cours, true);
		wp_enqueue_script('avenir', get_template_directory_uri() . '/js/avenir.js', array(), $version_avenir, true);
		wp_enqueue_script('particles', get_template_directory_uri() . '/js/particles.js', array(), $version_particle, true);
		
		 // Enqueue external JS libraries
        
		
    }
    add_action( 'wp_enqueue_scripts', '_4w4_joules_enqueue_style' );

     // Ajout de la fonctionnalité de menu

     function register_menus() {
        register_nav_menus(array(
            'principal' => 'Menu Principal',
            'projet_menu' => 'Projet Menu'
        ));
    }
    add_action('init', 'register_menus');

    // menu de nav pour les projets
    function register_projet_menu() {
        register_nav_menu('projet_menu', 'Projet Menu');
    }
    add_action('init', 'register_projet_menu');

function hide_admin_bar_for_all_users() {
    add_filter('show_admin_bar', '__return_false');
}
add_action('after_setup_theme', 'hide_admin_bar_for_all_users');

function my_custom_image_sizes() {
    add_image_size( 'custom-small', 300, 200, true );
    add_image_size( 'custom-medium', 600, 400, true );
    add_image_size( 'custom-large', 1200, 800, false );
}
add_action( 'after_setup_theme', 'my_custom_image_sizes' );

function add_image_size_setting_to_admin_menu() {
    add_options_page(
        'Image Size Settings',
        'Image Size Settings',
        'manage_options',
        'image-size-settings',
        'render_image_size_settings_page'
    );
}
add_action( 'admin_menu', 'add_image_size_setting_to_admin_menu' );