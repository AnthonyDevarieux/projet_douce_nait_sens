// Gestion de la visibilité du bouton "back-to-top"
function handleBackToTopButtonVisibility() {
    const backToTopButton = document.getElementById("back-to-top");
    const bannerElement = document.getElementById("banniere");
  
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
  
  // Initialise la fonctionnalité du bouton "back-to-top"
  document.addEventListener("DOMContentLoaded", function () {
    handleBackToTopButtonVisibility();
  });