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

    <div id="map" class="h-96 w-3/5"></div>

    <a href="{{route('maplist.index')}}">戻る</a>


    <script src="https://maps.googleapis.com/maps/api/js?key={{config('services.google-map.apikey')}}" async defer>
    </script>
    <script src="{{ mix('js/geolocation.js') }}"></script>
    <script src="{{ mix('js/mapsjavascript.js') }}"></script>
</body>

</html>
