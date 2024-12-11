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
    const brgrBoutton = document.querySelector('.burger-menu');
    const conteneurHeader = document.querySelector('.logo-titre');


    // Detection de la taille de l'écran
    const mediaQuery = window.matchMedia('(min-width: 1080px)');

    if (distanceFromTop >= 100 && !aJoue) 
    {
        // Fullscreen
        if (mediaQuery.matches) 
        {

            // Le bouton burger
            brgrBoutton.style.display = 'none';

            aJoue = true;
        } 
        // Mobile
        else 
        {
            aJoue = true;

            // Le bouton burger
            brgrBoutton.style.display = 'flex';
        }
        
    } 
});

/* ==================================================
    Évènements pour le menu burger (ouvert/ fermé) 
====================================================*/
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.menu__header');
const navLiens = document.querySelectorAll('nav a');
const body = document.querySelector('body');
const apprentissages = document.querySelector('.apprentissages');

// Add an event listener to the burger menu button
burgerMenu.addEventListener('click', function() {
    // Toggle the visibility of the navigation
    nav.classList.toggle('nav-onscreen');
    body.classList.toggle('no-scroll');
    //En commentaire le temps qu,on mette apprentisage
    //apprentissages.classList.toggle('hideAprentissage');
    // On active la classe qui change l'icone du bouton burger
    burgerMenu.classList.toggle('active');
    });

document.addEventListener('DOMContentLoaded', function () {
    const accueil = document.querySelector('.accueil');
    const header = document.querySelector('.menu__header');
    
    if (!accueil || !header) {
        console.error("Les éléments d'accueil ou de header n'ont pas été trouvés.");
        return; // Arrête l'exécution si les éléments sont introuvables
    }

    let lastScrollTop = 0;
    let isScrollingDown = false;

    // Fonction qui gère l'apparition et la disparition du header et de l'accueil
    function handleScroll() {
        let currentScroll = window.scrollY;
        
        if (currentScroll > 200 && !isScrollingDown) {  // Déclenche à partir de 200px
            // L'utilisateur descend
            accueil.classList.add('disparaitre');
            header.classList.add('apparaitre');
            isScrollingDown = true;
        } else if (currentScroll < lastScrollTop && currentScroll < 200) {
            // L'utilisateur remonte et est avant 200px
            accueil.classList.remove('disparaitre');
            header.classList.remove('apparaitre');
            isScrollingDown = false;
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Empêche que lastScrollTop soit négatif
    }

    // Ajout de l'écouteur d'événement sur le scroll
    window.addEventListener('scroll', handleScroll);
});