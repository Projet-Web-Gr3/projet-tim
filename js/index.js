/* 
    Fonction pour envoyer le logo en haut à droite et faire
    apparaître le contenu du header.
*/
let aJoue = false;

// Fonction pour changer la position du logo
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const title = document.querySelector('h1');
    const distanceFromTop = window.scrollY;
    const nav = document.querySelector('nav');

    // Detection de la taille de l'écran
    const mediaQuery = window.matchMedia('(min-width: 1080px)');

    if (distanceFromTop >= 50 && !aJoue) 
    {
        if (mediaQuery.matches) {
            // Le logo
            logo.style.position = 'static';
            logo.style.transform = 'translate(-10%, 10%)';
            logo.style.top = '0rem';
            logo.style.left = '1rem';

            // Le titre
            title.style.opacity = '1';
            title.style.transform = 'translate(-20%, 50%)';
            
            // La navigation
            nav.style.display = 'flex';
            nav.style.justifyContent = 'center';
            nav.style.opacity = '1';

            aJoue = true;

        } else {
            // Le logo
            logo.style.position = 'static';
            logo.style.transform = 'translate(0%, 0%)';
            logo.style.top = '1rem';
            logo.style.left = '1rem';

            // Le titre
            title.style.opacity = '1';

            // La navigation
            nav.style.opacity = '1';
            aJoue = true;
        }
    } 
});


/*
    Fonction pour faire disparaître le texte des sections
    quand le header arrive à la hauteur du texte.
*/
window.addEventListener('scroll', function() {

    const sections = document.querySelectorAll('section');
    const header = document.querySelector('header');
    const distanceFromTop = window.scrollY;

    sections.forEach(section => {
        const distanceFromTopSection = section.offsetTop;
        const distanceFromTopHeader = header.offsetTop;

        if (distanceFromTop >= distanceFromTopSection - 100) {
            section.style.opacity = '0';
        } else {
            section.style.opacity = '1';
        }
    });
});

/* 
    Évènements pour le menu burger (ouvert/ fermé) 
*/
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

