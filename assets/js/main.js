// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle Function ---
    const navMenu = document.getElementById('myNavMenu');
    
    // Make the function globally accessible from the HTML onclick attribute
    window.myMenuFunction = function() {
        navMenu.classList.toggle('active');
    }

    // Close menu when a nav link is clicked (for mobile view)
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // --- Typing Effect (Typed.js) ---
    if (typeof Typed !== 'undefined' && document.querySelector('.typedText')) {
        const typed = new Typed('.typedText', {
            strings: [
                'a Frontend Developer',
                'a Software Manual Tester',
                'a UI/UX Designer'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 1500,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // --- ScrollReveal Animations ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            reset: false // Animations will only run once
        });

        // Animate elements
        sr.reveal('.featured-text', { origin: 'left', delay: 200 });
        sr.reveal('.featured-image', { origin: 'right', delay: 200 });
        sr.reveal('.social_icons', { origin: 'bottom', delay: 400 });
        sr.reveal('.featured-text-btn', { origin: 'bottom', delay: 300 });
        sr.reveal('.about-info', { origin: 'left' });
        sr.reveal('.skills-box', { origin: 'bottom', interval: 150 });
        sr.reveal('.top-header', { origin: 'top' });
        sr.reveal('.project-box', { origin: 'bottom', interval: 200 });
        sr.reveal('.cert-card', { origin: 'bottom', interval: 200 });
        sr.reveal('.contact-info', { origin: 'left' });
        sr.reveal('.form-control', { origin: 'right' });
    }

    // --- Active Nav Link on Scroll (Scrollspy) ---
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active-link');
                    if (`#${entry.target.id}` === link.getAttribute('href')) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -70% 0px'
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});