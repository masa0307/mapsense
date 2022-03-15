<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Document</title>
</head>

<body>
    <div>
        <p>地図情報：{{$title}}</p>
    </div>

    <div>
        <button class="coords-button" id="origin-button">出発地の座標を設定</button>
        <input id="origin-lat" type="text" value="出発地の緯度">
        <input id="origin-lng" type="text" value="出発地の経度">
    </div>

    <div>
        <button class="coords-button" id="destination-button">目的地の座標を設定</button>
        <input id="destination-lat" type="text" value="目的地の緯度">
        <input id="destination-lng" type="text" value="目的地の経度">
    </div>

    <div>
        <div id="map-wrapper" class="hidden fixed z-10 left-0 top-0 h-full w-full overflow-auto bg-gray-400">
            <div id="map" class="w-1/2 h-1/2 my-15 mx-auto"></div>
        </div>
    </div>

    <a href="{{route('maplist.index')}}">戻る</a>


    <script src="https://maps.googleapis.com/maps/api/js?key={{config('services.google-map.apikey')}}" defer>
    </script>
    <script src="{{ mix('js/geolocation.js') }}" defer></script>
    <script src="{{ mix('js/origin-map.js') }}" defer></script>
    <script src="{{ mix('js/destination-map.js') }}" defer></script>
</body>

</html>
