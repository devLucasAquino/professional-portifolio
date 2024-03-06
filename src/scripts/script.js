// Seletor para o contêiner do carousel
const carouselContainer = document.querySelector('carrossel-container');
// Largura de um item no carousel
const itemWidth = document.querySelector('.carrossel-item').clientWidth;

// Função para mover o carousel
function moveCarousel(direction) {
  const currentPosition = carouselContainer.style.transform ? parseInt(carouselContainer.style.transform.match(/-?\d+/)[0]) : 0;
  const newPosition = direction === 'next' ? currentPosition - itemWidth : currentPosition + itemWidth;
  carouselContainer.style.transform = `translateX(${newPosition}px)`;
}

document.getElementById('prevBtn').addEventListener('click', () => moveCarousel('prev'));
document.getElementById('nextBtn').addEventListener('click', () => moveCarousel('next'));