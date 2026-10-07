
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".gallery-row-item");
    const modal = document.getElementById("paintingModal");
    const modalImg = document.getElementById("modalImg");
    const closeModal = document.getElementById("closeModal");

    // Har painting item par click event
    items.forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = item.querySelector("img").src;

            // Modal mein image set karna
            modalImg.src = imgSrc;

            // Modal show karna (Full screen)
            modal.classList.add("active");
        });
    });

    // Close button par click karne se modal band hoga
    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.classList.remove("active");
        });
    }

    // Modal background par click karne par band hoga
    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
});

window.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
}, false);

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
    }
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
    }
});