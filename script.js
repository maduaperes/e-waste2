document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector(".navbar");
  const toggle = document.getElementById("navToggle");
  const menu = document.querySelector(".navbar__menu");

  /* =========================
     NAVBAR SCROLL EFFECT
  ========================= */
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("navbar--scroll", window.scrollY > 50);
  });

  /* =========================
     MENU MOBILE TOGGLE
  ========================= */
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

  /* =========================
     REVEAL ANIMATION
  ========================= */
  const revealElements = document.querySelectorAll(
    ".benefit-card, .info__content, .info__right, .hero__content, .hero__image-area"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =========================
     LER MAIS (SÓ MOBILE)
  ========================= */

  const readMoreBtn = document.querySelector(".read-more-btn");
  const infoContent = document.querySelector(".info__content");

  if (readMoreBtn && infoContent) {

    readMoreBtn.addEventListener("click", () => {

      if (window.innerWidth > 768) return;

      infoContent.classList.toggle("readmore-open");

      readMoreBtn.textContent =
        infoContent.classList.contains("readmore-open")
          ? "Ler menos"
          : "Ler mais";
    });

  }

});