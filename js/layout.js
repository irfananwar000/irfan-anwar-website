document.addEventListener("DOMContentLoaded", function () {
    if (!document.documentElement) {
        return;
    }

    let isInSubfolder = window.location.pathname.includes("/paitings/");
    let cssPath = isInSubfolder ? "../../style.css" : "style.css";
    let headerPath = isInSubfolder ? "../../components/main-header.html" : "components/main-header.html";
    
    // Agar subfolder me hain toh favicon ka path bhi adjust hoga
    let faviconPath = isInSubfolder ? "../../images/fav-logo.jpg" : "images/fav-logo.jpg";

    // Head me Bootstrap, Global CSS, aur Favicon inject hoga
    const headInjection = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Irfan Anwar - Visual Artist, Creative Designer & Filmmaker</title>
        <meta name="description" content="Official portfolio of Irfan Anwar, featuring visual arts, canvas paintings, digital art, black ink drawings, photography, and experimental films.">
        <meta name="keywords" content="Irfan Anwar, irfan anwar, irfananwar,Irfan Anwar artist, visual artist, creative designer, filmmaker, art portfolio, irfananwar.com">
        <meta name="author" content="Irfan Anwar">
        <link rel="icon" type="image/png" href="${faviconPath}">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <link rel="stylesheet" href="${cssPath}">
    `;
    document.head.insertAdjacentHTML('beforeend', headInjection);

    // Dynamic Title set karne ke liye
    let path = window.location.pathname;
    if (path.includes("blackink.html")) {
        document.title = "Irfan Anwar - Blackink on Paper";
    } else if (path.includes("paintings.html")) {
        document.title = "Irfan Anwar - Canvas Paintings";
    } else if (path.includes("sketch.html")) {
        document.title = "Irfan Anwar - Sketches";
    } else if (path.includes("digital.html")) {
        document.title = "Irfan Anwar - Digital Paintings";
    } else {
        document.title = "Irfan Anwar";
    }

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