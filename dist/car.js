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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/car.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/car.js":
/*!*******************!*\
  !*** ./js/car.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//购物车表格对象\r\nvar table = document.getElementById(\"tab\");\r\n// 购物车中商品的数量\r\nif(localStorage.getItem(\"count\") == null) {\r\n\tlocalStorage.setItem(\"count\", 0)\r\n}\r\n//返回购物\r\nwindow.showCar=function() {\r\n\tlocation.href=\"index.html\"\r\n}\r\n//继续点餐\r\nwindow.showShop=function() {\r\n\tlocation.href=\"index.html\"\r\n}\r\n\r\nif(localStorage.getItem(\"array\") == null) {\r\n\tlocalStorage.setItem(\"array\", JSON.stringify([]));\r\n\t//localStorage.setItem(\"array\",[]);\r\n}\r\n//自动加载数组里的数组到购物车中\r\nwindow.ad=function() {\r\n\tvar arr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var i = 0; i < arr.length; i++) {\r\n\t\tvar tr = table.insertRow(-1);\r\n\t\ttr.insertCell(0).innerHTML = \"<input type='checkbox' name='choose' onclick='changeCheck()'>\"\r\n\t\ttr.childNodes[0].children[0].checked = arr[i].blo\r\n\t\ttr.insertCell(1).innerHTML = arr[i].name;\r\n\t\ttr.insertCell(2).innerHTML = arr[i].price;\r\n\t\ttr.insertCell(3).innerHTML = \"<input type='button' value='-' onclick='subFood(this)'><span>\" + arr[i].copies + \"</span><input type='button' value='+' onclick='addFood(this)'>\"\r\n\t\ttr.insertCell(4).innerHTML = \"<input type='button' value='删除' onclick='deleteFood(this)'>\"\r\n\t}\r\n\tchangeCheck()\r\n}\r\n//全选\r\nwindow.checkAll=function(obj) {\r\n\tvar boxs = document.getElementsByName(\"choose\");\r\n\tfor(var i = 0; i < boxs.length; i++) {\r\n\t\tboxs[i].checked = obj.checked\r\n\t}\r\n\tchangeCheck();\r\n}\r\n// 根据表格中复选框的状态决定全选按钮是否被选中\r\nwindow.changeCheck=function() {\r\n\tvar c = 0;\r\n\tvar boxs = document.getElementsByName(\"choose\");\r\n\tfor(var i = 0; i < boxs.length; i++) {\r\n\t\tif(boxs[i].checked) {\r\n\t\t\tc++\r\n\t\t\tflag = true;\r\n\t\t\tvar name3 = boxs[i].parentNode.parentNode.children[1].innerHTML\r\n\t\t\tchangeArr(name3, flag)\r\n\t\t} else {\r\n\t\t\tflag = false;\r\n\t\t\tvar name3 = boxs[i].parentNode.parentNode.children[1].innerHTML\r\n\t\t\tchangeArr(name3, flag)\r\n\t\t}\r\n\t}\r\n\tdocument.getElementById(\"a\").checked = c == table.rows.length - 1;\r\n\tlocalStorage.setItem(\"count\", c)\r\n\tdocument.getElementById(\"count\").innerHTML = c\r\n\tpay();\r\n}\r\n//勾选框改变本地存储内的是否为勾选内容\r\nfunction changeArr(name3, flag) {\r\n\tvar arr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var j = 0; j < arr.length; j++) {\r\n\t\tif(arr[j].name == name3) {\r\n\t\t\tarr[j].blo = flag;\r\n\t\t\tarr = JSON.stringify(arr)\r\n\t\t\tlocalStorage.setItem(\"array\", arr)\r\n\t\t}\r\n\t}\r\n}\r\n\r\n// 勾选的项目，需要支付的金额\r\nfunction pay() {\r\n\tvar money = 0;\r\n\tvar boxs = document.getElementsByName(\"choose\");\r\n\tfor(var i = 0; i < boxs.length; i++) {\r\n\t\tif(boxs[i].checked) {\t\t\t      \r\n\t\t\tmoney += parseInt(boxs[i].parentNode.parentNode.cells[2].innerHTML) * parseInt(boxs[i].parentNode.parentNode.cells[3].children[1].innerHTML);\r\n\t\t}\r\n\t}\r\n\tdocument.getElementById(\"m\").innerHTML = money;\r\n}\r\n\r\n// 删除选中项\r\nwindow.deleteChecked=function() {\r\n\tvar boxs = document.getElementsByName(\"choose\");\r\n\tarr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var i = boxs.length - 1; i >= 0; i--) {\r\n\t\tif(boxs[i].checked) {\r\n\t\t\tvar name2 = boxs[i].parentNode.parentNode.children[1].innerHTML\r\n\t\t\tfor(var j = 0; j < arr.length; j++) {\r\n\t\t\t\tif(arr[j].name == name2) {\r\n\t\t\t\t\tsub(j)\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\ttable.deleteRow(i + 1);\r\n\t\t}\r\n\t}\r\n\tchangeCheck()\r\n\tpay()\r\n}\r\n// 删除当前行\r\nwindow.deleteFood=function(obj) {\r\n\tvar index = obj.parentNode.parentNode.rowIndex; //获得当前行的行号\r\n\ttable.deleteRow(index);\r\n\tvar name1 = obj.parentNode.parentNode.children[1].innerHTML\r\n\tarr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var i = 0; i < arr.length; i++) {\r\n\t\tif(arr[i].name == name1) {\r\n\t\t\tsub(i)\r\n\t\t}\r\n\t}\r\n\tchangeCheck()\r\n}\r\n\r\nfunction sub(n) {\r\n\tarr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var j = n; j < arr.length; j++) {\r\n\t\tarr[j] = arr[j + 1]\r\n\t}\r\n\tarr.length = arr.length - 1\r\n\tarrJson = JSON.stringify(arr)\r\n\tlocalStorage.setItem(\"array\", arrJson)\r\n}\r\n\r\n//结算消费金额，并删除相应数据\r\nwindow.settement=function() {\r\n\tvar pay = document.getElementById(\"m\").innerHTML\r\n\talert(\"您本次共计消费\" + pay + \"元\")\r\n\tvar boxs = document.getElementsByName(\"choose\");\r\n\tarr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tfor(var i = boxs.length - 1; i >= 0; i--) {\r\n\t\tif(boxs[i].checked) {\r\n\t\t\tvar name2 = boxs[i].parentNode.parentNode.children[1].innerHTML\r\n\t\t\tfor(var j = 0; j < arr.length; j++) {\r\n\t\t\t\tif(arr[j].name == name2) {\r\n\t\t\t\t\tsub(j)\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\ttable.deleteRow(i + 1);\r\n\t\t}\r\n\t}\r\n\tchangeCheck()\r\n\r\n}\r\n//+号的添加购物车\r\nwindow.addFood=function(obj) {\r\n\tcopies = parseInt(obj.previousElementSibling.innerHTML)\r\n\tobj.previousElementSibling.innerHTML = copies + 1\r\n\tcalculate(obj, 1)\r\n\tchangeCheck()\r\n}\r\n//-号的删除购物车\r\nwindow.subFood=function(obj) {\r\n\tcopies = parseInt(obj.nextSibling.innerHTML)\r\n\tif(copies > 1) {\r\n\t\tobj.nextSibling.innerHTML = copies - 1\r\n\t\tcalculate(obj, -1)\r\n\t}\r\n\tchangeCheck()\r\n}\r\n\r\nfunction calculate(obj, a) {\r\n\tarr = JSON.parse(localStorage.getItem(\"array\"))\r\n\tvar name4 = obj.parentNode.parentNode.children[1].innerHTML\r\n\tfor(var j = 0; j < arr.length; j++) {\r\n\t\tif(arr[j].name == name4) {\r\n\t\t\tarr[j].copies += a;\r\n\t\t\tarr = JSON.stringify(arr)\r\n\t\t\tlocalStorage.setItem(\"array\", arr)\r\n\t\t}\r\n\t}\r\n};\r\n\r\n__webpack_require__(/*! ./style.css */ \"./js/style.css\");\n\n//# sourceURL=webpack:///./js/car.js?");

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