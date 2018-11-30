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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DomNodeCollection {\n  constructor(nodes) {\n    this.nodes = nodes;\n  }\n  \n  html(string) {\n    if (string == undefined) {\n      return this.nodes[0].innerHTML;\n    } else {\n      this.nodes.forEach( (node) => {\n        node.innerHTML = string;\n      });\n      return string;\n    }\n  }\n  \n  empty() {\n    this.html(\"\");\n  }\n  \n  append(arg) {\n    // if (arg == this.constructor.name) {\n    // \n    // }\n    \n    this.nodes.forEach( (node) => {\n      node.innerHTML = arg.outerHTML;\n    });\n  }\n  \n  attr (attrName, value) {\n    if(value == undefined){\n      return this.nodes[0].getAttribute(attrName);\n    } else {\n      return this.nodes[0].setAttribute(attrName, value);\n    }\n  }\n  \n  addClass(newClass) {\n    return this.attr('class', newClass);\n  }\n\n  removeClass(className) {\n    return this.attr(className, \"\");\n  }\n  \n  children() {\n    let childNodes = [];\n    \n    this.nodes.forEach( (node) => {\n      childNodes.push(node.children);\n    });\n    return new DomNodeCollection(childNodes);\n  }\n\n  parent() {\n    let parentNodes = [];\n    \n    this.nodes.forEach( (node) => {\n      parentNodes.push(node.parentNode);\n    });\n    return new DomNodeCollection(parentNodes);\n  }\n  \n  find(selector) {\n    let descendants = [];\n    this.nodes.forEach( (node) => {\n      descendants.push(node.querySelectorAll(selector));\n    });\n    return new DomNodeCollection(descendants);\n  }\n\n  remove(){\n    this.nodes.forEach((node) => {\n      node.innerHTML = '';\n      node.outerHTML = '';\n      // this.nodes.delete(node);\n    });\n    this.nodes = [];\n  }\n  \n  on(action, callback) {\n    this.nodes.forEach((node) => {\n      node.addEventListener(action, callback);\n    });\n  }\n  \n  off(action, callback) {\n    this.nodes.forEach((node) => {\n      node.removeEventListener(action, callback);\n    });\n  }\n  \n}\n\nmodule.exports = DomNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const DomNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (selector) => {\n  let selected;\n  let selectedArr;\n  \n  \n  if (selector instanceof HTMLElement) {\n    selected = document.getElementsByTagName(selector.tagName);\n    selectedArr = Array.from(selected);\n  } else {\n    selected = document.querySelectorAll(`${selector}`);\n    selectedArr = Array.from(selected);\n  }\n  \n  return new DomNodeCollection(selectedArr);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });