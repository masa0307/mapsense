/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/originmap.js":
/*!***********************************!*\
  !*** ./resources/js/originmap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentMap": () => (/* binding */ currentMap)
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
  document.getElementById("origin-lat").value = lat;
  document.getElementById("origin-lng").value = lng;
}

function currentMap(lat, lng) {
  var map = new google.maps.Map(document.getElementById("origin-map"), {
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
  document.getElementById("origin-lat").value = lat;
  document.getElementById("origin-lng").value = lng; //クリックイベント

  map.addListener("click", function (e) {
    clickMap(e.latLng, map);
  });
}

onclick = function onclick(e) {
  if (e.target === document.getElementById("origin-map-wrapper")) {
    document.getElementById("origin-map-wrapper").style.display = "none";
  }
};

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
/******/ 			// no module.id needed
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./resources/js/geolocation.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _originmap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./originmap */ "./resources/js/originmap.js");


if (navigator.geolocation) {
  var successCallback = function successCallback(position) {
    //現在位置の緯度を取得
    var originLocationLat = position.coords.latitude; //現在位置の経度を取得

    var originLocationLng = position.coords.longitude; // document.getElementById("origin-location-latitude").value =
    //     originLocationLatitude;
    // document.getElementById("origin-location-longitude").value =
    //     originLocationLongitude;

    (0,_originmap__WEBPACK_IMPORTED_MODULE_0__.currentMap)(originLocationLat, originLocationLng);
  };

  var errorCallback = function errorCallback(error) {
    var errorMessage = {
      0: "原因不明のエラーが発生しました。",
      1: "位置情報が許可されませんでした。",
      2: "位置情報が取得できませんでした。",
      3: "タイムアウトしました。"
    };
    alert(errorMessage[error.code]);
  };

  // 現在位置を取得できる場合の処理
  document.getElementById("origin-button").onclick = function () {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    document.getElementById("origin-map-wrapper").style.display = "block";
  };
} else {
  // 現在位置を取得できない場合の処理
  alert("あなたの端末では、現在位置を取得できません。");
}
})();

/******/ })()
;