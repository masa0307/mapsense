<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div>
        <p>地図情報：{{$title}}</p>
    </div>

    <form action="" method="POST">
        <input id="origin-location-latitude" type="hidden" value="緯度" name="origin-location-latitude">
        <input id="origin-location-longitude" type="hidden" value="経度" name="origin-location-longitude">
        <button id="button">現在地を取得</button>
    </form>

    <a href="{{route('maplist.index')}}">戻る</a>

    <script src="{{ asset('/js/geolocation.js') }}"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key={{config('services.google-map.apikey')}}" async defer>
    </script>
</body>

</html>
