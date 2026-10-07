document.addEventListener("DOMContentLoaded", function () {
    if (!document.documentElement) {
        return;
    }

    // Dynamic approach: pathname ko split karke check karte hain ki hum root par hain ya kisi subfolder mein
    const pathSegments = window.location.pathname.split('/').filter(segment => segment.length > 0);
    
    // Agar path mein 1 ya usse zyada segments hain (jaise /about/ ya /paintings/canvas/), toh hum subfolder mein hain
    let isInSubfolder = pathSegments.length > 0;
    
    // Agar root par hain toh path blank ya sirf index.html hoga
    let prefix = isInSubfolder ? "../".repeat(pathSegments.length) : "";

    let cssPath = prefix + "style.css";
    let headerPath = prefix + "components/main-header.html";
    let faviconPath = prefix + "images/fav-logo.jpg";

    const headInjection = `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Irfan Anwar</title>
        <meta name="description" content="Hey I am an artist and based in India.">
        <meta name="keywords" content="Irfan Anwar, irfan anwar, irfananwar,Irfan Anwar artist, visual artist, creative designer, filmmaker, art portfolio, irfananwar.com">
        <meta name="author" content="Irfan Anwar">
        <link rel="icon" type="image/png" href="${faviconPath}">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <link rel="stylesheet" href="${cssPath}">
    `;
    document.head.insertAdjacentHTML('beforeend', headInjection);

    let path = window.location.pathname;
    if (path.includes("blackink")) {
        document.title = "Irfan Anwar - Blackink on Paper";
    } else if (path.includes("paintings") || path.includes("paitings")) {
        document.title = "Irfan Anwar - Canvas Paintings";
    } else if (path.includes("sketch")) {
        document.title = "Irfan Anwar - Sketches";
    } else if (path.includes("digital")) {
        document.title = "Irfan Anwar - Digital Paintings";
    } else if (path.includes("about")) {
        document.title = "Irfan Anwar - About";
    } else {
        document.title = "Irfan Anwar";
    }

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