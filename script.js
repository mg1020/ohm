// Function to handle the intersection of elements
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
