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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//购物车表格对象\r\nvar table=document.getElementById(\"tab\");\r\n// 购物车中商品的数量\r\nif(localStorage.getItem(\"count\")==null){\r\n\tlocalStorage.setItem(\"count\",0)\r\n}\r\n\r\n// 显示购物车\r\nwindow.showCar=function(){\r\n  location.href=\"car.html\"\r\n}\r\n if(localStorage.getItem(\"array\")==null){\r\nlocalStorage.setItem(\"array\",JSON.stringify([]));\r\n//localStorage.setItem(\"array\",[]);\r\n }\r\n \r\n// 将商品添加到购物车\r\nwindow.addFoodCar=function(name,price){\r\n\tvar arr=JSON.parse(localStorage.getItem(\"array\")) \r\n\tvar count=JSON.parse(localStorage.getItem(\"count\"))\r\n    if(checkName(name)){  \r\n    \tconsole.log(count)\r\n    \tcount++;\r\n    \tarr.push({name:name,price:price,blo:true,copies:1})  \r\n    \tarrJson=JSON.stringify(arr)\r\n    \tlocalStorage.setItem(\"array\",arrJson)\r\n    \tlocalStorage.setItem(\"count\",count)\r\n      document.getElementById(\"count\").innerHTML=count;\r\n    }\r\n}\r\n//判断商品在购物车中是否存在\r\nwindow.checkName=function(name){\r\n    var arr=JSON.parse(localStorage.getItem(\"array\"))    \r\n    var r=true;\r\n//    var count=JSON.parse(localStorage.getItem(\"count\"))\r\n    for(var i=0;i<arr.length;i++){\r\n        if(name==arr[i].name){\r\n        \tarr[i].copies++;\r\n        \tarrJson=JSON.stringify(arr);\r\n        \tlocalStorage.setItem(\"array\",arrJson)\r\n//      \tif(arr[i].blo==true){\r\n//      \t\tcount++\r\n//      \t\tlocalStorage.setItem(\"count\",count)        \t\t\r\n//      \t}\r\n//      \tdocument.getElementById(\"count\").innerHTML=count;\r\n            r=false;\r\n            break;\r\n        }\r\n    }\r\n    return r;\r\n}\r\n\r\nwindow.newBuy=function(){\t\r\n\tvar count=JSON.parse(localStorage.getItem(\"count\"))\t\r\n\tdocument.getElementById(\"count\").innerHTML=count;\r\n}\r\n\r\n__webpack_require__(/*! ./style.css */ \"./js/style.css\");\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/style.css":
/*!**********************!*\
  !*** ./js/style.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./js/style.css?");

/***/ })

/******/ });