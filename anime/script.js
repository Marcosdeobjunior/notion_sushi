// Variáveis globais
let character = document.getElementById('character');
let statusText = document.getElementById('status-text');
let isWalking = true;
let currentMessage = 0;

// Mensagens que aparecem durante a caminhada
const messages = [
"Explorando a montanha...",
"Descobrindo novos caminhos...",
"Admirando a paisagem...",
"Coletando memórias...",
"Seguindo a trilha...",
"Respirando o ar puro...",
"Contemplando o horizonte...",
"Encontrando paz interior..."
];

// Função para trocar mensagens
function changeMessage() {
currentMessage = (currentMessage + 1) % messages.length;
statusText.textContent = messages[currentMessage];

```
// Adiciona efeito de fade
statusText.style.opacity = '0';
setTimeout(() => {
    statusText.style.opacity = '1';
}, 300);

```

}

// Função para pausar/retomar animação
function toggleWalk() {
const characterContainer = document.querySelector('.character-container');

```
if (isWalking) {
    characterContainer.style.animationPlayState = 'paused';
    character.style.animationPlayState = 'paused';
    statusText.textContent = "Descansando...";
    isWalking = false;
} else {
    characterContainer.style.animationPlayState = 'running';
    character.style.animationPlayState = 'running';
    statusText.textContent = messages[currentMessage];
    isWalking = true;
}

```

}

// Função para criar efeito de partículas
function createParticle() {
const particle = document.createElement('div');
particle.className = 'particle';
particle.style.cssText =         `position: absolute;         width: 4px;         height: 4px;         background: rgba(255, 255, 255, 0.8);         border-radius: 50%;         pointer-events: none;         animation: float 3s ease-out forwards;         left: ${Math.random() * 1300}px;         top: ${Math.random() * 200 + 100}px;`    ;

```
document.querySelector('.widget-container').appendChild(particle);

// Remove a partícula após a animação
setTimeout(() => {
    if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
    }
}, 3000);

```

}

// Adiciona CSS para as partículas
const style = document.createElement('style');
style.textContent = `
@keyframes float {
0% {
opacity: 1;
transform: translateY(0px);
}
100% {
opacity: 0;
transform: translateY(-50px);
}
}

```
.widget-info {
    transition: opacity 0.3s ease;
}

.character-container:hover .character {
    filter: brightness(1.2);
    transform: scale(1.1);
    transition: all 0.3s ease;
}

.widget-container:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
}

```

`;
document.head.appendChild(style);

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
// Troca mensagem a cada 4 segundos
setInterval(changeMessage, 4000);

```
// Cria partículas ocasionalmente
setInterval(createParticle, 2000);

// Clique no personagem para pausar/retomar
character.addEventListener('click', toggleWalk);

// Clique no widget para interação
document.querySelector('.widget-container').addEventListener('click', function(e) {
    if (e.target !== character) {
        changeMessage();
    }
});

// Efeito de hover no widget
const widgetContainer = document.querySelector('.widget-container');

widgetContainer.addEventListener('mouseenter', function() {
    statusText.style.color = '#FFD700';
});

widgetContainer.addEventListener('mouseleave', function() {
    statusText.style.color = 'white';
});

```

});

// Função para adicionar efeito de dia/noite
function toggleDayNight() {
const container = document.querySelector('.widget-container');
const isNight = container.classList.contains('night-mode');

```
if (isNight) {
    container.classList.remove('night-mode');
    container.style.background = 'linear-gradient(to bottom, #87CEEB 0%, #98FB98 70%, #8FBC8F 100%)';
} else {
    container.classList.add('night-mode');
    container.style.background = 'linear-gradient(to bottom, #191970 0%, #483D8B 70%, #2F4F4F 100%)';
}

```

}

// Adiciona controle de dia/noite com duplo clique
document.querySelector('.widget-container').addEventListener('dblclick', toggleDayNight);

// Adiciona informações de controle
const controlInfo = document.createElement('div');
controlInfo.style.cssText =     `position: absolute;     bottom: 10px;     right: 10px;     background: rgba(0, 0, 0, 0.5);     color: white;     padding: 8px;     border-radius: 5px;     font-size: 10px;     opacity: 0.7;`;
controlInfo.innerHTML =     `<div>Clique no personagem: pausar/retomar</div>     <div>Clique no widget: trocar mensagem</div>     <div>Duplo clique: dia/noite</div>`;
document.querySelector('.widget-container').appendChild(controlInfo);
