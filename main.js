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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.main-container{\n    display: grid;\n    grid-template-columns: 0.3fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%,50rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period{\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display:flex\n}\n\n\n.projects-div{\n    display: flex;\n    flex-direction: column;\n    flex:1;\n    align-items: center;\n}\n\n\n.projects-collapse{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list{\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper{\n    display: flex;\n    gap:.2rem;\n    align-items: center;\n    justify-content: center;\n    height: 19px;\n}\n\n.project{\n    cursor: pointer;\n    margin-left: 0.1rem;\n    background-color: var(--sidebar-color);\n    color: white;\n    border: none;\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    outline: none;\n}\n\n.project.editable:focus{\n    outline: 1px solid white;\n}\n\n.project.active{\n    border: 1px solid white;\n}\n\n.project-wrapper>button{\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color:var(--tasks-color);\n    border: none;\n    width: 15px;\n    height: 15px;\n    flex:0;\n}\n\n.project-wrapper>.edit-button{\n    flex:0;\n    width: 15px;\n    height: 15px;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n    cursor: pointer;\n}\n\n.add-project{\n    display:flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr{\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar{\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper{\n    flex:1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper{\n    flex: 0.5;\n    padding-top: 1rem;\n    border-left: 1px solid var(--sidebar-color);\n}\n\n.today-header{\n    text-align: center;\n}\n\n.completed-header{\n    text-align: center;\n}\n\n.tasks>.today{\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed{\n    flex: 1;\n}\n\n.notes{\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header{\n    font-size: 20px;\n    font-weight: bold\n}\n\n.notes>textarea{\n    flex:1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    border: none;\n    outline:none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,+BAA+B;IAC/B,uBAAuB;IACvB,sBAAsB;IACtB,sBAAsB;IACtB,uBAAuB;AAC3B;;;AAGA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,mCAAmC;IACnC,sBAAsB;IACtB,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,UAAU;AACd;;;AAGA;IACI,gBAAgB;IAChB,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,UAAU;IACV,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;IACf,mBAAmB;IACnB,uBAAuB;IACvB;AACJ;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,MAAM;IACN,mBAAmB;AACvB;;;AAGA;IACI,sCAAsC;IACtC,uBAAuB;IACvB,yBAAyB;IACzB,eAAe;IACf,2BAA2B;IAC3B,kBAAkB;IAClB,cAAc;IACd,WAAW;IACX,eAAe;IACf,oBAAoB;;AAExB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,eAAe;IACf,mCAAmC;IACnC,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,MAAM;AACV;;AAEA;IACI,MAAM;IACN,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,uBAAuB;IACvB,eAAe;IACf,WAAW;AACf;;AAEA;IACI,cAAc;IACd,WAAW;IACX,gBAAgB;AACpB;;;AAGA;IACI,6CAA6C;IAC7C,aAAa;IACb,yDAAwC;IACxC,0BAA0B;IAC1B,4BAA4B;IAC5B,4BAA4B;IAC5B,gBAAgB;IAChB,aAAa;IACb,4BAA4B;IAC5B,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,oCAAoC;IACpC,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,MAAM;IACN,iBAAiB;AACrB;;AAEA;IACI,SAAS;IACT,iBAAiB;IACjB,2CAA2C;AAC/C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,aAAa;;AAEjB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,oCAAoC;IACpC,aAAa;IACb,sBAAsB;IACtB,4DAA2C;IAC3C,UAAU;IACV,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf;AACJ;;AAEA;IACI,MAAM;IACN,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,4DAA2C;IAC3C,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;IACZ,YAAY;AAChB","sourcesContent":[":root{\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.main-container{\n    display: grid;\n    grid-template-columns: 0.3fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%,50rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header{\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar{\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period{\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display:flex\n}\n\n\n.projects-div{\n    display: flex;\n    flex-direction: column;\n    flex:1;\n    align-items: center;\n}\n\n\n.projects-collapse{\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list{\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper{\n    display: flex;\n    gap:.2rem;\n    align-items: center;\n    justify-content: center;\n    height: 19px;\n}\n\n.project{\n    cursor: pointer;\n    margin-left: 0.1rem;\n    background-color: var(--sidebar-color);\n    color: white;\n    border: none;\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    outline: none;\n}\n\n.project.editable:focus{\n    outline: 1px solid white;\n}\n\n.project.active{\n    border: 1px solid white;\n}\n\n.project-wrapper>button{\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color:var(--tasks-color);\n    border: none;\n    width: 15px;\n    height: 15px;\n    flex:0;\n}\n\n.project-wrapper>.edit-button{\n    flex:0;\n    width: 15px;\n    height: 15px;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n    cursor: pointer;\n}\n\n.add-project{\n    display:flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr{\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar{\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(./wave-haikei.svg);\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks{\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper{\n    flex:1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper{\n    flex: 0.5;\n    padding-top: 1rem;\n    border-left: 1px solid var(--sidebar-color);\n}\n\n.today-header{\n    text-align: center;\n}\n\n.completed-header{\n    text-align: center;\n}\n\n.tasks>.today{\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed{\n    flex: 1;\n}\n\n.notes{\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(notebook-edit.png) repeat-y;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header{\n    font-size: 20px;\n    font-weight: bold\n}\n\n.notes>textarea{\n    flex:1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(notebook-edit.png) repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    border: none;\n    outline:none;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "removeTaskFromProject": () => (/* binding */ removeTaskFromProject),
/* harmony export */   "updateLocalStorage": () => (/* binding */ updateLocalStorage),
/* harmony export */   "updateProjectArray": () => (/* binding */ updateProjectArray)
/* harmony export */ });
let projectArray = [];

function Project(name){
    const taskArray = [];
    const note = "";
    return {name, taskArray, note};
}

const updateLocalStorage = () =>{
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

const updateProjectArray = () =>{
    projectArray = JSON.parse(localStorage.getItem("projectArray") || "[]");
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
    let lastProjectNameNumber = 1;
    const reg = /[Pp]roject (\d*)/;
    if(projectArray.length>0 && reg.test(projectArray[projectArray.length-1].name)){
        lastProjectNameNumber = projectArray[projectArray.length-1].name.match(/[Pp]roject (\d*)/)[1];
    }
    if(projectArray.length<1){
        lastProjectNameNumber=1;
    }
    if(projectArray.length>1 && !reg.test(projectArray[projectArray.length-1].name)){
        let highestNum = 0;
        for (let i = 0; i < projectArray.length; i++) {
            if(reg.test(projectArray[i].name)){
                if(projectArray[i].name.match(/[Pp]roject (\d*)/)[1] > highestNum){
                    highestNum = projectArray[i].name.match(/[Pp]roject (\d*)/)[1];
                }
            }
        }
        lastProjectNameNumber = parseInt(highestNum)+1;
    }

    const newProject = Project(`Project ${lastProjectNameNumber}`);

    if(projectArray.length>0){
    if(newProject.name === projectArray[projectArray.length-1].name){
        newProject.name = `Project ${parseInt(lastProjectNameNumber)+1}`;
    }}
    projectArray.push(newProject);
    return newProject;
}


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

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e702257113764924919a.png";

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
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");






// Declare the Projectlist Div and "Add Project" button.
const projectList = document.querySelector(".projects-list");
const addProjectButton = document.querySelector(".add-project");

// Declare the collapsible "Projects" div and add a listener that toggles the projects underneath the Projects collapsible.
const projectCollapsible = document.querySelector(".projects-collapse");
projectCollapsible.addEventListener("click",toggleProjects);

(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();

// Current active project
let currentIndex = 0;
let currentProject = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex];

// Sets the Currentproject's note variable to the input of the user in the notes textarea.
const notesAreaDiv = document.getElementById("notes-textarea");
notesAreaDiv.addEventListener("input",()=>{
    currentProject.note = notesAreaDiv.value;
    _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex].note = currentProject.note;
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
})


// Renders the projects list for the first time.
;(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();
renderProject();

// Toggles projects underneath the Projects collapsible.
function toggleProjects(){
    projectList.style.display = projectList.style.display == "flex"? "none" : "flex";
    projectList.style.display == "flex"? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex"? "none" : "flex";
}

// Renders the projects list for the first time.
(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();
renderProjectsList();
renderProject();


// Renders the projects list and delete buttons, and handles logic.
function renderProjectsList(){

    function constructProjectDiv(project){
        const projectWrapper = document.createElement("div");
        projectWrapper.classList.add("project-wrapper");


        const projectDiv = document.createElement("input");
        projectDiv.classList.add("project");
        projectDiv.readOnly = true;
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.setAttribute("maxlength",13);

        projectDiv.addEventListener("blur",()=>{
            if(projectDiv.value!=""){
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[event.target.parentElement.id].name = projectDiv.value;
            }
            else{
                projectDiv.value = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[event.target.parentElement.id].name;
            }
            projectDiv.readOnly=true;
            projectDiv.classList.remove("editable");
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();
        })
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.value = project.name;

        const editButton = document.createElement("img");
        editButton.classList.add("edit-button");
        editButton.src = _edit_png__WEBPACK_IMPORTED_MODULE_3__;
        editButton.addEventListener("click",()=>{
            projectDiv.readOnly = false;
            projectDiv.classList.add("editable");
            projectDiv.focus();
            projectDiv.select();  
        })


        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type","button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click",()=>{
            const index = Array.from(projectWrapper.parentElement.children).indexOf(projectWrapper);
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.splice(index,1);
            deleteButton.parentElement.remove();
            if(_project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.length<1){
                (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
                renderProjectsList()
            }
            clearProjectsList();
            renderProjectsList();
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
        })
        
        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(editButton);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((proj)=>{
        const newProj = constructProjectDiv(proj);
        newProj.id=_project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.indexOf(proj);
        projectList.appendChild(newProj);
    })
}

// Resets the Projects List html (clears it)
function clearProjectsList(){
    projectList.innerHTML="";
}


(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();


// Add new project eventlistener
addProjectButton.addEventListener("click",()=>{
    clearProjectsList();
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
    renderProjectsList()
    ;(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
})


const projectDivs = document.querySelectorAll(".project");

projectDivs.forEach(proj=>proj.addEventListener("click",(e)=>{
    currentIndex = parseInt(e.target.parentElement.id);
    currentProject = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex];
    projectDivs.forEach(proj=>proj.classList.remove("active"));
    proj.classList.add("active");
    renderProject();
}))

// Render notes and tasks of the selected project
function renderProject (){
    notesAreaDiv.value = currentProject.note;
}

function selectProject(){

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSw2REFBZ0I7QUFDcEI7QUFDQSxJQUFJLGdFQUFrQjtBQUN0QixDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi93YXZlLWhhaWtlaS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJub3RlYm9vay1lZGl0LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdHtcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjMEIwOTA5O1xcbiAgICAtLXRvcGxlZnRzaWRlYmFyLWNvbG9yOiAjNDQ0NDRDO1xcbiAgICAtLWhlYWRlci1jb2xvcjogIzhDOEM4QztcXG4gICAgLS10YXNrcy1jb2xvcjogI0Q2RDZENjtcXG4gICAgLS1ub3Rlcy1jb2xvcjogI0ZFRkFFNTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcblxcblxcbmJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuM2ZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjFmciAxZnIgMC43ZnI7XFxuICAgIHdpZHRoOiBtaW4oMTAwJSw1MHJlbSk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4uc2lkZWJhcntcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDIvNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDEwcHggMHB4IDVweCAtNXB4IGdyYXk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcblxcbi50aW1lLXBlcmlvZHtcXG4gICAgZmxleDogMC4wNSAxIGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50aW1lLXBlcmlvZD4qPmJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6ZmxleFxcbn1cXG5cXG5cXG4ucHJvamVjdHMtZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OjE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0cy1jb2xsYXBzZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMnJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuXFxufVxcblxcbi5wcm9qZWN0cy1saXN0e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmctbGVmdDogMXZ3O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxdnc7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJ2aDtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOi4ycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogMC4xcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC5lZGl0YWJsZTpmb2N1c3tcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC5hY3RpdmV7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPmJ1dHRvbntcXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LXNpemU6IDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbGV4OjA7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXI+LmVkaXQtYnV0dG9ue1xcbiAgICBmbGV4OjA7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNnJlbTtcXG59XFxuXFxuYnJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuXFxuLnRvcC1sZWZ0LXNpZGViYXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcGxlZnRzaWRlYmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDE4NSU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTEwcHg7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJveC1zaGFkb3c6IDZweCA2cHggNXB4IGdyYXk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbi50YXNrc3tcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDIvMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi50b2RheS13cmFwcGVye1xcbiAgICBmbGV4OjE7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4uY29tcGxldGVkLXdyYXBwZXJ7XFxuICAgIGZsZXg6IDAuNTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tc2lkZWJhci1jb2xvcik7XFxufVxcblxcbi50b2RheS1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZC1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tzPi50b2RheXtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuLnRhc2tzPi5jb21wbGV0ZWR7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5ub3Rlc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbm90ZXMtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIHJlcGVhdC15O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ub3Rlcz4ubm90ZXMtaGVhZGVye1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXFxufVxcblxcbi5ub3Rlcz50ZXh0YXJlYXtcXG4gICAgZmxleDoxO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIHJlcGVhdC15O1xcbiAgICBmb250OiBub3JtYWwgMTdweCB2ZXJkYW5hO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7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SUFDSSxNQUFNO0lBQ04saUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsNERBQTJDO0lBQzNDLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzBCMDkwOTtcXG4gICAgLS10b3BsZWZ0c2lkZWJhci1jb2xvcjogIzQ0NDQ0QztcXG4gICAgLS1oZWFkZXItY29sb3I6ICM4QzhDOEM7XFxuICAgIC0tdGFza3MtY29sb3I6ICNENkQ2RDY7XFxuICAgIC0tbm90ZXMtY29sb3I6ICNGRUZBRTU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDAuN2ZyO1xcbiAgICB3aWR0aDogbWluKDEwMCUsNTByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IC01cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGltZS1wZXJpb2R7XFxuICAgIGZsZXg6IDAuMDUgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZS1wZXJpb2Q+Kj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXhcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDoxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdHMtY29sbGFwc2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gICAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydmg7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTlweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QuZWRpdGFibGU6Zm9jdXN7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj5idXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxleDowO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPi5lZGl0LWJ1dHRvbntcXG4gICAgZmxleDowO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbmJye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcblxcbi50b3AtbGVmdC1zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BsZWZ0c2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3dhdmUtaGFpa2VpLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kYXktd3JhcHBlcntcXG4gICAgZmxleDoxO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwcGVye1xcbiAgICBmbGV4OiAwLjU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4udG9kYXktaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcz4udG9kYXl7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi50YXNrcz4uY29tcGxldGVke1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubm90ZXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVzLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKG5vdGVib29rLWVkaXQucG5nKSByZXBlYXQteTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZXM+Lm5vdGVzLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZFxcbn1cXG5cXG4ubm90ZXM+dGV4dGFyZWF7XFxuICAgIGZsZXg6MTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogdXJsKG5vdGVib29rLWVkaXQucG5nKSByZXBlYXQteTtcXG4gICAgZm9udDogbm9ybWFsIDE3cHggdmVyZGFuYTtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdChuYW1lKXtcbiAgICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgICBjb25zdCBub3RlID0gXCJcIjtcbiAgICByZXR1cm4ge25hbWUsIHRhc2tBcnJheSwgbm90ZX07XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PntcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RBcnJheVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0QXJyYXkpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3RBcnJheSA9ICgpID0+e1xuICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikgfHwgXCJbXVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCk9PntcbiAgICByZXR1cm4gcHJvamVjdC50YXNrQXJyYXkucHVzaCh0YXNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhc2tGcm9tUHJvamVjdCA9ICh0YXNrLCBwcm9qZWN0KT0+e1xuICAgIGRlbGV0ZSBwcm9qZWN0LnRhc2tBcnJheVtwcm9qZWN0LnRhc2tBcnJheS5pbmRleE9mKHRhc2spXTtcbn1cblxuZXhwb3J0IGNvbnN0IG1vdmVUYXNrVG9Bbm90aGVyUHJvamVjdCA9ICh0YXNrLCBvbGRQcm9qZWN0LCBuZXdQcm9qZWN0KT0+e1xuICAgIGFkZFRhc2tUb1Byb2plY3QodGFzayxuZXdQcm9qZWN0KTtcbiAgICByZW1vdmVUYXNrRnJvbVByb2plY3QodGFzayxvbGRQcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3QoKXtcbiAgICBsZXQgbGFzdFByb2plY3ROYW1lTnVtYmVyID0gMTtcbiAgICBjb25zdCByZWcgPSAvW1BwXXJvamVjdCAoXFxkKikvO1xuICAgIGlmKHByb2plY3RBcnJheS5sZW5ndGg+MCAmJiByZWcudGVzdChwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aC0xXS5uYW1lKSl7XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXkubGVuZ3RoLTFdLm5hbWUubWF0Y2goL1tQcF1yb2plY3QgKFxcZCopLylbMV07XG4gICAgfVxuICAgIGlmKHByb2plY3RBcnJheS5sZW5ndGg8MSl7XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlcj0xO1xuICAgIH1cbiAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPjEgJiYgIXJlZy50ZXN0KHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXkubGVuZ3RoLTFdLm5hbWUpKXtcbiAgICAgICAgbGV0IGhpZ2hlc3ROdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocmVnLnRlc3QocHJvamVjdEFycmF5W2ldLm5hbWUpKXtcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0QXJyYXlbaV0ubmFtZS5tYXRjaCgvW1BwXXJvamVjdCAoXFxkKikvKVsxXSA+IGhpZ2hlc3ROdW0pe1xuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0TnVtID0gcHJvamVjdEFycmF5W2ldLm5hbWUubWF0Y2goL1tQcF1yb2plY3QgKFxcZCopLylbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IHBhcnNlSW50KGhpZ2hlc3ROdW0pKzE7XG4gICAgfVxuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IFByb2plY3QoYFByb2plY3QgJHtsYXN0UHJvamVjdE5hbWVOdW1iZXJ9YCk7XG5cbiAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPjApe1xuICAgIGlmKG5ld1Byb2plY3QubmFtZSA9PT0gcHJvamVjdEFycmF5W3Byb2plY3RBcnJheS5sZW5ndGgtMV0ubmFtZSl7XG4gICAgICAgIG5ld1Byb2plY3QubmFtZSA9IGBQcm9qZWN0ICR7cGFyc2VJbnQobGFzdFByb2plY3ROYW1lTnVtYmVyKSsxfWA7XG4gICAgfX1cbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSl7XG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLCBwcmlvcml0eSwgZG9uZX1cbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrVGFzayA9ICh0YXNrKSA9PntcbiAgICByZXR1cm4gdGFzay5kb25lID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuY2hlY2tUYXNrID0gKHRhc2spID0+e1xuICAgIHJldHVybiB0YXNrLmRvbmUgPSBmYWxzZTtcbn1cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBkYXRlZm5zLCB7IGVuZE9mTW9udGgsIGVuZE9mVG9kYXkgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBQcm9qZWN0LCB7IGFkZFRhc2tUb1Byb2plY3QsIGNyZWF0ZU5ld1Byb2plY3QsIHByb2plY3RBcnJheSwgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LCB1cGRhdGVMb2NhbFN0b3JhZ2UsIHVwZGF0ZVByb2plY3RBcnJheSB9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzaywgeyBjaGVja1Rhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJy4vZWRpdC5wbmcnO1xuXG4vLyBEZWNsYXJlIHRoZSBQcm9qZWN0bGlzdCBEaXYgYW5kIFwiQWRkIFByb2plY3RcIiBidXR0b24uXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuXG4vLyBEZWNsYXJlIHRoZSBjb2xsYXBzaWJsZSBcIlByb2plY3RzXCIgZGl2IGFuZCBhZGQgYSBsaXN0ZW5lciB0aGF0IHRvZ2dsZXMgdGhlIHByb2plY3RzIHVuZGVybmVhdGggdGhlIFByb2plY3RzIGNvbGxhcHNpYmxlLlxuY29uc3QgcHJvamVjdENvbGxhcHNpYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1jb2xsYXBzZVwiKTtcbnByb2plY3RDb2xsYXBzaWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIix0b2dnbGVQcm9qZWN0cyk7XG5cbnVwZGF0ZVByb2plY3RBcnJheSgpO1xuXG4vLyBDdXJyZW50IGFjdGl2ZSBwcm9qZWN0XG5sZXQgY3VycmVudEluZGV4ID0gMDtcbmxldCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RBcnJheVtjdXJyZW50SW5kZXhdO1xuXG4vLyBTZXRzIHRoZSBDdXJyZW50cHJvamVjdCdzIG5vdGUgdmFyaWFibGUgdG8gdGhlIGlucHV0IG9mIHRoZSB1c2VyIGluIHRoZSBub3RlcyB0ZXh0YXJlYS5cbmNvbnN0IG5vdGVzQXJlYURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZXMtdGV4dGFyZWFcIik7XG5ub3Rlc0FyZWFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsKCk9PntcbiAgICBjdXJyZW50UHJvamVjdC5ub3RlID0gbm90ZXNBcmVhRGl2LnZhbHVlO1xuICAgIHByb2plY3RBcnJheVtjdXJyZW50SW5kZXhdLm5vdGUgPSBjdXJyZW50UHJvamVjdC5ub3RlO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufSlcblxuXG4vLyBSZW5kZXJzIHRoZSBwcm9qZWN0cyBsaXN0IGZvciB0aGUgZmlyc3QgdGltZS5cbnVwZGF0ZVByb2plY3RBcnJheSgpO1xucmVuZGVyUHJvamVjdCgpO1xuXG4vLyBUb2dnbGVzIHByb2plY3RzIHVuZGVybmVhdGggdGhlIFByb2plY3RzIGNvbGxhcHNpYmxlLlxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdHMoKXtcbiAgICBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID0gcHJvamVjdExpc3Quc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIj8gXCJub25lXCIgOiBcImZsZXhcIjtcbiAgICBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiPyBwcm9qZWN0Q29sbGFwc2libGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0czxicj7ijIRcIiA6IHByb2plY3RDb2xsYXBzaWJsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzPGJyPi1cIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCI/IFwibm9uZVwiIDogXCJmbGV4XCI7XG59XG5cbi8vIFJlbmRlcnMgdGhlIHByb2plY3RzIGxpc3QgZm9yIHRoZSBmaXJzdCB0aW1lLlxudXBkYXRlUHJvamVjdEFycmF5KCk7XG5yZW5kZXJQcm9qZWN0c0xpc3QoKTtcbnJlbmRlclByb2plY3QoKTtcblxuXG4vLyBSZW5kZXJzIHRoZSBwcm9qZWN0cyBsaXN0IGFuZCBkZWxldGUgYnV0dG9ucywgYW5kIGhhbmRsZXMgbG9naWMuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QoKXtcblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdFByb2plY3REaXYocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtd3JhcHBlclwiKTtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMuY29udGVudEVkaXRhYmxlPSdmYWxzZSdcIik7XG4gICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsMTMpO1xuXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e1xuICAgICAgICAgICAgaWYocHJvamVjdERpdi52YWx1ZSE9XCJcIil7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXlbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRdLm5hbWUgPSBwcm9qZWN0RGl2LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LnZhbHVlID0gcHJvamVjdEFycmF5W2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdERpdi5yZWFkT25seT10cnVlO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdGFibGVcIik7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RBcnJheSgpO1xuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMuY29udGVudEVkaXRhYmxlPSdmYWxzZSdcIik7XG4gICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuZm9jdXMoKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuc2VsZWN0KCk7ICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20ocHJvamVjdFdyYXBwZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihwcm9qZWN0V3JhcHBlcik7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPDEpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0c0xpc3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2opPT57XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBjb25zdHJ1Y3RQcm9qZWN0RGl2KHByb2opO1xuICAgICAgICBuZXdQcm9qLmlkPXByb2plY3RBcnJheS5pbmRleE9mKHByb2opO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbiAgICB9KVxufVxuXG4vLyBSZXNldHMgdGhlIFByb2plY3RzIExpc3QgaHRtbCAoY2xlYXJzIGl0KVxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0c0xpc3QoKXtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUw9XCJcIjtcbn1cblxuXG51cGRhdGVQcm9qZWN0QXJyYXkoKTtcblxuXG4vLyBBZGQgbmV3IHByb2plY3QgZXZlbnRsaXN0ZW5lclxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIGNsZWFyUHJvamVjdHNMaXN0KCk7XG4gICAgY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzTGlzdCgpXG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59KVxuXG5cbmNvbnN0IHByb2plY3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xuXG5wcm9qZWN0RGl2cy5mb3JFYWNoKHByb2o9PnByb2ouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGUpPT57XG4gICAgY3VycmVudEluZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQucGFyZW50RWxlbWVudC5pZCk7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbY3VycmVudEluZGV4XTtcbiAgICBwcm9qZWN0RGl2cy5mb3JFYWNoKHByb2o9PnByb2ouY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSk7XG4gICAgcHJvai5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHJlbmRlclByb2plY3QoKTtcbn0pKVxuXG4vLyBSZW5kZXIgbm90ZXMgYW5kIHRhc2tzIG9mIHRoZSBzZWxlY3RlZCBwcm9qZWN0XG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0ICgpe1xuICAgIG5vdGVzQXJlYURpdi52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0Lm5vdGU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoKXtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==