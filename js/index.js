/*===========================================================
    Fonction pour envoyer le logo en haut à droite et faire
    apparaître le contenu du header.
============================================================*/
let aJoue = false;

// Fonction pour changer la position du logo
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const title = document.querySelector('h1');
    const distanceFromTop = window.scrollY;
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');
    const brgrBoutton = document.querySelector('.burger-menu');
    const conteneurHeader = document.querySelector('.logo-titre');


    // Detection de la taille de l'écran
    const mediaQuery = window.matchMedia('(min-width: 1080px)');

    if (distanceFromTop >= 100 && !aJoue) 
    {
        // Fullscreen
        if (mediaQuery.matches) 
        {
            // Le logo
            logo.style.transform = 'translate(-50vh, 0)';


            // Le titre
            title.style.opacity = '0';
            
            // La navigation
            nav.style.display = 'block';
            nav.style.opacity = '1';

            // Le contenu du footer et main
            main.style.opacity = '1';
            footer.style.opacity = '1';

            // Le bouton burger
            brgrBoutton.style.display = 'none';

            conteneurHeader.style.top = '0';

            aJoue = true;
        } 
        // Mobile
        else 
        {
            // Le logo
            logo.style.transform = 'translate(-50vh, 0)';


            // Le titre
            title.style.opacity = '0';


            // La navigation
            nav.style.opacity = '1';

            // Le contenu du footer et main
            main.style.opacity = '1';
            footer.style.opacity = '1';
            aJoue = true;

            // Le bouton burger
            brgrBoutton.style.display = 'flex';
        }
        
    } 
});

/*============================================================
    Fonction pour faire disparaître le texte des sections
    quand le header arrive à la hauteur du texte.
==============================================================*/
window.addEventListener('scroll', function() {

    const logo = document.querySelector('.logo');
    const sections = document.querySelectorAll('.effacer');
    const carousel = document.querySelector('section.carousel');

    const logoRect = logo.getBoundingClientRect(); // Position du logo

    sections.forEach(section => {
        const sectionRect = section.getBoundingClientRect(); // Position de la section

        // Pour les sections, on vérifie si le logo est en collision avec la section
        const overlap = !(logoRect.right < sectionRect.left || 
            logoRect.left > sectionRect.right || 
            logoRect.bottom < sectionRect.top + 100 || 
            logoRect.top > sectionRect.bottom);

        if (overlap) 
        {
            section.style.opacity = '0';
        } 
        else 
        {
            section.style.opacity = '1';
        }
    });

    const carouselRect = carousel.getBoundingClientRect(); // Position du carousel

    // Pour le carousel, on vérifie si le logo est en collision avec le carousel
    const overlap = !(logoRect.right < carouselRect.left || 
        logoRect.left > carouselRect.right || 
        logoRect.bottom < carouselRect.top + 400 || 
        logoRect.top > carouselRect.bottom);

    if (overlap) {
        carousel.style.opacity = '0';
    }
    else {
        carousel.style.opacity = '1';
    }
});

/* ==================================================
    Évènements pour le menu burger (ouvert/ fermé) 
====================================================*/
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');
const navLiens = document.querySelectorAll('nav a');

// Add an event listener to the burger menu button
burgerMenu.addEventListener('click', function() {
    // Toggle the visibility of the navigation
    nav.classList.toggle('nav-onscreen');
    // On active la classe qui change l'icone du bouton burger
    burgerMenu.classList.toggle('active');
    });


/*==================================================================
    Évènement pour mettre le "ligh mode" ou revenir au "dark mode"
===================================================================*/
const bod = document.querySelector('body');
const btn_Bck = document.querySelector('.DL_Md');
const point = document.querySelector('.dot');

// Si on clique sur le bouton le point se déplace et on active/ désactive le light ou dark mode
btn_Bck.addEventListener('click', function() {
    
    if (bod.classList.contains('lightMd'))
    {
        bod.classList.remove('lightMd');
        point.style.transform = 'translate(-20px, 0)';
    }
    else
    {
        bod.classList.add('lightMd');
        point.style.transform = 'translate(20px, 0)';
    }
});