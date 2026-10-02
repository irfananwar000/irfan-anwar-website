document.addEventListener("DOMContentLoaded", function () {
    // Check karein ki hum subfolder (paitings) mein hain ya root par
    let isInSubfolder = window.location.pathname.includes("/paitings/");
    let headerPath = isInSubfolder ? "../components/main-header.html" : "components/main-header.html";

    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            const headerPlaceholder = document.getElementById("header-placeholder");
            if (headerPlaceholder) {
                headerPlaceholder.innerHTML = data;

                // Active link highlight logic
                let currentPath = window.location.pathname;
                if (currentPath.includes("paintings.html")) {
                    let paintingsLink = document.getElementById("nav-paintings");
                    if (paintingsLink) paintingsLink.classList.add("active");
                } else {
                    let homeLink = document.getElementById("nav-home");
                    if (homeLink) homeLink.classList.add("active");
                }
            }
        })
        .catch(error => console.error("Error loading header:", error));
});