let counter = 0; // Der aktuelle Wert des Counters
const explosionSound = new Audio('symphony.mp3');

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function updateCounter() {
    document.getElementById("counter-value").textContent = counter;
}

function increase() {
    counter++;
    updateCounter();
    explosionSound.play();
    createExplosion(document.querySelector('button'));
}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}

function createExplosion(button) {
    const container = document.body;
    const buttonRect = button.getBoundingClientRect();
    const centerX = buttonRect.left + window.scrollX + buttonRect.width / 3;
    const centerY = buttonRect.top + window.scrollY + buttonRect.height / 3;

    const particleSize = 32;
    const delayBetweenParticles = 300;

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const angle = Math.random() * 2 * Math.PI;
            const distance = Math.random() * 200;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            // Setze die Partikel-Position
            particle.style.left = `${centerX - particleSize / 2}px`;
            particle.style.top = `${centerY - particleSize / 2}px`;
            particle.style.setProperty('--x', `${x}px`);
            particle.style.setProperty('--y', `${y}px`);

            container.appendChild(particle);

            // Entferne das Partikel nach der Animation
            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }, i * delayBetweenParticles); // Verzögerung pro Partikel
    }
}




