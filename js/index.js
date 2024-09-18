console.log('Hello World');

let aJoue = false;

// Fonction pour changer la position du logo
window.addEventListener('scroll', function() {
    const logo = document.querySelector('.logo');
    const title = document.querySelector('h1');
    const distanceFromTop = window.scrollY;
    const hPlaceholder = document.querySelector('#header-placeholder');
    const header = document.querySelector('header');

    if (distanceFromTop >= 100 && !aJoue) 
    {
        logo.style.width = '50%';
        logo.style.height = '15rem';
        logo.style.position = 'static';
        logo.style.transform = 'translate(0%, 0%)';
        title.style.opacity = '1';
        logo.style.top = '1rem';
        logo.style.left = '1rem';
        aJoue = true;
    } 

    else if (distanceFromTop < 100 && !aJoue)
    {
        logo.style.width = '50%';
        logo.style.height = '15rem';
        logo.style.position = 'absolute';
        logo.style.top = '50%';
        logo.style.left = '0%';
        logo.style.transform = 'translate(0%, -50%)';
        title.style.opacity = '0';
        header.style.height = '50vh';
    }
});