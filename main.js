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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 0.2fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%, 70rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar {\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period {\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button {\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display: flex\n}\n\n\n.projects-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    align-items: center;\n}\n\n\n.projects-collapse {\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list {\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper {\n    display: flex;\n    gap: .2rem;\n    align-items: center;\n    justify-content: center;\n    height: 19px;\n}\n\n.project {\n    cursor: pointer;\n    margin-left: 0.1rem;\n    background-color: var(--sidebar-color);\n    color: white;\n    border: none;\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    outline: none;\n}\n\n.project.editable:focus {\n    outline: 1px solid white;\n}\n\n.project.active {\n    border: 1px solid white;\n}\n\n.project-wrapper>button {\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color: var(--tasks-color);\n    border: none;\n    width: 15px;\n    height: 15px;\n    flex: 0;\n}\n\n.project-wrapper>.edit-button {\n    flex: 0;\n    width: 15px;\n    height: 15px;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n    cursor: pointer;\n}\n\n.add-project {\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr {\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar {\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper {\n    flex: 1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper {\n    flex: 0.5;\n    padding-top: 1rem;\n    border-left: 1px solid var(--sidebar-color);\n}\n\n.today-header {\n    text-align: center;\n}\n\n.completed-header {\n    text-align: center;\n}\n\n.tasks>.today {\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed {\n    flex: 1;\n}\n\n.notes {\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    background-size: 110% auto;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.notes>textarea {\n    flex: 1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    background-size: 110% auto;\n    border: none;\n    outline: none;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --sidebar-color: #0B0909;\n    --topleftsidebar-color: #44444C;\n    --header-color: #8C8C8C;\n    --tasks-color: #D6D6D6;\n    --notes-color: #FEFAE5;\n    font-family: sans-serif;\n}\n\n\nbody {\n    margin: 0;\n    padding: 0;\n}\n\n.main-container {\n    display: grid;\n    grid-template-columns: 0.2fr 1fr;\n    grid-template-rows: 0.1fr 1fr 0.7fr;\n    width: min(100%, 70rem);\n    height: 100vh;\n    margin: 0 auto;\n}\n\n.header {\n    grid-column: 2/3;\n    grid-row: 1/2;\n    background-color: var(--header-color);\n    box-shadow: 0px 10px 5px -5px gray;\n    z-index: 1;\n}\n\n\n.sidebar {\n    grid-column: 1/2;\n    grid-row: 2/4;\n    background-color: var(--sidebar-color);\n    box-shadow: 10px 0px 5px -5px gray;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.time-period {\n    flex: 0.05 1 auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.time-period>*>button {\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 1rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    align-items: center;\n    justify-content: center;\n    display: flex\n}\n\n\n.projects-div {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    align-items: center;\n}\n\n\n.projects-collapse {\n    background-color: var(--sidebar-color);\n    border: 1px solid white;\n    color: var(--tasks-color);\n    font-size: 20px;\n    margin: 2rem 1rem 0rem 1rem;\n    text-align: center;\n    height: 3.5rem;\n    width: 6rem;\n    cursor: pointer;\n    padding-bottom: 10px;\n\n}\n\n.projects-list {\n    color: white;\n    padding-left: 1vw;\n    padding-right: 1vw;\n    list-style-type: none;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 2vh;\n}\n\n.project-wrapper {\n    display: flex;\n    gap: .2rem;\n    align-items: center;\n    justify-content: center;\n    height: 19px;\n}\n\n.project {\n    cursor: pointer;\n    margin-left: 0.1rem;\n    background-color: var(--sidebar-color);\n    color: white;\n    border: none;\n    text-align: center;\n    justify-content: center;\n    width: 100%;\n    outline: none;\n}\n\n.project.editable:focus {\n    outline: 1px solid white;\n}\n\n.project.active {\n    border: 1px solid white;\n}\n\n.project-wrapper>button {\n    margin-left: 2px;\n    padding: 4px;\n    font-size: 8px;\n    cursor: pointer;\n    background-color: var(--tasks-color);\n    border: none;\n    width: 15px;\n    height: 15px;\n    flex: 0;\n}\n\n.project-wrapper>.edit-button {\n    flex: 0;\n    width: 15px;\n    height: 15px;\n    margin-left: 0.5rem;\n    margin-right: 0.2rem;\n    cursor: pointer;\n}\n\n.add-project {\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n    width: 6rem;\n}\n\nbr {\n    display: block;\n    content: \"\";\n    margin-top: -2px;\n}\n\n\n.top-left-sidebar {\n    background-color: var(--topleftsidebar-color);\n    display: flex;\n    background-image: url(./wave-haikei.svg);\n    background-size: 100% 185%;\n    background-position-y: -10px;\n    background-repeat: no-repeat;\n    grid-column: 1/2;\n    grid-row: 1/2;\n    box-shadow: 6px 6px 5px gray;\n    z-index: 1;\n}\n\n.tasks {\n    grid-column: 2/3;\n    grid-row: 2/3;\n    background-color: var(--tasks-color);\n    padding: 1rem;\n    display: flex;\n    gap: 1rem;\n}\n\n.today-wrapper {\n    flex: 1;\n    padding-top: 1rem;\n}\n\n.completed-wrapper {\n    flex: 0.5;\n    padding-top: 1rem;\n    border-left: 1px solid var(--sidebar-color);\n}\n\n.today-header {\n    text-align: center;\n}\n\n.completed-header {\n    text-align: center;\n}\n\n.tasks>.today {\n    flex: 1;\n    display: flex;\n\n}\n\n.tasks>.completed {\n    flex: 1;\n}\n\n.notes {\n    background-color: var(--notes-color);\n    display: flex;\n    flex-direction: column;\n    background: url(notebook-edit.png) repeat-y;\n    background-size: 110% auto;\n    z-index: 1;\n    text-align: center;\n}\n\n.notes>.notes-header {\n    font-size: 20px;\n    font-weight: bold;\n}\n\n.notes>textarea {\n    flex: 1;\n    padding: 2px 10px;\n    resize: none;\n    z-index: 1;\n    background: url(notebook-edit.png) repeat-y;\n    font: normal 17px verdana;\n    line-height: 25px;\n    background-size: 110% auto;\n    border: none;\n    outline: none;\n}"],"sourceRoot":""}]);
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

function Project(name) {
    const taskArray = [];
    const note = "";
    return { name, taskArray, note };
}

const updateLocalStorage = () => {
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
}

const updateProjectArray = () => {
    projectArray = JSON.parse(localStorage.getItem("projectArray") || "[]");
}

const addTaskToProject = (task, project) => {
    return project.taskArray.push(task);
}

const removeTaskFromProject = (task, project) => {
    delete project.taskArray[project.taskArray.indexOf(task)];
}

const moveTaskToAnotherProject = (task, oldProject, newProject) => {
    addTaskToProject(task, newProject);
    removeTaskFromProject(task, oldProject);
}

function createNewProject() {
    let lastProjectNameNumber = 1;
    const reg = /[Pp]roject (\d*)/;
    if (projectArray.length > 0 && reg.test(projectArray[projectArray.length - 1].name)) {
        lastProjectNameNumber = projectArray[projectArray.length - 1].name.match(/[Pp]roject (\d*)/)[1];
    }
    if (projectArray.length < 1) {
        lastProjectNameNumber = 1;
    }
    if (projectArray.length > 1 && !reg.test(projectArray[projectArray.length - 1].name)) {
        let highestNum = 0;
        for (let i = 0; i < projectArray.length; i++) {
            if (reg.test(projectArray[i].name)) {
                if (projectArray[i].name.match(/[Pp]roject (\d*)/)[1] > highestNum) {
                    highestNum = projectArray[i].name.match(/[Pp]roject (\d*)/)[1];
                }
            }
        }
        lastProjectNameNumber = parseInt(highestNum) + 1;
    }

    const newProject = Project(`Project ${lastProjectNameNumber}`);

    if (projectArray.length > 0) {
        if (newProject.name === projectArray[projectArray.length - 1].name) {
            newProject.name = `Project ${parseInt(lastProjectNameNumber) + 1}`;
        }
    }
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
function Task(title, description, dueDate, priority, done) {
    return { title, description, dueDate, priority, done }
}

const checkTask = (task) => {
    return task.done = true;
}

const uncheckTask = (task) => {
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
projectCollapsible.addEventListener("click", toggleProjects);

(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();

// Current active project
let currentIndex = 0;
let currentProject = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex];

// Sets the Currentproject's note variable to the input of the user in the notes textarea.
const notesAreaDiv = document.getElementById("notes-textarea");
notesAreaDiv.addEventListener("input", () => {
    currentProject.note = notesAreaDiv.value;
    _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex].note = currentProject.note;
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
})

let projectDivs = document.querySelectorAll(".project");



// Renders the projects list for the first time.
(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();

// Toggles projects underneath the Projects collapsible.
function toggleProjects() {
    projectList.style.display = projectList.style.display == "flex" ? "none" : "flex";
    projectList.style.display == "flex" ? projectCollapsible.innerHTML = "Projects<br>⌄" : projectCollapsible.innerHTML = "Projects<br>-";
    addProjectButton.style.display = addProjectButton.style.display == "flex" ? "none" : "flex";
}

// Renders the projects list for the first time.
(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();
renderProjectsList();
renderProject();

let selectedProject = "";


// Renders the projects list and delete buttons, and handles logic.
function renderProjectsList() {

    function constructProjectDiv(project) {
        const projectWrapper = document.createElement("div");
        projectWrapper.classList.add("project-wrapper");


        const projectDiv = document.createElement("input");
        projectDiv.classList.add("project");
        projectDiv.readOnly = true;
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.setAttribute("maxlength", 13);

        projectDiv.addEventListener("blur", () => {
            const index = Array.from(projectWrapper.parentElement.children).indexOf(projectWrapper);
            if (projectDiv.value != "") {
                _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[index].name = projectDiv.value;
            }
            else {
                projectDiv.value = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[index].name;
            }
            projectDiv.readOnly = true;
            projectDiv.classList.remove("editable");
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();
        })
        projectDiv.setAttribute("onblur", "this.contentEditable='false'");
        projectDiv.value = project.name;

        const editButton = document.createElement("img");
        editButton.classList.add("edit-button");
        editButton.src = _edit_png__WEBPACK_IMPORTED_MODULE_3__;
        editButton.addEventListener("click", () => {
            projectDiv.readOnly = false;
            projectDiv.classList.add("editable");
            projectDiv.focus();
            projectDiv.select();
        })



        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("type", "button");
        deleteButton.textContent = "X";
        deleteButton.addEventListener("click", () => {
            const index = Array.from(projectWrapper.parentElement.children).indexOf(projectWrapper);
            _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.splice(index, 1);
            deleteButton.parentElement.remove();
            if (_project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.length < 1) {
                (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
                notesAreaDiv.value = "";
                renderProjectsList();
            }
            (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
        })


        projectWrapper.appendChild(projectDiv);
        projectWrapper.appendChild(editButton);
        projectWrapper.appendChild(deleteButton);
        return projectWrapper;
    }
    _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((proj) => {
        const newProj = constructProjectDiv(proj);
        projectList.appendChild(newProj);
    })

    projectDivs = document.querySelectorAll(".project");
    projectDivs.forEach(proj => proj.addEventListener("click", () => {
        switchCurrentProject( proj);
    }))
}

// Resets the Projects List html (clears it)
function clearProjectsList() {
    projectList.innerHTML = "";
}

(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateProjectArray)();

// Add new project eventlistener
addProjectButton.addEventListener("click", () => {
    clearProjectsList();
    currentProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.createNewProject)();
    renderProjectsList()
    switchCurrentProject(document.querySelector(".projects-list").lastChild.firstChild);
    console.log(document.querySelector(".projects-list").lastChild);
    (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.updateLocalStorage)();
})




// Render notes and tasks of the selected project
function renderProject() {
    notesAreaDiv.value = currentProject.note;
}

function switchCurrentProject( proj) {
    currentIndex = Array.from(proj.parentElement.parentElement.children).indexOf(proj.parentElement);
    currentProject = _project_js__WEBPACK_IMPORTED_MODULE_1__.projectArray[currentIndex];
    projectDivs.forEach(proj => proj.classList.remove("active"));
    proj.classList.add("active");
    renderProject();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtEQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZEQUFnQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxJQUFJLCtEQUFrQjtBQUN0QixDQUFDOzs7OztBQUtEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIscURBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vd2F2ZS1oYWlrZWkuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwibm90ZWJvb2stZWRpdC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXNpZGViYXItY29sb3I6ICMwQjA5MDk7XFxuICAgIC0tdG9wbGVmdHNpZGViYXItY29sb3I6ICM0NDQ0NEM7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjOEM4QzhDO1xcbiAgICAtLXRhc2tzLWNvbG9yOiAjRDZENkQ2O1xcbiAgICAtLW5vdGVzLWNvbG9yOiAjRkVGQUU1O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDAuN2ZyO1xcbiAgICB3aWR0aDogbWluKDEwMCUsIDcwcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGltZS1wZXJpb2Qge1xcbiAgICBmbGV4OiAwLjA1IDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbWUtcGVyaW9kPio+YnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0cy1jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2dztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTlweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LmVkaXRhYmxlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj5idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPi5lZGl0LWJ1dHRvbiB7XFxuICAgIGZsZXg6IDA7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG5iciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuXFxuLnRvcC1sZWZ0LXNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BsZWZ0c2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZGF5LXdyYXBwZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwcGVyIHtcXG4gICAgZmxleDogMC41O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLnRvZGF5LWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcz4udG9kYXkge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4udGFza3M+LmNvbXBsZXRlZCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5ub3RlcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVzLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSByZXBlYXQteTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIGF1dG87XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzPi5ub3Rlcy1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm90ZXM+dGV4dGFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIHJlcGVhdC15O1xcbiAgICBmb250OiBub3JtYWwgMTdweCB2ZXJkYW5hO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGtDQUFrQztJQUNsQyxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCO0FBQ0o7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHNDQUFzQztJQUN0Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLE9BQU87QUFDWDs7QUFFQTtJQUNJLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IseURBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNERBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDViw0REFBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXNpZGViYXItY29sb3I6ICMwQjA5MDk7XFxuICAgIC0tdG9wbGVmdHNpZGViYXItY29sb3I6ICM0NDQ0NEM7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjOEM4QzhDO1xcbiAgICAtLXRhc2tzLWNvbG9yOiAjRDZENkQ2O1xcbiAgICAtLW5vdGVzLWNvbG9yOiAjRkVGQUU1O1xcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4xZnIgMWZyIDAuN2ZyO1xcbiAgICB3aWR0aDogbWluKDEwMCUsIDcwcmVtKTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMTBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxuICAgIGdyaWQtcm93OiAyLzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAxMHB4IDBweCA1cHggLTVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG4udGltZS1wZXJpb2Qge1xcbiAgICBmbGV4OiAwLjA1IDEgYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRpbWUtcGVyaW9kPio+YnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBjb2xvcjogdmFyKC0tdGFza3MtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDMuNXJlbTtcXG4gICAgd2lkdGg6IDZyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXhcXG59XFxuXFxuXFxuLnByb2plY3RzLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IDE7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5wcm9qZWN0cy1jb2xsYXBzZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMXJlbSAwcmVtIDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzLjVyZW07XFxuICAgIHdpZHRoOiA2cmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcblxcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxdnc7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDF2dztcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnZoO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAuMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTlweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LmVkaXRhYmxlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ucHJvamVjdC5hY3RpdmUge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Qtd3JhcHBlcj5idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogOHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2tzLWNvbG9yKTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICBmbGV4OiAwO1xcbn1cXG5cXG4ucHJvamVjdC13cmFwcGVyPi5lZGl0LWJ1dHRvbiB7XFxuICAgIGZsZXg6IDA7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIG1hcmdpbi1yaWdodDogMC4ycmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hZGQtcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG5iciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgbWFyZ2luLXRvcDogLTJweDtcXG59XFxuXFxuXFxuLnRvcC1sZWZ0LXNpZGViYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BsZWZ0c2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3dhdmUtaGFpa2VpLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IC0xMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBncmlkLWNvbHVtbjogMS8yO1xcbiAgICBncmlkLXJvdzogMS8yO1xcbiAgICBib3gtc2hhZG93OiA2cHggNnB4IDVweCBncmF5O1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICBncmlkLWNvbHVtbjogMi8zO1xcbiAgICBncmlkLXJvdzogMi8zO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrcy1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnRvZGF5LXdyYXBwZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLmNvbXBsZXRlZC13cmFwcGVyIHtcXG4gICAgZmxleDogMC41O1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG59XFxuXFxuLnRvZGF5LWhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbXBsZXRlZC1oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcz4udG9kYXkge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcblxcbn1cXG5cXG4udGFza3M+LmNvbXBsZXRlZCB7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5ub3RlcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5vdGVzLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZDogdXJsKG5vdGVib29rLWVkaXQucG5nKSByZXBlYXQteTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIGF1dG87XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm5vdGVzPi5ub3Rlcy1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubm90ZXM+dGV4dGFyZWEge1xcbiAgICBmbGV4OiAxO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwobm90ZWJvb2stZWRpdC5wbmcpIHJlcGVhdC15O1xcbiAgICBmb250OiBub3JtYWwgMTdweCB2ZXJkYW5hO1xcbiAgICBsaW5lLWhlaWdodDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMTAlIGF1dG87XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBsZXQgcHJvamVjdEFycmF5ID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QobmFtZSkge1xuICAgIGNvbnN0IHRhc2tBcnJheSA9IFtdO1xuICAgIGNvbnN0IG5vdGUgPSBcIlwiO1xuICAgIHJldHVybiB7IG5hbWUsIHRhc2tBcnJheSwgbm90ZSB9O1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdEFycmF5XCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSkpO1xufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUHJvamVjdEFycmF5ID0gKCkgPT4ge1xuICAgIHByb2plY3RBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0QXJyYXlcIikgfHwgXCJbXVwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tUb1Byb2plY3QgPSAodGFzaywgcHJvamVjdCkgPT4ge1xuICAgIHJldHVybiBwcm9qZWN0LnRhc2tBcnJheS5wdXNoKHRhc2spO1xufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0ID0gKHRhc2ssIHByb2plY3QpID0+IHtcbiAgICBkZWxldGUgcHJvamVjdC50YXNrQXJyYXlbcHJvamVjdC50YXNrQXJyYXkuaW5kZXhPZih0YXNrKV07XG59XG5cbmV4cG9ydCBjb25zdCBtb3ZlVGFza1RvQW5vdGhlclByb2plY3QgPSAodGFzaywgb2xkUHJvamVjdCwgbmV3UHJvamVjdCkgPT4ge1xuICAgIGFkZFRhc2tUb1Byb2plY3QodGFzaywgbmV3UHJvamVjdCk7XG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KHRhc2ssIG9sZFByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCgpIHtcbiAgICBsZXQgbGFzdFByb2plY3ROYW1lTnVtYmVyID0gMTtcbiAgICBjb25zdCByZWcgPSAvW1BwXXJvamVjdCAoXFxkKikvO1xuICAgIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoID4gMCAmJiByZWcudGVzdChwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aCAtIDFdLm5hbWUpKSB7XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IHByb2plY3RBcnJheVtwcm9qZWN0QXJyYXkubGVuZ3RoIC0gMV0ubmFtZS5tYXRjaCgvW1BwXXJvamVjdCAoXFxkKikvKVsxXTtcbiAgICB9XG4gICAgaWYgKHByb2plY3RBcnJheS5sZW5ndGggPCAxKSB7XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IDE7XG4gICAgfVxuICAgIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoID4gMSAmJiAhcmVnLnRlc3QocHJvamVjdEFycmF5W3Byb2plY3RBcnJheS5sZW5ndGggLSAxXS5uYW1lKSkge1xuICAgICAgICBsZXQgaGlnaGVzdE51bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVnLnRlc3QocHJvamVjdEFycmF5W2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3RBcnJheVtpXS5uYW1lLm1hdGNoKC9bUHBdcm9qZWN0IChcXGQqKS8pWzFdID4gaGlnaGVzdE51bSkge1xuICAgICAgICAgICAgICAgICAgICBoaWdoZXN0TnVtID0gcHJvamVjdEFycmF5W2ldLm5hbWUubWF0Y2goL1tQcF1yb2plY3QgKFxcZCopLylbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxhc3RQcm9qZWN0TmFtZU51bWJlciA9IHBhcnNlSW50KGhpZ2hlc3ROdW0pICsgMTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gUHJvamVjdChgUHJvamVjdCAke2xhc3RQcm9qZWN0TmFtZU51bWJlcn1gKTtcblxuICAgIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAobmV3UHJvamVjdC5uYW1lID09PSBwcm9qZWN0QXJyYXlbcHJvamVjdEFycmF5Lmxlbmd0aCAtIDFdLm5hbWUpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3QubmFtZSA9IGBQcm9qZWN0ICR7cGFyc2VJbnQobGFzdFByb2plY3ROYW1lTnVtYmVyKSArIDF9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZG9uZSkge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUgfVxufVxuXG5leHBvcnQgY29uc3QgY2hlY2tUYXNrID0gKHRhc2spID0+IHtcbiAgICByZXR1cm4gdGFzay5kb25lID0gdHJ1ZTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuY2hlY2tUYXNrID0gKHRhc2spID0+IHtcbiAgICByZXR1cm4gdGFzay5kb25lID0gZmFsc2U7XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgZGF0ZWZucywgeyBlbmRPZk1vbnRoLCBlbmRPZlRvZGF5IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgUHJvamVjdCwgeyBhZGRUYXNrVG9Qcm9qZWN0LCBjcmVhdGVOZXdQcm9qZWN0LCBwcm9qZWN0QXJyYXksIHJlbW92ZVRhc2tGcm9tUHJvamVjdCwgdXBkYXRlTG9jYWxTdG9yYWdlLCB1cGRhdGVQcm9qZWN0QXJyYXkgfSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2ssIHsgY2hlY2tUYXNrIH0gZnJvbSAnLi90YXNrLmpzJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICcuL2VkaXQucG5nJztcblxuLy8gRGVjbGFyZSB0aGUgUHJvamVjdGxpc3QgRGl2IGFuZCBcIkFkZCBQcm9qZWN0XCIgYnV0dG9uLlxuY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtcHJvamVjdFwiKTtcblxuLy8gRGVjbGFyZSB0aGUgY29sbGFwc2libGUgXCJQcm9qZWN0c1wiIGRpdiBhbmQgYWRkIGEgbGlzdGVuZXIgdGhhdCB0b2dnbGVzIHRoZSBwcm9qZWN0cyB1bmRlcm5lYXRoIHRoZSBQcm9qZWN0cyBjb2xsYXBzaWJsZS5cbmNvbnN0IHByb2plY3RDb2xsYXBzaWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtY29sbGFwc2VcIik7XG5wcm9qZWN0Q29sbGFwc2libGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVByb2plY3RzKTtcblxudXBkYXRlUHJvamVjdEFycmF5KCk7XG5cbi8vIEN1cnJlbnQgYWN0aXZlIHByb2plY3RcbmxldCBjdXJyZW50SW5kZXggPSAwO1xubGV0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdEFycmF5W2N1cnJlbnRJbmRleF07XG5cbi8vIFNldHMgdGhlIEN1cnJlbnRwcm9qZWN0J3Mgbm90ZSB2YXJpYWJsZSB0byB0aGUgaW5wdXQgb2YgdGhlIHVzZXIgaW4gdGhlIG5vdGVzIHRleHRhcmVhLlxuY29uc3Qgbm90ZXNBcmVhRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlcy10ZXh0YXJlYVwiKTtcbm5vdGVzQXJlYURpdi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGN1cnJlbnRQcm9qZWN0Lm5vdGUgPSBub3Rlc0FyZWFEaXYudmFsdWU7XG4gICAgcHJvamVjdEFycmF5W2N1cnJlbnRJbmRleF0ubm90ZSA9IGN1cnJlbnRQcm9qZWN0Lm5vdGU7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG59KVxuXG5sZXQgcHJvamVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XG5cblxuXG4vLyBSZW5kZXJzIHRoZSBwcm9qZWN0cyBsaXN0IGZvciB0aGUgZmlyc3QgdGltZS5cbnVwZGF0ZVByb2plY3RBcnJheSgpO1xuXG4vLyBUb2dnbGVzIHByb2plY3RzIHVuZGVybmVhdGggdGhlIFByb2plY3RzIGNvbGxhcHNpYmxlLlxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdHMoKSB7XG4gICAgcHJvamVjdExpc3Quc3R5bGUuZGlzcGxheSA9IHByb2plY3RMaXN0LnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xuICAgIHByb2plY3RMaXN0LnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIgPyBwcm9qZWN0Q29sbGFwc2libGUuaW5uZXJIVE1MID0gXCJQcm9qZWN0czxicj7ijIRcIiA6IHByb2plY3RDb2xsYXBzaWJsZS5pbm5lckhUTUwgPSBcIlByb2plY3RzPGJyPi1cIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPT0gXCJmbGV4XCIgPyBcIm5vbmVcIiA6IFwiZmxleFwiO1xufVxuXG4vLyBSZW5kZXJzIHRoZSBwcm9qZWN0cyBsaXN0IGZvciB0aGUgZmlyc3QgdGltZS5cbnVwZGF0ZVByb2plY3RBcnJheSgpO1xucmVuZGVyUHJvamVjdHNMaXN0KCk7XG5yZW5kZXJQcm9qZWN0KCk7XG5cbmxldCBzZWxlY3RlZFByb2plY3QgPSBcIlwiO1xuXG5cbi8vIFJlbmRlcnMgdGhlIHByb2plY3RzIGxpc3QgYW5kIGRlbGV0ZSBidXR0b25zLCBhbmQgaGFuZGxlcyBsb2dpYy5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzTGlzdCgpIHtcblxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdFByb2plY3REaXYocHJvamVjdCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXdyYXBwZXJcIik7XG5cblxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJvbmJsdXJcIiwgXCJ0aGlzLmNvbnRlbnRFZGl0YWJsZT0nZmFsc2UnXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCAxMyk7XG5cbiAgICAgICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20ocHJvamVjdFdyYXBwZXIucGFyZW50RWxlbWVudC5jaGlsZHJlbikuaW5kZXhPZihwcm9qZWN0V3JhcHBlcik7XG4gICAgICAgICAgICBpZiAocHJvamVjdERpdi52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XS5uYW1lID0gcHJvamVjdERpdi52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb2plY3REaXYudmFsdWUgPSBwcm9qZWN0QXJyYXlbaW5kZXhdLm5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnJlYWRPbmx5ID0gdHJ1ZTtcbiAgICAgICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LnJlbW92ZShcImVkaXRhYmxlXCIpO1xuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0QXJyYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJvbmJsdXJcIiwgXCJ0aGlzLmNvbnRlbnRFZGl0YWJsZT0nZmFsc2UnXCIpO1xuICAgICAgICBwcm9qZWN0RGl2LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWJ1dHRvblwiKTtcbiAgICAgICAgZWRpdEJ1dHRvbi5zcmMgPSBlZGl0SWNvbjtcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdERpdi5yZWFkT25seSA9IGZhbHNlO1xuICAgICAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiZWRpdGFibGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LmZvY3VzKCk7XG4gICAgICAgICAgICBwcm9qZWN0RGl2LnNlbGVjdCgpO1xuICAgICAgICB9KVxuXG5cblxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKHByb2plY3RXcmFwcGVyLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pLmluZGV4T2YocHJvamVjdFdyYXBwZXIpO1xuICAgICAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24ucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0QXJyYXkubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QoKTtcbiAgICAgICAgICAgICAgICBub3Rlc0FyZWFEaXYudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RzTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIH0pXG5cblxuICAgICAgICBwcm9qZWN0V3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcbiAgICAgICAgcHJvamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgICAgIHByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgICAgIHJldHVybiBwcm9qZWN0V3JhcHBlcjtcbiAgICB9XG4gICAgcHJvamVjdEFycmF5LmZvckVhY2goKHByb2opID0+IHtcbiAgICAgICAgY29uc3QgbmV3UHJvaiA9IGNvbnN0cnVjdFByb2plY3REaXYocHJvaik7XG4gICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKG5ld1Byb2opO1xuICAgIH0pXG5cbiAgICBwcm9qZWN0RGl2cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICBwcm9qZWN0RGl2cy5mb3JFYWNoKHByb2ogPT4gcHJvai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzd2l0Y2hDdXJyZW50UHJvamVjdCggcHJvaik7XG4gICAgfSkpXG59XG5cbi8vIFJlc2V0cyB0aGUgUHJvamVjdHMgTGlzdCBodG1sIChjbGVhcnMgaXQpXG5mdW5jdGlvbiBjbGVhclByb2plY3RzTGlzdCgpIHtcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG51cGRhdGVQcm9qZWN0QXJyYXkoKTtcblxuLy8gQWRkIG5ldyBwcm9qZWN0IGV2ZW50bGlzdGVuZXJcbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhclByb2plY3RzTGlzdCgpO1xuICAgIGN1cnJlbnRQcm9qZWN0ID0gY3JlYXRlTmV3UHJvamVjdCgpO1xuICAgIHJlbmRlclByb2plY3RzTGlzdCgpXG4gICAgc3dpdGNoQ3VycmVudFByb2plY3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpLmxhc3RDaGlsZC5maXJzdENoaWxkKTtcbiAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIikubGFzdENoaWxkKTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbn0pXG5cblxuXG5cbi8vIFJlbmRlciBub3RlcyBhbmQgdGFza3Mgb2YgdGhlIHNlbGVjdGVkIHByb2plY3RcbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoKSB7XG4gICAgbm90ZXNBcmVhRGl2LnZhbHVlID0gY3VycmVudFByb2plY3Qubm90ZTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoQ3VycmVudFByb2plY3QoIHByb2opIHtcbiAgICBjdXJyZW50SW5kZXggPSBBcnJheS5mcm9tKHByb2oucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKS5pbmRleE9mKHByb2oucGFyZW50RWxlbWVudCk7XG4gICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0QXJyYXlbY3VycmVudEluZGV4XTtcbiAgICBwcm9qZWN0RGl2cy5mb3JFYWNoKHByb2ogPT4gcHJvai5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICBwcm9qLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgcmVuZGVyUHJvamVjdCgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9