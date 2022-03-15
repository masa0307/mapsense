import { currentMap } from "./origin-map";
import { initMap } from "./destination-map";

if (navigator.geolocation) {
    // 現在位置を取得できる場合の処理
    document.querySelectorAll(".coords-button").forEach(function (el) {
        el.addEventListener("click", function (e) {
            if (e.target.id === "origin-button") {
                navigator.geolocation.getCurrentPosition(
                    originCallback,
                    errorCallback
                );
            } else if (e.target.id === "destination-button") {
                navigator.geolocation.getCurrentPosition(
                    destinationCallback,
                    errorCallback
                );
            }

            document.getElementById("map-wrapper").style.display = "block";
        });
    });

    function originCallback(position) {
        //現在位置の緯度を取得
        let currentLocationLat = position.coords.latitude;
        //現在位置の経度を取得
        let currentLocationLng = position.coords.longitude;

        currentMap(currentLocationLat, currentLocationLng);
    }

    function destinationCallback(position) {
        //現在位置の緯度を取得
        let currentLocationLat = position.coords.latitude;
        //現在位置の経度を取得
        let currentLocationLng = position.coords.longitude;

        initMap(currentLocationLat, currentLocationLng);
    }

    function errorCallback(error) {
        let errorMessage = {
            0: "原因不明のエラーが発生しました。",
            1: "位置情報が許可されませんでした。",
            2: "位置情報が取得できませんでした。",
            3: "タイムアウトしました。",
        };

        alert(errorMessage[error.code]);
    }
} else {
    // 現在位置を取得できない場合の処理
    alert("あなたの端末では、現在位置を取得できません。");
}
