
// ==========================================
// COPY EMAIL FUNCTIONALITY
// ==========================================

const copyEmailButton = document.getElementById("copyEmail");

const emailAddress = "utsha.swe@gmail.com";

copyEmailButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(emailAddress);

        copyEmailButton.textContent = "Copied! ✓";

        setTimeout(() => {
            copyEmailButton.textContent = "Copy Email";
        }, 2000);

    } catch (error) {
        window.prompt("Copy this email address:", emailAddress);
    }
});


// ==========================================
// BACK TO TOP FUNCTIONALITY
// ==========================================

const backToTopButton = document.getElementById("backToTop");

// Show button after scrolling
window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }

});

// Scroll to top when clicked
backToTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ==========================================
// AUTOMATIC COPYRIGHT YEAR
// ==========================================

const currentYear = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
    const copyright = footer.querySelector(".copyright");

    if (copyright) {
        copyright.textContent = `© ${currentYear} Portfolio. All rights reserved.`;
    }
}

console.log("Portfolio website initialized successfully!");
