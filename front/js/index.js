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
  document.querySelector('nav a[href="#banniere-accueil"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#banniere-accueil');
  });

  document.querySelector('nav a[href="#prestations"]').addEventListener('click', function (event) {
    event.preventDefault();
    smoothScroll('#prestations');
  });
}

// Gestion de la visibilité du bouton "back-to-top"
function handleBackToTopButtonVisibility() {
  const backToTopButton = document.getElementById("back-to-top");
  const bannerElement = document.getElementById("banniere-accueil");

  function handleScroll() {
    if (window.pageYOffset > bannerElement.offsetHeight) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handleScroll);

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Initialise les écouteurs d'événements et la fonctionnalité du bouton "back-to-top"
document.addEventListener("DOMContentLoaded", function () {
  addNavigationEventListeners();
  handleBackToTopButtonVisibility();
});