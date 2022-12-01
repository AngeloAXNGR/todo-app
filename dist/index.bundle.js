"use strict";
(self["webpackChunktodo_app"] = self["webpackChunktodo_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-variable.woff2 */ "./src/styles/fonts/Oswald-variable.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Oswald-variable.woff */ "./src/styles/fonts/Oswald-variable.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Fonts */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight:300;\r\n\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight:400;\r\n\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\r\n  font-weight:600;\r\n\r\n}\r\n\r\n\r\n:root{\r\n  /* --header-color: #05386B;\r\n  --project-section-color: #8EE4AF;\r\n  --task-section-color: #9fffc4; */\r\n\r\n\r\n  --header-color: #0D4C92;\r\n  --project-section-color: #A0E4CB;\r\n  --task-section-color: #CFF5E7;\r\n\r\n}\r\n\r\nbody{\r\n  font-family: \"Oswald\";\r\n  margin:0;\r\n  padding:0;\r\n  /* box-sizing:border-box; */\r\n  position:relative;\r\n} \r\n\r\n\r\nheader{\r\n  background-color: var(--header-color);\r\n  color:white;\r\n  font-size: 1.25rem;\r\n  padding: 10px 0 10px 40px;\r\n  display:flex;\r\n  align-items: center;\r\n  gap: 32px;\r\n}\r\n\r\nheader > h1{\r\n  margin: 0;\r\n}\r\n\r\n.main-content{\r\n  display:flex;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n/* Projects Section */\r\n.project-list{\r\n  background-color: var(--project-section-color);\r\n  border-right: 1px solid #32a077;\r\n  flex:1;\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project-header,\r\n.project-list-container{\r\n  width: 100%;\r\n}\r\n\r\n.project-header{\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #32a077;\r\n}\r\n\r\n.project-list-container{\r\n  padding-left: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.project-header > h1{\r\n  margin:0 0 0 20px;\r\n}\r\n\r\n.add-project-button{\r\n  margin-right: 20px;\r\n  cursor:pointer;\r\n}\r\n\r\n.project-list > button{\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-btn{\r\n  border:none;\r\n  display:flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 80%;\r\n  font-size: 1rem;\r\n  border-radius: 5px;\r\n  font-weight: 300;\r\n  padding: 5px;\r\n}\r\n\r\n.active{\r\n  background-color: #02cf84;\r\n  font-weight: 400;\r\n}\r\n\r\n.project-btn:hover{\r\n  background-color: #02cf84;\r\n}\r\n\r\n.left-btn-section,.right-btn-section{\r\n  cursor:pointer;\r\n}\r\n\r\n.left-btn-section{\r\n  display:flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.left-btn-section > p{\r\n  margin: 0;\r\n  width:inherit;\r\n}\r\n\r\n.project-form-container,\r\n.task-form-container{\r\n  width: 30%;\r\n  position:absolute;\r\n  top: 20%;\r\n  left:0;\r\n  right:0;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n  overflow:hidden;\r\n  background-color: white;\r\n  display:none;\r\n  flex-direction: column;\r\n}\r\n\r\n.edit-task-form-container{\r\n  width: 30%;\r\n  position:absolute;\r\n  top: 20%;\r\n  left:0;\r\n  right:0;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n  overflow:hidden;\r\n  background-color: white;\r\n  display:flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-header{\r\n  width: 100%;\r\n  background-color: var(--header-color);\r\n  text-align:center;\r\n  padding: 20px;\r\n  box-sizing:border-box;\r\n}\r\n\r\n.form-header > h1{\r\n  margin: 0;\r\n  color:white;\r\n}\r\n\r\n.form-inputs{\r\n  display:flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  align-items: stretch;\r\n}\r\n\r\n.form-row > input{\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px 20px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form-row:nth-child(2){\r\n  display:flex;\r\n  gap: 10px;\r\n}\r\n\r\n.form-row > select{\r\n  font-size: 1.5rem;\r\n  text-align:center;\r\n}\r\n\r\n.project-form-buttons,\r\n.task-form-buttons,\r\n.edit-task-form-buttons{\r\n  display:flex;\r\n  justify-content: end;\r\n  gap: 20px;\r\n}\r\n\r\n\r\n.project-form-buttons > button,\r\n.task-form-buttons > button,\r\n.edit-task-form-buttons > button{\r\n  padding: 10px 20px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n/* ============================ */\r\n\r\n\r\n/* Tasks Section */\r\n\r\n\r\n/* ============================ */\r\n.task-list{\r\n  flex:3;\r\n  background-color: var(--task-section-color);\r\n  display:flex;\r\n  flex-direction: column;\r\n  padding: 0 20px;\r\n}\r\n\r\n.task-header{\r\n  width: 100%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.task-header > h1{\r\n  margin: 0;\r\n  text-align:center;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.add-task-section{\r\n  display:flex;\r\n  border-bottom: 2px solid black;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding:0 20%;\r\n  margin: 20px 10% 0 10%;\r\n}\r\n.add-task-section > h1{\r\n  margin:0;\r\n}\r\n\r\n\r\n\r\n.task-list-container{\r\n  display:flex;\r\n  flex-direction:column;\r\n  margin-top: 20px;\r\n}\r\n\r\n.task-item{\r\n  display:grid;\r\n  grid-template-columns:repeat(2, 1fr);\r\n  margin:0 20%;\r\n}\r\n.left-task-item-section{\r\n  display:flex;\r\n  gap: 20px;\r\n}\r\n\r\n.right-task-item-section{\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.left-task-item-section > h1,\r\n.right-task-item-section > h1{\r\n  font-size: 1.5rem;\r\n  font-weight: 300;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Fonts */\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url('./fonts/Oswald-variable.woff2') format('woff2'),\r\n    url('./fonts/Oswald-variable.woff') format('woff');\r\n  font-weight:300;\r\n\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url('./fonts/Oswald-variable.woff2') format('woff2'),\r\n    url('./fonts/Oswald-variable.woff') format('woff');\r\n  font-weight:400;\r\n\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Oswald';\r\n  src: url('./fonts/Oswald-variable.woff2') format('woff2'),\r\n    url('./fonts/Oswald-variable.woff') format('woff');\r\n  font-weight:600;\r\n\r\n}\r\n\r\n\r\n:root{\r\n  /* --header-color: #05386B;\r\n  --project-section-color: #8EE4AF;\r\n  --task-section-color: #9fffc4; */\r\n\r\n\r\n  --header-color: #0D4C92;\r\n  --project-section-color: #A0E4CB;\r\n  --task-section-color: #CFF5E7;\r\n\r\n}\r\n\r\nbody{\r\n  font-family: \"Oswald\";\r\n  margin:0;\r\n  padding:0;\r\n  /* box-sizing:border-box; */\r\n  position:relative;\r\n} \r\n\r\n\r\nheader{\r\n  background-color: var(--header-color);\r\n  color:white;\r\n  font-size: 1.25rem;\r\n  padding: 10px 0 10px 40px;\r\n  display:flex;\r\n  align-items: center;\r\n  gap: 32px;\r\n}\r\n\r\nheader > h1{\r\n  margin: 0;\r\n}\r\n\r\n.main-content{\r\n  display:flex;\r\n  min-height: 100vh;\r\n}\r\n\r\n\r\n/* Projects Section */\r\n.project-list{\r\n  background-color: var(--project-section-color);\r\n  border-right: 1px solid #32a077;\r\n  flex:1;\r\n  display:flex;\r\n  flex-direction:column;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project-header,\r\n.project-list-container{\r\n  width: 100%;\r\n}\r\n\r\n.project-header{\r\n  display:flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #32a077;\r\n}\r\n\r\n.project-list-container{\r\n  padding-left: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 5px;\r\n}\r\n\r\n.project-header > h1{\r\n  margin:0 0 0 20px;\r\n}\r\n\r\n.add-project-button{\r\n  margin-right: 20px;\r\n  cursor:pointer;\r\n}\r\n\r\n.project-list > button{\r\n  cursor: pointer;\r\n  padding: 10px 20px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.project-btn{\r\n  border:none;\r\n  display:flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 80%;\r\n  font-size: 1rem;\r\n  border-radius: 5px;\r\n  font-weight: 300;\r\n  padding: 5px;\r\n}\r\n\r\n.active{\r\n  background-color: #02cf84;\r\n  font-weight: 400;\r\n}\r\n\r\n.project-btn:hover{\r\n  background-color: #02cf84;\r\n}\r\n\r\n.left-btn-section,.right-btn-section{\r\n  cursor:pointer;\r\n}\r\n\r\n.left-btn-section{\r\n  display:flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.left-btn-section > p{\r\n  margin: 0;\r\n  width:inherit;\r\n}\r\n\r\n.project-form-container,\r\n.task-form-container{\r\n  width: 30%;\r\n  position:absolute;\r\n  top: 20%;\r\n  left:0;\r\n  right:0;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n  overflow:hidden;\r\n  background-color: white;\r\n  display:none;\r\n  flex-direction: column;\r\n}\r\n\r\n.edit-task-form-container{\r\n  width: 30%;\r\n  position:absolute;\r\n  top: 20%;\r\n  left:0;\r\n  right:0;\r\n  margin: 0 auto;\r\n  border-radius: 5px;\r\n  overflow:hidden;\r\n  background-color: white;\r\n  display:flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-header{\r\n  width: 100%;\r\n  background-color: var(--header-color);\r\n  text-align:center;\r\n  padding: 20px;\r\n  box-sizing:border-box;\r\n}\r\n\r\n.form-header > h1{\r\n  margin: 0;\r\n  color:white;\r\n}\r\n\r\n.form-inputs{\r\n  display:flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  padding: 20px;\r\n  align-items: stretch;\r\n}\r\n\r\n.form-row > input{\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px 20px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.form-row:nth-child(2){\r\n  display:flex;\r\n  gap: 10px;\r\n}\r\n\r\n.form-row > select{\r\n  font-size: 1.5rem;\r\n  text-align:center;\r\n}\r\n\r\n.project-form-buttons,\r\n.task-form-buttons,\r\n.edit-task-form-buttons{\r\n  display:flex;\r\n  justify-content: end;\r\n  gap: 20px;\r\n}\r\n\r\n\r\n.project-form-buttons > button,\r\n.task-form-buttons > button,\r\n.edit-task-form-buttons > button{\r\n  padding: 10px 20px;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n\r\n/* ============================ */\r\n\r\n\r\n/* Tasks Section */\r\n\r\n\r\n/* ============================ */\r\n.task-list{\r\n  flex:3;\r\n  background-color: var(--task-section-color);\r\n  display:flex;\r\n  flex-direction: column;\r\n  padding: 0 20px;\r\n}\r\n\r\n.task-header{\r\n  width: 100%;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.task-header > h1{\r\n  margin: 0;\r\n  text-align:center;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.add-task-section{\r\n  display:flex;\r\n  border-bottom: 2px solid black;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding:0 20%;\r\n  margin: 20px 10% 0 10%;\r\n}\r\n.add-task-section > h1{\r\n  margin:0;\r\n}\r\n\r\n\r\n\r\n.task-list-container{\r\n  display:flex;\r\n  flex-direction:column;\r\n  margin-top: 20px;\r\n}\r\n\r\n.task-item{\r\n  display:grid;\r\n  grid-template-columns:repeat(2, 1fr);\r\n  margin:0 20%;\r\n}\r\n.left-task-item-section{\r\n  display:flex;\r\n  gap: 20px;\r\n}\r\n\r\n.right-task-item-section{\r\n  display:flex;\r\n  align-items:center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.left-task-item-section > h1,\r\n.right-task-item-section > h1{\r\n  font-size: 1.5rem;\r\n  font-weight: 300;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");


document.addEventListener('DOMContentLoaded', _ui__WEBPACK_IMPORTED_MODULE_0__["default"].loadHomePage)

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");

class Project{
  constructor(projectTitle){
    this.projectTitle = projectTitle;
    this.tasks = [];
    // this.tasks.push(new Task('Wash the Dishes', '2005-03-15', 'Low'));
    // this.tasks.push(new Task('Program a Game', '2005-03-15', 'Low'));
    // this.tasks.push(new Task('Water the Plants', '2005-03-15', 'Low'));
    // this.tasks.push(new Task('Sweep the Floor', '2005-03-15', 'Low'));
  }

  getProjectTitle(){
    return this.projectTitle;
  }

  setProjectTitle(projectTitle){
    this.projectTitle = projectTitle;
  }

  addTask(task){
    this.tasks.push(task);
  }


  setTasks(tasks){
    this.tasks = tasks;
  }

  getTasks(){
    return this.tasks;
  }

  getTask(taskTitle){
    // console.log('getTask() is called');
    // console.log(this.tasks.find((task) => task.getTitle() === taskTitle))
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  deleteTask(taskTitle){
    const taskToDelete = this.tasks.find(
      (task) => task.getTitle() === taskTitle
    )
    this.tasks.splice(this.tasks.indexOf(taskToDelete), 1)
  }

  updateTask(taskTitle, newTitle, newDueDate, newPriority){
    const taskToUpdate =  this.tasks.find((task) => task.getTitle() === taskTitle);
    taskToUpdate.setTitle(newTitle)
    taskToUpdate.setDueDate(newDueDate);
    taskToUpdate.setPriority(newPriority);
  }
}

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
  constructor(title, dueDate, priority){
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getTitle(){
    return this.title
  }

  getDueDate(){
    return this.dueDate;
  }

  getPriority(){
    return this.priority;
  }

  setTitle(title){
    this.title = title
  }

  setDueDate(dueDate){
    this.dueDate = dueDate;
  }

  setPriority(priority){
    this.priority = priority;
  }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



class Todo{
  constructor(){
    this.projects = []
    // this.projects.push(new Project('Web Development'));
    // this.projects.push(new Project('Game Development'));
    // this.projects.push(new Project('Database Management'));
    // this.projects.push(new Project('Coding Exercises'));
  }


  setProjects(projects){
    this.projects = projects;
  }

  getProjects(){
    return this.projects;
  }

  getProject(projectTitle) {
    console.log(this.projects.find((project) => project.getProjectTitle() === projectTitle));
    return this.projects.find((project) => project.getProjectTitle() === projectTitle);
  }

  addProject(project){
    this.projects.push(project);
  }

  deleteProject(projectTitle){
    const projectToDelete = this.projects.find(
      (project) => project.getProjectTitle() === projectTitle
    )
    this.projects.splice(this.projects.indexOf(projectToDelete), 1)
    
  }
}

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_header_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/header-icon.png */ "./src/assets/header-icon.png");
/* harmony import */ var _assets_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/trash.png */ "./src/assets/trash.png");
/* harmony import */ var _assets_project_list_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/project-list.png */ "./src/assets/project-list.png");
/* harmony import */ var _assets_add_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/add.png */ "./src/assets/add.png");
/* harmony import */ var _assets_edit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/edit.png */ "./src/assets/edit.png");









class UI{
  static loadHomePage(){
    UI.createHeaderDiv();
    UI.createMainContentDiv(UI.createProjectListDiv(), UI.createTaskListDiv());
    UI.loadForms();
    UI.loadButtons();
    UI.loadProjects();

  }


  static saveTodo(data){
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  static getTodo(){
    let todo = Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](), JSON.parse(localStorage.getItem('todoList')));

    // Associate each project item with Project Class in order to have access to Project instance methods 
    // without doing this, each project item are object literal inside the todoList array which does not have access to Project class methods
    todo.setProjects(
      todo
      .getProjects()
      .map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__["default"](), project))
    );

    //Associate each task item with Task Class in order to have access to Task instance methods 
    // without doing this, each project item are object literal inside the project array which does not have access to Task methods
    todo
      .getProjects()
      .forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_1__["default"](), task))));

    console.log(todo);
    // return list of projects
    return todo;
  }


  // Project Data Manipulation Functions
  static loadProjects(){
    let projects = UI.getTodo();
    projects
      .getProjects()
      .forEach((project) => {
        UI.createProjectItem(project);
      });

  }  

  static addProject(project){
    let todo =  UI.getTodo();
    UI.refreshProjectList();
    todo.addProject(project);
    UI.saveTodo(todo);
    UI.loadProjects();
  }

  static deleteProject(project){
    let todo = UI.getTodo();
    todo.deleteProject(project);
    UI.refreshProjectList();
    UI.refreshTaskList('');
    UI.saveTodo(todo);
    UI.loadProjects();
  }
  // ***************************

  // Task Data Manipulation Functions
  static loadTasks(projectTitle){
    let project = UI.getTodo();
    project
      .getProject(projectTitle)
      .getTasks()
      .forEach((task) => {
        UI.createTaskItem(task);
      });
    
  }

  static addTask(projectTitle, taskTitle, date, priority){
      let todo = UI.getTodo();
      todo
        .getProject(projectTitle)
        .addTask(new _task__WEBPACK_IMPORTED_MODULE_1__["default"](taskTitle,date,priority ));
      UI.saveTodo(todo)  ;
      UI.refreshTaskList(projectTitle);
      UI.addTaskButton();
      UI.loadTasks(projectTitle);
  }

  static deleteTask(projectTitle, taskTitle){
    let project = UI.getTodo();
    project
      .getProject(projectTitle)
      .deleteTask(taskTitle);
    UI.saveTodo(project);
    UI.refreshTaskList(projectTitle);
    UI.addTaskButton();
    UI.loadTasks(projectTitle);
  }

  static getTask(projectTitle, taskTitle){
    let project = UI.getTodo();
    let taskObject = project
                      .getProject(projectTitle)
                      .getTask(taskTitle);
    return taskObject
  };
  // ***************************

  // General UI Layout
  static createHeaderDiv(){
    let element = document.createElement('header');
    element.innerHTML = `
      <img src="${_assets_header_icon_png__WEBPACK_IMPORTED_MODULE_3__}">
      <h1>Todo Application</h1>
    `
    document.body.appendChild(element);
  }

  static createMainContentDiv(projectList, taskList){
    let element = document.createElement('div');
    element.classList.add('main-content');
    element.append(projectList, taskList);
    document.body.appendChild(element);
  }

  static createTaskListDiv(){
    let element = document.createElement('div');
    element.classList.add('task-list');    
    element.innerHTML = `
      <div class="task-header">
        <h1 class="project-title"></h1>
      </div>

      <div class="task-list-container">

      </div>
    `
    return element;
  }

  static createProjectListDiv(){
    let element = document.createElement('div');
    element.classList.add('project-list');
    element.innerHTML = `
      <div class="project-header">
        <h1>Projects</h1>
      </div>
    
      <div class="project-list-container">

      </div>
      `
    return element;
  }

  // ***************************

  // DOM Related Functions

  static refreshTaskList(projectTitle){
    let taskList = document.querySelector('.task-list');
    if(projectTitle === ''){
      taskList.innerHTML = `

    `
    }else{
      taskList.innerHTML = `
      <div class="task-header">
        <h1 class="project-title">${projectTitle}</h1>
      </div>

      <div class="add-task-section">
        <h1>Tasks(${UI.getTaskCount(projectTitle)})</h1>
      </div>

      <div class="task-list-container">

      </div>
    `
    }

  }

  static getTaskCount(projectTitle){
    const todo = UI.getTodo();
    let taskCount = todo.getProject(projectTitle).getTasks().length
    return taskCount;
  }

  static refreshProjectList(){
    let projectList = document.querySelector('.project-list');
    projectList.innerHTML = `
      <div class="project-header">
        <h1>Projects</h1>
      </div>

      <div class="project-list-container">

      </div>
      `
    UI.addProjectButton();
  }

  static createProjectItem(project){
    const projectList = document.querySelector('.project-list-container');
    const element = document.createElement('div');
    element.classList.add('project-btn');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('left-btn-section');
    projectTitle.innerHTML = `
      <img src="${_assets_project_list_png__WEBPACK_IMPORTED_MODULE_5__}">
      <p>${project.projectTitle}</p>
    `
    projectTitle.addEventListener('click', (e)=>{
      UI.refreshTaskList(e.target.textContent);
      UI.addTaskButton();
      UI.loadTasks(e.target.textContent);

      // Add active state on selected project
      const projectItems = document.querySelectorAll('.project-btn');
      projectItems.forEach((project) => project.classList.remove('active'));
      const projectItem = e.target.parentNode.parentNode;
      projectItem.classList.add('active');
      
    });

    element.appendChild(projectTitle);

    let projectBtnContainer = document.createElement('div')
    projectBtnContainer.classList.add('right-btn-section');

    let deleteBtn = document.createElement('img');
    deleteBtn.src = _assets_trash_png__WEBPACK_IMPORTED_MODULE_4__;

    projectBtnContainer.append(deleteBtn);
    
    deleteBtn.addEventListener('click', (e) =>{
      const projectTitle = e.target.parentNode.parentNode.firstChild.textContent.trim()
      UI.deleteProject(projectTitle);
    })
    element.appendChild(projectBtnContainer);
    projectList.appendChild(element);
  }

  static createTaskItem(task){
    let taskList = document.querySelector('.task-list-container');
    let element = document.createElement('div');
    element.classList.add('task-item');
    let leftTaskSection = document.createElement('div');
    leftTaskSection.classList.add('left-task-item-section');
    leftTaskSection.innerHTML = `
      <input type="checkbox">
      <h1>${task.title}</h1>
    `
    let rightTaskSection = document.createElement('div');
    rightTaskSection.classList.add('right-task-item-section');
    rightTaskSection.innerHTML = `
      <h1>${task.dueDate}</h1>
      <h1>${task.priority}</h1>
    `
    let editBtn = document.createElement('img');
    editBtn.src = _assets_edit_png__WEBPACK_IMPORTED_MODULE_7__;
    editBtn.setAttribute('style', 'width: 24px; height: 24px;');
    editBtn.addEventListener('click', (e)=>{
      const projectTitle = document.querySelector('.active').firstChild.textContent.trim();
      const taskTitle = e.target.parentNode.parentNode.firstChild.textContent.trim();

      let task = UI.getTask(projectTitle,taskTitle);
      UI.renderEditTaskForm(task.title, task.dueDate);
      UI.createEditFormButtons(projectTitle, taskTitle);
      

      // UI.saveTodo(project);
      // UI.refreshTaskList(projectTitle);
      // UI.addTaskButton();
      // UI.loadTasks(projectTitle);

    });

    let deleteBtn = document.createElement('img');
    deleteBtn.src = _assets_trash_png__WEBPACK_IMPORTED_MODULE_4__;
    deleteBtn.setAttribute('style', 'width: 24px; height: 24px;') //temporary
    deleteBtn.addEventListener('click', (e)=>{
      const projectTitle = document.querySelector('.active').firstChild.textContent.trim();
      const taskTitle = e.target.parentNode.parentNode.firstChild.textContent.trim();
      UI.deleteTask(projectTitle, taskTitle);
    })

    rightTaskSection.append(editBtn,deleteBtn);

    element.append(leftTaskSection, rightTaskSection);
    taskList.appendChild(element);
  }
   // ***************************



  // Buttons
  static loadButtons(){
    console.log('loadButtons() is called');
    UI.addProjectButton();
    UI.createProjectFormButtons();
    UI.createTaskFormButtons()
  }

  static addProjectButton(){
    let projectHeader = document.querySelector('.project-header');
    let element = document.createElement('img');
    element.classList.add('add-project-button');
    element.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_6__;
    element.addEventListener('click', () =>{

      let projectForm = document.querySelector('.project-form-container');
      projectForm.style.display = 'flex';
    });
    projectHeader.appendChild(element);
  }


  static addTaskButton(){
    // Temporary placement for add task button is in the header
    let reference = document.querySelector('.add-task-section');
    console.log(reference);

    let element = document.createElement('img');
    element.src = _assets_add_png__WEBPACK_IMPORTED_MODULE_6__;
    element.addEventListener('click', (e)=>{
      let taskForm = document.querySelector('.task-form-container');
      taskForm.style.display = 'flex';
      
    });

    
    element.classList.add('add-task');
    element.textContent = 'Add Task';
    reference.appendChild(element);
  }

  static createProjectFormButtons(){
    let buttonGroup = document.querySelector('.project-form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', UI.submitProjectFormInput )
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeProjectForm);
    buttonGroup.append(confirmBtn, cancelBtn);
  }

  static createTaskFormButtons(){
    let buttonGroup = document.querySelector('.task-form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click', UI.submitTaskFormInput)
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeTaskForm);
    buttonGroup.append(confirmBtn, cancelBtn);
  }

  static functionTest(){
    console.log('test');
  }
  static createEditFormButtons(projectTitle, taskTitle){
    let buttonGroup = document.querySelector('.edit-task-form-buttons')
    let confirmBtn = document.createElement('button');
    confirmBtn.classList.add('confirm-button');
    confirmBtn.textContent = 'Confirm';
    confirmBtn.addEventListener('click',(e) =>{
      UI.submitUpdatedTaskFormInput(projectTitle, taskTitle)
    })
    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel'
    cancelBtn.addEventListener('click', UI.closeEditTaskForm);
    buttonGroup.append(confirmBtn, cancelBtn);
  }
 // ***************************

  // Forms
  static loadForms(){
    UI.createProjectForm();
    UI.createTaskForm();
  }



  static createProjectForm(){
    let element = document.createElement('div');

    element.classList.add('project-form-container');
    element.innerHTML = `
      <div class="form-header">
          <h1>Add Project</h1>
      </div>
      <div class="form-inputs">
        <div class="form-row">
          <input type="text" placeholder="Title" id="project-title">
        </div>
      
        <div class="project-form-buttons">

        </div>
      </div>
    `
    document.body.appendChild(element);
  }

  static submitProjectFormInput(){
    let input = document.querySelector('#project-title');
    let project = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](input.value);
    UI.addProject(project);
    UI.closeProjectForm();
    input.value = '';
  }


  static closeProjectForm(){
    let element = document.querySelector('.project-form-container');
    element.style.display = 'none';
  }


  static createTaskForm(){
    let element = document.createElement('div');
    element.classList.add('task-form-container')
    element.innerHTML = `
      <div class="form-header">
        <h1>Add Task</h1>
      </div>
      <div class="form-inputs">
        <div class="form-row">
          <input type="text" placeholder="Title" id="task-title">
        </div>
        <div class="form-row">
          <input type="date" id="task-date"></input>
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div class="task-form-buttons">

        </div>
    `

    document.body.appendChild(element);
  }

  static renderEditTaskForm(title, dueDate){
    let element = document.createElement('div');
    element.classList.add('edit-task-form-container')
    element.innerHTML = `
      <div class="form-header">
        <h1>Edit Task</h1>
      </div>
      <div class="form-inputs">
        <div class="form-row">
          <input type="text" placeholder="Title" id="updated-task-title" value="${title}">
        </div>
        <div class="form-row">
          <input type="date" id="updated-task-date" value="${dueDate}"></input>
          <select name="priority" id="updated-priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div class="edit-task-form-buttons">

        </div>
    `
    document.body.appendChild(element)
  }

  static submitUpdatedTaskFormInput(projectTitle, taskTitle){
    let newTitle = document.querySelector('#updated-task-title').value;
    let newDueDate = document.querySelector('#updated-task-date').value;
    let newPriority = document.querySelector('#updated-priority').value;
    console.log(newTitle);
    console.log(newDueDate);
    console.log(newPriority);
    let project = UI.getTodo();
    project
      .getProject(projectTitle)
      .updateTask(taskTitle, newTitle, newDueDate, newPriority)
    UI.saveTodo(project);
    UI.refreshTaskList(projectTitle);
    UI.addTaskButton();
    UI.loadTasks(projectTitle);
    UI.closeEditTaskForm();
  }

  static closeEditTaskForm(){
    let element = document.querySelector('.edit-task-form-container');
    document.body.removeChild(element);
  }

  static submitTaskFormInput(){
      const projectTitle = document.querySelector('.active').firstChild.textContent.trim();
      let taskTitle = document.querySelector('#task-title');
      let taskDate = document.querySelector('#task-date');
      let taskPriority = document.querySelector('#priority');
      UI.addTask(projectTitle, taskTitle.value, taskDate.value, taskPriority.value);
      UI.closeTaskForm();

      taskTitle.value = '';
      taskDate.value = '';
      taskPriority.value = 'Low';
  }

  static closeTaskForm(){
    let element = document.querySelector('.task-form-container');
    element.style.display = 'none';
  }
}
 // ***************************



/***/ }),

/***/ "./src/assets/add.png":
/*!****************************!*\
  !*** ./src/assets/add.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9347068135a0a99f2210.png";

/***/ }),

/***/ "./src/assets/edit.png":
/*!*****************************!*\
  !*** ./src/assets/edit.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8fffb97c4c64003404c4.png";

/***/ }),

/***/ "./src/assets/header-icon.png":
/*!************************************!*\
  !*** ./src/assets/header-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a6804e30e50b3a2e6f13.png";

/***/ }),

/***/ "./src/assets/project-list.png":
/*!*************************************!*\
  !*** ./src/assets/project-list.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bac79fa820070ef94f66.png";

/***/ }),

/***/ "./src/assets/trash.png":
/*!******************************!*\
  !*** ./src/assets/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3fa4a352827865d2b3e.png";

/***/ }),

/***/ "./src/styles/fonts/Oswald-variable.woff":
/*!***********************************************!*\
  !*** ./src/styles/fonts/Oswald-variable.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "922d28fed6b2f9ff4292.woff";

/***/ }),

/***/ "./src/styles/fonts/Oswald-variable.woff2":
/*!************************************************!*\
  !*** ./src/styles/fonts/Oswald-variable.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9f5090db66965504a817.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxPQUFPLFlBQVksUUFBUSxLQUFLLE1BQU0sU0FBUyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsUUFBUSxjQUFjLGVBQWUsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLHFEQUFxRCw0QkFBNEIsMkhBQTJILHNCQUFzQixTQUFTLG9CQUFvQiw0QkFBNEIsMkhBQTJILHNCQUFzQixTQUFTLG9CQUFvQiw0QkFBNEIsMkhBQTJILHNCQUFzQixTQUFTLGtCQUFrQixpQ0FBaUMsdUNBQXVDLHFDQUFxQyx3Q0FBd0MsdUNBQXVDLG9DQUFvQyxTQUFTLGFBQWEsOEJBQThCLGVBQWUsZ0JBQWdCLGdDQUFnQywwQkFBMEIsTUFBTSxtQkFBbUIsNENBQTRDLGtCQUFrQix5QkFBeUIsZ0NBQWdDLG1CQUFtQiwwQkFBMEIsZ0JBQWdCLEtBQUssb0JBQW9CLGdCQUFnQixLQUFLLHNCQUFzQixtQkFBbUIsd0JBQXdCLEtBQUssb0RBQW9ELHFEQUFxRCxzQ0FBc0MsYUFBYSxtQkFBbUIsNEJBQTRCLDBCQUEwQixnQkFBZ0IsS0FBSyxvREFBb0Qsa0JBQWtCLEtBQUssd0JBQXdCLG1CQUFtQiwwQkFBMEIscUNBQXFDLHVDQUF1QyxLQUFLLGdDQUFnQyx5QkFBeUIsb0JBQW9CLDZCQUE2QixlQUFlLEtBQUssNkJBQTZCLHdCQUF3QixLQUFLLDRCQUE0Qix5QkFBeUIscUJBQXFCLEtBQUssK0JBQStCLHNCQUFzQix5QkFBeUIsc0JBQXNCLEtBQUsscUJBQXFCLGtCQUFrQixtQkFBbUIscUNBQXFDLDBCQUEwQixpQkFBaUIsc0JBQXNCLHlCQUF5Qix1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLGdDQUFnQyx1QkFBdUIsS0FBSywyQkFBMkIsZ0NBQWdDLEtBQUssNkNBQTZDLHFCQUFxQixLQUFLLDBCQUEwQixtQkFBbUIsMEJBQTBCLGdCQUFnQixrQkFBa0IsS0FBSyw4QkFBOEIsZ0JBQWdCLG9CQUFvQixLQUFLLHlEQUF5RCxpQkFBaUIsd0JBQXdCLGVBQWUsYUFBYSxjQUFjLHFCQUFxQix5QkFBeUIsc0JBQXNCLDhCQUE4QixtQkFBbUIsNkJBQTZCLEtBQUssa0NBQWtDLGlCQUFpQix3QkFBd0IsZUFBZSxhQUFhLGNBQWMscUJBQXFCLHlCQUF5QixzQkFBc0IsOEJBQThCLG1CQUFtQiw2QkFBNkIsS0FBSyxxQkFBcUIsa0JBQWtCLDRDQUE0Qyx3QkFBd0Isb0JBQW9CLDRCQUE0QixLQUFLLDBCQUEwQixnQkFBZ0Isa0JBQWtCLEtBQUsscUJBQXFCLG1CQUFtQiw2QkFBNkIsZ0JBQWdCLG9CQUFvQiwyQkFBMkIsS0FBSywwQkFBMEIsa0JBQWtCLDZCQUE2Qix5QkFBeUIsd0JBQXdCLEtBQUssK0JBQStCLG1CQUFtQixnQkFBZ0IsS0FBSywyQkFBMkIsd0JBQXdCLHdCQUF3QixLQUFLLGlGQUFpRixtQkFBbUIsMkJBQTJCLGdCQUFnQixLQUFLLGdIQUFnSCx5QkFBeUIsd0JBQXdCLEtBQUssMElBQTBJLGFBQWEsa0RBQWtELG1CQUFtQiw2QkFBNkIsc0JBQXNCLEtBQUsscUJBQXFCLGtCQUFrQix3QkFBd0IsS0FBSywwQkFBMEIsZ0JBQWdCLHdCQUF3Qix3QkFBd0IsS0FBSywwQkFBMEIsbUJBQW1CLHFDQUFxQyxxQ0FBcUMsMEJBQTBCLG9CQUFvQiw2QkFBNkIsS0FBSywyQkFBMkIsZUFBZSxLQUFLLHFDQUFxQyxtQkFBbUIsNEJBQTRCLHVCQUF1QixLQUFLLG1CQUFtQixtQkFBbUIsMkNBQTJDLG1CQUFtQixLQUFLLDRCQUE0QixtQkFBbUIsZ0JBQWdCLEtBQUssaUNBQWlDLG1CQUFtQix5QkFBeUIscUNBQXFDLEtBQUssdUVBQXVFLHdCQUF3Qix1QkFBdUIsS0FBSywyQkFBMkI7QUFDNXJhO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDWjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDZnNCO0FBQ007QUFDNUIsOENBQThDLHdEQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUNGbkM7QUFDWDtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDOUJnQztBQUNOO0FBQzFCO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZ0M7QUFDTjtBQUNBO0FBQ3dCO0FBQ1A7QUFDUztBQUNiO0FBQ0U7QUFDekM7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw2Q0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZ0RBQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLDZDQUFJO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isb0RBQVUsQ0FBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBVyxDQUFDO0FBQzlCLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxhQUFhO0FBQ3pCLFlBQVksY0FBYztBQUMxQjtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFRO0FBQzFCLGdEQUFnRCxhQUFhO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBUztBQUM3QixrREFBa0QsYUFBYTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0ZBQWtGLE1BQU07QUFDeEY7QUFDQTtBQUNBLDZEQUE2RCxRQUFRO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09zd2FsZC12YXJpYWJsZS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvbnRzICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6MzAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDo0MDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAvKiAtLWhlYWRlci1jb2xvcjogIzA1Mzg2QjtcXHJcXG4gIC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yOiAjOEVFNEFGO1xcclxcbiAgLS10YXNrLXNlY3Rpb24tY29sb3I6ICM5ZmZmYzQ7ICovXFxyXFxuXFxyXFxuXFxyXFxuICAtLWhlYWRlci1jb2xvcjogIzBENEM5MjtcXHJcXG4gIC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yOiAjQTBFNENCO1xcclxcbiAgLS10YXNrLXNlY3Rpb24tY29sb3I6ICNDRkY1RTc7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG4gIC8qIGJveC1zaXppbmc6Ym9yZGVyLWJveDsgKi9cXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn0gXFxyXFxuXFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggNDBweDtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50e1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByb2plY3RzIFNlY3Rpb24gKi9cXHJcXG4ucHJvamVjdC1saXN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMmEwNzc7XFxyXFxuICBmbGV4OjE7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIsXFxyXFxuLnByb2plY3QtbGlzdC1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVye1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzJhMDc3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lcntcXHJcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOjAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b257XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IGJ1dHRvbntcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnRue1xcclxcbiAgYm9yZGVyOm5vbmU7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjZjg0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnRuOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2Y4NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYnRuLXNlY3Rpb24sLnJpZ2h0LWJ0bi1zZWN0aW9ue1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWJ0bi1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1idG4tc2VjdGlvbiA+IHB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDppbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lcixcXHJcXG4udGFzay1mb3JtLWNvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDowO1xcclxcbiAgcmlnaHQ6MDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5Om5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrLWZvcm0tY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICBsZWZ0OjA7XFxyXFxuICByaWdodDowO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWhlYWRlcntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXRze1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93ID4gaW5wdXR7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93Om50aC1jaGlsZCgyKXtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93ID4gc2VsZWN0e1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1idXR0b25zLFxcclxcbi50YXNrLWZvcm0tYnV0dG9ucyxcXHJcXG4uZWRpdC10YXNrLWZvcm0tYnV0dG9uc3tcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWJ1dHRvbnMgPiBidXR0b24sXFxyXFxuLnRhc2stZm9ybS1idXR0b25zID4gYnV0dG9uLFxcclxcbi5lZGl0LXRhc2stZm9ybS1idXR0b25zID4gYnV0dG9ue1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYXNrcyBTZWN0aW9uICovXFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi50YXNrLWxpc3R7XFxyXFxuICBmbGV4OjM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLXNlY3Rpb24tY29sb3IpO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stc2VjdGlvbntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOjAgMjAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDEwJSAwIDEwJTtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXNlY3Rpb24gPiBoMXtcXHJcXG4gIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW17XFxyXFxuICBkaXNwbGF5OmdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XFxyXFxuICBtYXJnaW46MCAyMCU7XFxyXFxufVxcclxcbi5sZWZ0LXRhc2staXRlbS1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtdGFzay1pdGVtLXNlY3Rpb257XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXRhc2staXRlbS1zZWN0aW9uID4gaDEsXFxyXFxuLnJpZ2h0LXRhc2staXRlbS1zZWN0aW9uID4gaDF7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFVBQVU7QUFDVjtFQUNFLHFCQUFxQjtFQUNyQjswREFDb0Q7RUFDcEQsZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7MERB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RUFDVCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFFBQVE7QUFDVjs7OztBQUlBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogRm9udHMgKi9cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXHJcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL09zd2FsZC12YXJpYWJsZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgdXJsKCcuL2ZvbnRzL09zd2FsZC12YXJpYWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDozMDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcclxcbiAgc3JjOiB1cmwoJy4vZm9udHMvT3N3YWxkLXZhcmlhYmxlLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoJy4vZm9udHMvT3N3YWxkLXZhcmlhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OjQwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxyXFxuICBzcmM6IHVybCgnLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybCgnLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6NjAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG46cm9vdHtcXHJcXG4gIC8qIC0taGVhZGVyLWNvbG9yOiAjMDUzODZCO1xcclxcbiAgLS1wcm9qZWN0LXNlY3Rpb24tY29sb3I6ICM4RUU0QUY7XFxyXFxuICAtLXRhc2stc2VjdGlvbi1jb2xvcjogIzlmZmZjNDsgKi9cXHJcXG5cXHJcXG5cXHJcXG4gIC0taGVhZGVyLWNvbG9yOiAjMEQ0QzkyO1xcclxcbiAgLS1wcm9qZWN0LXNlY3Rpb24tY29sb3I6ICNBMEU0Q0I7XFxyXFxuICAtLXRhc2stc2VjdGlvbi1jb2xvcjogI0NGRjVFNztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIjtcXHJcXG4gIG1hcmdpbjowO1xcclxcbiAgcGFkZGluZzowO1xcclxcbiAgLyogYm94LXNpemluZzpib3JkZXItYm94OyAqL1xcclxcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxyXFxufSBcXHJcXG5cXHJcXG5cXHJcXG5oZWFkZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbiAgY29sb3I6d2hpdGU7XFxyXFxuICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxuICBwYWRkaW5nOiAxMHB4IDAgMTBweCA0MHB4O1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWNvbnRlbnR7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdHMgU2VjdGlvbiAqL1xcclxcbi5wcm9qZWN0LWxpc3R7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9qZWN0LXNlY3Rpb24tY29sb3IpO1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMyYTA3NztcXHJcXG4gIGZsZXg6MTtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlcixcXHJcXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXJ7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMmEwNzc7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVye1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46MCAwIDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbntcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0ID4gYnV0dG9ue1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG57XFxyXFxuICBib3JkZXI6bm9uZTtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmNmODQ7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idG46aG92ZXJ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjZjg0O1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1idG4tc2VjdGlvbiwucmlnaHQtYnRuLXNlY3Rpb257XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYnRuLXNlY3Rpb257XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWJ0bi1zZWN0aW9uID4gcHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOmluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0tY29udGFpbmVyLFxcclxcbi50YXNrLWZvcm0tY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICBsZWZ0OjA7XFxyXFxuICByaWdodDowO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6bm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRhc2stZm9ybS1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6MDtcXHJcXG4gIHJpZ2h0OjA7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taGVhZGVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1oZWFkZXIgPiBoMXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1pbnB1dHN7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgPiBpbnB1dHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3c6bnRoLWNoaWxkKDIpe1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1yb3cgPiBzZWxlY3R7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWJ1dHRvbnMsXFxyXFxuLnRhc2stZm9ybS1idXR0b25zLFxcclxcbi5lZGl0LXRhc2stZm9ybS1idXR0b25ze1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0tYnV0dG9ucyA+IGJ1dHRvbixcXHJcXG4udGFzay1mb3JtLWJ1dHRvbnMgPiBidXR0b24sXFxyXFxuLmVkaXQtdGFzay1mb3JtLWJ1dHRvbnMgPiBidXR0b257XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcblxcclxcbi8qIFRhc2tzIFNlY3Rpb24gKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuLnRhc2stbGlzdHtcXHJcXG4gIGZsZXg6MztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRhc2stc2VjdGlvbi1jb2xvcik7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkZXJ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkZXIgPiBoMXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6MCAyMCU7XFxyXFxuICBtYXJnaW46IDIwcHggMTAlIDAgMTAlO1xcclxcbn1cXHJcXG4uYWRkLXRhc2stc2VjdGlvbiA+IGgxe1xcclxcbiAgbWFyZ2luOjA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi50YXNrLWxpc3QtY29udGFpbmVye1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staXRlbXtcXHJcXG4gIGRpc3BsYXk6Z3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoMiwgMWZyKTtcXHJcXG4gIG1hcmdpbjowIDIwJTtcXHJcXG59XFxyXFxuLmxlZnQtdGFzay1pdGVtLXNlY3Rpb257XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yaWdodC10YXNrLWl0ZW0tc2VjdGlvbntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtdGFzay1pdGVtLXNlY3Rpb24gPiBoMSxcXHJcXG4ucmlnaHQtdGFzay1pdGVtLXNlY3Rpb24gPiBoMXtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBVSSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3N0eWxlLmNzcyc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZVBhZ2UpIiwiaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG4gIGNvbnN0cnVjdG9yKHByb2plY3RUaXRsZSl7XHJcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgIC8vIHRoaXMudGFza3MucHVzaChuZXcgVGFzaygnV2FzaCB0aGUgRGlzaGVzJywgJzIwMDUtMDMtMTUnLCAnTG93JykpO1xyXG4gICAgLy8gdGhpcy50YXNrcy5wdXNoKG5ldyBUYXNrKCdQcm9ncmFtIGEgR2FtZScsICcyMDA1LTAzLTE1JywgJ0xvdycpKTtcclxuICAgIC8vIHRoaXMudGFza3MucHVzaChuZXcgVGFzaygnV2F0ZXIgdGhlIFBsYW50cycsICcyMDA1LTAzLTE1JywgJ0xvdycpKTtcclxuICAgIC8vIHRoaXMudGFza3MucHVzaChuZXcgVGFzaygnU3dlZXAgdGhlIEZsb29yJywgJzIwMDUtMDMtMTUnLCAnTG93JykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0VGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlKXtcclxuICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayh0YXNrKXtcclxuICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcclxuICB9XHJcblxyXG5cclxuICBzZXRUYXNrcyh0YXNrcyl7XHJcbiAgICB0aGlzLnRhc2tzID0gdGFza3M7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpe1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0VGFzaygpIGlzIGNhbGxlZCcpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSkpXHJcbiAgICByZXR1cm4gdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0aGlzLnRhc2tzLmZpbmQoXHJcbiAgICAgICh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZVxyXG4gICAgKVxyXG4gICAgdGhpcy50YXNrcy5zcGxpY2UodGhpcy50YXNrcy5pbmRleE9mKHRhc2tUb0RlbGV0ZSksIDEpXHJcbiAgfVxyXG5cclxuICB1cGRhdGVUYXNrKHRhc2tUaXRsZSwgbmV3VGl0bGUsIG5ld0R1ZURhdGUsIG5ld1ByaW9yaXR5KXtcclxuICAgIGNvbnN0IHRhc2tUb1VwZGF0ZSA9ICB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0VGl0bGUoKSA9PT0gdGFza1RpdGxlKTtcclxuICAgIHRhc2tUb1VwZGF0ZS5zZXRUaXRsZShuZXdUaXRsZSlcclxuICAgIHRhc2tUb1VwZGF0ZS5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xyXG4gICAgdGFza1RvVXBkYXRlLnNldFByaW9yaXR5KG5ld1ByaW9yaXR5KTtcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBwcmlvcml0eSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKXtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCl7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKXtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlXHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpe1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KXtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgLy8gdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdXZWIgRGV2ZWxvcG1lbnQnKSk7XHJcbiAgICAvLyB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0dhbWUgRGV2ZWxvcG1lbnQnKSk7XHJcbiAgICAvLyB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0RhdGFiYXNlIE1hbmFnZW1lbnQnKSk7XHJcbiAgICAvLyB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0NvZGluZyBFeGVyY2lzZXMnKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0UHJvamVjdHMocHJvamVjdHMpe1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHMoKXtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKSk7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3RUaXRsZSgpID09PSBwcm9qZWN0VGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KXtcclxuICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKXtcclxuICAgIGNvbnN0IHByb2plY3RUb0RlbGV0ZSA9IHRoaXMucHJvamVjdHMuZmluZChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCkgPT09IHByb2plY3RUaXRsZVxyXG4gICAgKVxyXG4gICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UodGhpcy5wcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0RlbGV0ZSksIDEpXHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QnO1xyXG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xyXG5pbXBvcnQgVG9kbyBmcm9tICcuL3RvZG8nO1xyXG5pbXBvcnQgSGVhZGVySWNvbiBmcm9tICcuL2Fzc2V0cy9oZWFkZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4vYXNzZXRzL3RyYXNoLnBuZyc7XHJcbmltcG9ydCBQcm9qZWN0SWNvbiBmcm9tICcuL2Fzc2V0cy9wcm9qZWN0LWxpc3QucG5nJztcclxuaW1wb3J0IEFkZEljb24gZnJvbSAnLi9hc3NldHMvYWRkLnBuZyc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICcuL2Fzc2V0cy9lZGl0LnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSXtcclxuICBzdGF0aWMgbG9hZEhvbWVQYWdlKCl7XHJcbiAgICBVSS5jcmVhdGVIZWFkZXJEaXYoKTtcclxuICAgIFVJLmNyZWF0ZU1haW5Db250ZW50RGl2KFVJLmNyZWF0ZVByb2plY3RMaXN0RGl2KCksIFVJLmNyZWF0ZVRhc2tMaXN0RGl2KCkpO1xyXG4gICAgVUkubG9hZEZvcm1zKCk7XHJcbiAgICBVSS5sb2FkQnV0dG9ucygpO1xyXG4gICAgVUkubG9hZFByb2plY3RzKCk7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBzYXZlVG9kbyhkYXRhKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUb2RvKCl7XHJcbiAgICBsZXQgdG9kbyA9IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSkpO1xyXG5cclxuICAgIC8vIEFzc29jaWF0ZSBlYWNoIHByb2plY3QgaXRlbSB3aXRoIFByb2plY3QgQ2xhc3MgaW4gb3JkZXIgdG8gaGF2ZSBhY2Nlc3MgdG8gUHJvamVjdCBpbnN0YW5jZSBtZXRob2RzIFxyXG4gICAgLy8gd2l0aG91dCBkb2luZyB0aGlzLCBlYWNoIHByb2plY3QgaXRlbSBhcmUgb2JqZWN0IGxpdGVyYWwgaW5zaWRlIHRoZSB0b2RvTGlzdCBhcnJheSB3aGljaCBkb2VzIG5vdCBoYXZlIGFjY2VzcyB0byBQcm9qZWN0IGNsYXNzIG1ldGhvZHNcclxuICAgIHRvZG8uc2V0UHJvamVjdHMoXHJcbiAgICAgIHRvZG9cclxuICAgICAgLmdldFByb2plY3RzKClcclxuICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcclxuICAgICk7XHJcblxyXG4gICAgLy9Bc3NvY2lhdGUgZWFjaCB0YXNrIGl0ZW0gd2l0aCBUYXNrIENsYXNzIGluIG9yZGVyIHRvIGhhdmUgYWNjZXNzIHRvIFRhc2sgaW5zdGFuY2UgbWV0aG9kcyBcclxuICAgIC8vIHdpdGhvdXQgZG9pbmcgdGhpcywgZWFjaCBwcm9qZWN0IGl0ZW0gYXJlIG9iamVjdCBsaXRlcmFsIGluc2lkZSB0aGUgcHJvamVjdCBhcnJheSB3aGljaCBkb2VzIG5vdCBoYXZlIGFjY2VzcyB0byBUYXNrIG1ldGhvZHNcclxuICAgIHRvZG9cclxuICAgICAgLmdldFByb2plY3RzKClcclxuICAgICAgLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3Quc2V0VGFza3MocHJvamVjdC5nZXRUYXNrcygpLm1hcCgodGFzaykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVGFzaygpLCB0YXNrKSkpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcclxuICAgIC8vIHJldHVybiBsaXN0IG9mIHByb2plY3RzXHJcbiAgICByZXR1cm4gdG9kbztcclxuICB9XHJcblxyXG5cclxuICAvLyBQcm9qZWN0IERhdGEgTWFuaXB1bGF0aW9uIEZ1bmN0aW9uc1xyXG4gIHN0YXRpYyBsb2FkUHJvamVjdHMoKXtcclxuICAgIGxldCBwcm9qZWN0cyA9IFVJLmdldFRvZG8oKTtcclxuICAgIHByb2plY3RzXHJcbiAgICAgIC5nZXRQcm9qZWN0cygpXHJcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgVUkuY3JlYXRlUHJvamVjdEl0ZW0ocHJvamVjdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICB9ICBcclxuXHJcbiAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCl7XHJcbiAgICBsZXQgdG9kbyA9ICBVSS5nZXRUb2RvKCk7XHJcbiAgICBVSS5yZWZyZXNoUHJvamVjdExpc3QoKTtcclxuICAgIHRvZG8uYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIFVJLnNhdmVUb2RvKHRvZG8pO1xyXG4gICAgVUkubG9hZFByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVsZXRlUHJvamVjdChwcm9qZWN0KXtcclxuICAgIGxldCB0b2RvID0gVUkuZ2V0VG9kbygpO1xyXG4gICAgdG9kby5kZWxldGVQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgVUkucmVmcmVzaFByb2plY3RMaXN0KCk7XHJcbiAgICBVSS5yZWZyZXNoVGFza0xpc3QoJycpO1xyXG4gICAgVUkuc2F2ZVRvZG8odG9kbyk7XHJcbiAgICBVSS5sb2FkUHJvamVjdHMoKTtcclxuICB9XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIFRhc2sgRGF0YSBNYW5pcHVsYXRpb24gRnVuY3Rpb25zXHJcbiAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0VGl0bGUpe1xyXG4gICAgbGV0IHByb2plY3QgPSBVSS5nZXRUb2RvKCk7XHJcbiAgICBwcm9qZWN0XHJcbiAgICAgIC5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgLmdldFRhc2tzKClcclxuICAgICAgLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICBVSS5jcmVhdGVUYXNrSXRlbSh0YXNrKTtcclxuICAgICAgfSk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlLCBkYXRlLCBwcmlvcml0eSl7XHJcbiAgICAgIGxldCB0b2RvID0gVUkuZ2V0VG9kbygpO1xyXG4gICAgICB0b2RvXHJcbiAgICAgICAgLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgICAgIC5hZGRUYXNrKG5ldyBUYXNrKHRhc2tUaXRsZSxkYXRlLHByaW9yaXR5ICkpO1xyXG4gICAgICBVSS5zYXZlVG9kbyh0b2RvKSAgO1xyXG4gICAgICBVSS5yZWZyZXNoVGFza0xpc3QocHJvamVjdFRpdGxlKTtcclxuICAgICAgVUkuYWRkVGFza0J1dHRvbigpO1xyXG4gICAgICBVSS5sb2FkVGFza3MocHJvamVjdFRpdGxlKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKXtcclxuICAgIGxldCBwcm9qZWN0ID0gVUkuZ2V0VG9kbygpO1xyXG4gICAgcHJvamVjdFxyXG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICAgIC5kZWxldGVUYXNrKHRhc2tUaXRsZSk7XHJcbiAgICBVSS5zYXZlVG9kbyhwcm9qZWN0KTtcclxuICAgIFVJLnJlZnJlc2hUYXNrTGlzdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgVUkuYWRkVGFza0J1dHRvbigpO1xyXG4gICAgVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSl7XHJcbiAgICBsZXQgcHJvamVjdCA9IFVJLmdldFRvZG8oKTtcclxuICAgIGxldCB0YXNrT2JqZWN0ID0gcHJvamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLmdldFRhc2sodGFza1RpdGxlKTtcclxuICAgIHJldHVybiB0YXNrT2JqZWN0XHJcbiAgfTtcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gR2VuZXJhbCBVSSBMYXlvdXRcclxuICBzdGF0aWMgY3JlYXRlSGVhZGVyRGl2KCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgc3JjPVwiJHtIZWFkZXJJY29ufVwiPlxyXG4gICAgICA8aDE+VG9kbyBBcHBsaWNhdGlvbjwvaDE+XHJcbiAgICBgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZU1haW5Db250ZW50RGl2KHByb2plY3RMaXN0LCB0YXNrTGlzdCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRlbnQnKTtcclxuICAgIGVsZW1lbnQuYXBwZW5kKHByb2plY3RMaXN0LCB0YXNrTGlzdCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVRhc2tMaXN0RGl2KCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTsgICAgXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPjwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUHJvamVjdExpc3REaXYoKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbGlzdCcpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpc3QtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYFxyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gRE9NIFJlbGF0ZWQgRnVuY3Rpb25zXHJcblxyXG4gIHN0YXRpYyByZWZyZXNoVGFza0xpc3QocHJvamVjdFRpdGxlKXtcclxuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcclxuICAgIGlmKHByb2plY3RUaXRsZSA9PT0gJycpe1xyXG4gICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBgXHJcblxyXG4gICAgYFxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRhc2tMaXN0LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2staGVhZGVyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPiR7cHJvamVjdFRpdGxlfTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImFkZC10YXNrLXNlY3Rpb25cIj5cclxuICAgICAgICA8aDE+VGFza3MoJHtVSS5nZXRUYXNrQ291bnQocHJvamVjdFRpdGxlKX0pPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1saXN0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRhc2tDb3VudChwcm9qZWN0VGl0bGUpe1xyXG4gICAgY29uc3QgdG9kbyA9IFVJLmdldFRvZG8oKTtcclxuICAgIGxldCB0YXNrQ291bnQgPSB0b2RvLmdldFByb2plY3QocHJvamVjdFRpdGxlKS5nZXRUYXNrcygpLmxlbmd0aFxyXG4gICAgcmV0dXJuIHRhc2tDb3VudDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZWZyZXNoUHJvamVjdExpc3QoKXtcclxuICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcclxuICAgIHByb2plY3RMaXN0LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPlByb2plY3RzPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGBcclxuICAgIFVJLmFkZFByb2plY3RCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0SXRlbShwcm9qZWN0KXtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbGlzdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1idG4nKTtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2xlZnQtYnRuLXNlY3Rpb24nKTtcclxuICAgIHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxpbWcgc3JjPVwiJHtQcm9qZWN0SWNvbn1cIj5cclxuICAgICAgPHA+JHtwcm9qZWN0LnByb2plY3RUaXRsZX08L3A+XHJcbiAgICBgXHJcbiAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgVUkucmVmcmVzaFRhc2tMaXN0KGUudGFyZ2V0LnRleHRDb250ZW50KTtcclxuICAgICAgVUkuYWRkVGFza0J1dHRvbigpO1xyXG4gICAgICBVSS5sb2FkVGFza3MoZS50YXJnZXQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgLy8gQWRkIGFjdGl2ZSBzdGF0ZSBvbiBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWJ0bicpO1xyXG4gICAgICBwcm9qZWN0SXRlbXMuZm9yRWFjaCgocHJvamVjdCkgPT4gcHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcblxyXG4gICAgbGV0IHByb2plY3RCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdEJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdyaWdodC1idG4tc2VjdGlvbicpO1xyXG5cclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlbGV0ZUJ0bi5zcmMgPSBUcmFzaEljb247XHJcblxyXG4gICAgcHJvamVjdEJ0bkNvbnRhaW5lci5hcHBlbmQoZGVsZXRlQnRuKTtcclxuICAgIFxyXG4gICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKClcclxuICAgICAgVUkuZGVsZXRlUHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgfSlcclxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdEJ0bkNvbnRhaW5lcik7XHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVUYXNrSXRlbSh0YXNrKXtcclxuICAgIGxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcclxuICAgIGxldCBsZWZ0VGFza1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnRUYXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdsZWZ0LXRhc2staXRlbS1zZWN0aW9uJyk7XHJcbiAgICBsZWZ0VGFza1NlY3Rpb24uaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+XHJcbiAgICAgIDxoMT4ke3Rhc2sudGl0bGV9PC9oMT5cclxuICAgIGBcclxuICAgIGxldCByaWdodFRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByaWdodFRhc2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LXRhc2staXRlbS1zZWN0aW9uJyk7XHJcbiAgICByaWdodFRhc2tTZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgPGgxPiR7dGFzay5kdWVEYXRlfTwvaDE+XHJcbiAgICAgIDxoMT4ke3Rhc2sucHJpb3JpdHl9PC9oMT5cclxuICAgIGBcclxuICAgIGxldCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlZGl0QnRuLnNyYyA9IEVkaXRJY29uO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7Jyk7XHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgY29uc3QgdGFza1RpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuICAgICAgbGV0IHRhc2sgPSBVSS5nZXRUYXNrKHByb2plY3RUaXRsZSx0YXNrVGl0bGUpO1xyXG4gICAgICBVSS5yZW5kZXJFZGl0VGFza0Zvcm0odGFzay50aXRsZSwgdGFzay5kdWVEYXRlKTtcclxuICAgICAgVUkuY3JlYXRlRWRpdEZvcm1CdXR0b25zKHByb2plY3RUaXRsZSwgdGFza1RpdGxlKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBVSS5zYXZlVG9kbyhwcm9qZWN0KTtcclxuICAgICAgLy8gVUkucmVmcmVzaFRhc2tMaXN0KHByb2plY3RUaXRsZSk7XHJcbiAgICAgIC8vIFVJLmFkZFRhc2tCdXR0b24oKTtcclxuICAgICAgLy8gVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlQnRuLnNyYyA9IFRyYXNoSWNvbjtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ3dpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7JykgLy90ZW1wb3JhcnlcclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgVUkuZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJpZ2h0VGFza1NlY3Rpb24uYXBwZW5kKGVkaXRCdG4sZGVsZXRlQnRuKTtcclxuXHJcbiAgICBlbGVtZW50LmFwcGVuZChsZWZ0VGFza1NlY3Rpb24sIHJpZ2h0VGFza1NlY3Rpb24pO1xyXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG4gICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcblxyXG5cclxuICAvLyBCdXR0b25zXHJcbiAgc3RhdGljIGxvYWRCdXR0b25zKCl7XHJcbiAgICBjb25zb2xlLmxvZygnbG9hZEJ1dHRvbnMoKSBpcyBjYWxsZWQnKTtcclxuICAgIFVJLmFkZFByb2plY3RCdXR0b24oKTtcclxuICAgIFVJLmNyZWF0ZVByb2plY3RGb3JtQnV0dG9ucygpO1xyXG4gICAgVUkuY3JlYXRlVGFza0Zvcm1CdXR0b25zKClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0QnV0dG9uKCl7XHJcbiAgICBsZXQgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWhlYWRlcicpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWRkLXByb2plY3QtYnV0dG9uJyk7XHJcbiAgICBlbGVtZW50LnNyYyA9IEFkZEljb247XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcblxyXG4gICAgICBsZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSk7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBhZGRUYXNrQnV0dG9uKCl7XHJcbiAgICAvLyBUZW1wb3JhcnkgcGxhY2VtZW50IGZvciBhZGQgdGFzayBidXR0b24gaXMgaW4gdGhlIGhlYWRlclxyXG4gICAgbGV0IHJlZmVyZW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzay1zZWN0aW9uJyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZWZlcmVuY2UpO1xyXG5cclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlbGVtZW50LnNyYyA9IEFkZEljb247XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgIGxldCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XHJcbiAgICAgIHRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrJyk7XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcclxuICAgIHJlZmVyZW5jZS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0Rm9ybUJ1dHRvbnMoKXtcclxuICAgIGxldCBidXR0b25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tYnV0dG9ucycpXHJcbiAgICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLWJ1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zdWJtaXRQcm9qZWN0Rm9ybUlucHV0IClcclxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VQcm9qZWN0Rm9ybSk7XHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmQoY29uZmlybUJ0biwgY2FuY2VsQnRuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVUYXNrRm9ybUJ1dHRvbnMoKXtcclxuICAgIGxldCBidXR0b25Hcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tYnV0dG9ucycpXHJcbiAgICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLWJ1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5zdWJtaXRUYXNrRm9ybUlucHV0KVxyXG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZVRhc2tGb3JtKTtcclxuICAgIGJ1dHRvbkdyb3VwLmFwcGVuZChjb25maXJtQnRuLCBjYW5jZWxCdG4pO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGZ1bmN0aW9uVGVzdCgpe1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuICB9XHJcbiAgc3RhdGljIGNyZWF0ZUVkaXRGb3JtQnV0dG9ucyhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSl7XHJcbiAgICBsZXQgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10YXNrLWZvcm0tYnV0dG9ucycpXHJcbiAgICBsZXQgY29uZmlybUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi5jbGFzc0xpc3QuYWRkKCdjb25maXJtLWJ1dHRvbicpO1xyXG4gICAgY29uZmlybUJ0bi50ZXh0Q29udGVudCA9ICdDb25maXJtJztcclxuICAgIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PntcclxuICAgICAgVUkuc3VibWl0VXBkYXRlZFRhc2tGb3JtSW5wdXQocHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpXHJcbiAgICB9KVxyXG4gICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbC1idG4nKTtcclxuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnXHJcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5jbG9zZUVkaXRUYXNrRm9ybSk7XHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmQoY29uZmlybUJ0biwgY2FuY2VsQnRuKTtcclxuICB9XHJcbiAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiAgLy8gRm9ybXNcclxuICBzdGF0aWMgbG9hZEZvcm1zKCl7XHJcbiAgICBVSS5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xyXG4gICAgVUkuY3JlYXRlVGFza0Zvcm0oKTtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVByb2plY3RGb3JtKCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxPkFkZCBQcm9qZWN0PC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwicHJvamVjdC10aXRsZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWJ1dHRvbnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdWJtaXRQcm9qZWN0Rm9ybUlucHV0KCl7XHJcbiAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC10aXRsZScpO1xyXG4gICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdChpbnB1dC52YWx1ZSk7XHJcbiAgICBVSS5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgVUkuY2xvc2VQcm9qZWN0Rm9ybSgpO1xyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgY2xvc2VQcm9qZWN0Rm9ybSgpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcblxyXG4gIHN0YXRpYyBjcmVhdGVUYXNrRm9ybSgpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLWNvbnRhaW5lcicpXHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taGVhZGVyXCI+XHJcbiAgICAgICAgPGgxPkFkZCBUYXNrPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwidGFzay10aXRsZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ0YXNrLWRhdGVcIj48L2lucHV0PlxyXG4gICAgICAgICAgPHNlbGVjdCBuYW1lPVwicHJpb3JpdHlcIiBpZD1cInByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWZvcm0tYnV0dG9uc1wiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIHJlbmRlckVkaXRUYXNrRm9ybSh0aXRsZSwgZHVlRGF0ZSl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stZm9ybS1jb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5FZGl0IFRhc2s8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5wdXRzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRpdGxlXCIgaWQ9XCJ1cGRhdGVkLXRhc2stdGl0bGVcIiB2YWx1ZT1cIiR7dGl0bGV9XCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cInVwZGF0ZWQtdGFzay1kYXRlXCIgdmFsdWU9XCIke2R1ZURhdGV9XCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJ1cGRhdGVkLXByaW9yaXR5XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3dcIj5Mb3c8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSGlnaFwiPkhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LXRhc2stZm9ybS1idXR0b25zXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIHN1Ym1pdFVwZGF0ZWRUYXNrRm9ybUlucHV0KHByb2plY3RUaXRsZSwgdGFza1RpdGxlKXtcclxuICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkLXRhc2stdGl0bGUnKS52YWx1ZTtcclxuICAgIGxldCBuZXdEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWQtdGFzay1kYXRlJykudmFsdWU7XHJcbiAgICBsZXQgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZC1wcmlvcml0eScpLnZhbHVlO1xyXG4gICAgY29uc29sZS5sb2cobmV3VGl0bGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3RHVlRGF0ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdQcmlvcml0eSk7XHJcbiAgICBsZXQgcHJvamVjdCA9IFVJLmdldFRvZG8oKTtcclxuICAgIHByb2plY3RcclxuICAgICAgLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgICAudXBkYXRlVGFzayh0YXNrVGl0bGUsIG5ld1RpdGxlLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSlcclxuICAgIFVJLnNhdmVUb2RvKHByb2plY3QpO1xyXG4gICAgVUkucmVmcmVzaFRhc2tMaXN0KHByb2plY3RUaXRsZSk7XHJcbiAgICBVSS5hZGRUYXNrQnV0dG9uKCk7XHJcbiAgICBVSS5sb2FkVGFza3MocHJvamVjdFRpdGxlKTtcclxuICAgIFVJLmNsb3NlRWRpdFRhc2tGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY2xvc2VFZGl0VGFza0Zvcm0oKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdWJtaXRUYXNrRm9ybUlucHV0KCl7XHJcbiAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJyk7XHJcbiAgICAgIGxldCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWRhdGUnKTtcclxuICAgICAgbGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpO1xyXG4gICAgICBVSS5hZGRUYXNrKHByb2plY3RUaXRsZSwgdGFza1RpdGxlLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlKTtcclxuICAgICAgVUkuY2xvc2VUYXNrRm9ybSgpO1xyXG5cclxuICAgICAgdGFza1RpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgIHRhc2tEYXRlLnZhbHVlID0gJyc7XHJcbiAgICAgIHRhc2tQcmlvcml0eS52YWx1ZSA9ICdMb3cnO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsb3NlVGFza0Zvcm0oKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1jb250YWluZXInKTtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn1cclxuIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9