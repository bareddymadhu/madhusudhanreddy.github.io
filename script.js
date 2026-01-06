document.addEventListener("DOMContentLoaded", () => {

  /* =======================
     TYPING EFFECT
  ======================= */
  const roles = [
    "Python Developer",
    "Software Engineer",
    "CSE Student"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  const typing = document.querySelector(".typing");

  function typeEffect() {
    if (!typing) return;

    if (charIndex < roles[roleIndex].length) {
      typing.textContent += roles[roleIndex][charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 60);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  /* =======================
     SCROLL REVEAL
  ======================= */
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const visiblePoint = 100;

      if (elementTop < windowHeight - visiblePoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* =======================
     DARK MODE TOGGLE
  ======================= */
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }

});
