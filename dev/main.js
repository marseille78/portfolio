document.addEventListener("DOMContentLoaded", function () {
  /************************************
   * Resize Browser Window
   ***********************************/

  window.addEventListener("resize", () => {
    clearAllOpened();
  });

  document.addEventListener("keydown", ({ code }) => {
    if (code === "Escape") {
      clearAllOpened();
    }
  });

  /************************************
   * Menu
   ***********************************/
  (function () {
    const elMenu = document.querySelector("[data-top-menu]");
    const btnMenuOpen = document.querySelector("[data-menu-open]");
    const btnMenuClose = document.querySelector("[data-menu-close]");

    if (!elMenu || !btnMenuOpen || !btnMenuClose) return;

    new Menu(elMenu, btnMenuOpen, btnMenuClose);
  })();

  /*************************************
   * Animation
   ************************************/
  (function () {
    AOS.init();
  })();
});

function clearAllOpened() {
  document.querySelectorAll(".opened").forEach((el) => {
    el.classList.remove("opened");
  });
}
