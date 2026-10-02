// script.js

// Função antiga (caso queira usar alert de novo)
function mostrarMensagem(dorama) {
    alert(
        "Você escolheu: " + dorama +
        "\n\nEsse dorama merece entrar na sua lista! 🌸"
    );
}

// Função opcional: adiciona um efeito suave ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        
        setTimeout(() => {
            card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 100 * index);
    });
});