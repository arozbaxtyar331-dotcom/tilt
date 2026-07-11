// Fullscreen lightbox: click a food image to view it larger
function initLightbox() {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    lightbox.innerHTML = '<button aria-label="Close" class="lightbox-close">&times;</button><img alt=""/>';
    document.documentElement.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    const openLightbox = (src, alt) => {
        if (!src) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "";
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    };

    document.querySelectorAll(".food-image").forEach(img => {
        img.addEventListener("click", () => openLightbox(img.currentSrc || img.src, img.alt));
    });

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeLightbox();
    });
}
