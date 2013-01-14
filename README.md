<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8">
    <title>Intaglio Demo</title>
    <style type="text/css" media="screen">
    body {width: 700px; margin: 0 auto;}
    p {width: 50%;}
    .chassis {height: 300px; width: 300px; float: right; hspace: 15px; border: 1px solid #888;}
    </style>
</head>
<body>
    <h2>Map Intaglio!</h2>            
    <div id="favorite-cities" class="chassis" data-center="-104.9854,39.7494" data-zoom="7" data-locations="cities"></div>
    <p><em>Intaglio</em> is a small tool to make it extremely easy to include maps as part of hypermedia documents. Authors and creators should not need to know about javascript, libraries, or includes in order to include a map as part of their content. Intaglio allows you to mark up your document with simple HTML5 elements that are then converted automatically to an integrated, interactive map. 
    </p>
    <p>
        <h3>Cities</h3>
        <ul id="cities">
            <li class="geo" data-coordinates="[-104.9854,39.7494]" data-type="Point">Denver</li>
            <li class="geo" data-coordinates="[-106.0181,38.5460]" data-type="Point">Salida</li>
            <li class="geo" data-coordinates="[-105.2655,40.0171]" data-type="Point">Boulder</li>
        </ul>
    </p>        
    <script type="text/javascript" charset="utf-8" src="chassis.js"></script>
</body>
</html>