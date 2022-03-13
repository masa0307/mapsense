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

    {{-- <form action="" method="POST">
        <input id="origin-location-latitude" type="hidden" value="緯度" name="origin-location-latitude">
        <input id="origin-location-longitude" type="hidden" value="経度" name="origin-location-longitude">
        <button id="button">現在地を取得</button>
    </form> --}}
    <div>
        <button id="origin-button">出発地の座標を設定</button>
        <div id="origin-map-wrapper" class="hidden fixed z-10 left-0 top-0 h-full w-full overflow-auto bg-gray-400">
            <div id="origin-map" class="w-1/2 h-1/2 my-15 mx-auto"></div>
        </div>
        <input id="origin-lat" type="text" value="出発地の緯度">
        <input id="origin-lng" type="text" value="出発地の経度">
    </div>

    <a href="{{route('maplist.index')}}">戻る</a>


    <script src="https://maps.googleapis.com/maps/api/js?key={{config('services.google-map.apikey')}}" defer>
    </script>
    <script src="{{ mix('js/geolocation.js') }}" defer></script>
    <script src="{{ mix('js/mapsjavascript.js') }}" defer></script>
</body>

</html>
