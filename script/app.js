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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/calendar/_calendar.js":
/*!**********************************************!*\
  !*** ./src/components/calendar/_calendar.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

window.addEventListener('load', function () {
  // Change default button text
  $.fn.datepicker.language['en'] = _objectSpread({}, $.fn.datepicker.language['en'], {
    clear: 'Cancel'
  }); // Create 'OK' button

  var span = document.createElement('span');
  span.innerText = 'Ok';
  span.className = 'datepicker--button'; // Type in your element's classname

  $('.calendar').datepicker({
    language: 'en',
    firstDay: 1,
    clearButton: true,
    onShow: function onShow(picker) {
      var body = document.querySelector('body');
      body.style.height = '480px';
      console.log('one'); // Add 'OK' button to the datepicker

      document.querySelector('.datepicker--buttons').appendChild(span) // Add 'click' listener to the 'OK' button
      .addEventListener('click', function (e) {
        // to prevent console error
        e.stopImmediatePropagation(); // hide the datepicker

        picker.hide();
      });
    }
  });
});

/***/ }),

/***/ "./src/components/card/_card.js":
/*!**************************************!*\
  !*** ./src/components/card/_card.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_flipCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/flipCards */ "./src/components/card/scripts/flipCards.js");
/* harmony import */ var _scripts_checkinSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/checkinSlider */ "./src/components/card/scripts/checkinSlider.js");
/* harmony import */ var _scripts_checkinSlider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_checkinSlider__WEBPACK_IMPORTED_MODULE_1__);
/* Card Flipping Script*/

/* Swiper Slider*/


var TABLET = 820;

window.onresize = function () {
  if (window.innerWidth < TABLET) {
    var cards = document.querySelectorAll('.flipper');
    cards.forEach(function (card) {
      card.classList.remove('rotate180');
    });
  }
};

/***/ }),

/***/ "./src/components/card/scripts/checkinSlider.js":
/*!******************************************************!*\
  !*** ./src/components/card/scripts/checkinSlider.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  var checkinSlider = new Swiper('.swiper-card', {
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev'
    },
    slidesPerView: 'auto',
    slidesOffsetAfter: -10,
    slidesOffsetBefore: 62,
    spaceBetween: 0,
    simulateTouch: true,
    grabCursor: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      630: {
        slidesOffsetAfter: 16,
        slidesOffsetBefore: -8
      },
      820: {
        slidesOffsetAfter: 16,
        slidesOffsetBefore: -8
      },
      1170: {
        slidesOffsetAfter: 40,
        slidesOffsetBefore: 40
      }
    }
  });
});

/***/ }),

/***/ "./src/components/card/scripts/flipCards.js":
/*!**************************************************!*\
  !*** ./src/components/card/scripts/flipCards.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _flipper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flipper */ "./src/components/card/scripts/flipper.js");

/*
 * 1. Add class 'flipper' to the wrapper
 * 2. Add class 'flip-front' to the flip btn in the front
 * 3. Add class 'flip-back' to the flip btn in the back
 * 4. Done!
 *
 * */

window.addEventListener('load', function () {
  var cardsArr = document.querySelectorAll('.flipper');
  cardsArr.forEach(function (card) {
    var btnDaysArr = card.querySelectorAll('.btn-card--day:not(.btn-card--day--future)');

    if (btnDaysArr) {
      btnDaysArr.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var selectedItem = card.querySelector('.selected');

          if (selectedItem) {
            selectedItem.classList.remove('selected');
          }

          this.classList.add('selected');
        });
      });
    }

    new _flipper__WEBPACK_IMPORTED_MODULE_0__["default"](card);
  });
});

/***/ }),

/***/ "./src/components/card/scripts/flipper.js":
/*!************************************************!*\
  !*** ./src/components/card/scripts/flipper.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Flipper(elementToFlip) {
  elementToFlip.front = function () {
    elementToFlip.classList.remove('rotate180');
  };

  elementToFlip.back = function () {
    elementToFlip.classList.add('rotate180');
  };

  elementToFlip.addEventListener('click', function (e) {
    if (e.target.classList.contains('flip-back')) {
      elementToFlip.front();
    }

    if (e.target.classList.contains('flip-front')) {
      elementToFlip.back();
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Flipper);

/***/ }),

/***/ "./src/components/modal/_modal.js":
/*!****************************************!*\
  !*** ./src/components/modal/_modal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CloseModal() {
  var modal = document.querySelectorAll('.modal');
  var cancelBtn = document.querySelectorAll('.modal__close');

  var _loop = function _loop(i) {
    cancelBtn[i].addEventListener('click', function (e) {
      e.preventDefault();
      modal[i].classList.remove('show');
    });
  };

  for (var i = 0; i < cancelBtn.length; i++) {
    _loop(i);
  }
}

CloseModal();

/***/ }),

/***/ "./src/components/pagination/_pagination.js":
/*!**************************************************!*\
  !*** ./src/components/pagination/_pagination.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Pagination = {
  code: '',
  formatNumber: function formatNumber(number, classes) {
    return "<li class=\"pagination__item ".concat(classes).concat(number === Pagination.page ? ' pagination__number--active' : '', "\" data-num=\"").concat(number, "\">").concat(number, "</li>");
  },
  formatEllipsis: function formatEllipsis() {
    return '<li class="pagination__item pagination__ellipsis">&hellip;</li>';
  },
  formatPrevious: function formatPrevious() {
    return '' + '<li class="pagination__item pagination__prev">' + '<svg aria-hidden="true" focusable="false" data-icon="chevron-left"  viewBox="0 0 320 512">' + '<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>' + '</svg>' + '</li>';
  },
  formatNext: function formatNext() {
    return '<li class="pagination__item pagination__next">' + '<svg aria-hidden="true" focusable="false" data-icon="chevron-left"  viewBox="0 0 320 512">' + '<path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>' + '</svg>' + '</li>';
  },
  add: function add(start, end) {
    for (var i = start; i < end; i++) {
      if (i === 1) {
        Pagination.code += this.formatNumber(i, 'pagination__number pagination__first');
      } else if (i === Pagination.size) {
        Pagination.code += this.formatNumber(i, 'pagination__number pagination__last');
      } else {
        Pagination.code += this.formatNumber(i, 'pagination__number');
      }
    }
  },
  last: function last() {
    Pagination.code += this.formatEllipsis();
    Pagination.code += this.formatNumber(Pagination.size, 'pagination__number pagination__last');
  },
  first: function first() {
    Pagination.code += this.formatNumber(1, 'pagination__number pagination__first');
    Pagination.code += this.formatEllipsis();
  },
  onClick: function onClick(e) {
    if (Pagination.page === +e.target.dataset.num) {
      return;
    }

    Pagination.page = +e.target.dataset.num;
    Pagination.Start();
  },
  onPrev: function onPrev() {
    if (Pagination.page === 1) {
      return;
    }

    Pagination.page--;
    Pagination.Start();
  },
  onNext: function onNext() {
    if (Pagination.page === Pagination.size) {
      return;
    }

    Pagination.page++;
    Pagination.Start();
  },
  // binding pages
  Bind: function Bind() {
    var a = Pagination.e.getElementsByClassName('pagination__number');

    for (var i = 0; i < a.length; i++) {
      a[i].addEventListener('click', Pagination.onClick, false);
    }
  },
  // find pagination type
  Start: function Start() {
    if (Pagination.size < Pagination.step * 2 + 6) {
      Pagination.add(1, Pagination.size + 1);
    } else if (Pagination.page <= Pagination.step * 2 + 2) {
      Pagination.add(1, Pagination.step * 2 + 4);
      Pagination.last();
    } else if (Pagination.page >= Pagination.size - Pagination.step * 2 - 1) {
      Pagination.first();
      Pagination.add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
    } else {
      Pagination.first();
      Pagination.add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
      Pagination.last();
    }

    var html = "<ul class=\"pagination__list\">".concat(this.formatPrevious()).concat(Pagination.code).concat(this.formatNext(), "</ul>");
    Pagination.e.innerHTML = html;
    Pagination.code = '';
    Pagination.Bind();
    Pagination.Buttons();
  },
  Buttons: function Buttons(e) {
    Pagination.e.getElementsByClassName('pagination__prev')[0].addEventListener('click', Pagination.onPrev, false);
    Pagination.e.getElementsByClassName('pagination__next')[0].addEventListener('click', Pagination.onNext, false);
  },
  // init
  Init: function Init(e, data) {
    data = data || {};
    Pagination.size = data.size;
    Pagination.page = data.page || 1;
    Pagination.step = data.step || 2;
    Pagination.e = e;
    Pagination.Start();
  }
};

var init = function init() {
  Pagination.Init(document.getElementById('pagination'), {
    size: 10,
    // pages  size
    page: 1,
    // selected page
    step: 1 // pages before and after current

  });
};

document.addEventListener('DOMContentLoaded', init, false);

function PaginationClick() {
  var paginationLink = document.querySelectorAll('.pagination-circle__link');

  for (var i = 0; i < paginationLink.length; i++) {
    paginationLink[i].addEventListener('click', function () {
      for (var j = 0; j < paginationLink.length; j++) {
        paginationLink[j].classList.remove('active');
        this.classList.add('active');
      }
    });
  }
}

PaginationClick();

/***/ }),

/***/ "./src/components/popup/_popup.js":
/*!****************************************!*\
  !*** ./src/components/popup/_popup.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  /*for regular popup BEGIN---*/
  var popupBtn1 = document.getElementById('popupBtn1');
  var popup1 = document.getElementById('popup1');
  var closeBtn1 = document.getElementById('close-btn1');
  var closeX1 = document.getElementById('closeX1');
  var screen1 = document.getElementById('screen');

  popupBtn1.onclick = function () {
    openPopup1();
  };

  closeBtn1.onclick = function () {
    closePopup1();
  };

  screen1.onclick = function () {
    closePopup1();
  };

  closeX1.onclick = function () {
    closePopup1();
  };

  function openPopup1() {
    popup1.classList.remove('hide');
    screen1.classList.add('is-visible');
  }

  function closePopup1() {
    popup1.classList.add('hide');
    screen1.classList.remove('is-visible');
  }
  /*---for regular popup END*/

  /*for regular-fill mobile popup BEGIN---*/


  var popupBtn2 = document.getElementById('popupBtn2');
  var popup2 = document.getElementById('popup2');
  var closeBtn2 = document.getElementById('close-btn2');
  var closeX2 = document.getElementById('closeX2');
  var screen2 = document.getElementById('screen2');

  popupBtn2.onclick = function () {
    openPopup2();
  };

  closeBtn2.onclick = function () {
    closePopup2();
  };

  screen2.onclick = function () {
    closePopup2();
  };

  closeX2.onclick = function () {
    closePopup2();
  };

  function openPopup2() {
    popup2.classList.remove('hide');
    screen2.classList.add('is-visible');
  }

  function closePopup2() {
    popup2.classList.add('hide');
    screen2.classList.remove('is-visible');
  }
  /*---for regular-fill mobile popup END*/

  /*for large popup BEGIN---*/


  var popupBtn3 = document.getElementById('popupBtn3');
  var popup3 = document.getElementById('popup3');
  var closeX3 = document.getElementById('closeX3');
  var screen3 = document.getElementById('screen3');

  popupBtn3.onclick = function () {
    openPopup3();
  };

  screen3.onclick = function () {
    closePopup3();
  };

  closeX3.onclick = function () {
    closePopup3();
  };

  function openPopup3() {
    popup3.classList.remove('hide');
    screen3.classList.add('is-visible');
  }

  function closePopup3() {
    popup3.classList.add('hide');
    screen3.classList.remove('is-visible');
  }
  /*---for large popup END*/

  /*for fullscreen overlay popup BEGIN---*/


  var popupBtn4 = document.getElementById('popupBtn4');
  var popup4 = document.getElementById('popup4');
  var closeBtn4 = document.getElementById('close-btn4');
  var closeX4 = document.getElementById('closeX4');
  var screen4 = document.getElementById('screen4');
  var body = document.querySelector('body');
  var bodyHeight = 440;
  var const900 = 900;

  popupBtn4.onclick = function () {
    body.style.height = '900px';
    console.log('takeover');
    openPopup4();
  };

  closeBtn4.onclick = function () {
    body.style.height = '240px';
    closePopup4();
  };

  screen4.onclick = function () {
    body.style.height = '240px';
    closePopup4();
  };

  closeX4.onclick = function () {
    body.style.height = '240px';
    closePopup4();
  };

  function openPopup4() {
    popup4.classList.remove('hide');
    screen4.classList.add('is-visible');
  }

  function closePopup4() {
    popup4.classList.add('hide');
    screen4.classList.remove('is-visible');
  }
  /*---for fullscreen overlay popup END*/

});

/***/ }),

/***/ "./src/components/slider/_sliders.js":
/*!*******************************************!*\
  !*** ./src/components/slider/_sliders.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // from InsideTracker

function getNumber(element, parameter) {
  var elementParam = element.getAttribute(parameter);

  if (isInt(elementParam)) {
    return parseInt(elementParam, 10);
  } else {
    return parseFloat(elementParam).toFixed(1);
  }
}

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }

  var x = parseFloat(value);
  return (x | 0) === x;
}

function pauseEvent(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  }

  if (event.preventDefault) {
    event.preventDefault();
  }

  event.cancelBubble = true;
  event.returnValue = false;
  return false;
}

var now = function now() {
  return new Date().getTime();
};

function debounce(funzione, wait, immediate) {
  var timestamp;
  var timeout;
  var context;
  var result;
  var args;

  if (null === wait) {
    wait = 100;
  }

  function later() {
    var last = now() - timestamp;

    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;

      if (!immediate) {
        result = funzione.apply(context, args);

        if (!timeout) {
          context = args = null;
        }
      }
    }
  }

  ;
  return function debounced() {
    context = this;
    args = arguments;
    timestamp = now();
    var callNow = immediate && !timeout;

    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = funzione.apply(context, args);
      context = args = null;
    }

    return result;
  };
}

function setInitialPosition(min, max, initValue) {
  var initial = isNaN(initValue) ? 0 : initValue;
  var range = max - min;
  var percent = Math.round((initial - min) * 100 / range);
  return percent;
}

function handlePosition(offset, width) {
  var min = 0;
  var max = 100;
  var ratio = Math.min(Math.max(offset / width, min), 1);
  var range = max - min;
  var percent = Math.round(ratio * range + min);
  return percent;
}

function handlePositionSteps(offset, width, min, max, stepWidth) {
  var ratio = Math.min(Math.max(offset / width, 0), 1);
  var range = max - min;
  var currentStep = Math.round(ratio * range / stepWidth);
  var percent = currentStep * stepWidth / range * 100;
  return percent;
}

function eventHandler(obj, fn, event, flag, update) {
  if (flag === undefined) {
    flag = true;
  }

  var pageX = event.pageX;

  if (!pageX) {
    pageX = event.touches[0].pageX;
  }

  fn(event);
  obj.isMoving = flag;
  obj.animationFrame = window.requestAnimationFrame(update);
  obj.offset = pageX - obj.dimensions.left;
}

function handleValue(min, max, percentage) {
  var maxRange = max - min;
  var domVal = percentage * maxRange / 100 + min;

  if (isInt(domVal)) {
    return Math.round(domVal);
  } else {
    return parseFloat(domVal.toFixed(1));
  }
}

function setValueInDom(element, value, timing) {
  //added polyfill for the 11 ie
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  }

  (function () {
    if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
        var node = this;

        while (node) {
          if (node.matches(css)) {
            return node;
          } else {
            node = node.parentElement;
          }
        }

        return null;
      };
    }
  })();

  if (timing === 1) {
    element.textContent = getTime(value);
  } else {
    element.textContent = value;
  }

  if (value === 0) {
    element.closest('.ranger').classList.add('ranger--clear');
  } else {
    element.closest('.ranger').classList.remove('ranger--clear');
  }
}

function getTime(mins) {
  //ie prerogative
  Math.trunc = Math.trunc || function (x) {
    if (isNaN(x)) {
      return NaN;
    }

    if (x > 0) {
      return Math.floor(x);
    }

    return Math.ceil(x);
  };

  var hours = Math.trunc(mins / 60);
  var minutes = mins % 60;
  return (hours === 0 ? '00' : hours) + ':' + (minutes === 0 ? '00' : minutes);
}

;

function setAttributeInDom(el, attr, value) {
  return el.setAttribute(attr, value);
}

function createSlider(ruler) {
  if (ruler.length <= 0 || ruler.length < ruler.length || ruler.length < ruler.length) {
    return;
  }

  var inputElement = ruler.querySelector('.ranger__input');
  var trackElement = ruler.querySelector('.ranger-track');
  var distanceElement = ruler.querySelector('.ranger-track__distance');
  var valueElement = ruler.querySelector('.ranger-indicator__value');
  var indicatorEL = ruler.querySelector('.ranger-indicator');
  var setDebouncedValue = debounce(setValueInDom, 10);
  var setDebouncedAttr = debounce(setAttributeInDom, 10);
  var ranger = {
    isMoving: false,
    min: getNumber(inputElement, 'data-min'),
    max: getNumber(inputElement, 'data-max'),
    value: getNumber(inputElement, 'value'),
    steps: getNumber(inputElement, 'data-step'),
    time: getNumber(inputElement, 'data-time'),
    offset: 0,
    currentValue: 0,
    dimensions: trackElement.getBoundingClientRect()
  };

  var init = function init() {
    var initialPosition = setInitialPosition(ranger.min, ranger.max, ranger.value) + '%';
    distanceElement.style.width = initialPosition;

    if (indicatorEL !== null) {
      setValueInDom(valueElement, ranger.value, ranger.time);
    }

    window.addEventListener('resize', function () {
      ranger.dimensions = trackElement.getBoundingClientRect();
    });
  };

  init();

  var onMouseDown = function onMouseDown(e) {
    eventHandler(ranger, pauseEvent, e, true, update);

    if (!isNaN(ranger.steps)) {
      ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
    } else {
      ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
    }

    ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
  };

  var onMouseMove = function onMouseMove(e) {
    if (ranger.isMoving) {
      eventHandler(ranger, pauseEvent, e, true, update);

      if (!isNaN(ranger.steps)) {
        ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
      } else {
        ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
      }

      ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
    }
  };

  var onMouseUp = function onMouseUp(e) {
    e.preventDefault();
    e.stopPropagation();

    if (ranger.isMoving) {
      window.cancelAnimationFrame(ranger.animationFrame);
      ranger.isMoving = false;
      update(null, false);
    }
  };

  var onTouchstart = function onTouchstart(e) {
    eventHandler(ranger, pauseEvent, e, true, update);

    if (!isNaN(ranger.steps)) {
      ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
    } else {
      ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
    }

    ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
  };

  var onTouchmove = function onTouchmove(e) {
    if (ranger.isMoving) {
      eventHandler(ranger, pauseEvent, e, true, update);

      if (!isNaN(ranger.steps)) {
        ranger.currentPosition = handlePositionSteps(ranger.offset, ranger.dimensions.width, ranger.min, ranger.max, ranger.steps);
      } else {
        ranger.currentPosition = handlePosition(ranger.offset, ranger.dimensions.width);
      }

      ranger.currentValue = handleValue(ranger.min, ranger.max, ranger.currentPosition);
    }
  };

  var onTouchend = function onTouchend(e) {
    e.preventDefault();
    e.stopPropagation();

    if (ranger.isMoving) {
      window.cancelAnimationFrame(ranger.animationFrame);
      ranger.isMoving = false;
      update(null, false);
    }
  };

  var update = function update(timeStamp) {
    var loop = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    if (loop) {
      ranger.animationFrame = window.requestAnimationFrame(update);
    }

    ruler.classList.toggle('is-moving', ranger.isMoving);
    distanceElement.style.width = ranger.currentPosition + '%';
    setDebouncedAttr(inputElement, 'value', ranger.currentValue);

    if (indicatorEL !== null) {
      setDebouncedValue(valueElement, ranger.currentValue, ranger.time);
    }
  };

  ruler.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', debounce(onMouseMove, 10));
  window.addEventListener('mouseup', onMouseUp);
  ruler.addEventListener('touchstart', onTouchstart);
  ruler.addEventListener('touchmove', onTouchmove);
  window.addEventListener('touchend', onTouchend);
}

function rulerCreate(rulers) {
  this.create = function (rulers) {
    var sliderList = Array.prototype.slice.call(rulers);
    sliderList.forEach(function (ruler) {
      createSlider(ruler);
    });
  };
}

document.addEventListener('DOMContentLoaded', function () {
  var rulers = document.getElementsByClassName('ranger');
  var ruler = new rulerCreate();
  ruler.create(rulers);
});

/***/ }),

/***/ "./src/components/style_guide_only/_sidebar.js":
/*!*****************************************************!*\
  !*** ./src/components/style_guide_only/_sidebar.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  var links = document.querySelectorAll('.fixpanel .link-primary');
  var items = document.querySelectorAll('.items .item');
  links.forEach(function (link) {
    var linkAttribute = link.getAttribute('data-link');
    link.classList.remove('link-primary--active');
    link.addEventListener('click', function () {
      links.forEach(function (el) {
        el.classList.remove('link-primary--active');
      });
      items.forEach(function (item) {
        var itemAttribute = item.getAttribute('data-link');
        item.classList.add('hide');

        if (linkAttribute === itemAttribute) {
          link.classList.add('link-primary--active');
          item.classList.remove('hide');
        }
      });
    });
  });
});

/***/ }),

/***/ "./src/components/switcher/_switcher.js":
/*!**********************************************!*\
  !*** ./src/components/switcher/_switcher.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Toggler() {
  var toggleItem = document.querySelectorAll('.toggler__item');

  for (var i = 0; i < toggleItem.length; i++) {
    var _loop = function _loop(j) {
      toggleItem[i].addEventListener('click', function () {
        toggleItem[j].classList.remove('active');
        this.classList.add('active');
      });
    };

    for (var j = 0; j < toggleItem.length; j++) {
      _loop(j);
    }
  }
}

Toggler();
var checkbox = document.querySelector('.tumbler__input');
var label = document.querySelector('.tumbler-flex');
checkbox.addEventListener('change', function (event) {
  if (event.target.checked === true) {
    document.querySelector('.tumbler-label').textContent = "On";
  } else {
    document.querySelector('.tumbler-label').textContent = "Off";
  }
});
/*
button.addEventListener('click', function() {
    checkbox.checked = !checkbox.checked;
    triggerEvent(checkbox, 'change');
});
*/

function triggerEvent(element, eventName) {
  var event = document.createEvent("HTMLEvents");
  event.initEvent(eventName, false, true);
  element.dispatchEvent(event);
}

/***/ }),

/***/ "./src/components/tab/_tab.js":
/*!************************************!*\
  !*** ./src/components/tab/_tab.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function Tab() {
  var tab = document.querySelectorAll('.tab-menu__item');
  var content = document.querySelectorAll('.tab-content__item');

  var _loop = function _loop(i) {
    tab[i].addEventListener('click', function () {
      for (var j = 0; j < tab.length; j++) {
        tab[j].classList.remove('active');
        this.classList.add('active');
        content[j].classList.remove('active');
        content[i].classList.add('active');
      }
    });
  };

  for (var i = 0; i < tab.length; i++) {
    _loop(i);
  }
}

Tab();

/***/ }),

/***/ "./src/components/table/_table.js":
/*!****************************************!*\
  !*** ./src/components/table/_table.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('load', function () {
  var checkinSlider = new Swiper('.table-swiper', {
    navigation: {
      nextEl: '.table-arrow-next',
      prevEl: '.table-arrow-prev'
    },
    loop: 0,
    noSwiping: 1,
    slidesPerView: 4,
    simulateTouch: 0,
    observer: 1,
    grabCursor: 0,
    observeParents: true,
    breakpoints: {
      630: {
        slidesPerView: 1,
        loop: 1
      },
      820: {
        loop: 0,
        slidesPerView: 2
      },
      1170: {
        loop: 0,
        slidesPerView: 3
      }
    }
  });
});

/***/ }),

/***/ "./src/components/text_field/_text_field.js":
/*!**************************************************!*\
  !*** ./src/components/text_field/_text_field.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  /*select*/
  $(function () {
    var $element = $('.dropdown__select');
    var $selectList = $('.dropdown__list');
    $('.dropdown-wrapper').find('.dropdown__selected').on('click', function (e) {
      e.preventDefault();
      $(this).parent().find('.dropdown__list').toggleClass('visible');
      $(this).toggleClass('dropdown__arrow--down');
    });
    $('.dropdown__list-item').on('click', function (e) {
      e.preventDefault();
      var $option = $(this);
      var newValue = $option.html();
      var lastValue = $element.html();
      $element.html(newValue);

      if (newValue != lastValue) {
        $element.trigger('change');
      }

      $option.parent().removeClass('visible');
      $element.removeClass('dropdown__arrow--down');
      var achievementGroupId = $option.data('id');
      var $achievementGroups = $('.achievements_groups_container > article');

      if (!achievementGroupId) {
        $achievementGroups.removeClass('hide');
        return;
      }

      $achievementGroups.addClass('hide');
      $('.achievement_group_' + achievementGroupId).removeClass('hide');
    });
    $(document).on('mouseup', function (e) {
      if (!$selectList.is(e.target) && !$element.is(e.target) && $selectList.has(e.target).length === 0) {
        $selectList.removeClass('visible');
        $element.removeClass('dropdown__arrow--down');
      }
    });
  });
  /*search*/

  var substringMatcher = function substringMatcher(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function (i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };

  var items = ['Item', 'Item 1', 'Item 2', 'Item 3'];
  $('.typeahead').typeahead({
    hint: true,
    minLength: 1
  }, {
    name: 'items',
    source: substringMatcher(items)
  });
})(jQuery);

/***/ }),

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/card/_card */ "./src/components/card/_card.js");
/* harmony import */ var _components_switcher_switcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/switcher/_switcher */ "./src/components/switcher/_switcher.js");
/* harmony import */ var _components_switcher_switcher__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_switcher_switcher__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tab/_tab */ "./src/components/tab/_tab.js");
/* harmony import */ var _components_tab_tab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_tab_tab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/table/_table */ "./src/components/table/_table.js");
/* harmony import */ var _components_table_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_table_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_text_field_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/text_field/_text_field */ "./src/components/text_field/_text_field.js");
/* harmony import */ var _components_text_field_text_field__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_text_field_text_field__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_style_guide_only_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/style_guide_only/_sidebar */ "./src/components/style_guide_only/_sidebar.js");
/* harmony import */ var _components_style_guide_only_sidebar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_style_guide_only_sidebar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/popup/_popup */ "./src/components/popup/_popup.js");
/* harmony import */ var _components_popup_popup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_popup_popup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/calendar/_calendar */ "./src/components/calendar/_calendar.js");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/modal/_modal */ "./src/components/modal/_modal.js");
/* harmony import */ var _components_modal_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/pagination/_pagination */ "./src/components/pagination/_pagination.js");
/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_slider_sliders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/slider/_sliders */ "./src/components/slider/_sliders.js");
/* harmony import */ var _components_slider_sliders__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_slider_sliders__WEBPACK_IMPORTED_MODULE_10__);
 // import '../components/tooltip/_tooltip'












/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/scripts/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/scripts/app.js */"./src/scripts/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map