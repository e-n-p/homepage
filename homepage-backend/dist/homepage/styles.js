(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/homepage/homepage/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: cadetblue;\n}\nbutton {\n    background-color: black;\n    border: none;\n    border-radius: 8px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n    padding: 16px;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n}\ninput, textarea {\n    border: 2px solid black;\n    border-radius: 8px;\n    font-family: Arial, sans-serif;\n    font-size: 16px; \n    padding: 8px;\n}\na {\n    text-decoration: none;\n    color: black;\n}\ndiv {\n    padding: 8px;\n}\n#page-wrap {\n    background-color: #EEE;\n    min-height: 100vh;\n    padding: 0;\n    width: 100vw;\n}\n#max-width-column {\n    background-color: white;\n    margin: 0 auto;\n    max-width: 700px;\n    min-height: 100vh;\n    padding: 16px;\n    position: relative;\n}\n#top-bar {\n    border-bottom: 2px solid black;\n}\n#app-heading {\n    margin-top: 0;\n}\n#my-listings-button {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n}\n#content-wrap {\n    padding: 16px;\n}\n#banner {\n    position: relative;\n    text-align: center;\n}\n.todos-container {\n    border-radius: 25px;\n    border-style: dotted;\n    border-width: thin;\n    background-color: burlywood;\n    position: relative;\n    max-width: 500px;\n    float: right;\n    padding: 30px;\n    margin-bottom: 20px;\n    margin-right: 20px;\n}\n.todo-content-box {\n    border-style: solid;\n    border-width: medium;\n    background-color: #EEE;\n    border-radius: 8px;\n    padding: 16px;\n    position: relative;\n    margin-bottom: 16px;\n}\n.content-box {\n    border-style: solid;\n    border-width: medium;\n    background-color: #EEE;\n    border-radius: 8px;\n    padding: 16px;\n    position: relative;\n    margin-bottom: 16px;\n    left: 33%;\n    right: 33%;\n    max-width: 33%;\n}\n#button-delete{\n    padding:9px\n}\n.buttons-container {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    padding: 9px;\n}\n.buttons-container > button {\n    margin-left: 8px;\n}\n#description-label{\n    display: block;\n    float: left;\n    left: 0;\n    padding: 0;\n    padding-right: 4px;\n}\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA,8EAA8E;AAC9E;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,2BAA2B;AAC/B;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;AAEA;IACI,uBAAuB;IACvB,kBAAkB;IAClB,8BAA8B;IAC9B,eAAe;IACf,YAAY;AAChB;AAEA;IACI,qBAAqB;IACrB,YAAY;AAChB;AAEA;IACI,YAAY;AAChB;AAEA;IACI,sBAAsB;IACtB,iBAAiB;IACjB,UAAU;IACV,YAAY;AAChB;AAEA;IACI,uBAAuB;IACvB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,kBAAkB;AACtB;AAEA;IACI,8BAA8B;AAClC;AAEA;IACI,aAAa;AACjB;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;AACf;AAEA;IACI,aAAa;AACjB;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,2BAA2B;IAC3B,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;AACvB;AAEA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,cAAc;AAClB;AAEA;IACI;AACJ;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,YAAY;AAChB;AAEA;IACI,gBAAgB;AACpB;AAEA;IACI,cAAc;IACd,WAAW;IACX,OAAO;IACP,UAAU;IACV,kBAAkB;AACtB","sourcesContent":["/* You can add global styles to this file, and also import other style files */\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: cadetblue;\n}\n\nbutton {\n    background-color: black;\n    border: none;\n    border-radius: 8px;\n    color: white;\n    cursor: pointer;\n    outline: none;\n    padding: 16px;\n    font-family: Arial, sans-serif;\n    font-size: 16px;\n}\n\ninput, textarea {\n    border: 2px solid black;\n    border-radius: 8px;\n    font-family: Arial, sans-serif;\n    font-size: 16px; \n    padding: 8px;\n}\n\na {\n    text-decoration: none;\n    color: black;\n}\n\ndiv {\n    padding: 8px;\n}\n\n#page-wrap {\n    background-color: #EEE;\n    min-height: 100vh;\n    padding: 0;\n    width: 100vw;\n}\n\n#max-width-column {\n    background-color: white;\n    margin: 0 auto;\n    max-width: 700px;\n    min-height: 100vh;\n    padding: 16px;\n    position: relative;\n}\n\n#top-bar {\n    border-bottom: 2px solid black;\n}\n\n#app-heading {\n    margin-top: 0;\n}\n\n#my-listings-button {\n    position: absolute;\n    top: 16px;\n    right: 16px;\n}\n\n#content-wrap {\n    padding: 16px;\n}\n\n#banner {\n    position: relative;\n    text-align: center;\n}\n\n.todos-container {\n    border-radius: 25px;\n    border-style: dotted;\n    border-width: thin;\n    background-color: burlywood;\n    position: relative;\n    max-width: 500px;\n    float: right;\n    padding: 30px;\n    margin-bottom: 20px;\n    margin-right: 20px;\n}\n\n.todo-content-box {\n    border-style: solid;\n    border-width: medium;\n    background-color: #EEE;\n    border-radius: 8px;\n    padding: 16px;\n    position: relative;\n    margin-bottom: 16px;\n}\n\n.content-box {\n    border-style: solid;\n    border-width: medium;\n    background-color: #EEE;\n    border-radius: 8px;\n    padding: 16px;\n    position: relative;\n    margin-bottom: 16px;\n    left: 33%;\n    right: 33%;\n    max-width: 33%;\n}\n\n#button-delete{\n    padding:9px\n}\n\n.buttons-container {\n    position: absolute;\n    right: 0px;\n    bottom: 0px;\n    padding: 9px;\n}\n\n.buttons-container > button {\n    margin-left: 8px;\n}\n\n#description-label{\n    display: block;\n    float: left;\n    left: 0;\n    padding: 0;\n    padding-right: 4px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map