function createPetal() {
    const petal = document.createElement('img');
    petal.src = '/img/petala.png'; // Substitua pelo caminho correto da imagem
    petal.classList.add('petala');
     petal.style.width = '50px'; // Largura da pétala
    petal.style.height = '50px';
    petal.style.left = `${Math.random() * 100}vw`; // Posição aleatória na largura da tela
    petal.style.animationDuration = `${Math.random() * 3 + 4}s`; // Duracao aleatória entre 4s e 7s
    document.body.appendChild(petal);

    // Remove a pétala depois que ela cair
    setTimeout(() => {
        petal.remove();
    }, 7000); // Correspondente ao tempo da animação
}

// Cria pétalas a cada 100ms
setInterval(createPetal, 100);

//scroll

function onScroll() {
    const sections = document.querySelectorAll('.section-fade');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            section.classList.add('section-fade-visible');
        }
    });
}

// Adiciona o listener de scroll
window.addEventListener('scroll', onScroll);

// Inicia a verificação na carga da página
document.addEventListener('DOMContentLoaded', () => {
    onScroll();
});