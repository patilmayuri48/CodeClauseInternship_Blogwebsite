// 🔍 Search Filter
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.post-card');

searchInput.addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.post-info h3').textContent.toLowerCase();
    card.style.display = title.includes(filter) ? 'block' : 'none';
  });
});

// 🎯 3D Animation on Hero
const heroWrapper = document.getElementById('heroWrapper');
const heroContent = document.querySelector('.hero-content');

heroWrapper.addEventListener('mousemove', (e) => {
  const { width, height } = heroWrapper.getBoundingClientRect();
  const x = e.clientX / width - 0.5;
  const y = e.clientY / height - 0.5;

  const rotateX = y * 10;
  const rotateY = x * 20;

  heroContent.style.transform = rotateX(${rotateX}deg) rotateY(${rotateY}deg);
});

heroWrapper.addEventListener('mouseleave', () => {
  heroContent.style.transform = rotateX(0deg) rotateY(0deg);
});