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
/*!*****************************************!*\
  !*** ./resources/js/destination-map.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initMap": () => (/* binding */ initMap)
/* harmony export */ });
var marker;

function clickMap(geo, map) {
  var lat = geo.lat();
  var lng = geo.lng(); //中心にスクロール

  map.panTo(geo); //マーカーの更新

  marker.setMap(null);
  marker = null;
  marker = new google.maps.Marker({
    map: map,
    position: {
      lat: lat,
      lng: lng
    }
  });
  document.getElementById("destination-lat").value = lat;
  document.getElementById("destination-lng").value = lng;
}

function initMap(lat, lng) {
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
  });
  document.getElementById("destination-lat").value = lat;
  document.getElementById("destination-lng").value = lng; //クリックイベント

  map.addListener("click", function (e) {
    clickMap(e.latLng, map);
  });

  onclick = function onclick(e) {
    if (e.target === document.getElementById("map-wrapper")) {
      document.getElementById("map-wrapper").style.display = "none";
    }
  };
}
/******/ })()
;