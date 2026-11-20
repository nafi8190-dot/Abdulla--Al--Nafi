
// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

// Select elements that should animate
const revealElements = document.querySelectorAll(
    ".section, .project-card, .highlight-card, .timeline-item"
);

// Add reveal class to selected elements
revealElements.forEach(element => {
    element.classList.add("reveal");
});

// Check whether browser supports Intersection Observer
if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        observer.observe(element);
    });

} else {

    // Show everything if Intersection Observer is unavailable
    revealElements.forEach(element => {
        element.classList.add("visible");
    });

}

/* =========================================
   EDUCATION CARD ANIMATIONS & IMAGE FALLBACK
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const educationCards = document.querySelectorAll(
        "#education .education-reveal"
    );

    const educationImages = document.querySelectorAll(
        "#education .education-photo img"
    );

    // Handle missing and successfully loaded photographs
    educationImages.forEach((img) => {

        const showPlaceholder = () => {
            img.parentElement.classList.remove("has-image");
            img.style.display = "none";
        };

        const showImage = () => {
            img.parentElement.classList.add("has-image");
            img.style.display = "block";
        };

        img.addEventListener("error", showPlaceholder);
        img.addEventListener("load", showImage);

        // Handle images already loaded or failed
        if (img.complete) {
            if (img.naturalWidth > 0) {
                showImage();
            } else {
                showPlaceholder();
            }
        }
    });

    // Respect reduced-motion preferences
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
        educationCards.forEach(card => {
            card.classList.add("is-visible");
        });
        return;
    }

    // Reveal cards when they enter the viewport
    const observer = new IntersectionObserver((entries, obs) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                obs.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    educationCards.forEach(card => {
        observer.observe(card);
    });

});
