class Menu {
  constructor(el, btnOpen, btnClose) {
    this.el = el;
    this.btnOpen = btnOpen;
    this.btnClose = btnClose;
    this.menu = this.el.querySelector("[data-menu]");
    this.backdrop = document.querySelector(".backdrop");

    this.anchorLink = "[data-menu-link]";

    this.init();
  }

  init() {
    this.checkStateElement();

    window.addEventListener(
      "scroll",
      _.throttle(() => {
        this.checkStateElement();
      }, 300)
    );

    this.el.addEventListener("click", (e) => {
      const anchor = e.target.closest(this.anchorLink);

      if (anchor) {
        this.scrollNavigate(e, anchor);
      }
    });

    this.btnOpen.addEventListener("click", this.openMenu);

    this.btnClose.addEventListener("click", this.closeMenu);

    this.backdrop.addEventListener("click", this.closeMenu);
  }

  scrollNavigate = (e, anchor) => {
    e.preventDefault();
    document
      .querySelector(`#${anchor.dataset.menuLink}`)
      .scrollIntoView({ behavior: "smooth" });
    this.closeMenu();
  };

  checkStateElement = () => {
    window.scrollY > 0
      ? this.el.classList.add("active")
      : this.el.classList.remove("active");
  };

  openMenu = () => {
    this.menu.classList.add("opened");
    this.backdrop.classList.add("opened");
  };

  closeMenu = () => {
    this.menu.classList.remove("opened");
    this.backdrop.classList.remove("opened");
  };
}
