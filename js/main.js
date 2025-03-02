"use strict";

document.addEventListener("DOMContentLoaded", function() {
  /************************************
   * Resize Browser Window
   ***********************************/

  window.addEventListener("resize", function() {
    document.querySelectorAll(".opened").forEach(function(el) {
      el.classList.remove("opened");
    });
  });
});