// document.addEventListener("DOMContentLoaded", function () {
//     const slider = document.querySelector(".horizontal-gallery-container");

//     if (slider) {
//         slider.addEventListener("wheel", function (evt) {
//             evt.preventDefault();
            
//             slider.scrollBy({
//                 left: evt.deltaY * 1.5, 
//                 behavior: 'smooth'
//             });
//         }, { passive: false });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".gallery-row-item");
    const modal = document.getElementById("paintingModal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalSize = document.getElementById("modalSize");
    const modalStatus = document.getElementById("modalStatus");
    const closeModal = document.getElementById("closeModal");

    // Har painting item par click event
    items.forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = item.querySelector("img").src;
            const title = item.querySelector(".painting-title").innerText;
            const size = item.querySelector(".painting-size").innerText;
            const statusEl = item.querySelector(".painting-status");
            const statusText = statusEl.innerText;
            const isAvailable = statusEl.classList.contains("available");

            // Modal mein details set karna
            modalImg.src = imgSrc;
            modalTitle.innerText = title;
            modalSize.innerText = size;
            modalStatus.innerText = statusText;
            modalStatus.className = "modal-status " + (isAvailable ? "available" : "sold");

            // Modal show karna
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