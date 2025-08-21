 // Animação de titulos | Sessão Hero

 document.addEventListener('DOMContentLoaded', function () {
    const texts = [
        "Programador de Software Web",
        "Especialista em Desenvolvimento",
        "Desenvolvedor Full Stack Web",
        "Criador de Soluções Inovadoras",
        "Desenvolvedor de sistemas",
    ];

    let index = 0;
    const rotatingText = document.getElementById('rotating-text');

    function changeText() {
        rotatingText.style.animation = 'fadeOut 0.5s ease-in-out forwards';
        setTimeout(() => {
            rotatingText.textContent = texts[index];
            rotatingText.style.animation = 'fadeIn 0.5s ease-in-out forwards';
            index = (index + 1) % texts.length;
        }, 500);
    }

    setInterval(changeText, 3000);
});

/* Animação do Carrosel | Sessão Meus Projetos */
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.project-carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let index = 0;

        function showNextImage() {
            images[index].classList.remove('active');
            index = (index + 1) % images.length;
            images[index].classList.add('active');
        }

        setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos
    });
});