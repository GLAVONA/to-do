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
function renderProject(){
    notesAreaDiv.value = currentProject.note;
}

function selectProject(){

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkRBQWdCO0FBQ3BCO0FBQ0EsSUFBSSxnRUFBa0I7QUFDdEIsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixxREFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vd2F2ZS1oYWlrZWkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwibm90ZWJvb2stZWRpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tc2lkZWJhci1jb2xvcjogIzBCMDkwOTtcXG4gICAgLS10b3BsZWZ0c2lkZWJhci1jb2xvcjogIzQ0NDQ0QztcXG4gICAgLS1oZWFkZXItY29sb3I6ICM4QzhDOEM7XFxuICAgIC0tdGFza3MtY29sb3I6ICNENkQ2RDY7XFxuICAgIC0tbm90ZXMtY29sb3I6ICNGRUZBRTU7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5cXG5cXG5ib2R5e1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjNmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDAuN2ZyO1xcbiAgICB3aWR0aDogbWluKDEwMCUsNTByZW0pO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZ3JpZC1jb2x1bW46IDIvMztcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDEwcHggNXB4IC01cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuXFxuLnNpZGViYXJ7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGltZS1wZXJpb2R7XFxuICAgIGZsZXg6IDAuMDUgMSBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGltZS1wZXJpb2Q+Kj5idXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDFyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBkaXNwbGF5OmZsZXhcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleDoxO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG4ucHJvamVjdHMtY29sbGFwc2V7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdHMtbGlzdHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDF2dztcXG4gICAgcGFkZGluZy1yaWdodDogMXZ3O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAydmg7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDouMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTlweDtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QuZWRpdGFibGU6Zm9jdXN7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3QuYWN0aXZle1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj5idXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZm9udC1zaXplOiA4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgZmxleDowO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPi5lZGl0LWJ1dHRvbntcXG4gICAgZmxleDowO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYWRkLXByb2plY3R7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbmJye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIG1hcmdpbi10b3A6IC0ycHg7XFxufVxcblxcblxcbi50b3AtbGVmdC1zaWRlYmFye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BsZWZ0c2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFza3N7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAyLzM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4udG9kYXktd3JhcHBlcntcXG4gICAgZmxleDoxO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwcGVye1xcbiAgICBmbGV4OiAwLjU7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXNpZGViYXItY29sb3IpO1xcbn1cXG5cXG4udG9kYXktaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5jb21wbGV0ZWQtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcz4udG9kYXl7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbi50YXNrcz4uY29tcGxldGVke1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubm90ZXN7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVzLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSByZXBlYXQteTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZXM+Lm5vdGVzLWhlYWRlcntcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZFxcbn1cXG5cXG4ubm90ZXM+dGV4dGFyZWF7XFxuICAgIGZsZXg6MTtcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSByZXBlYXQteTtcXG4gICAgZm9udDogbm9ybWFsIDE3cHggdmVyZGFuYTtcXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTpub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7OztBQUdB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TUFBTTtJQUNOLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLDREQUEyQztJQUMzQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLXNpZGViYXItY29sb3I6ICMwQjA5MDk7XFxuICAgIC0tdG9wbGVmdHNpZGViYXItY29sb3I6ICM0NDQ0NEM7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjOEM4QzhDO1xcbiAgICAtLXRhc2tzLWNvbG9yOiAjRDZENkQ2O1xcbiAgICAtLW5vdGVzLWNvbG9yOiAjRkVGQUU1O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4zZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuMWZyIDFmciAwLjdmcjtcXG4gICAgd2lkdGg6IG1pbigxMDAlLDUwcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxuICAgIGdyaWQtcm93OiAxLzI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDVweCAtNXB4IGdyYXk7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcblxcbi5zaWRlYmFye1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMi80O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMTBweCAwcHggNXB4IC01cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuXFxuLnRpbWUtcGVyaW9ke1xcbiAgICBmbGV4OiAwLjA1IDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbWUtcGVyaW9kPio+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAxcmVtIDFyZW0gMHJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZGlzcGxheTpmbGV4XFxufVxcblxcblxcbi5wcm9qZWN0cy1kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6MTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnByb2plY3RzLWNvbGxhcHNle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbWFyZ2luOiAycmVtIDFyZW0gMHJlbSAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMy41cmVtO1xcbiAgICB3aWR0aDogNnJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG5cXG59XFxuXFxuLnByb2plY3RzLWxpc3R7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2dztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6LjJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDE5cHg7XFxufVxcblxcbi5wcm9qZWN0e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LmVkaXRhYmxlOmZvY3Vze1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LmFjdGl2ZXtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0LXdyYXBwZXI+YnV0dG9ue1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIGZsZXg6MDtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj4uZWRpdC1idXR0b257XFxuICAgIGZsZXg6MDtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjJyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFkZC1wcm9qZWN0e1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG5icntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbn1cXG5cXG5cXG4udG9wLWxlZnQtc2lkZWJhcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9wbGVmdHNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi93YXZlLWhhaWtlaS5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTg1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAtMTBweDtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gICAgZ3JpZC1yb3c6IDEvMjtcXG4gICAgYm94LXNoYWRvdzogNnB4IDZweCA1cHggZ3JheTtcXG4gICAgei1pbmRleDogMTtcXG59XFxuXFxuLnRhc2tze1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZGF5LXdyYXBwZXJ7XFxuICAgIGZsZXg6MTtcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5jb21wbGV0ZWQtd3JhcHBlcntcXG4gICAgZmxleDogMC41O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLnRvZGF5LWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29tcGxldGVkLWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFza3M+LnRvZGF5e1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4udGFza3M+LmNvbXBsZXRlZHtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLm5vdGVze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ub3Rlcy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQ6IHVybChub3RlYm9vay1lZGl0LnBuZykgcmVwZWF0LXk7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzPi5ub3Rlcy1oZWFkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcXG59XFxuXFxuLm5vdGVzPnRleHRhcmVhe1xcbiAgICBmbGV4OjE7XFxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6IHVybChub3RlYm9vay1lZGl0LnBuZykgcmVwZWF0LXk7XFxuICAgIGZvbnQ6IG5vcm1hbCAxN3B4IHZlcmRhbmE7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6bm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QobmFtZSl7XG4gICAgY29uc3QgdGFza0FycmF5ID0gW107XG4gICAgY29uc3Qgbm90ZSA9IFwiXCI7XG4gICAgcmV0dXJuIHtuYW1lLCB0YXNrQXJyYXksIG5vdGV9O1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT57XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEFycmF5KSk7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9qZWN0QXJyYXkgPSAoKSA9PntcbiAgICBwcm9qZWN0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdEFycmF5XCIpIHx8IFwiW11cIik7XG59XG5cbmV4cG9ydCBjb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKHRhc2ssIHByb2plY3QpPT57XG4gICAgcmV0dXJuIHByb2plY3QudGFza0FycmF5LnB1c2godGFzayk7XG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrRnJvbVByb2plY3QgPSAodGFzaywgcHJvamVjdCk9PntcbiAgICBkZWxldGUgcHJvamVjdC50YXNrQXJyYXlbcHJvamVjdC50YXNrQXJyYXkuaW5kZXhPZih0YXNrKV07XG59XG5cbmV4cG9ydCBjb25zdCBtb3ZlVGFza1RvQW5vdGhlclByb2plY3QgPSAodGFzaywgb2xkUHJvamVjdCwgbmV3UHJvamVjdCk9PntcbiAgICBhZGRUYXNrVG9Qcm9qZWN0KHRhc2ssbmV3UHJvamVjdCk7XG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHRhc2ssb2xkUHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCl7XG4gICAgbGV0IGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IDE7XG4gICAgY29uc3QgcmVnID0gL1tQcF1yb2plY3QgKFxcZCopLztcbiAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPjAgJiYgcmVnLnRlc3QocHJvamVjdEFycmF5W3Byb2plY3RBcnJheS5sZW5ndGgtMV0ubmFtZSkpe1xuICAgICAgICBsYXN0UHJvamVjdE5hbWVOdW1iZXIgPSBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aC0xXS5uYW1lLm1hdGNoKC9bUHBdcm9qZWN0IChcXGQqKS8pWzFdO1xuICAgIH1cbiAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPDEpe1xuICAgICAgICBsYXN0UHJvamVjdE5hbWVOdW1iZXI9MTtcbiAgICB9XG4gICAgaWYocHJvamVjdEFycmF5Lmxlbmd0aD4xICYmICFyZWcudGVzdChwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aC0xXS5uYW1lKSl7XG4gICAgICAgIGxldCBoaWdoZXN0TnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmKHJlZy50ZXN0KHByb2plY3RBcnJheVtpXS5uYW1lKSl7XG4gICAgICAgICAgICAgICAgaWYocHJvamVjdEFycmF5W2ldLm5hbWUubWF0Y2goL1tQcF1yb2plY3QgKFxcZCopLylbMV0gPiBoaWdoZXN0TnVtKXtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGVzdE51bSA9IHByb2plY3RBcnJheVtpXS5uYW1lLm1hdGNoKC9bUHBdcm9qZWN0IChcXGQqKS8pWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsYXN0UHJvamVjdE5hbWVOdW1iZXIgPSBwYXJzZUludChoaWdoZXN0TnVtKSsxO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBQcm9qZWN0KGBQcm9qZWN0ICR7bGFzdFByb2plY3ROYW1lTnVtYmVyfWApO1xuXG4gICAgaWYocHJvamVjdEFycmF5Lmxlbmd0aD4wKXtcbiAgICBpZihuZXdQcm9qZWN0Lm5hbWUgPT09IHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXkubGVuZ3RoLTFdLm5hbWUpe1xuICAgICAgICBuZXdQcm9qZWN0Lm5hbWUgPSBgUHJvamVjdCAke3BhcnNlSW50KGxhc3RQcm9qZWN0TmFtZU51bWJlcikrMX1gO1xuICAgIH19XG4gICAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gICAgcmV0dXJuIG5ld1Byb2plY3Q7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpe1xuICAgIHJldHVybiB7dGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmV9XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja1Rhc2sgPSAodGFzaykgPT57XG4gICAgcmV0dXJuIHRhc2suZG9uZSA9IHRydWU7XG59XG5cbmV4cG9ydCBjb25zdCB1bmNoZWNrVGFzayA9ICh0YXNrKSA9PntcbiAgICByZXR1cm4gdGFzay5kb25lID0gZmFsc2U7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGF0ZWZucywgeyBlbmRPZk1vbnRoLCBlbmRPZlRvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCwgeyBhZGRUYXNrVG9Qcm9qZWN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0QXJyYXksIHJlbW92ZVRhc2tGcm9tUHJvamVjdCwgdXBkYXRlTG9jYWxTdG9yYWdlLCB1cGRhdGVQcm9qZWN0QXJyYXkgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2ssIHsgY2hlY2tUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQucG5nJztcblxuLy8gRGVjbGFyZSB0aGUgUHJvamVjdGxpc3QgRGl2IGFuZCBcIkFkZCBQcm9qZWN0XCIgYnV0dG9uLlxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcblxuLy8gRGVjbGFyZSB0aGUgY29sbGFwc2libGUgXCJQcm9qZWN0c1wiIGRpdiBhbmQgYWRkIGEgbGlzdGVuZXIgdGhhdCB0b2dnbGVzIHRoZSBwcm9qZWN0cyB1bmRlcm5lYXRoIHRoZSBQcm9qZWN0cyBjb2xsYXBzaWJsZS5cbmNvbnN0IHByb2plY3RDb2xsYXBzaWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29sbGFwc2VcIik7XG5wcm9qZWN0Q29sbGFwc2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdG9nZ2xlUHJvamVjdHMpO1xuXG51cGRhdGVQcm9qZWN0QXJyYXkoKTtcblxuLy8gQ3VycmVudCBhY3RpdmUgcHJvamVjdFxubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5sZXQgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbY3VycmVudEluZGV4XTtcblxuLy8gU2V0cyB0aGUgQ3VycmVudHByb2plY3QncyBub3RlIHZhcmlhYmxlIHRvIHRoZSBpbnB1dCBvZiB0aGUgdXNlciBpbiB0aGUgbm90ZXMgdGV4dGFyZWEuXG5jb25zdCBub3Rlc0FyZWFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzLXRleHRhcmVhXCIpO1xubm90ZXNBcmVhRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCgpPT57XG4gICAgY3VycmVudFByb2plY3Qubm90ZSA9IG5vdGVzQXJlYURpdi52YWx1ZTtcbiAgICBwcm9qZWN0QXJyYXlbY3VycmVudEluZGV4XS5ub3RlID0gY3VycmVudFByb2plY3Qubm90ZTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn0pXG5cblxuXG5cbi8vIFJlbmRlcnMgdGhlIHByb2plY3RzIGxpc3QgZm9yIHRoZSBmaXJzdCB0aW1lLlxudXBkYXRlUHJvamVjdEFycmF5KCk7XG5cbi8vIFRvZ2dsZXMgcHJvamVjdHMgdW5kZXJuZWF0aCB0aGUgUHJvamVjdHMgY29sbGFwc2libGUuXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0cygpe1xuICAgIHByb2plY3RMaXN0LnN0eWxlLmRpc3BsYXkgPSBwcm9qZWN0TGlzdC5zdHlsZS5kaXNwbGF5ID09IFwiZmxleFwiPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuICAgIHByb2plY3RMaXN0LnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCI/IHByb2plY3RDb2xsYXBzaWJsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzPGJyPuKMhFwiIDogcHJvamVjdENvbGxhcHNpYmxlLmlubmVySFRNTCA9IFwiUHJvamVjdHM8YnI+LVwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9PSBcImZsZXhcIj8gXCJub25lXCIgOiBcImZsZXhcIjtcbn1cblxuLy8gUmVuZGVycyB0aGUgcHJvamVjdHMgbGlzdCBmb3IgdGhlIGZpcnN0IHRpbWUuXG51cGRhdGVQcm9qZWN0QXJyYXkoKTtcbnJlbmRlclByb2plY3RzTGlzdCgpO1xucmVuZGVyUHJvamVjdCgpO1xuXG4vLyBSZW5kZXJzIHRoZSBwcm9qZWN0cyBsaXN0IGFuZCBkZWxldGUgYnV0dG9ucywgYW5kIGhhbmRsZXMgbG9naWMuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0c0xpc3QoKXtcblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdFByb2plY3REaXYocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtd3JhcHBlclwiKTtcblxuXG4gICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIHByb2plY3REaXYucmVhZE9ubHkgPSB0cnVlO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMuY29udGVudEVkaXRhYmxlPSdmYWxzZSdcIik7XG4gICAgICAgIHByb2plY3REaXYuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsMTMpO1xuXG4gICAgICAgIHByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwoKT0+e1xuICAgICAgICAgICAgaWYocHJvamVjdERpdi52YWx1ZSE9XCJcIil7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXlbZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRdLm5hbWUgPSBwcm9qZWN0RGl2LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RGl2LnZhbHVlID0gcHJvamVjdEFycmF5W2V2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkXS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvamVjdERpdi5yZWFkT25seT10cnVlO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QucmVtb3ZlKFwiZWRpdGFibGVcIik7XG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RBcnJheSgpO1xuICAgICAgICB9KVxuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm9uYmx1clwiLCBcInRoaXMuY29udGVudEVkaXRhYmxlPSdmYWxzZSdcIik7XG4gICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLnNyYyA9IGVkaXRJY29uO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnJlYWRPbmx5ID0gZmFsc2U7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuZm9jdXMoKTtcbiAgICAgICAgICAgIHByb2plY3REaXYuc2VsZWN0KCk7ICBcbiAgICAgICAgfSlcblxuXG4gICAgICAgIFxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20ocHJvamVjdFdyYXBwZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihwcm9qZWN0V3JhcHBlcik7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKGluZGV4LDEpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZihwcm9qZWN0QXJyYXkubGVuZ3RoPDEpe1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0c0xpc3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJQcm9qZWN0c0xpc3QoKTtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2opPT57XG4gICAgICAgIGNvbnN0IG5ld1Byb2ogPSBjb25zdHJ1Y3RQcm9qZWN0RGl2KHByb2opO1xuICAgICAgICBuZXdQcm9qLmlkPXByb2plY3RBcnJheS5pbmRleE9mKHByb2opO1xuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChuZXdQcm9qKTtcbiAgICB9KVxufVxuXG4vLyBSZXNldHMgdGhlIFByb2plY3RzIExpc3QgaHRtbCAoY2xlYXJzIGl0KVxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0c0xpc3QoKXtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUw9XCJcIjtcbn1cblxuXG51cGRhdGVQcm9qZWN0QXJyYXkoKTtcblxuLy8gQWRkIG5ldyBwcm9qZWN0IGV2ZW50bGlzdGVuZXJcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBjbGVhclByb2plY3RzTGlzdCgpO1xuICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICByZW5kZXJQcm9qZWN0c0xpc3QoKVxuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xufSlcblxuXG5jb25zdCBwcm9qZWN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcblxucHJvamVjdERpdnMuZm9yRWFjaChwcm9qPT5wcm9qLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e1xuICAgIGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgcHJvamVjdERpdnMuZm9yRWFjaChwcm9qPT5wcm9qLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpO1xuICAgIHByb2ouY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICByZW5kZXJQcm9qZWN0KCk7XG59KSlcblxuLy8gUmVuZGVyIG5vdGVzIGFuZCB0YXNrcyBvZiB0aGUgc2VsZWN0ZWQgcHJvamVjdFxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpe1xuICAgIG5vdGVzQXJlYURpdi52YWx1ZSA9IGN1cnJlbnRQcm9qZWN0Lm5vdGU7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFByb2plY3QoKXtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==