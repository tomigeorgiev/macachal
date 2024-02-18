

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (navbar) {
            if (window.scrollY > 0) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        } else {
            console.error('Navbar element not found');
        }
    });
});




