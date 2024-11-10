
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const containerWrapper = document.getElementById('container-wrapper');
const goButton = document.getElementById('go');
const introTitle = document.getElementById('intro-title');

goButton.addEventListener('click', () => {
    containerWrapper.style.transform = 'translateX(-100vw)';
    changePhraseEnabled = false;
    setTimeout(() => {
        containerWrapper.style.transform = 'translateX(-200vw)';
    }, 4000);

    setTimeout(() => {
        changePhraseEnabled = true;
    }, 4000);
    
    introTitle.textContent = "Optimiza la Recolección!";
});
/*
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const containerWrapper = document.getElementById('container-wrapper');
const goButton = document.getElementById('go');
const truck = document.getElementById('truck');
const light = document.getElementById('light');
const wheels = document.querySelectorAll('.wheel');

goButton.addEventListener('click', () => {
    truck.style.animation = 'scaleDown 6s ease-in-out forwards';
    light.style.animation = 'scaleDown 6s ease-in-out forwards';
    wheels.forEach(wheel => {
        wheel.style.animation = 'scaleDown 6s ease-in-out forwards';
    });
    containerWrapper.style.transform = 'translateX(-100vw)';
    changePhraseEnabled = false;
    setTimeout(() => {
        containerWrapper.style.transform = 'translateX(-200vw)';
    }, 6000);
    setTimeout(() => {
        changePhraseEnabled = true;
    }, 6000);
});*/

const phrases = [
    "Encuentra tu RUTA!",
    "Optimiza la Recolección!"
];

let currentPhraseIndex = 0;
const titleElement = document.getElementById("intro-title");
let changePhraseEnabled = true; 

function changePhrase() {
    if (!changePhraseEnabled) return;
    titleElement.classList.add("fade-out");
    setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        titleElement.textContent = phrases[currentPhraseIndex];
        titleElement.classList.remove("fade-out");
    }, 1000); 
}
setInterval(changePhrase, 3500);
