// Scrollspy: keeps the sticky category nav in sync with the section in view
function initMenuScrollspy() {
    const sections = document.querySelectorAll(".menu-section");
    const navLinks = document.querySelectorAll("#category-nav a");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Trigger tracking slightly ahead of exact boundary intersection
            if (pageYOffset >= sectionTop - 140) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");

                // Centering active element on view track automatically for smaller viewports
                link.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        });
    });
}

// Blur-up skeleton: show a shimmer placeholder until each food image finishes loading
function initMenuImageLoading() {
    document.querySelectorAll(".image-container").forEach(container => {
        const img = container.querySelector("img");
        if (!img) return;
        container.classList.add("skeleton");
        img.classList.add("img-loading");

        const markLoaded = () => {
            container.classList.remove("skeleton");
            img.classList.remove("img-loading");
            img.classList.add("img-loaded");
        };

        if (img.complete && img.naturalWidth > 0) {
            markLoaded();
        } else {
            img.addEventListener("load", markLoaded);
            img.addEventListener("error", markLoaded);
        }
    });
}
