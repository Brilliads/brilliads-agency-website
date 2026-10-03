/**
 * Animation Handler for Brilliads Agency Website
 * Manages AOS (Animate On Scroll) and custom animations
 */

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out-cubic'
    });
    console.log('✓ AOS Animations Initialized');
}

// Refresh AOS on page load
window.addEventListener('load', () => {
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
});

// Custom animation for cards on hover
document.querySelectorAll('.white-gold-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    observer.observe(section);
});

console.log('✓ Custom Animations Loaded');
