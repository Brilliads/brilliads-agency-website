document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.style.display === 'flex';
      mobileMenu.style.display = isOpen ? 'none' : 'flex';
    });
  }

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
        successMessage.textContent = 'Thank you! Your inquiry has been prepared. Please send it on WhatsApp to continue.';
      }

      window.open(`https://wa.me/919342922026?text=${text}`, '_blank');
      contactForm.reset();
    });
  }
});
