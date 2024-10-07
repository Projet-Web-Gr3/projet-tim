    /*======================================
     * Controle de la rotation du carousel *
     ======================================*/
     let carousel = document.querySelector('.carousel'); // Le carousel au complet
     let cartes = document.querySelectorAll('.flip-card'); // Les cartes du carousel
     const nextButton = document.querySelector('.next'); // Le bouton suivant
     const prevButton = document.querySelector('.prev'); // Le bouton précédent
     let currentAngle = 0; // L'angle de rotation initial des cartes
 
     // Si on clique sur le bouton suivant...
     nextButton.addEventListener('click', () => {
         // L'angle de rotation des cartes change en augmnentant de 45 degrés (selon le calcul en commentaire en ligne 100 du CSS)
         currentAngle += 45; 
         updateImages();
     });
 
     // Si on clique sur le bouton précédent...
     prevButton.addEventListener('click', () => {
         // L'angle de rotation des cartes change en baissant de 45 degrés (selon le calcul en commentaire en ligne 100 du CSS)
         currentAngle -= 45; 
         updateImages();
     });
 
     function updateImages() {
         cartes.forEach((carte, index) => {
         carte.style.transform = `rotateY(${(index * 45) + currentAngle}deg) translateZ(253px)`;
     });
     }
 
     /*============================= 
     * Contrôle du flip des cartes * 
     ==============================*/
     let front = document.querySelectorAll('.front-flip'); // Le devant des cartes
     let inner = document.querySelectorAll('.inner-flip'); // Le positionnement de l'avant et de l'arrière des cartes 
     let back = document.querySelectorAll('.flip-card-back'); // Le dos des cartes
 
     // Pour chaque carte...
     inner.forEach((carte, index) => {
         // L'état "flipped" est faux
         let isFlipped = false;
 
     // Si la carte est cliquée...
     carte.addEventListener('click', () => {
         // L'état retourné de la carte
         if (!isFlipped) 
         {
             // La carte fait une rotation de 180 degrés et est agrandie de 0.2
             carte.style.transform = 'rotateY(180deg) scale(1.2)';
             // L'état "flipped" est vrai
             isFlipped = true;
         } 
         // L'état initial de la carte
         else
         {
             // La carte revient à sa position initiale (on enlève tout changement JS au style)
             carte.style.transform = '';
             // L'état "flipped" est faux
             isFlipped = false;
         }
     });
 });      