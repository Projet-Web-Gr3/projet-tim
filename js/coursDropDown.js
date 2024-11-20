document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 769) {
        const toggles = document.querySelectorAll(".dropdown-toggle");

        toggles.forEach(toggle => {
            toggle.addEventListener("click", function() {
                const parentContainer = this.closest(".cours-contenu");
                const hiddenElements = parentContainer.querySelectorAll(".post-text, .post-gallery");

                this.classList.toggle("active");

                hiddenElements.forEach(element => {
                    element.classList.toggle("open");
                });
            });
        });
    }
});