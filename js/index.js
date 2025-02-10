document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!"); // Debugging

    // 📌 Lightbox Modal untuk Galeri Foto
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxModal = new bootstrap.Modal(document.getElementById("lightboxModal"));

    if (galleryItems.length > 0 && lightboxImage) {
        galleryItems.forEach(item => {
            item.addEventListener("click", function () {
                lightboxImage.src = this.src;
                lightboxModal.show();
            });
        });
    }

    // 📌 Efek Fade-in Saat Scroll (Optimized)
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat

    // 📌 Update Tanggal & Waktu
    function updateDateTime() {
        const dateTimeElement = document.getElementById("datetime");
        if (dateTimeElement) {
            const now = new Date();
            dateTimeElement.innerHTML = now.toLocaleString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
        }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

    // 📌 Blokir Request ke play.google.com/log untuk Mencegah Error 401
    (function() {
        const originalFetch = window.fetch;
        window.fetch = function(url, options) {
            if (url.includes("play.google.com/log")) {
                console.warn("Blocked unauthorized request to:", url);
                return Promise.resolve(new Response(null, { status: 401 }));
            }
            return originalFetch(url, options);
        };

        const originalXHR = window.XMLHttpRequest.prototype.open;
        window.XMLHttpRequest.prototype.open = function(method, url) {
            if (url.includes("play.google.com/log")) {
                console.warn("Blocked unauthorized request to:", url);
                return;
            }
            return originalXHR.apply(this, arguments);
        };
    })();
});
