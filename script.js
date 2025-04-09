
const progresso = document.getElementById('progresso');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// variavel para informa a etapa atual
let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++; //aumenta uma etapa

    if(currentActive > circles.length){
        currentActive = circles.length; // Limita o valor máximo de currentActive ao número de etapas
    }

    update();
});

prev.addEventListener('click', () => {
    currentActive--; //diminue uma etapa

    if(currentActive < 1){
        currentActive = 1; // Limita o valor mínimo de currentActive à primeira etapa
    }

    update();
});

function update() {
    circles.forEach((circle, i) => {
        if(i < currentActive){
            circle.classList.add('active'); // Marca como "ativo" as etapas anteriores
        } else {
            circle.classList.remove('active'); // Remove a classe "ativo" das etapas futuras
        }
    });

    const actives = document.querySelectorAll('.active'); // Seleciona todas as etapas ativas
    progresso.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; // Calcula a largura da barra de progresso

    if(currentActive === 1){
        prev.disabled = true; // Desabilita o botão "prev" na primeira etapa
    } else if(currentActive === circles.length){
        next.disabled = true; // Desabilita o botão "next" na última etapa
    } else {
        prev.disabled = false; // Habilita o botão "prev" em outras etapas
        next.disabled = false; // Habilita o botão "next" em outras etapas
    }
}