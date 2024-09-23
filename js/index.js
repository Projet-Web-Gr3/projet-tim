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
    const hPlaceholder = document.querySelector('#header-placeholder');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    if (distanceFromTop >= 50 && !aJoue) 
    {
        logo.style.width = '40%';
        logo.style.height = '10rem';
        logo.style.position = 'static';
        logo.style.transform = 'translate(0%, 0%)';
        title.style.opacity = '1';
        logo.style.top = '1rem';
        logo.style.left = '1rem';
        nav.style.opacity = '1';
        aJoue = true;
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
