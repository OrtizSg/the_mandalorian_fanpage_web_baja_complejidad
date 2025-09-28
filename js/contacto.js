document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar el envío real del formulario

            // Obtener los valores de los campos
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validación simple
            if (name === '' || email === '' || message === '') {
                showStatus('Por favor, completa todos los campos.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showStatus('Por favor, introduce un email válido.', 'error');
                return;
            }

            // Simulación de envío exitoso
            showStatus('Transmisión recibida. Gracias por tu mensaje.', 'success');
            contactForm.reset(); // Limpiar el formulario
        });
    }

    function showStatus(message, type) {
        formStatus.textContent = message;
        formStatus.style.color = type === 'success' ? 'var(--accent-color)' : '#ff4d4d';
        
        setTimeout(() => {
            formStatus.textContent = '';
        }, 5000); // El mensaje desaparece después de 5 segundos
    }

    function isValidEmail(email) {
        // Expresión regular simple para validación de email
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
});
