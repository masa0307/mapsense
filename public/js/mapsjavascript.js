/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/mapsjavascript.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentMap": () => (/* binding */ currentMap)
/* harmony export */ });
var marker;

function clickMap(geo, map) {
  var lat = geo.lat();
  var lng = geo.lng(); //中心にスクロール

  map.panTo(geo);
  console.log(lat, lng); //マーカーの更新

  marker.setMap(null);
  marker = null;
  marker = new google.maps.Marker({
    map: map,
    position: {
      lat: lat,
      lng: lng
    }
  });
}

function currentMap(lat, lng) {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: {
      lat: lat,
      lng: lng
    }
  }); //初期マーカー

  marker = new google.maps.Marker({
    map: map,
    position: new google.maps.LatLng(lat, lng)
  }); //クリックイベント

  map.addListener("click", function (e) {
    console.log(e);
    clickMap(e.latLng, map);
  });
}
/******/ })()
;