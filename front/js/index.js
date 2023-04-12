// Fonction pour le défilement progressif
function smoothScroll(target) {
  const targetPosition = document.querySelector(target).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1000;
  let start = null;

  // Fonction d'animation pour le défilement
  function animation(currentTime) {
    if (!start) start = currentTime;
    const progress = currentTime - start;
    const newPosition = easeInOutQuad(progress, startPosition, distance, duration);
    window.scrollTo(0, newPosition);
    if (progress < duration) requestAnimationFrame(animation);
  }

  // Fonction d'atténuation pour le défilement progressif
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Ajoute des écouteurs d'événements aux liens "Accueil" et "Prestations"
function addNavigationEventListeners() {
  document.querySelector('nav a[href="#banniere"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#banniere');
  });

  document.querySelector('nav a[href="#prestations"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#prestations');
  });
}

// Initialise les écouteurs d'événements
document.addEventListener("DOMContentLoaded", function () {
  addNavigationEventListeners();
});