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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/hotsvg/hotsvg.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/hotsvg/hotsvg.js":
/*!******************************!*\
  !*** ./src/hotsvg/hotsvg.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader */ "./src/hotsvg/modules/loader.js");

window.addEventListener('load', function () {
  var dropArea = document.querySelector('#input-label');
  var input = document.querySelector('#svgloader');
  var wrapper = document.querySelector('#root');
  Object(_modules_loader__WEBPACK_IMPORTED_MODULE_0__["default"])(input, dropArea, wrapper);
});

/***/ }),

/***/ "./src/hotsvg/modules/loader.js":
/*!**************************************!*\
  !*** ./src/hotsvg/modules/loader.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _svgDropper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgDropper */ "./src/hotsvg/modules/svgDropper.js");
/* harmony import */ var _svgLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgLoader */ "./src/hotsvg/modules/svgLoader.js");



var initLoader = function initLoader(input, dropper, wrapper) {
  switch (input.id) {
    case 'svgloader':
      initSvgLoader(input, dropper, wrapper);
      return;

    default:
      alert("Input id's value must be 'svgloader'");
  }
};

function initSvgLoader(input, dropper, wrapper) {
  Object(_svgLoader__WEBPACK_IMPORTED_MODULE_1__["default"])(input, wrapper);
  Object(_svgDropper__WEBPACK_IMPORTED_MODULE_0__["default"])(dropper, wrapper);
  input.addEventListener('change', addPulseListeners);
  dropper.addEventListener('drop', addPulseListeners);
  document.querySelector('#clear').addEventListener('click', function () {
    wrapper.innerHTML = '';

    while (document.body.firstElementChild.tagName === 'svg') {
      document.body.firstElementChild.remove();
    }

    dropper.removeEventListener('mouseout', removePulse);
    dropper.classList.add('pulse');
  });

  function addPulseListeners() {
    dropper.addEventListener('mouseover', addPulse);
    dropper.addEventListener('mouseout', removePulse);
  }
}

function addPulse(_ref) {
  var target = _ref.target;
  target.classList.add('pulse');
}

function removePulse(_ref2) {
  var target = _ref2.target;
  target.classList.remove('pulse');
}

/* harmony default export */ __webpack_exports__["default"] = (initLoader);

/***/ }),

/***/ "./src/hotsvg/modules/spriteProcessor.js":
/*!***********************************************!*\
  !*** ./src/hotsvg/modules/spriteProcessor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSprite; });
function getSprite(fileArr) {
  return Promise.all(fileArr.map(function (file) {
    return new Promise(function (res) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = function (_ref) {
        var result = _ref.target.result;
        var parser = new DOMParser();
        var spriteElement = parser.parseFromString(result, "text/xml");
        spriteElement.documentElement.style.display = 'none';
        document.body.insertAdjacentElement('afterbegin', spriteElement.documentElement);
        res({
          spriteArr: result,
          title: file.name
        });
      };
    });
  }));
}

/***/ }),

/***/ "./src/hotsvg/modules/svgDropper.js":
/*!******************************************!*\
  !*** ./src/hotsvg/modules/svgDropper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spriteProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteProcessor */ "./src/hotsvg/modules/spriteProcessor.js");
/* harmony import */ var _svgLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgLayout */ "./src/hotsvg/modules/svgLayout.js");



function addSvgDropper(dropper, wrapper) {
  if (!isAdvancedUpload) return;
  document.body.addEventListener('drop', function (e) {
    e.preventDefault();
    e.stopPropagation();
    getSpriteFromDropArea(e).then(function (sprites) {
      return Object(_svgLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(sprites, wrapper);
    })["catch"](function (e) {
      return console.log(e);
    });
  });
  document.body.addEventListener('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
  });
}

function isAdvancedUpload() {
  var div = document.createElement('div');
  return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
}

function getSpriteFromDropArea(_ref) {
  var dataTransfer = _ref.dataTransfer;
  var length = dataTransfer.files.length;
  var spriteArr = [];

  for (var i = 0; i < length; i++) {
    spriteArr.push(dataTransfer.files[i]);
  }

  return Object(_spriteProcessor__WEBPACK_IMPORTED_MODULE_0__["default"])(spriteArr);
}

/* harmony default export */ __webpack_exports__["default"] = (addSvgDropper);

/***/ }),

/***/ "./src/hotsvg/modules/svgLayout.js":
/*!*****************************************!*\
  !*** ./src/hotsvg/modules/svgLayout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderSvgSprites; });
function renderSvgSprites(spriteArr, wrapper) {
  var parsedSpriteArr = spriteArr.map(function (sprite) {
    return getSVGSymbols(sprite);
  });
  parsedSpriteArr.forEach(function (sprite) {
    return renderSprite(sprite, wrapper);
  });
}

function getSVGSymbols(_ref) {
  var spriteArr = _ref.spriteArr,
      title = _ref.title;
  var symbols = spriteArr.match(/<symbol[\0-\uFFFF]*?<\/symbol>/gmi);

  if (symbols === null) {
    return {
      symbol: spriteArr.match(/<svg[\0-\uFFFF]*?<\/svg>/gmi)[0],
      title: title
    };
  }

  var symbolArr = [];
  symbols.forEach(function (svg) {
    var symbol = {};
    symbol.id = svg.match(/<symbol\s*id=["'](.*?)["']/i)[1];
    symbol.title = svg.match(/<title>(.*?)<\/title>/i) ? svg.match(/<title>(.*?)<\/title>/i)[1] : null;
    symbol.viewBox = svg.match(/viewBox=["'](.*?)["']/i)[1];
    symbolArr.push(symbol);
  });
  return {
    symbolArr: symbolArr,
    title: title
  };
}

function renderSprite(svgSprite, wrapper) {
  var spriteWrapper = document.createElement('li');
  spriteWrapper.className = 'layout__item';
  var title = document.createElement('h5');
  title.className = 'layout__item-title';
  title.innerHTML = svgSprite.title;
  spriteWrapper.appendChild(title);

  if (svgSprite.symbol) {
    var div = document.createElement('div');
    div.className = 'icon-wrapper';

    var _title = svgSprite.symbol.match(/<title>(.*?)<\/title>/i);

    var id = svgSprite.symbol.match(/<symbol\s*id=["'](.*?)["']/i);
    div.innerHTML = "\n            ".concat(svgSprite.symbol, "\n            <div class=\"icon-info\">\n                ").concat(id ? "<p class=\"icon-name\">".concat(id[1], "</p>") : "<p class=\"icon-name\" style=\"color: red;\">no id</p>", "\n                ").concat(_title ? "<p class=\"icon-title\">".concat(_title[1], "</p>") : "<p class=\"icon-title\" style=\"color: red;\">no title</p>", "\n            </div>");
    spriteWrapper.appendChild(div);
    wrapper.appendChild(spriteWrapper);
    return;
  }

  svgSprite.symbolArr.forEach(function (svg) {
    spriteWrapper.appendChild(createSvgElement(svg));
  });
  wrapper.appendChild(spriteWrapper);
  document.querySelector('#input-label').classList.remove('pulse');
}

function createSvgElement(svg) {
  var div = document.createElement('div');
  div.className = 'icon-wrapper';
  div.innerHTML = "\n            <svg class=\"icon-sprited\" viewbox=\"".concat(svg.viewBox, "\">\n                <use xlink:href=\"#").concat(svg.id, "\"/>\n            </svg>\n            <div class=\"icon-info\">\n                <p class=\"icon-name\">").concat(svg.id, "</p>\n                ").concat(svg.title ? "<p class=\"icon-title\">".concat(svg.title, "</p>") : "<p class=\"icon-title\" style=\"color: red;\">no title</p>", "\n            </div>");
  return div;
}

/***/ }),

/***/ "./src/hotsvg/modules/svgLoader.js":
/*!*****************************************!*\
  !*** ./src/hotsvg/modules/svgLoader.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSvgLoader; });
/* harmony import */ var _spriteProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteProcessor */ "./src/hotsvg/modules/spriteProcessor.js");
/* harmony import */ var _svgLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgLayout */ "./src/hotsvg/modules/svgLayout.js");


function addSvgLoader(input, wrapper) {
  input.addEventListener('change', function () {
    getSpriteFromInput(input.files).then(function (sprites) {
      return Object(_svgLayout__WEBPACK_IMPORTED_MODULE_1__["default"])(sprites, wrapper);
    })["catch"](function (e) {
      return console.log(e);
    });
  });
}

function getSpriteFromInput(fileList) {
  var length = fileList.length;
  var spriteArr = [];

  for (var i = 0; i < length; i++) {
    spriteArr.push(fileList[i]);
  }

  return Object(_spriteProcessor__WEBPACK_IMPORTED_MODULE_0__["default"])(spriteArr);
}

/***/ })

/******/ });
//# sourceMappingURL=hotsvg.js.map