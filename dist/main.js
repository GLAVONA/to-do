/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./wave-haikei.svg */ "./src/wave-haikei.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! notebook-edit.png */ "./src/notebook-edit.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.main-container{\n    display: grid;\n    grid-template-columns: 0.3fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%,50rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period{\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display:flex\n}\n\n\n.projects-div{\n    display: flex;\n    flex-direction: column;\n    flex:1;\n    align-items: center;\n}\n\n\n.projects-collapse{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list{\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper{\n    display: flex;\n    gap:1rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.project{\n    cursor: pointer;\n    margin-left: 0.1rem;\n}\n\n.project-wrapper>button{\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color:var(--tasks-color);\n    border: none;\n}\n\n.add-project{\n    display:flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr{\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar{\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper{\n    flex:1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper{\n    flex: 0.5;\n    padding-top: 1rem;\n}\n\n.today-header{\n    text-align: center;\n}\n\n.completed-header{\n    text-align: center;\n}\n\n.tasks>.today{\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed{\n    flex: 1;\n}\n\n.notes{\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header{\n    font-size: 20px;\n    font-weight: bold\n}\n\n.notes>textarea{\n    flex:1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    border: none;\n    outline:none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,+BAA+B;IAC/B,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;AAC3B;;;AAGA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mCAAmC;IACnC,sBAAsB;IACtB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,UAAU;AACd;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,UAAU;IACV,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,MAAM;IACN,mBAAmB;AACvB;;;AAGA;IACI,sCAAsC;IACtC,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;IACf,oBAAoB;;AAExB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,eAAe;IACf,mCAAmC;IACnC,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;;;AAGA;IACI,6CAA6C;IAC7C,aAAa;IACb,yDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;IAC5B,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,MAAM;IACN,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,aAAa;;AAEjB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,4DAA2C;IAC3C,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,MAAM;IACN,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,4DAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB","sourcesContent":[":root{\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.main-container{\n    display: grid;\n    grid-template-columns: 0.3fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%,50rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period{\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display:flex\n}\n\n\n.projects-div{\n    display: flex;\n    flex-direction: column;\n    flex:1;\n    align-items: center;\n}\n\n\n.projects-collapse{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list{\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper{\n    display: flex;\n    gap:1rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.project{\n    cursor: pointer;\n    margin-left: 0.1rem;\n}\n\n.project-wrapper>button{\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color:var(--tasks-color);\n    border: none;\n}\n\n.add-project{\n    display:flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr{\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar{\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(./wave-haikei.svg);\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper{\n    flex:1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper{\n    flex: 0.5;\n    padding-top: 1rem;\n}\n\n.today-header{\n    text-align: center;\n}\n\n.completed-header{\n    text-align: center;\n}\n\n.tasks>.today{\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed{\n    flex: 1;\n}\n\n.notes{\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(notebook-edit.png) repeat-y;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header{\n    font-size: 20px;\n    font-weight: bold\n}\n\n.notes>textarea{\n    flex:1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(notebook-edit.png) repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    border: none;\n    outline:none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/notes.js":
/*!**********************!*\
  !*** ./src/notes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note),
/* harmony export */   "getNoteValue": () => (/* binding */ getNoteValue)
/* harmony export */ });
function Note(value) {
    return{value};
};

function getNoteValue(){

}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "createNewProject": () => (/* binding */ createNewProject),
/* harmony export */   "default": () => (/* binding */ Project),
/* harmony export */   "moveTaskToAnotherProject": () => (/* binding */ moveTaskToAnotherProject),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "removeTaskFromProject": () => (/* binding */ removeTaskFromProject)
/* harmony export */ });
/* harmony import */ var _notes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes.js */ "./src/notes.js");


const projectArray = [{name: "Project 1", taskArray: [], note: (0,_notes_js__WEBPACK_IMPORTED_MODULE_0__["default"])("")}];

function Project(name){
    const taskArray = [];
    const note = (0,_notes_js__WEBPACK_IMPORTED_MODULE_0__["default"])("");
    return {name, taskArray, note};
}

const addTaskToProject = (task, project)=>{
    return project.taskArray.push(task);
}

const removeTaskFromProject = (task, project)=>{
    delete project.taskArray[project.taskArray.indexOf(task)];
}

const moveTaskToAnotherProject = (task, oldProject, newProject)=>{
    addTaskToProject(task,newProject);
    removeTaskFromProject(task,oldProject);
}


function createNewProject(){
    const lastProjectNameNumber = projectArray[projectArray.length-1].name.match(/[Pp]roject (\d*)/)[1];
    const newProject = Project(`Project ${lastProjectNameNumber}`);
    console.log(lastProjectNameNumber)

    if(newProject.name === projectArray[projectArray.length-1].name){
        console.log("triggered!");
        newProject.name = `Project ${parseInt(lastProjectNameNumber)+1}`;
    }
    projectArray.push(newProject);
    return newProject;
}
    //<div class="project" onclick="this.contentEditable='true';" onblur="this.contentEditable='false';">Project 1</div>


/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkTask": () => (/* binding */ checkTask),
/* harmony export */   "default": () => (/* binding */ Task),
/* harmony export */   "uncheckTask": () => (/* binding */ uncheckTask)
/* harmony export */ });
function Task(title, description, dueDate, priority, done){
    return {title,description,dueDate, priority, done}
}

const checkTask = (task) =>{
    return task.done = true;
}

const uncheckTask = (task) =>{
    return task.done = false;
}



/***/ }),

/***/ "./src/notebook-edit.png":
/*!*******************************!*\
  !*** ./src/notebook-edit.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0734dfe13e388612707f.png";

/***/ }),

/***/ "./src/wave-haikei.svg":
/*!*****************************!*\
  !*** ./src/wave-haikei.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dcc6e10e41001fad54bc.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");





const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click",toggleProjects)


const projectList = document.querySelector(".projects-list");
const projectWrapper = document.querySelector(".project-wrapper");
const addProjectButton = document.querySelector(".add-project")

function toggleProjects(){
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex"? "none" : "flex";
}

renderProjects();

function renderProjects(){
    function constructProjectDiv(project){
        const projectWrapper = document.createElement("div");
        projectWrapper.classList.add("project-wrapper");

        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.setAttribute("onclick","this.contentEditable='true'");
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.addEventListener("blur",()=>{
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[event.target.parentElement.id].name = projectDiv.textContent;
        })
        projectDiv.textContent = project.name;
        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type","button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click",()=>{
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.splice(deleteButton.parentElement.id,1);
            deleteButton.parentElement.remove();
        })

        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    let id = 0;
    _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((proj)=>{
        const newProj = constructProjectDiv(proj);
        projectList.appendChild(newProj);
        newProj.id=id;
        id++;
    })
    console.log(_project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray);
}

function clearProjectList(){
    projectList.innerHTML="";
}


addProjectButton.addEventListener("click",()=>{
    clearProjectList();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
    renderProjects()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsaUhBQW9DO0FBQ2hGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsZ0RBQWdELCtCQUErQixzQ0FBc0MsOEJBQThCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLEdBQUcsb0JBQW9CLG9CQUFvQix1Q0FBdUMsMENBQTBDLDZCQUE2QixvQkFBb0IscUJBQXFCLEdBQUcsWUFBWSx1QkFBdUIsb0JBQW9CLDRDQUE0Qyx5Q0FBeUMsaUJBQWlCLEdBQUcsZUFBZSx1QkFBdUIsb0JBQW9CLDZDQUE2Qyx5Q0FBeUMsaUJBQWlCLG9CQUFvQiw2QkFBNkIsR0FBRyxtQkFBbUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEdBQUcsMEJBQTBCLDZDQUE2Qyw4QkFBOEIsZ0NBQWdDLHNCQUFzQixrQ0FBa0MseUJBQXlCLHFCQUFxQixrQkFBa0Isc0JBQXNCLDBCQUEwQiw4QkFBOEIscUJBQXFCLG9CQUFvQixvQkFBb0IsNkJBQTZCLGFBQWEsMEJBQTBCLEdBQUcseUJBQXlCLDZDQUE2Qyw4QkFBOEIsZ0NBQWdDLHNCQUFzQixrQ0FBa0MseUJBQXlCLHFCQUFxQixrQkFBa0Isc0JBQXNCLDJCQUEyQixLQUFLLG1CQUFtQixtQkFBbUIsd0JBQXdCLHlCQUF5Qiw0QkFBNEIseUJBQXlCLG9CQUFvQiw2QkFBNkIsZUFBZSxHQUFHLHFCQUFxQixvQkFBb0IsZUFBZSwwQkFBMEIsOEJBQThCLEdBQUcsYUFBYSxzQkFBc0IsMEJBQTBCLEdBQUcsNEJBQTRCLHVCQUF1QixtQkFBbUIscUJBQXFCLHNCQUFzQiwwQ0FBMEMsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQiw4QkFBOEIsc0JBQXNCLGtCQUFrQixHQUFHLE9BQU8scUJBQXFCLG9CQUFvQix1QkFBdUIsR0FBRyx3QkFBd0Isb0RBQW9ELG9CQUFvQix3RUFBd0UsaUNBQWlDLG1DQUFtQyxtQ0FBbUMsdUJBQXVCLG9CQUFvQixtQ0FBbUMsaUJBQWlCLEdBQUcsV0FBVyx1QkFBdUIsb0JBQW9CLDJDQUEyQyxvQkFBb0Isb0JBQW9CLGdCQUFnQixHQUFHLG1CQUFtQixhQUFhLHdCQUF3QixHQUFHLHVCQUF1QixnQkFBZ0Isd0JBQXdCLEdBQUcsa0JBQWtCLHlCQUF5QixHQUFHLHNCQUFzQix5QkFBeUIsR0FBRyxrQkFBa0IsY0FBYyxvQkFBb0IsS0FBSyxzQkFBc0IsY0FBYyxHQUFHLFdBQVcsMkNBQTJDLG9CQUFvQiw2QkFBNkIsMkVBQTJFLGlCQUFpQix5QkFBeUIsR0FBRyx5QkFBeUIsc0JBQXNCLDBCQUEwQixvQkFBb0IsYUFBYSx3QkFBd0IsbUJBQW1CLGlCQUFpQiwyRUFBMkUsZ0NBQWdDLHdCQUF3QixtQkFBbUIsbUJBQW1CLEdBQUcsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxnQ0FBZ0MsK0JBQStCLHNDQUFzQyw4QkFBOEIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsR0FBRyxXQUFXLGdCQUFnQixpQkFBaUIsR0FBRyxvQkFBb0Isb0JBQW9CLHVDQUF1QywwQ0FBMEMsNkJBQTZCLG9CQUFvQixxQkFBcUIsR0FBRyxZQUFZLHVCQUF1QixvQkFBb0IsNENBQTRDLHlDQUF5QyxpQkFBaUIsR0FBRyxlQUFlLHVCQUF1QixvQkFBb0IsNkNBQTZDLHlDQUF5QyxpQkFBaUIsb0JBQW9CLDZCQUE2QixHQUFHLG1CQUFtQix3QkFBd0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsR0FBRywwQkFBMEIsNkNBQTZDLDhCQUE4QixnQ0FBZ0Msc0JBQXNCLGtDQUFrQyx5QkFBeUIscUJBQXFCLGtCQUFrQixzQkFBc0IsMEJBQTBCLDhCQUE4QixxQkFBcUIsb0JBQW9CLG9CQUFvQiw2QkFBNkIsYUFBYSwwQkFBMEIsR0FBRyx5QkFBeUIsNkNBQTZDLDhCQUE4QixnQ0FBZ0Msc0JBQXNCLGtDQUFrQyx5QkFBeUIscUJBQXFCLGtCQUFrQixzQkFBc0IsMkJBQTJCLEtBQUssbUJBQW1CLG1CQUFtQix3QkFBd0IseUJBQXlCLDRCQUE0Qix5QkFBeUIsb0JBQW9CLDZCQUE2QixlQUFlLEdBQUcscUJBQXFCLG9CQUFvQixlQUFlLDBCQUEwQiw4QkFBOEIsR0FBRyxhQUFhLHNCQUFzQiwwQkFBMEIsR0FBRyw0QkFBNEIsdUJBQXVCLG1CQUFtQixxQkFBcUIsc0JBQXNCLDBDQUEwQyxtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLDhCQUE4QixzQkFBc0Isa0JBQWtCLEdBQUcsT0FBTyxxQkFBcUIsb0JBQW9CLHVCQUF1QixHQUFHLHdCQUF3QixvREFBb0Qsb0JBQW9CLCtDQUErQyxpQ0FBaUMsbUNBQW1DLG1DQUFtQyx1QkFBdUIsb0JBQW9CLG1DQUFtQyxpQkFBaUIsR0FBRyxXQUFXLHVCQUF1QixvQkFBb0IsMkNBQTJDLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEdBQUcsbUJBQW1CLGFBQWEsd0JBQXdCLEdBQUcsdUJBQXVCLGdCQUFnQix3QkFBd0IsR0FBRyxrQkFBa0IseUJBQXlCLEdBQUcsc0JBQXNCLHlCQUF5QixHQUFHLGtCQUFrQixjQUFjLG9CQUFvQixLQUFLLHNCQUFzQixjQUFjLEdBQUcsV0FBVywyQ0FBMkMsb0JBQW9CLDZCQUE2QixrREFBa0QsaUJBQWlCLHlCQUF5QixHQUFHLHlCQUF5QixzQkFBc0IsMEJBQTBCLG9CQUFvQixhQUFhLHdCQUF3QixtQkFBbUIsaUJBQWlCLGtEQUFrRCxnQ0FBZ0Msd0JBQXdCLG1CQUFtQixtQkFBbUIsR0FBRyxtQkFBbUI7QUFDcHpTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmLFdBQVc7QUFDWDs7QUFFTzs7QUFFUDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEI7O0FBRXZCLHVCQUF1Qix3Q0FBd0MscURBQUksS0FBSzs7QUFFaEU7QUFDZjtBQUNBLGlCQUFpQixxREFBSTtBQUNyQixZQUFZO0FBQ1o7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7O0FBR087QUFDUDtBQUNBLDBDQUEwQyxzQkFBc0I7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxrQ0FBa0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsdUNBQXVDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDeEY7QUFDZixZQUFZO0FBQ1o7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBMkQ7QUFDdEM7QUFDMkY7QUFDcEU7O0FBRTVDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFZO0FBQ3hCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDREQUFtQjtBQUMvQjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGdCQUFnQixxREFBWTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDZEQUFnQjtBQUNwQjtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9ub3Rlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi93YXZlLWhhaWtlaS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJub3RlYm9vay1lZGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjMEIwOTA5O1xcbiAgICAtLXRvcGxlZnRzaWRlYmFyLWNvbG9yOiAjNDQ0NDRDO1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzhDOEM4QztcXG4gICAgLS10YXNrcy1jb2xvcjogI0Q2RDZENjtcXG4gICAgLS1ub3Rlcy1jb2xvcjogI0ZFRkFFNTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMC43ZnI7XFxuICAgIHdpZHRoOiBtaW4oMTAwJSw1MHJlbSk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMHB4IDVweCAtNXB4IGdyYXk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi50aW1lLXBlcmlvZHtcXG4gICAgZmxleDogMC4wNSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aW1lLXBlcmlvZD4qPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleFxcbn1cXG5cXG5cXG4ucHJvamVjdHMtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OjE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0cy1jb2xsYXBzZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMnJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJ2aDtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOjFyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPmJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbmJye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcblxcbi50b3AtbGVmdC1zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BsZWZ0c2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kYXktd3JhcHBlcntcXG4gICAgZmxleDoxO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwcGVye1xcbiAgICBmbGV4OiAwLjU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4udG9kYXktaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcz4udG9kYXl7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi50YXNrcz4uY29tcGxldGVke1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubm90ZXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVzLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSByZXBlYXQteTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZXM+Lm5vdGVzLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZFxcbn1cXG5cXG4ubm90ZXM+dGV4dGFyZWF7XFxuICAgIGZsZXg6MTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSByZXBlYXQteTtcXG4gICAgZm9udDogbm9ybWFsIDE3cHggdmVyZGFuYTtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGtDQUFrQztJQUNsQyxVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7QUFDSjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLE1BQU07SUFDTixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysb0JBQW9COztBQUV4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksNkNBQTZDO0lBQzdDLGFBQWE7SUFDYix5REFBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxNQUFNO0lBQ04saUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDREQUEyQztJQUMzQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmO0FBQ0o7O0FBRUE7SUFDSSxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsNERBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzBCMDkwOTtcXG4gICAgLS10b3BsZWZ0c2lkZWJhci1jb2xvcjogIzQ0NDQ0QztcXG4gICAgLS1oZWFkZXItY29sb3I6ICM4QzhDOEM7XFxuICAgIC0tdGFza3MtY29sb3I6ICNENkQ2RDY7XFxuICAgIC0tbm90ZXMtY29sb3I6ICNGRUZBRTU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDAuN2ZyO1xcbiAgICB3aWR0aDogbWluKDEwMCUsNTByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IC01cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGltZS1wZXJpb2R7XFxuICAgIGZsZXg6IDAuMDUgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZS1wZXJpb2Q+Kj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXhcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDoxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdHMtY29sbGFwc2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gICAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydmg7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDoxcmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj5idXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG5icntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG5cXG5cXG4udG9wLWxlZnQtc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9wbGVmdHNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi93YXZlLWhhaWtlaS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTg1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCA1cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZGF5LXdyYXBwZXJ7XFxuICAgIGZsZXg6MTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5jb21wbGV0ZWQtd3JhcHBlcntcXG4gICAgZmxleDogMC41O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLnRvZGF5LWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGVkLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFza3M+LnRvZGF5e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4udGFza3M+LmNvbXBsZXRlZHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm5vdGVze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3Rlcy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHVybChub3RlYm9vay1lZGl0LnBuZykgcmVwZWF0LXk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzPi5ub3Rlcy1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuXFxuLm5vdGVzPnRleHRhcmVhe1xcbiAgICBmbGV4OjE7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHVybChub3RlYm9vay1lZGl0LnBuZykgcmVwZWF0LXk7XFxuICAgIGZvbnQ6IG5vcm1hbCAxN3B4IHZlcmRhbmE7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGUodmFsdWUpIHtcbiAgICByZXR1cm57dmFsdWV9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGVWYWx1ZSgpe1xuXG59IiwiaW1wb3J0IE5vdGUgZnJvbSAnLi9ub3Rlcy5qcyc7XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0QXJyYXkgPSBbe25hbWU6IFwiUHJvamVjdCAxXCIsIHRhc2tBcnJheTogW10sIG5vdGU6IE5vdGUoXCJcIil9XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChuYW1lKXtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgICBjb25zdCBub3RlID0gTm90ZShcIlwiKTtcbiAgICByZXR1cm4ge25hbWUsIHRhc2tBcnJheSwgbm90ZX07XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHRhc2ssIHByb2plY3QpPT57XG4gICAgcmV0dXJuIHByb2plY3QudGFza0FycmF5LnB1c2godGFzayk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAodGFzaywgcHJvamVjdCk9PntcbiAgICBkZWxldGUgcHJvamVjdC50YXNrQXJyYXlbcHJvamVjdC50YXNrQXJyYXkuaW5kZXhPZih0YXNrKV07XG59XG5cbmV4cG9ydCBjb25zdCBtb3ZlVGFza1RvQW5vdGhlclByb2plY3QgPSAodGFzaywgb2xkUHJvamVjdCwgbmV3UHJvamVjdCk9PntcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KHRhc2ssbmV3UHJvamVjdCk7XG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHRhc2ssb2xkUHJvamVjdCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcbiAgICBjb25zdCBsYXN0UHJvamVjdE5hbWVOdW1iZXIgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aC0xXS5uYW1lLm1hdGNoKC9bUHBdcm9qZWN0IChcXGQqKS8pWzFdO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KGBQcm9qZWN0ICR7bGFzdFByb2plY3ROYW1lTnVtYmVyfWApO1xuICAgIGNvbnNvbGUubG9nKGxhc3RQcm9qZWN0TmFtZU51bWJlcilcblxuICAgIGlmKG5ld1Byb2plY3QubmFtZSA9PT0gcHJvamVjdEFycmF5W3Byb2plY3RBcnJheS5sZW5ndGgtMV0ubmFtZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJpZ2dlcmVkIVwiKTtcbiAgICAgICAgbmV3UHJvamVjdC5uYW1lID0gYFByb2plY3QgJHtwYXJzZUludChsYXN0UHJvamVjdE5hbWVOdW1iZXIpKzF9YDtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG4gICAgLy88ZGl2IGNsYXNzPVwicHJvamVjdFwiIG9uY2xpY2s9XCJ0aGlzLmNvbnRlbnRFZGl0YWJsZT0ndHJ1ZSc7XCIgb25ibHVyPVwidGhpcy5jb250ZW50RWRpdGFibGU9J2ZhbHNlJztcIj5Qcm9qZWN0IDE8L2Rpdj5cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSl7XG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSwgZG9uZX1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrVGFzayA9ICh0YXNrKSA9PntcbiAgICByZXR1cm4gdGFzay5kb25lID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuY2hlY2tUYXNrID0gKHRhc2spID0+e1xuICAgIHJldHVybiB0YXNrLmRvbmUgPSBmYWxzZTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkYXRlZm5zLCB7IGVuZE9mTW9udGgsIGVuZE9mVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0LCB7IGFkZFRhc2tUb1Byb2plY3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RBcnJheSwgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBUYXNrLCB7IGNoZWNrVGFzayB9IGZyb20gJy4vdGFzay5qcyc7XG5cbmNvbnN0IHByb2plY3RDb2xsYXBzaWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29sbGFwc2VcIik7XG5wcm9qZWN0Q29sbGFwc2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdG9nZ2xlUHJvamVjdHMpXG5cblxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG5jb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC13cmFwcGVyXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXByb2plY3RcIilcblxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdHMoKXtcbiAgICBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID0gcHJvamVjdExpc3Quc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIj8gXCJub25lXCIgOiBcImZsZXhcIjtcbiAgICBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiPyBwcm9qZWN0Q29sbGFwc2libGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0czxicj7ijIRcIiA6IHByb2plY3RDb2xsYXBzaWJsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzPGJyPi1cIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCI/IFwibm9uZVwiIDogXCJmbGV4XCI7XG59XG5cbnJlbmRlclByb2plY3RzKCk7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCl7XG4gICAgZnVuY3Rpb24gY29uc3RydWN0UHJvamVjdERpdihwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgcHJvamVjdFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC13cmFwcGVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm9uY2xpY2tcIixcInRoaXMuY29udGVudEVkaXRhYmxlPSd0cnVlJ1wiKTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJvbmJsdXJcIiwgXCJ0aGlzLmNvbnRlbnRFZGl0YWJsZT0nZmFsc2UnXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsKCk9PntcbiAgICAgICAgICAgIHByb2plY3RBcnJheVtldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZF0ubmFtZSA9IHByb2plY3REaXYudGV4dENvbnRlbnQ7XG4gICAgICAgIH0pXG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGRlbGV0ZUJ1dHRvbi5wYXJlbnRFbGVtZW50LmlkLDEpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdik7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbiAgICB9XG4gICAgbGV0IGlkID0gMDtcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgocHJvaik9PntcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IGNvbnN0cnVjdFByb2plY3REaXYocHJvaik7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICAgICAgICBuZXdQcm9qLmlkPWlkO1xuICAgICAgICBpZCsrO1xuICAgIH0pXG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0TGlzdCgpe1xuICAgIHByb2plY3RMaXN0LmlubmVySFRNTD1cIlwiO1xufVxuXG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBjbGVhclByb2plY3RMaXN0KCk7XG4gICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzKClcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9