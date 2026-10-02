document.addEventListener("DOMContentLoaded", function () {
    if (!document.documentElement) {
        return;
    }

    let isInSubfolder = window.location.pathname.includes("/paitings/");
    let cssPath = isInSubfolder ? "../../style.css" : "style.css";
    let headerPath = isInSubfolder ? "../../components/main-header.html" : "components/main-header.html";

    // Sirf Global CSS aur Bootstrap inject hoga
    const headInjection = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <link rel="stylesheet" href="${cssPath}">
    `;
    document.head.insertAdjacentHTML('beforeend', headInjection);

    // Header placeholder aur fetch ka code
    let placeholder = document.createElement('div');
    placeholder.id = "header-placeholder";
    document.body.prepend(placeholder);

    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-placeholder").innerHTML = data;
        });

    let bsScript = document.createElement('script');
    bsScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
    document.body.appendChild(bsScript);
});