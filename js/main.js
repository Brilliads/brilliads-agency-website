document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle for mobile
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
    if (mobileMenu && menuToggle) {
      if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.style.display = 'none';
      }
    }
  });

  // Close mobile menu when clicking a link
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.style.display = 'none';
    });
  });

  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = formData.get('name')?.toString().trim() || 'Client';
      const service = formData.get('service')?.toString().trim() || 'General Inquiry';
      const message = formData.get('message')?.toString().trim() || 'Hello Brilliads Agency';

      const text = `Hi Brilliads Agency,%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;

      if (successMessage) {
        successMessage.style.display = 'block';
        successMessage.textContent = '✓ Thank you! Redirecting to WhatsApp...';
      }

      setTimeout(() => {
        window.open(`https://wa.me/919342922026?text=${text}`, '_blank');
        contactForm.reset();
        if (successMessage) {
          successMessage.style.display = 'none';
        }
      }, 1000);
    });
  }

  // Navigation active state
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  console.log('✓ Brilliads Agency - All scripts loaded');
});
