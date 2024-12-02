document.addEventListener('DOMContentLoaded', function() {
    /* Création d'un array pour les images */
    const carouselData = [
        {
            title: "Pour les plus créatifs",
            paragraph: "Une technique en Intégration Multimédias au Collège de Maisonneuve ouvre de nombreuses portes pour les jeunes créatifs. Que ce soit dans le design graphique, le développement web, l’animation 2D/3D, la production vidéo ou la réalité virtuelle, les diplômés acquièrent des compétences polyvalentes adaptées aux besoins des industries numériques.",
            images: [
                { src: "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/UCATImg.png", alt: "Image UQAT", caption: "Le profil créatif de l'UQAT propose une formation innovante et multidisciplinaire, permettant aux étudiants d’explorer divers domaines comme le design, l’arts visuels, la création numérique et l’animation. L’approche pédagogique encourage l’expérimentation et le développement de projets personnels, tout en favorisant la collaboration et la réflexion critique. Ce programme prépare les étudiants à devenir des professionnels polyvalents et audacieux, capables de transformer des idées en créations uniques, tout en répondant aux défis contemporains du secteur créatif." },
                { src: "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/NADImg.png", alt: "Image NAD Créatif", caption: "Le profil créatif de l’école NAD UQAC offre un environnement stimulant où les étudiants explorent et développent leur imagination à travers des projets multidisciplinaires en design, art numérique, animation et effets visuels. Grâce à une approche innovante et collaborative, les étudiants apprennent à maîtriser les outils de création les plus avancés tout en développant une réflexion artistique poussée. Ce programme prépare les futurs professionnels à repousser les limites de la créativité pour répondre aux défis de l’industrie numérique." }
            ]
        },
        {
            title: "Pour les plus logiques",
            paragraph: "Une technique en Intégration Multimédias au Collège de Maisonneuve offre également des opportunités prometteuses pour les jeunes au profil logique. Avec des compétences en programmation, en développement web, en gestion de bases de données et en optimisation d’interfaces utilisateur, ils peuvent se démarquer dans des domaines tels que le développement d’applications, la conception de systèmes interactifs, ou encore la gestion technique de projets multimédias.",
            images: [
                { src: "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/ETSImg.png", alt: "Image ETS", caption: "L'ÉTS forme plus de 25 % de tous les ingénieurs et ingénieures au Québec et se classe au deuxième rang au Canada quant au nombre de diplômes de baccalauréat en génie décernés au 1er cycle." },
                { src: "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/NADImg.png", alt: "Image NAD Logique", caption: "Le profil logique de l’école NAD UQAC se concentre sur les aspects techniques et analytiques des métiers numériques. Les étudiants développent des compétences en programmation, en génie logiciel, en intelligence artificielle et en développement de systèmes interactifs. Le programme met l’accent sur la résolution de problèmes complexes et l’optimisation des processus, tout en offrant une formation pratique et théorique pour une carrière dans l’industrie numérique, où rigueur et logique sont essentielles." },
                { src: "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/PolytechniqueImg.png", alt: "Image Polytechnique", caption: "Le profil logique de la Polytechnique offre une formation rigoureuse axée sur l'ingénierie et les sciences appliquées. Les étudiants acquièrent des compétences solides en résolution de problèmes, en conception de systèmes complexes et en optimisation des technologies. Le programme met l'accent sur l'innovation technique, la recherche et le développement, et prépare les futurs ingénieurs à relever les défis technologiques mondiaux. Grâce à une approche pratique et analytique, les diplômés sont prêts à exceller dans divers secteurs industriels en alliant logique, précision et créativité." }
            ]
        }
    ];

    /* Création du carousel de la page Avenir */
    function createCarousel() {
        const carousel = document.getElementById('avenir-carousel');
        const carouselInner = carousel.querySelector('.avenir-carousel-inner');

        carouselData.forEach((slide, slideIndex) => {
            slide.images.forEach((image, imageIndex) => {
                const carouselItem = document.createElement('div');
                carouselItem.className = 'avenir-carousel-item';
                if (slideIndex === 0 && imageIndex === 0) carouselItem.classList.add('active');

                const title = document.createElement('h3');
                title.textContent = slide.title;

                const paragraph = document.createElement('p');
                paragraph.textContent = slide.paragraph;

                const imgItem = document.createElement('div');
                imgItem.className = 'avenir-img-item';

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.alt;

                const caption = document.createElement('p');
                caption.textContent = image.caption;

                imgItem.appendChild(img);
                imgItem.appendChild(caption);

                carouselItem.appendChild(title);
                carouselItem.appendChild(paragraph);
                carouselItem.appendChild(imgItem);
                carouselInner.appendChild(carouselItem);
            });
        });
    }

    let currentSlide = 0;

    /* Contrôles du mouvement latéral des slides */
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

    // On appelle la fonction pour créer le carousel
    createCarousel();

    /* Création du contenu de la section des stages ATE */ 
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
    titreAte.className = "soustitre-ate";
    // Création du h3
    const titre2Ate = document.createElement('h3');
    titre2Ate.textContent = "Stage ATE";
    // Création du paragraphe
    const p_Ate = document.createElement('p');
    p_Ate.textContent = "Loaded to the gunwalls rutters booty reef tender spirits wherry driver grapple ho. Tender topmast lad lass Pirate Round clap of thunder to go on account hail-shot ahoy Shiver me timbers. Shrouds nipperkin hands run a shot across the bow Jack Ketch schooner black jack jolly boat bilged on her anchor doubloon. Lugsail spirits Sea Legs red ensign schooner ahoy bilge port avast Plate Fleet. Bowsprit quarterdeck swab killick furl lanyard scallywag gangway Admiral of the Black American Main. Main sheet weigh anchor Letter of Marque chandler heave down Jack Ketch dance the hempen jig belaying pin scourge of the seven seas Privateer.";
    // Création de l'image
    const logoAte = document.createElement('img');
    logoAte.src = "https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/ATEImg.png";

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

    /* Création de la section Stage Fin d'études */
    // Capture de l'élément possédant la classe "fin-etudes"
    const sectionStage = document.getElementsByClassName('fin-etudes')[0];

    // Création du conteneur principal pour les stages de fin d'études 
    const conteneurTexte = document.createElement('div');
    conteneurTexte.className = "conteneur-txt-stage";

    // Création des conteneurs pour les images
    const divEnsembleImg = document.createElement('div');
    divEnsembleImg.className = "div-ensemble-img";
    const divImgStage = document.createElement('div');
    divImgStage.className = "div-img-stage";
    const divImgStage2 = document.createElement('div');
    divImgStage2.className = "div-img-stage2";

    // Création du titre et du paragraphe pour les stages de fin d'études
    // Le titre h2
    const titreStage = document.createElement('h3');
    titreStage.textContent = "Stage de fin d'études";
    titreStage.className = "soustitre-stage";
    // Le paragraphe
    const p_Stage = document.createElement('p');
    p_Stage.textContent = "Loaded to the gunwalls rutters booty reef tender spirits wherry driver grapple ho. Tender topmast lad lass Pirate Round clap of thunder to go on account hail-shot ahoy Shiver me timbers. Shrouds nipperkin hands run a shot across the bow Jack Ketch schooner black jack jolly boat bilged on her anchor doubloon. Lugsail spirits Sea Legs red ensign schooner ahoy bilge port avast Plate Fleet. Bowsprit quarterdeck swab killick furl lanyard scallywag gangway Admiral of the Black American Main. Main sheet weigh anchor Letter of Marque chandler heave down Jack Ketch dance the hempen jig belaying pin scourge of the seven seas Privateer.";

    // Création des images
    const imgStage = document.createElement('img');
    imgStage.src = "stage-fin-etudes.jpg";
    const imgStage2 = document.createElement('img');
    imgStage2.src = "stage-fin-etudes2.jpg";
    const imgStage3 = document.createElement('img');
    imgStage3.src = "stage-fin-etudes3.jpg";
    
    // Ajout des éléments dans la section
    sectionStage.appendChild(conteneurTexte);
    sectionStage.appendChild(divEnsembleImg);
    // Ajout des éléments dans les divs
    conteneurTexte.appendChild(titreStage);
    conteneurTexte.appendChild(p_Stage);
    // Ajout des divs dans la section conteneur principal
    divEnsembleImg.appendChild(divImgStage);
    divEnsembleImg.appendChild(divImgStage2);
    // Ajout des images dans les divs
    divImgStage.appendChild(imgStage);
    divImgStage2.appendChild(imgStage2);
    divImgStage2.appendChild(imgStage3);
});