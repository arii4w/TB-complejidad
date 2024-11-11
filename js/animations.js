const containerWrapper = document.getElementById('container-wrapper');
const goButton = document.getElementById('button-go');
const introTitle = document.getElementById('front-page-title');

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

const phrases = [
    "Encuentra tu RUTA!",
    "Optimiza la Recolección!"
];

let currentPhraseIndex = 0;
const titleElement = document.getElementById("front-page-title");
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
