let slideAtual = 0;
const slides = document.querySelectorAll('.carrossel-item');

function mudaSlide(novaSlide) {
 slides[slideAtual].style.opacity = 0;

 slideAtual = (slideAtual + novaSlide) % slides.length;
 if (slideAtual < 0) {
    slideAtual = slides.length - 1;
 }

 // Mostra o novo slide
 slides[slideAtual].style.opacity = 1;
}

// Função para o botão "Anterior"
document.getElementById('prevBtn').addEventListener('click', function() {
 mudaSlide(-1);
});

// Função para o botão "Próximo"
document.getElementById('nextBtn').addEventListener('click', function() {
 mudaSlide(1);
});