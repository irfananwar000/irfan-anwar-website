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