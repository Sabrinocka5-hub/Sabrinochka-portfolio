document.addEventListener("DOMContentLoaded", () => {
  console.log("NFT site active ✅");

  // --- MODAL
  const modal = document.getElementById("infoModal");
  const openBtn = document.querySelector(".learn");
  const closeBtn = document.getElementById("closeModal");

  // Если кнопка (на случай, если селектор не найден) — безопасно
  if (openBtn) {
    openBtn.addEventListener("click", () => {
      // делаем модал видимым, и помечаем aria-hidden для доступности
      modal.setAttribute("aria-hidden", "false");
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.setAttribute("aria-hidden", "true");
    });
  }

  // Закрытие при клике вне окна
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.setAttribute("aria-hidden", "true");
    }
  });

  // Закрытие по Escape (удобно для пользователей клавиатуры)
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modal.setAttribute("aria-hidden", "true");
    }
  });

  // --- FADE-IN ON SCROLL (и сразу при загрузке показать видимое)
  const fadeBlocks = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
    fadeBlocks.forEach((block) => {
      const top = block.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        block.classList.add("visible");
      }
    });
  }

  // Вызов сразу (покажет первый экран без скролла), и навесим на scroll
  checkFadeIn();
  window.addEventListener("scroll", checkFadeIn);
});
