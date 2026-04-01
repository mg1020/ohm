document.addEventListener('DOMContentLoaded', () => {

    /* 1. FADE-IN ON SCROLL LOGIC */
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Select elements to animate
    const fadeElements = document.querySelectorAll('.project-item, #about, #contact');
    fadeElements.forEach(el => {
        el.classList.add('fade-in'); 
        observer.observe(el);
    });


   /* 2. MOBILE MENU LOGIC (Debug Version) */
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

console.log("Menu Toggle Found:", !!menuToggle); // Will say true/false in browser console
console.log("Main Nav Found:", !!mainNav);

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents any weird browser jumping
        console.log("Button was actually clicked!"); 
        mainNav.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}


    /* 3. LIGHTBOX (ZOOM) LOGIC */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const projectImages = document.querySelectorAll('.project-image img');

    if (lightbox && lightboxImg) {
        projectImages.forEach(image => {
            image.addEventListener('click', () => {
                lightbox.style.display = 'block';
                lightboxImg.src = image.src;
                // Prevent background scrolling when zoomed
                document.body.style.overflow = 'hidden'; 
            });
        });

        // Close lightbox when clicking anywhere on the black background
        lightbox.addEventListener('click', () => {
            lightbox.style.display = 'none';
            // Bring back scrolling
            document.body.style.overflow = 'auto'; 
        });
    }

});// Function to handle the intersection of elements
const observerOptions = {
    threshold: 0.2 // Trigger when 20% of the element is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Select all project items and sections to animate
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.project-item, #about, #contact');
    fadeElements.forEach(el => {
        el.classList.add('fade-in'); // Add the initial hidden state
        observer.observe(el);
    });
});
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');

// Open/Close menu when clicking the hamburger
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    
    // Optional: Switch icon from bars to an 'X'
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when a link is clicked (so user can see the section)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});
