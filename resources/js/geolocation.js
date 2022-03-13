import { currentMap } from "./originmap";

if (navigator.geolocation) {
    // 現在位置を取得できる場合の処理
    document.getElementById("origin-button").onclick = function () {
        navigator.geolocation.getCurrentPosition(
            successCallback,
            errorCallback
        );
        document.getElementById("origin-map-wrapper").style.display = "block";
    };

    function successCallback(position) {
        //現在位置の緯度を取得
        let originLocationLat = position.coords.latitude;
        //現在位置の経度を取得
        let originLocationLng = position.coords.longitude;

        // document.getElementById("origin-location-latitude").value =
        //     originLocationLatitude;
        // document.getElementById("origin-location-longitude").value =
        //     originLocationLongitude;

        currentMap(originLocationLat, originLocationLng);
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
