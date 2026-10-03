/**
 * Main JavaScript functionality for Brilliads Agency Website
 * Handles navigation, sidebar toggle, and general interactions
 */

// Sidebar Toggle Logic
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;
    
    if (sidebar.classList.contains('sidebar-closed')) {
        sidebar.classList.remove('sidebar-closed');
        sidebar.classList.add('sidebar-open');
    } else {
        sidebar.classList.remove('sidebar-open');
        sidebar.classList.add('sidebar-closed');
    }
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.fa-bars');
    
    if (sidebar && toggleBtn) {
        if (!sidebar.contains(event.target) && !toggleBtn.parentElement.contains(event.target)) {
            if (sidebar.classList.contains('sidebar-open')) {
                sidebar.classList.remove('sidebar-open');
                sidebar.classList.add('sidebar-closed');
            }
        }
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;
    
    lastScroll = window.scrollY;
    
    if (lastScroll > 100) {
        header.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Log initialization
console.log('✓ Brilliads Agency Website - Main Script Loaded');
