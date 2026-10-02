document.addEventListener("DOMContentLoaded", function () {
    // 1. Agar document me <html> ya <head> nahi hai, toh automatic pura HTML structure generate karna
    if (!document.documentElement) {
        return;
    }

    let isInSubfolder = window.location.pathname.includes("/paitings/");
    let cssPath = isInSubfolder ? "../style.css" : "style.css";
    let headerPath = isInSubfolder ? "../components/main-header.html" : "components/main-header.html";

    // Head me Bootstrap aur CSS automatically add karna
    const headInjection = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="${cssPath}">
    `;
    document.head.insertAdjacentHTML('beforeend', headInjection);

    if (isInSubfolder) {
        let pageCss = document.createElement('link');
        pageCss.rel = 'stylesheet';
        pageCss.href = 'paitings-style.css';
        document.head.appendChild(pageCss);
    }

    // Body ke shuru me automatic header place banana
    let placeholder = document.createElement('div');
    placeholder.id = "header-placeholder";
    document.body.prepend(placeholder);

    // Header HTML ko fetch karke dikhana
    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;

            let currentPath = window.location.pathname;
            if (currentPath.includes("paintings.html")) {
                let link = document.getElementById("nav-paintings");
                if (link) link.classList.add("active");
            } else {
                let link = document.getElementById("nav-home");
                if (link) link.classList.add("active");
            }
        });

    // Bootstrap JS Bundle load karna
    let bsScript = document.createElement('script');
    bsScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(bsScript);
});