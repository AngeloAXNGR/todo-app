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
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('Wash the Dishes', '2005-03-15', 'Low'));
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('Program a Game', '2005-03-15', 'Low'));
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('Water the Plants', '2005-03-15', 'Low'));
    this.tasks.push(new _task__WEBPACK_IMPORTED_MODULE_0__["default"]('Sweep the Floor', '2005-03-15', 'Low'));
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
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Web Development'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Game Development'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Database Management'));
    this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__["default"]('Coding Exercises'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxPQUFPLFlBQVksUUFBUSxLQUFLLE1BQU0sU0FBUyxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sT0FBTyxZQUFZLGFBQWEsUUFBUSxjQUFjLGVBQWUsYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUss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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtGQUFrRixNQUFNO0FBQ3hGO0FBQ0E7QUFDQSw2REFBNkQsUUFBUTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvT3N3YWxkLXZhcmlhYmxlLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBGb250cyAqL1xcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcclxcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OjMwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxyXFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6NDAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXHJcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDo2MDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbjpyb290e1xcclxcbiAgLyogLS1oZWFkZXItY29sb3I6ICMwNTM4NkI7XFxyXFxuICAtLXByb2plY3Qtc2VjdGlvbi1jb2xvcjogIzhFRTRBRjtcXHJcXG4gIC0tdGFzay1zZWN0aW9uLWNvbG9yOiAjOWZmZmM0OyAqL1xcclxcblxcclxcblxcclxcbiAgLS1oZWFkZXItY29sb3I6ICMwRDRDOTI7XFxyXFxuICAtLXByb2plY3Qtc2VjdGlvbi1jb2xvcjogI0EwRTRDQjtcXHJcXG4gIC0tdGFzay1zZWN0aW9uLWNvbG9yOiAjQ0ZGNUU3O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiO1xcclxcbiAgbWFyZ2luOjA7XFxyXFxuICBwYWRkaW5nOjA7XFxyXFxuICAvKiBib3gtc2l6aW5nOmJvcmRlci1ib3g7ICovXFxyXFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXHJcXG59IFxcclxcblxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDQwcHg7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiBoMXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tY29udGVudHtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0cyBTZWN0aW9uICovXFxyXFxuLnByb2plY3QtbGlzdHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2plY3Qtc2VjdGlvbi1jb2xvcik7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzJhMDc3O1xcclxcbiAgZmxleDoxO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVyLFxcclxcbi5wcm9qZWN0LWxpc3QtY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlcntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyYTA3NztcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdC1jb250YWluZXJ7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIgPiBoMXtcXHJcXG4gIG1hcmdpbjowIDAgMCAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXByb2plY3QtYnV0dG9ue1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpc3QgPiBidXR0b257XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ0bntcXHJcXG4gIGJvcmRlcjpub25lO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZle1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2Y4NDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ0bjpob3ZlcntcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMmNmODQ7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWJ0bi1zZWN0aW9uLC5yaWdodC1idG4tc2VjdGlvbntcXHJcXG4gIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1idG4tc2VjdGlvbntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYnRuLXNlY3Rpb24gPiBwe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6aW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1jb250YWluZXIsXFxyXFxuLnRhc2stZm9ybS1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6MDtcXHJcXG4gIHJpZ2h0OjA7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG92ZXJmbG93OmhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTpub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdGFzay1mb3JtLWNvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDowO1xcclxcbiAgcmlnaHQ6MDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1oZWFkZXJ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6d2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWlucHV0c3tcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdyA+IGlucHV0e1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdzpudGgtY2hpbGQoMil7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXJvdyA+IHNlbGVjdHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWZvcm0tYnV0dG9ucyxcXHJcXG4udGFzay1mb3JtLWJ1dHRvbnMsXFxyXFxuLmVkaXQtdGFzay1mb3JtLWJ1dHRvbnN7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1idXR0b25zID4gYnV0dG9uLFxcclxcbi50YXNrLWZvcm0tYnV0dG9ucyA+IGJ1dHRvbixcXHJcXG4uZWRpdC10YXNrLWZvcm0tYnV0dG9ucyA+IGJ1dHRvbntcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuXFxyXFxuLyogVGFza3MgU2VjdGlvbiAqL1xcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG4udGFzay1saXN0e1xcclxcbiAgZmxleDozO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGFzay1zZWN0aW9uLWNvbG9yKTtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlcntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLXNlY3Rpb257XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzowIDIwJTtcXHJcXG4gIG1hcmdpbjogMjBweCAxMCUgMCAxMCU7XFxyXFxufVxcclxcbi5hZGQtdGFzay1zZWN0aW9uID4gaDF7XFxyXFxuICBtYXJnaW46MDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLnRhc2stbGlzdC1jb250YWluZXJ7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1pdGVte1xcclxcbiAgZGlzcGxheTpncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCgyLCAxZnIpO1xcclxcbiAgbWFyZ2luOjAgMjAlO1xcclxcbn1cXHJcXG4ubGVmdC10YXNrLWl0ZW0tc2VjdGlvbntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LXRhc2staXRlbS1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC10YXNrLWl0ZW0tc2VjdGlvbiA+IGgxLFxcclxcbi5yaWdodC10YXNrLWl0ZW0tc2VjdGlvbiA+IGgxe1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLmNzc1wiXSxc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RUFDRSxNQUFNO0VBQ04sMkNBQTJDO0VBQzNDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxRQUFRO0FBQ1Y7Ozs7QUFJQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvbnRzICovXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJ09zd2FsZCc7XFxyXFxuICBzcmM6IHVybCgnLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuICAgIHVybCgnLi9mb250cy9Pc3dhbGQtdmFyaWFibGUud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgZm9udC13ZWlnaHQ6MzAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcXHJcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL09zd2FsZC12YXJpYWJsZS53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXHJcXG4gICAgdXJsKCcuL2ZvbnRzL09zd2FsZC12YXJpYWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICBmb250LXdlaWdodDo0MDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xcclxcbiAgc3JjOiB1cmwoJy4vZm9udHMvT3N3YWxkLXZhcmlhYmxlLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcclxcbiAgICB1cmwoJy4vZm9udHMvT3N3YWxkLXZhcmlhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OjYwMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAvKiAtLWhlYWRlci1jb2xvcjogIzA1Mzg2QjtcXHJcXG4gIC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yOiAjOEVFNEFGO1xcclxcbiAgLS10YXNrLXNlY3Rpb24tY29sb3I6ICM5ZmZmYzQ7ICovXFxyXFxuXFxyXFxuXFxyXFxuICAtLWhlYWRlci1jb2xvcjogIzBENEM5MjtcXHJcXG4gIC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yOiAjQTBFNENCO1xcclxcbiAgLS10YXNrLXNlY3Rpb24tY29sb3I6ICNDRkY1RTc7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCI7XFxyXFxuICBtYXJnaW46MDtcXHJcXG4gIHBhZGRpbmc6MDtcXHJcXG4gIC8qIGJveC1zaXppbmc6Ym9yZGVyLWJveDsgKi9cXHJcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcclxcbn0gXFxyXFxuXFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIGNvbG9yOndoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcclxcbiAgcGFkZGluZzogMTBweCAwIDEwcHggNDBweDtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDMycHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50e1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFByb2plY3RzIFNlY3Rpb24gKi9cXHJcXG4ucHJvamVjdC1saXN0e1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdC1zZWN0aW9uLWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMmEwNzc7XFxyXFxuICBmbGV4OjE7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkZXIsXFxyXFxuLnByb2plY3QtbGlzdC1jb250YWluZXJ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaGVhZGVye1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzJhMDc3O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWNvbnRhaW5lcntcXHJcXG4gIHBhZGRpbmctbGVmdDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlciA+IGgxe1xcclxcbiAgbWFyZ2luOjAgMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idXR0b257XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGlzdCA+IGJ1dHRvbntcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnRue1xcclxcbiAgYm9yZGVyOm5vbmU7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmV7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDJjZjg0O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnRuOmhvdmVye1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyY2Y4NDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnQtYnRuLXNlY3Rpb24sLnJpZ2h0LWJ0bi1zZWN0aW9ue1xcclxcbiAgY3Vyc29yOnBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LWJ0bi1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGVmdC1idG4tc2VjdGlvbiA+IHB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB3aWR0aDppbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWNvbnRhaW5lcixcXHJcXG4udGFzay1mb3JtLWNvbnRhaW5lcntcXHJcXG4gIHdpZHRoOiAzMCU7XFxyXFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDowO1xcclxcbiAgcmlnaHQ6MDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3c6aGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5Om5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10YXNrLWZvcm0tY29udGFpbmVye1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgdG9wOiAyMCU7XFxyXFxuICBsZWZ0OjA7XFxyXFxuICByaWdodDowO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdzpoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWhlYWRlcntcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjp3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0taW5wdXRze1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93ID4gaW5wdXR7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93Om50aC1jaGlsZCgyKXtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tcm93ID4gc2VsZWN0e1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybS1idXR0b25zLFxcclxcbi50YXNrLWZvcm0tYnV0dG9ucyxcXHJcXG4uZWRpdC10YXNrLWZvcm0tYnV0dG9uc3tcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtLWJ1dHRvbnMgPiBidXR0b24sXFxyXFxuLnRhc2stZm9ybS1idXR0b25zID4gYnV0dG9uLFxcclxcbi5lZGl0LXRhc2stZm9ybS1idXR0b25zID4gYnV0dG9ue1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYXNrcyBTZWN0aW9uICovXFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcbi50YXNrLWxpc3R7XFxyXFxuICBmbGV4OjM7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10YXNrLXNlY3Rpb24tY29sb3IpO1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVye1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVyID4gaDF7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stc2VjdGlvbntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOjAgMjAlO1xcclxcbiAgbWFyZ2luOiAyMHB4IDEwJSAwIDEwJTtcXHJcXG59XFxyXFxuLmFkZC10YXNrLXNlY3Rpb24gPiBoMXtcXHJcXG4gIG1hcmdpbjowO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4udGFzay1saXN0LWNvbnRhaW5lcntcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWl0ZW17XFxyXFxuICBkaXNwbGF5OmdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDIsIDFmcik7XFxyXFxuICBtYXJnaW46MCAyMCU7XFxyXFxufVxcclxcbi5sZWZ0LXRhc2staXRlbS1zZWN0aW9ue1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtdGFzay1pdGVtLXNlY3Rpb257XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczpjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5sZWZ0LXRhc2staXRlbS1zZWN0aW9uID4gaDEsXFxyXFxuLnJpZ2h0LXRhc2staXRlbS1zZWN0aW9uID4gaDF7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgVUkgZnJvbSBcIi4vdWlcIjtcclxuaW1wb3J0ICcuL3N0eWxlcy9zdHlsZS5jc3MnO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVQYWdlKSIsImltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcclxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0VGl0bGUpe1xyXG4gICAgdGhpcy5wcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW107XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2soJ1dhc2ggdGhlIERpc2hlcycsICcyMDA1LTAzLTE1JywgJ0xvdycpKTtcclxuICAgIHRoaXMudGFza3MucHVzaChuZXcgVGFzaygnUHJvZ3JhbSBhIEdhbWUnLCAnMjAwNS0wMy0xNScsICdMb3cnKSk7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2soJ1dhdGVyIHRoZSBQbGFudHMnLCAnMjAwNS0wMy0xNScsICdMb3cnKSk7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2gobmV3IFRhc2soJ1N3ZWVwIHRoZSBGbG9vcicsICcyMDA1LTAzLTE1JywgJ0xvdycpKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdFRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdFRpdGxlKHByb2plY3RUaXRsZSl7XHJcbiAgICB0aGlzLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcclxuICB9XHJcblxyXG4gIGFkZFRhc2sodGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2V0VGFza3ModGFza3Mpe1xyXG4gICAgdGhpcy50YXNrcyA9IHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKXtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFzayh0YXNrVGl0bGUpe1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldFRhc2soKSBpcyBjYWxsZWQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpKVxyXG4gICAgcmV0dXJuIHRoaXMudGFza3MuZmluZCgodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVGFzayh0YXNrVGl0bGUpe1xyXG4gICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGhpcy50YXNrcy5maW5kKFxyXG4gICAgICAodGFzaykgPT4gdGFzay5nZXRUaXRsZSgpID09PSB0YXNrVGl0bGVcclxuICAgIClcclxuICAgIHRoaXMudGFza3Muc3BsaWNlKHRoaXMudGFza3MuaW5kZXhPZih0YXNrVG9EZWxldGUpLCAxKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGFzayh0YXNrVGl0bGUsIG5ld1RpdGxlLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSl7XHJcbiAgICBjb25zdCB0YXNrVG9VcGRhdGUgPSAgdGhpcy50YXNrcy5maW5kKCh0YXNrKSA9PiB0YXNrLmdldFRpdGxlKCkgPT09IHRhc2tUaXRsZSk7XHJcbiAgICB0YXNrVG9VcGRhdGUuc2V0VGl0bGUobmV3VGl0bGUpXHJcbiAgICB0YXNrVG9VcGRhdGUuc2V0RHVlRGF0ZShuZXdEdWVEYXRlKTtcclxuICAgIHRhc2tUb1VwZGF0ZS5zZXRQcmlvcml0eShuZXdQcmlvcml0eSk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFByaW9yaXR5KCl7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gIH1cclxuXHJcbiAgc2V0RHVlRGF0ZShkdWVEYXRlKXtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXRQcmlvcml0eShwcmlvcml0eSl7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2Rve1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW11cclxuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCgnV2ViIERldmVsb3BtZW50JykpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdHYW1lIERldmVsb3BtZW50JykpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdEYXRhYmFzZSBNYW5hZ2VtZW50JykpO1xyXG4gICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdDb2RpbmcgRXhlcmNpc2VzJykpO1xyXG4gIH1cclxuXHJcblxyXG4gIHNldFByb2plY3RzKHByb2plY3RzKXtcclxuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCl7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QocHJvamVjdFRpdGxlKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuZ2V0UHJvamVjdFRpdGxlKCkgPT09IHByb2plY3RUaXRsZSkpO1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5nZXRQcm9qZWN0VGl0bGUoKSA9PT0gcHJvamVjdFRpdGxlKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCl7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldFByb2plY3RUaXRsZSgpID09PSBwcm9qZWN0VGl0bGVcclxuICAgIClcclxuICAgIHRoaXMucHJvamVjdHMuc3BsaWNlKHRoaXMucHJvamVjdHMuaW5kZXhPZihwcm9qZWN0VG9EZWxldGUpLCAxKVxyXG4gICAgXHJcbiAgfVxyXG59IiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcclxuaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcclxuaW1wb3J0IEhlYWRlckljb24gZnJvbSAnLi9hc3NldHMvaGVhZGVyLWljb24ucG5nJztcclxuaW1wb3J0IFRyYXNoSWNvbiBmcm9tICcuL2Fzc2V0cy90cmFzaC5wbmcnO1xyXG5pbXBvcnQgUHJvamVjdEljb24gZnJvbSAnLi9hc3NldHMvcHJvamVjdC1saXN0LnBuZyc7XHJcbmltcG9ydCBBZGRJY29uIGZyb20gJy4vYXNzZXRzL2FkZC5wbmcnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnLi9hc3NldHMvZWRpdC5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUl7XHJcbiAgc3RhdGljIGxvYWRIb21lUGFnZSgpe1xyXG4gICAgVUkuY3JlYXRlSGVhZGVyRGl2KCk7XHJcbiAgICBVSS5jcmVhdGVNYWluQ29udGVudERpdihVSS5jcmVhdGVQcm9qZWN0TGlzdERpdigpLCBVSS5jcmVhdGVUYXNrTGlzdERpdigpKTtcclxuICAgIFVJLmxvYWRGb3JtcygpO1xyXG4gICAgVUkubG9hZEJ1dHRvbnMoKTtcclxuICAgIFVJLmxvYWRQcm9qZWN0cygpO1xyXG5cclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgc2F2ZVRvZG8oZGF0YSl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3QnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VG9kbygpe1xyXG4gICAgbGV0IHRvZG8gPSBPYmplY3QuYXNzaWduKG5ldyBUb2RvKCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0JykpKTtcclxuXHJcbiAgICAvLyBBc3NvY2lhdGUgZWFjaCBwcm9qZWN0IGl0ZW0gd2l0aCBQcm9qZWN0IENsYXNzIGluIG9yZGVyIHRvIGhhdmUgYWNjZXNzIHRvIFByb2plY3QgaW5zdGFuY2UgbWV0aG9kcyBcclxuICAgIC8vIHdpdGhvdXQgZG9pbmcgdGhpcywgZWFjaCBwcm9qZWN0IGl0ZW0gYXJlIG9iamVjdCBsaXRlcmFsIGluc2lkZSB0aGUgdG9kb0xpc3QgYXJyYXkgd2hpY2ggZG9lcyBub3QgaGF2ZSBhY2Nlc3MgdG8gUHJvamVjdCBjbGFzcyBtZXRob2RzXHJcbiAgICB0b2RvLnNldFByb2plY3RzKFxyXG4gICAgICB0b2RvXHJcbiAgICAgIC5nZXRQcm9qZWN0cygpXHJcbiAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vQXNzb2NpYXRlIGVhY2ggdGFzayBpdGVtIHdpdGggVGFzayBDbGFzcyBpbiBvcmRlciB0byBoYXZlIGFjY2VzcyB0byBUYXNrIGluc3RhbmNlIG1ldGhvZHMgXHJcbiAgICAvLyB3aXRob3V0IGRvaW5nIHRoaXMsIGVhY2ggcHJvamVjdCBpdGVtIGFyZSBvYmplY3QgbGl0ZXJhbCBpbnNpZGUgdGhlIHByb2plY3QgYXJyYXkgd2hpY2ggZG9lcyBub3QgaGF2ZSBhY2Nlc3MgdG8gVGFzayBtZXRob2RzXHJcbiAgICB0b2RvXHJcbiAgICAgIC5nZXRQcm9qZWN0cygpXHJcbiAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiBwcm9qZWN0LnNldFRhc2tzKHByb2plY3QuZ2V0VGFza3MoKS5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG9kbyk7XHJcbiAgICAvLyByZXR1cm4gbGlzdCBvZiBwcm9qZWN0c1xyXG4gICAgcmV0dXJuIHRvZG87XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gUHJvamVjdCBEYXRhIE1hbmlwdWxhdGlvbiBGdW5jdGlvbnNcclxuICBzdGF0aWMgbG9hZFByb2plY3RzKCl7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBVSS5nZXRUb2RvKCk7XHJcbiAgICBwcm9qZWN0c1xyXG4gICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIFVJLmNyZWF0ZVByb2plY3RJdGVtKHByb2plY3QpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgfSAgXHJcblxyXG4gIHN0YXRpYyBhZGRQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgbGV0IHRvZG8gPSAgVUkuZ2V0VG9kbygpO1xyXG4gICAgVUkucmVmcmVzaFByb2plY3RMaXN0KCk7XHJcbiAgICB0b2RvLmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICBVSS5zYXZlVG9kbyh0b2RvKTtcclxuICAgIFVJLmxvYWRQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGRlbGV0ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICBsZXQgdG9kbyA9IFVJLmdldFRvZG8oKTtcclxuICAgIHRvZG8uZGVsZXRlUHJvamVjdChwcm9qZWN0KTtcclxuICAgIFVJLnJlZnJlc2hQcm9qZWN0TGlzdCgpO1xyXG4gICAgVUkucmVmcmVzaFRhc2tMaXN0KCcnKTtcclxuICAgIFVJLnNhdmVUb2RvKHRvZG8pO1xyXG4gICAgVUkubG9hZFByb2plY3RzKCk7XHJcbiAgfVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5cclxuICAvLyBUYXNrIERhdGEgTWFuaXB1bGF0aW9uIEZ1bmN0aW9uc1xyXG4gIHN0YXRpYyBsb2FkVGFza3MocHJvamVjdFRpdGxlKXtcclxuICAgIGxldCBwcm9qZWN0ID0gVUkuZ2V0VG9kbygpO1xyXG4gICAgcHJvamVjdFxyXG4gICAgICAuZ2V0UHJvamVjdChwcm9qZWN0VGl0bGUpXHJcbiAgICAgIC5nZXRUYXNrcygpXHJcbiAgICAgIC5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgVUkuY3JlYXRlVGFza0l0ZW0odGFzayk7XHJcbiAgICAgIH0pO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSwgZGF0ZSwgcHJpb3JpdHkpe1xyXG4gICAgICBsZXQgdG9kbyA9IFVJLmdldFRvZG8oKTtcclxuICAgICAgdG9kb1xyXG4gICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgICAuYWRkVGFzayhuZXcgVGFzayh0YXNrVGl0bGUsZGF0ZSxwcmlvcml0eSApKTtcclxuICAgICAgVUkuc2F2ZVRvZG8odG9kbykgIDtcclxuICAgICAgVUkucmVmcmVzaFRhc2tMaXN0KHByb2plY3RUaXRsZSk7XHJcbiAgICAgIFVJLmFkZFRhc2tCdXR0b24oKTtcclxuICAgICAgVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZGVsZXRlVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSl7XHJcbiAgICBsZXQgcHJvamVjdCA9IFVJLmdldFRvZG8oKTtcclxuICAgIHByb2plY3RcclxuICAgICAgLmdldFByb2plY3QocHJvamVjdFRpdGxlKVxyXG4gICAgICAuZGVsZXRlVGFzayh0YXNrVGl0bGUpO1xyXG4gICAgVUkuc2F2ZVRvZG8ocHJvamVjdCk7XHJcbiAgICBVSS5yZWZyZXNoVGFza0xpc3QocHJvamVjdFRpdGxlKTtcclxuICAgIFVJLmFkZFRhc2tCdXR0b24oKTtcclxuICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0VGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldFRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpe1xyXG4gICAgbGV0IHByb2plY3QgPSBVSS5nZXRUb2RvKCk7XHJcbiAgICBsZXQgdGFza09iamVjdCA9IHByb2plY3RcclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tUaXRsZSk7XHJcbiAgICByZXR1cm4gdGFza09iamVjdFxyXG4gIH07XHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIEdlbmVyYWwgVUkgTGF5b3V0XHJcbiAgc3RhdGljIGNyZWF0ZUhlYWRlckRpdigpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIHNyYz1cIiR7SGVhZGVySWNvbn1cIj5cclxuICAgICAgPGgxPlRvZG8gQXBwbGljYXRpb248L2gxPlxyXG4gICAgYFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVNYWluQ29udGVudERpdihwcm9qZWN0TGlzdCwgdGFza0xpc3Qpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50Jyk7XHJcbiAgICBlbGVtZW50LmFwcGVuZChwcm9qZWN0TGlzdCwgdGFza0xpc3QpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjcmVhdGVUYXNrTGlzdERpdigpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7ICAgIFxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInByb2plY3QtdGl0bGVcIj48L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWxpc3QtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZVByb2plY3RMaXN0RGl2KCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+UHJvamVjdHM8L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saXN0LWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGBcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIERPTSBSZWxhdGVkIEZ1bmN0aW9uc1xyXG5cclxuICBzdGF0aWMgcmVmcmVzaFRhc2tMaXN0KHByb2plY3RUaXRsZSl7XHJcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0Jyk7XHJcbiAgICBpZihwcm9qZWN0VGl0bGUgPT09ICcnKXtcclxuICAgICAgdGFza0xpc3QuaW5uZXJIVE1MID0gYFxyXG5cclxuICAgIGBcclxuICAgIH1lbHNle1xyXG4gICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMSBjbGFzcz1cInByb2plY3QtdGl0bGVcIj4ke3Byb2plY3RUaXRsZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhZGQtdGFzay1zZWN0aW9uXCI+XHJcbiAgICAgICAgPGgxPlRhc2tzKCR7VUkuZ2V0VGFza0NvdW50KHByb2plY3RUaXRsZSl9KTwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhc2stbGlzdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRUYXNrQ291bnQocHJvamVjdFRpdGxlKXtcclxuICAgIGNvbnN0IHRvZG8gPSBVSS5nZXRUb2RvKCk7XHJcbiAgICBsZXQgdGFza0NvdW50ID0gdG9kby5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSkuZ2V0VGFza3MoKS5sZW5ndGhcclxuICAgIHJldHVybiB0YXNrQ291bnQ7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgcmVmcmVzaFByb2plY3RMaXN0KCl7XHJcbiAgICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XHJcbiAgICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5Qcm9qZWN0czwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlzdC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgXHJcbiAgICBVSS5hZGRQcm9qZWN0QnV0dG9uKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUHJvamVjdEl0ZW0ocHJvamVjdCl7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtYnRuJyk7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RUaXRsZS5jbGFzc0xpc3QuYWRkKCdsZWZ0LWJ0bi1zZWN0aW9uJyk7XHJcbiAgICBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8aW1nIHNyYz1cIiR7UHJvamVjdEljb259XCI+XHJcbiAgICAgIDxwPiR7cHJvamVjdC5wcm9qZWN0VGl0bGV9PC9wPlxyXG4gICAgYFxyXG4gICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICAgIFVJLnJlZnJlc2hUYXNrTGlzdChlLnRhcmdldC50ZXh0Q29udGVudCk7XHJcbiAgICAgIFVJLmFkZFRhc2tCdXR0b24oKTtcclxuICAgICAgVUkubG9hZFRhc2tzKGUudGFyZ2V0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgIC8vIEFkZCBhY3RpdmUgc3RhdGUgb24gc2VsZWN0ZWQgcHJvamVjdFxyXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1idG4nKTtcclxuICAgICAgcHJvamVjdEl0ZW1zLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIGxldCBwcm9qZWN0QnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByb2plY3RCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZCgncmlnaHQtYnRuLXNlY3Rpb24nKTtcclxuXHJcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVCdG4uc3JjID0gVHJhc2hJY29uO1xyXG5cclxuICAgIHByb2plY3RCdG5Db250YWluZXIuYXBwZW5kKGRlbGV0ZUJ0bik7XHJcbiAgICBcclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpXHJcbiAgICAgIFVJLmRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKTtcclxuICAgIH0pXHJcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKHByb2plY3RCdG5Db250YWluZXIpO1xyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlVGFza0l0ZW0odGFzayl7XHJcbiAgICBsZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1saXN0LWNvbnRhaW5lcicpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XHJcbiAgICBsZXQgbGVmdFRhc2tTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0VGFza1NlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbGVmdC10YXNrLWl0ZW0tc2VjdGlvbicpO1xyXG4gICAgbGVmdFRhc2tTZWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiPlxyXG4gICAgICA8aDE+JHt0YXNrLnRpdGxlfTwvaDE+XHJcbiAgICBgXHJcbiAgICBsZXQgcmlnaHRUYXNrU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcmlnaHRUYXNrU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdyaWdodC10YXNrLWl0ZW0tc2VjdGlvbicpO1xyXG4gICAgcmlnaHRUYXNrU2VjdGlvbi5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxoMT4ke3Rhc2suZHVlRGF0ZX08L2gxPlxyXG4gICAgICA8aDE+JHt0YXNrLnByaW9yaXR5fTwvaDE+XHJcbiAgICBgXHJcbiAgICBsZXQgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWRpdEJ0bi5zcmMgPSBFZGl0SWNvbjtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OycpO1xyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5maXJzdENoaWxkLnRleHRDb250ZW50LnRyaW0oKTtcclxuXHJcbiAgICAgIGxldCB0YXNrID0gVUkuZ2V0VGFzayhwcm9qZWN0VGl0bGUsdGFza1RpdGxlKTtcclxuICAgICAgVUkucmVuZGVyRWRpdFRhc2tGb3JtKHRhc2sudGl0bGUsIHRhc2suZHVlRGF0ZSk7XHJcbiAgICAgIFVJLmNyZWF0ZUVkaXRGb3JtQnV0dG9ucyhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gVUkuc2F2ZVRvZG8ocHJvamVjdCk7XHJcbiAgICAgIC8vIFVJLnJlZnJlc2hUYXNrTGlzdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgICAvLyBVSS5hZGRUYXNrQnV0dG9uKCk7XHJcbiAgICAgIC8vIFVJLmxvYWRUYXNrcyhwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlbGV0ZUJ0bi5zcmMgPSBUcmFzaEljb247XHJcbiAgICBkZWxldGVCdG4uc2V0QXR0cmlidXRlKCdzdHlsZScsICd3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OycpIC8vdGVtcG9yYXJ5XHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjdGl2ZScpLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQudHJpbSgpO1xyXG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgIFVJLmRlbGV0ZVRhc2socHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpO1xyXG4gICAgfSlcclxuXHJcbiAgICByaWdodFRhc2tTZWN0aW9uLmFwcGVuZChlZGl0QnRuLGRlbGV0ZUJ0bik7XHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmQobGVmdFRhc2tTZWN0aW9uLCByaWdodFRhc2tTZWN0aW9uKTtcclxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH1cclxuICAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG5cclxuXHJcbiAgLy8gQnV0dG9uc1xyXG4gIHN0YXRpYyBsb2FkQnV0dG9ucygpe1xyXG4gICAgY29uc29sZS5sb2coJ2xvYWRCdXR0b25zKCkgaXMgY2FsbGVkJyk7XHJcbiAgICBVSS5hZGRQcm9qZWN0QnV0dG9uKCk7XHJcbiAgICBVSS5jcmVhdGVQcm9qZWN0Rm9ybUJ1dHRvbnMoKTtcclxuICAgIFVJLmNyZWF0ZVRhc2tGb3JtQnV0dG9ucygpXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYWRkUHJvamVjdEJ1dHRvbigpe1xyXG4gICAgbGV0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1oZWFkZXInKTtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWJ1dHRvbicpO1xyXG4gICAgZWxlbWVudC5zcmMgPSBBZGRJY29uO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG5cclxuICAgICAgbGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1jb250YWluZXInKTtcclxuICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgIH0pO1xyXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgYWRkVGFza0J1dHRvbigpe1xyXG4gICAgLy8gVGVtcG9yYXJ5IHBsYWNlbWVudCBmb3IgYWRkIHRhc2sgYnV0dG9uIGlzIGluIHRoZSBoZWFkZXJcclxuICAgIGxldCByZWZlcmVuY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stc2VjdGlvbicpO1xyXG4gICAgY29uc29sZS5sb2cocmVmZXJlbmNlKTtcclxuXHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZWxlbWVudC5zcmMgPSBBZGRJY29uO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICBsZXQgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgICB0YXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzaycpO1xyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XHJcbiAgICByZWZlcmVuY2UuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlUHJvamVjdEZvcm1CdXR0b25zKCl7XHJcbiAgICBsZXQgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtLWJ1dHRvbnMnKVxyXG4gICAgbGV0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybS1idXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XHJcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc3VibWl0UHJvamVjdEZvcm1JbnB1dCApXHJcbiAgICBsZXQgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xyXG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCdcclxuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNsb3NlUHJvamVjdEZvcm0pO1xyXG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kKGNvbmZpcm1CdG4sIGNhbmNlbEJ0bik7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlVGFza0Zvcm1CdXR0b25zKCl7XHJcbiAgICBsZXQgYnV0dG9uR3JvdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtLWJ1dHRvbnMnKVxyXG4gICAgbGV0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybS1idXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XHJcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuc3VibWl0VGFza0Zvcm1JbnB1dClcclxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VUYXNrRm9ybSk7XHJcbiAgICBidXR0b25Hcm91cC5hcHBlbmQoY29uZmlybUJ0biwgY2FuY2VsQnRuKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBmdW5jdGlvblRlc3QoKXtcclxuICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XHJcbiAgfVxyXG4gIHN0YXRpYyBjcmVhdGVFZGl0Rm9ybUJ1dHRvbnMocHJvamVjdFRpdGxlLCB0YXNrVGl0bGUpe1xyXG4gICAgbGV0IGJ1dHRvbkdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtLWJ1dHRvbnMnKVxyXG4gICAgbGV0IGNvbmZpcm1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4uY2xhc3NMaXN0LmFkZCgnY29uZmlybS1idXR0b24nKTtcclxuICAgIGNvbmZpcm1CdG4udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XHJcbiAgICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT57XHJcbiAgICAgIFVJLnN1Ym1pdFVwZGF0ZWRUYXNrRm9ybUlucHV0KHByb2plY3RUaXRsZSwgdGFza1RpdGxlKVxyXG4gICAgfSlcclxuICAgIGxldCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XHJcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJ1xyXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuY2xvc2VFZGl0VGFza0Zvcm0pO1xyXG4gICAgYnV0dG9uR3JvdXAuYXBwZW5kKGNvbmZpcm1CdG4sIGNhbmNlbEJ0bik7XHJcbiAgfVxyXG4gLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4gIC8vIEZvcm1zXHJcbiAgc3RhdGljIGxvYWRGb3Jtcygpe1xyXG4gICAgVUkuY3JlYXRlUHJvamVjdEZvcm0oKTtcclxuICAgIFVJLmNyZWF0ZVRhc2tGb3JtKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0Rm9ybSgpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKTtcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMT5BZGQgUHJvamVjdDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBpZD1cInByb2plY3QtdGl0bGVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1idXR0b25zXCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VibWl0UHJvamVjdEZvcm1JbnB1dCgpe1xyXG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtdGl0bGUnKTtcclxuICAgIGxldCBwcm9qZWN0ID0gbmV3IFByb2plY3QoaW5wdXQudmFsdWUpO1xyXG4gICAgVUkuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIFVJLmNsb3NlUHJvamVjdEZvcm0oKTtcclxuICAgIGlucHV0LnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGNsb3NlUHJvamVjdEZvcm0oKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZm9ybS1jb250YWluZXInKTtcclxuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgY3JlYXRlVGFza0Zvcm0oKXtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZm9ybS1jb250YWluZXInKVxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWhlYWRlclwiPlxyXG4gICAgICAgIDxoMT5BZGQgVGFzazwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1pbnB1dHNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGl0bGVcIiBpZD1cInRhc2stdGl0bGVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwidGFzay1kYXRlXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWJ1dHRvbnNcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW5kZXJFZGl0VGFza0Zvcm0odGl0bGUsIGR1ZURhdGUpe1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZWRpdC10YXNrLWZvcm0tY29udGFpbmVyJylcclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1oZWFkZXJcIj5cclxuICAgICAgICA8aDE+RWRpdCBUYXNrPC9oMT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWlucHV0c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUaXRsZVwiIGlkPVwidXBkYXRlZC10YXNrLXRpdGxlXCIgdmFsdWU9XCIke3RpdGxlfVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJ1cGRhdGVkLXRhc2stZGF0ZVwiIHZhbHVlPVwiJHtkdWVEYXRlfVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcmlvcml0eVwiIGlkPVwidXBkYXRlZC1wcmlvcml0eVwiPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC10YXNrLWZvcm0tYnV0dG9uc1wiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudClcclxuICB9XHJcblxyXG4gIHN0YXRpYyBzdWJtaXRVcGRhdGVkVGFza0Zvcm1JbnB1dChwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZSl7XHJcbiAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlZC10YXNrLXRpdGxlJykudmFsdWU7XHJcbiAgICBsZXQgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGVkLXRhc2stZGF0ZScpLnZhbHVlO1xyXG4gICAgbGV0IG5ld1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwZGF0ZWQtcHJpb3JpdHknKS52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKG5ld1RpdGxlKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0R1ZURhdGUpO1xyXG4gICAgY29uc29sZS5sb2cobmV3UHJpb3JpdHkpO1xyXG4gICAgbGV0IHByb2plY3QgPSBVSS5nZXRUb2RvKCk7XHJcbiAgICBwcm9qZWN0XHJcbiAgICAgIC5nZXRQcm9qZWN0KHByb2plY3RUaXRsZSlcclxuICAgICAgLnVwZGF0ZVRhc2sodGFza1RpdGxlLCBuZXdUaXRsZSwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpXHJcbiAgICBVSS5zYXZlVG9kbyhwcm9qZWN0KTtcclxuICAgIFVJLnJlZnJlc2hUYXNrTGlzdChwcm9qZWN0VGl0bGUpO1xyXG4gICAgVUkuYWRkVGFza0J1dHRvbigpO1xyXG4gICAgVUkubG9hZFRhc2tzKHByb2plY3RUaXRsZSk7XHJcbiAgICBVSS5jbG9zZUVkaXRUYXNrRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNsb3NlRWRpdFRhc2tGb3JtKCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybS1jb250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgc3VibWl0VGFza0Zvcm1JbnB1dCgpe1xyXG4gICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykuZmlyc3RDaGlsZC50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay10aXRsZScpO1xyXG4gICAgICBsZXQgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1kYXRlJyk7XHJcbiAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKTtcclxuICAgICAgVUkuYWRkVGFzayhwcm9qZWN0VGl0bGUsIHRhc2tUaXRsZS52YWx1ZSwgdGFza0RhdGUudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSk7XHJcbiAgICAgIFVJLmNsb3NlVGFza0Zvcm0oKTtcclxuXHJcbiAgICAgIHRhc2tUaXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgICB0YXNrRGF0ZS52YWx1ZSA9ICcnO1xyXG4gICAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSAnTG93JztcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjbG9zZVRhc2tGb3JtKCl7XHJcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0tY29udGFpbmVyJyk7XHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG59XHJcbiAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==