document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Menu Toggle
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MOBILE MENU LOGIC ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    if (menuToggle && mainNav) {
        const handleMenu = (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            mainNav.classList.toggle('active');
            
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        };

        // Attach to both click and touchend for maximum mobile compatibility
        menuToggle.addEventListener('click', handleMenu);
        menuToggle.addEventListener('touchend', handleMenu);

        // Close menu when link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }

    // --- 2. LIGHTBOX (ZOOM) LOGIC ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const projectImages = document.querySelectorAll('.project-image img');

   // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    document.querySelectorAll('.project-image img').forEach(img => {
        img.addEventListener('click', () => {
            // CRITICAL: Change this to 'flex' so the CSS centering works
            lightbox.style.display = 'flex'; 
            lightboxImg.src = img.src;
            document.body.style.overflow = 'hidden'; // Stop background scroll
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Resume scroll
    });
    // --- 3. FADE IN LOGIC ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.project-item, #about, #contact').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});document.addEventListener('DOMContentLoaded', () => {

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


 /* 2. MOBILE MENU LOGIC - FORCE TOUCH */
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
    // We listen for both 'click' and 'touchstart' to ensure phones respond
    const toggleMenu = (e) => {
        e.preventDefault(); // Stop the browser from doing its own thing
        e.stopPropagation(); // Stop the click from hitting layers behind the button
        
        mainNav.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
        console.log("Menu state toggled");
    };

    menuToggle.addEventListener('click', toggleMenu);
    // Adding touchstart can make it feel much faster on iPhones
    menuToggle.addEventListener('touchstart', toggleMenu, {passive: false});
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
