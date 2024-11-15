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
});