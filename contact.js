// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Show success message
  successMessage.style.display = 'block';

  // Clear form
  contactForm.reset();

  // Hide success message after 4 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 4000);
});
