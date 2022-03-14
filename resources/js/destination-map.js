let marker;

function clickMap(geo, map) {
    let lat = geo.lat();
    let lng = geo.lng();

    //中心にスクロール
    map.panTo(geo);

    //マーカーの更新
    marker.setMap(null);
    marker = null;
    marker = new google.maps.Marker({
        map: map,
        position: { lat: lat, lng: lng },
    });

    document.getElementById("destination-lat").value = lat;
    document.getElementById("destination-lng").value = lng;
}

export function currentMap(lat, lng) {
    let map = new google.maps.Map(document.getElementById("destination-map"), {
        zoom: 16,
        center: { lat: lat, lng: lng },
    });

    //初期マーカー
    marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(lat, lng),
    });

    document.getElementById("destination-lat").value = lat;
    document.getElementById("destination-lng").value = lng;

    //クリックイベント
    map.addListener("click", function (e) {
        clickMap(e.latLng, map);
    });

    onclick = (e) => {
        if (e.target === document.getElementById("destination-map-wrapper")) {
            document.getElementById("destination-map-wrapper").style.display =
                "none";
        }
    };
}
