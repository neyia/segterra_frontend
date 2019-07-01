/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hubspot/scripts/hubspot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hubspot/scripts/hubspot.js":
/*!****************************************!*\
  !*** ./src/hubspot/scripts/hubspot.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_PopUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/PopUp */ "./src/hubspot/scripts/modules/PopUp.js");
/** Delete ALL imports before adding to HubSpot*/

window.addEventListener('load', function () {
  mobileMenu();
});
/** Create sidebar for header mobile menu */

function mobileMenu() {
  var overlay = document.querySelector('#overlay');
  var btn = document.querySelector('#btnMenu');
  new _modules_PopUp__WEBPACK_IMPORTED_MODULE_0__["default"](btn, overlay);
}

/***/ }),

/***/ "./src/hubspot/scripts/modules/PopUp.js":
/*!**********************************************!*\
  !*** ./src/hubspot/scripts/modules/PopUp.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/** Create symbols for private methods' names*/
var addEventListenersToCloseBtn = Symbol();
var removeEventListenersToCloseBtn = Symbol();
var hidePopUp = Symbol();
/**
 * @class
 */

var PopUp =
/*#__PURE__*/
function () {
  /**
   * Create a PopUp
   * @param  {Element|Element[]} btnShow - Dom Element or Array of Dom Elements to add 'show' class on click.
   * @param  {Element} popup - Dom Element used as a popup to get 'show' class.
   * @param  {Element|Element[]} [btnClose=popup] - Dom Element or Array of Dom Elements to remove 'show' class on
   *     click.
   * @param  {String} [className='show'] - Class name to be added on click.
   * @param  {String} [actionShow=click] - Event to add 'show' class on click.
   * @param  {String} [actionHide=click] - Event to remove 'show' class on click.
   * @returns {Object} - PopUp instance with button(s) to toggle 'show' class.
   */
  function PopUp(btnShow, popup, btnClose, className, actionShow, actionHide) {
    var _this = this;

    _classCallCheck(this, PopUp);

    this.btnShow = btnShow;
    this.popup = popup;
    this.btnClose = btnClose || popup;
    this.className = className || 'show';
    this.actionShow = actionShow || 'click';
    this.actionHide = actionHide || 'click';
    /** Reveal PopUp(add 'show' class), activate Close Button(s) & prevent body scroll*/

    if (!Array.isArray(this.btnShow)) {
      this.btnShow.addEventListener(this.actionShow, function () {
        _this.popup.classList.add(_this.className);

        _this[addEventListenersToCloseBtn]();

        document.body.classList.add('no-scroll');
        window.addEventListener("touchmove", PopUp.preventScrollOnMobile);
      });
    } else {
      this.btnShow.forEach(function (btn) {
        btn.addEventListener(_this.actionShow, function () {
          _this.popup.classList.add(_this.className);

          _this[addEventListenersToCloseBtn]();

          document.body.classList.add('no-scroll');
          window.addEventListener("touchmove", PopUp.preventScrollOnMobile);
        });
      });
    }
  }

  _createClass(PopUp, [{
    key: hidePopUp,

    /** Hide PopUp(remove 'show' class), deactivate Close Button(s) & return body scroll*/
    value: function value() {
      this.popup.classList.remove(this.className);
      this[removeEventListenersToCloseBtn]();
      document.body.classList.remove('no-scroll');
      window.removeEventListener("touchmove", PopUp.preventScrollOnMobile);
    }
  }, {
    key: addEventListenersToCloseBtn,
    value: function value() {
      var _this2 = this;

      var btnClose = this.btnClose;

      if (!Array.isArray(btnClose)) {
        btnClose.addEventListener(this.actionHide, function (_ref) {
          var target = _ref.target;
          return target === btnClose ? _this2[hidePopUp](target) : null;
        });
      } else {
        btnClose.forEach(function (btn) {
          btn.addEventListener(_this2.actionHide, function (_ref2) {
            var target = _ref2.target;
            return target === btn ? _this2[hidePopUp]() : null;
          });
        });
      }
    }
  }, {
    key: removeEventListenersToCloseBtn,
    value: function value() {
      var _this3 = this;

      var btnClose = this.btnClose;

      if (!Array.isArray(btnClose)) {
        btnClose.removeEventListener(this.actionHide, this[hidePopUp]);
      } else {
        btnClose.forEach(function (btn) {
          btn.removeEventListener(_this3.actionHide, _this3[hidePopUp]);
        });
      }
    }
  }], [{
    key: "preventScrollOnMobile",

    /**
     * Prevent body scroll on IOS(of course) mobile devices
     * @param  {Event} e - Event(click).
     */
    value: function preventScrollOnMobile(e) {
      e.preventDefault();
    }
  }]);

  return PopUp;
}();
/** Delete ALL imports before adding to HubSpot*/


/* harmony default export */ __webpack_exports__["default"] = (PopUp);

/***/ })

/******/ });
//# sourceMappingURL=hubspot.js.map