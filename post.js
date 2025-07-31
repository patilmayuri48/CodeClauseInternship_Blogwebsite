const postForm = document.getElementById('postForm');
const successMsg = document.getElementById('successMsg');

postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic validation passed, simulate success
  successMsg.style.display = 'block';

  // Clear the form fields
  postForm.reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMsg.style.display = 'none';
  }, 5000);
});
