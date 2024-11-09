document.addEventListener("DOMContentLoaded", function() {
    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", function() {
            const parentContainer = this.closest(".cours-contenu");
            const hiddenElements = parentContainer.querySelectorAll(".post-text, .post-gallery");

            this.classList.toggle("active");

            hiddenElements.forEach(element => {
                if (element.classList.contains("open")) {
                    element.classList.remove("open");
                } else {
                    element.classList.add("open");
                }
            });
        });
    });
});