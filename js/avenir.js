document.addEventListener('DOMContentLoaded', function() {
    const carouselData = [
        {
            title: "Pour les plus créatifs",
            paragraph: "Short paragraph for slide 1.",
            images: [
                { src: "image1.jpg", alt: "Image 1", caption: "Caption 1" },
                { src: "image2.jpg", alt: "Image 2", caption: "Caption 2" },
                { src: "image3.jpg", alt: "Image 3", caption: "Caption 3" },
                { src: "image4.jpg", alt: "Image 4", caption: "Caption 4" }
            ]
        },
        {
            title: "Pour les plus logiques",
            paragraph: "Short paragraph for slide 2.",
            images: [
                { src: "image5.jpg", alt: "Image 5", caption: "Caption 5" },
                { src: "image6.jpg", alt: "Image 6", caption: "Caption 6" },
                { src: "image7.jpg", alt: "Image 7", caption: "Caption 7" },
                { src: "image8.jpg", alt: "Image 8", caption: "Caption 8" }
            ]
        }
    ];

    function createCarousel() {
        const carousel = document.getElementById('avenir-carousel');
        const carouselInner = carousel.querySelector('.avenir-carousel-inner');

        carouselData.forEach((slide, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = 'avenir-carousel-item';
            if (index === 0) carouselItem.classList.add('active');

            const title = document.createElement('h2');
            title.textContent = slide.title;

            const paragraph = document.createElement('p');
            paragraph.textContent = slide.paragraph;

            const imagesDiv = document.createElement('div');
            imagesDiv.className = 'images';

            slide.images.forEach(image => {
                const imgItem = document.createElement('div');
                imgItem.className = 'avenir-img-item';

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;

                const caption = document.createElement('p');
                caption.textContent = image.caption;

                imgItem.appendChild(img);
                imgItem.appendChild(caption);
                imagesDiv.appendChild(imgItem);
            });

            carouselItem.appendChild(title);
            carouselItem.appendChild(paragraph);
            carouselItem.appendChild(imagesDiv);
            carouselInner.appendChild(carouselItem);
        });
    }

    let currentSlide = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.avenir-carousel .avenir-carousel-item');
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 100;
        document.querySelector('.avenir-carousel .avenir-carousel-inner').style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function() {
        showSlide(currentSlide + 1);
    }

    window.prevSlide = function() {
        showSlide(currentSlide - 1);
    }

    createCarousel();

    // Capture l'élément possédant la classe "ate"
    const sectionAte = document.getElementsByClassName('ate')[0];
    // Création d'un conteneur principal pour le contenu
    const conteneurPrincipal = document.createElement('div');
    conteneurPrincipal.className = "conteneur-principal";
    // Création d'une div pour le contenu
    const divAte = document.createElement('div');
    divAte.className = "ate-contenu";
    // Création de la div pour l'image
    const divImage = document.createElement('div');
    divImage.className = "ate-image";
    
    // Création du h2
    const titreAte = document.createElement('h2');
    titreAte.textContent = "Est-il possible de travailler pendant et après la technique ?";
    titre2Ate.className = "soustitre-ate";
    // Création du h3
    const titre2Ate = document.createElement('h3');
    titre2Ate.textContent = "Stage ATE";
    // Création du paragraphe
    const p_Ate = document.createElement('p');
    p_Ate.textContent = "Loaded to the gunwalls rutters booty reef tender spirits wherry driver grapple ho. Tender topmast lad lass Pirate Round clap of thunder to go on account hail-shot ahoy Shiver me timbers. Shrouds nipperkin hands run a shot across the bow Jack Ketch schooner black jack jolly boat bilged on her anchor doubloon. Lugsail spirits Sea Legs red ensign schooner ahoy bilge port avast Plate Fleet. Bowsprit quarterdeck swab killick furl lanyard scallywag gangway Admiral of the Black American Main. Main sheet weigh anchor Letter of Marque chandler heave down Jack Ketch dance the hempen jig belaying pin scourge of the seven seas Privateer.";
    // Création de l'image
    const logoAte = document.createElement('img');
    logoAte.src = "logo-ate.png";

    // Ajout des éléments dans la section
    sectionAte.appendChild(titreAte);
    sectionAte.appendChild(conteneurPrincipal);

    // Ajout des divs dans la section conteneur principal
    conteneurPrincipal.appendChild(divAte);
    conteneurPrincipal.appendChild(divImage);

    // Ajout des éléments dans les divs
    divAte.appendChild(titre2Ate);
    divAte.appendChild(p_Ate);
    divImage.appendChild(logoAte);
});