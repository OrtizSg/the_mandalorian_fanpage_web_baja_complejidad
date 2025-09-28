document.addEventListener("DOMContentLoaded", function() {
    // --- Contenido del Header ---
    const headerContent = `
        <div class="container">
            <a href="index.html" class="logo"><img src="img/logo.png" alt="The Mandalorian Logo"></a>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="temporadas.html">Temporadas</a></li>
                    <li><a href="galeria.html">Galería</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>
        </div>
    `;

    // --- Contenido del Footer ---
    const footerContent = `
        <div class="container">
            <p>&copy; 2025 Fan Page The Mandalorian. Todos los derechos reservados.</p>
            <p>This is the Way.</p>
        </div>
    `;

    // --- Inyectar Header y Footer ---
    const mainHeader = document.getElementById('main-header');
    const mainFooter = document.getElementById('main-footer');

    if (mainHeader) {
        mainHeader.classList.add('main-header');
        mainHeader.innerHTML = headerContent;
    }

    if (mainFooter) {
        mainFooter.classList.add('main-footer');
        mainFooter.innerHTML = footerContent;
    }
});