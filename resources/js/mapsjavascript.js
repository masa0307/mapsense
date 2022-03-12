let marker;

function clickMap(geo, map) {
    let destination_latitude = geo.lat();
    let destination_longitude = geo.lng();

    //中心にスクロール
    map.panTo(geo);

    //マーカーの更新
    marker.setMap(null);
    marker = null;
    marker = new google.maps.Marker({
        map: map,
        position: { lat: destination_latitude, lng: destination_longitude },
    });
}

export function currentMap(lat, lng) {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: { lat: lat, lng: lng },
    });

    //初期マーカー
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lng),
    });

    //クリックイベント
    map.addListener("click", function (e) {
        console.log(e);
        clickMap(e.latLng, map);
    });
}
