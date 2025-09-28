document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'img/galeria/bo_katan_kryze_1.webp', characters: ['bo-katan-kryze'] },
        { src: 'img/galeria/bo_katan_kryze_2.webp', characters: ['bo-katan-kryze'] },
        { src: 'img/galeria/boba_fett.webp', characters: ['boba-fett'] },
        { src: 'img/galeria/cara_dune_1.webp', characters: ['cara-dune'] },
        { src: 'img/galeria/cara_dune_2.webp', characters: ['cara-dune'] },
        { src: 'img/galeria/din_djarin_1.webp', characters: ['din-djarin'] },
        { src: 'img/galeria/din_djarin_2.webp', characters: ['din-djarin'] },
        { src: 'img/galeria/din_djarin_grogu.webp', characters: ['din-djarin', 'grogu'] },
        { src: 'img/galeria/greef_karga_1.webp', characters: ['greef-karga'] },
        { src: 'img/galeria/greef_karga_2.webp', characters: ['greef-karga'] },
        { src: 'img/galeria/grogu_1.webp', characters: ['grogu'] },
        { src: 'img/galeria/grogu_2.webp', characters: ['grogu'] },
        { src: 'img/galeria/grogu_3.webp', characters: ['grogu'] },
        { src: 'img/galeria/moff_gideon_1.webp', characters: ['moff-gideon'] },
        { src: 'img/galeria/moff_gideon_2.webp', characters: ['moff-gideon'] },
    ];

    const galleryGrid = document.getElementById('gallery-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-image');
    const closeModal = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentFilteredImages = [];
    let currentImageIndex;

    function generateGallery(filter = 'all') {
        galleryGrid.innerHTML = '';
        currentFilteredImages = [];

        const filteredImages = filter === 'all' 
            ? images 
            : images.filter(img => img.characters.includes(filter));

        filteredImages.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `Imagen de ${image.characters.join(', ')}`;
            img.dataset.index = index;
            galleryGrid.appendChild(img);
            currentFilteredImages.push(image.src);

            img.addEventListener('click', () => {
                openModal(index);
            });
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            generateGallery(filter);
        });
    });

    function openModal(index) {
        currentImageIndex = index;
        modal.style.display = 'block';
        modalImg.src = currentFilteredImages[currentImageIndex];
    }

    function close() {
        modal.style.display = 'none';
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % currentFilteredImages.length;
        modalImg.src = currentFilteredImages[currentImageIndex];
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + currentFilteredImages.length) % currentFilteredImages.length;
        modalImg.src = currentFilteredImages[currentImageIndex];
    }

    if(closeModal) closeModal.addEventListener('click', close);
    if(prevBtn) prevBtn.addEventListener('click', showNextImage);
    if(nextBtn) nextBtn.addEventListener('click', showPrevImage);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            close();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowRight') {
                showNextImage();
            }
            if (event.key === 'ArrowLeft') {
                showPrevImage();
            }
            if (event.key === 'Escape') {
                close();
            }
        }
    });

    // Initial gallery generation
    generateGallery();
});