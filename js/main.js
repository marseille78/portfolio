"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
document.addEventListener("DOMContentLoaded", function() {
  /************************************
   * Resize Browser Window
   ***********************************/

  window.addEventListener("resize", function() {
    clearAllOpened();
  });
  document.addEventListener("keydown", function(_ref) {
    var code = _ref.code;
    if (code === "Escape") {
      clearAllOpened();
    }
  });

  /************************************
   * Menu
   ***********************************/
  (function() {
    var elMenu = document.querySelector("[data-top-menu]");
    var btnMenuOpen = document.querySelector("[data-menu-open]");
    var btnMenuClose = document.querySelector("[data-menu-close]");
    if (!elMenu || !btnMenuOpen || !btnMenuClose) return;
    new Menu(elMenu, btnMenuOpen, btnMenuClose);
  })();

  /*************************************
   * Animation
   ************************************/
  (function() {
    AOS.init();
  })();
});

function clearAllOpened() {
  document.querySelectorAll(".opened").forEach(function(el) {
    el.classList.remove("opened");
  });
}
var Menu = /*#__PURE__*/ function() {
  function Menu(el, btnOpen, btnClose) {
    var _this = this;
    _classCallCheck(this, Menu);
    _defineProperty(this, "scrollNavigate", function(e, anchor) {
      e.preventDefault();
      document.querySelector("#".concat(anchor.dataset.menuLink)).scrollIntoView({
        behavior: "smooth"
      });
      _this.closeMenu();
    });
    _defineProperty(this, "checkStateElement", function() {
      window.scrollY > 0 ? _this.el.classList.add("active") : _this.el.classList.remove("active");
    });
    _defineProperty(this, "openMenu", function() {
      _this.menu.classList.add("opened");
      _this.backdrop.classList.add("opened");
    });
    _defineProperty(this, "closeMenu", function() {
      _this.menu.classList.remove("opened");
      _this.backdrop.classList.remove("opened");
    });
    this.el = el;
    this.btnOpen = btnOpen;
    this.btnClose = btnClose;
    this.menu = this.el.querySelector("[data-menu]");
    this.backdrop = document.querySelector(".backdrop");
    this.anchorLink = "[data-menu-link]";
    this.init();
  }
  _createClass(Menu, [{
    key: "init",
    value: function init() {
      var _this2 = this;
      this.checkStateElement();
      window.addEventListener("scroll", _.throttle(function() {
        _this2.checkStateElement();
      }, 300));
      this.el.addEventListener("click", function(e) {
        var anchor = e.target.closest(_this2.anchorLink);
        if (anchor) {
          _this2.scrollNavigate(e, anchor);
        }
      });
      this.btnOpen.addEventListener("click", this.openMenu);
      this.btnClose.addEventListener("click", this.closeMenu);
      this.backdrop.addEventListener("click", this.closeMenu);
    }
  }]);
  return Menu;
}();