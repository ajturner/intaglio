var geomaps = [];
(function(){
    var Geomap = function(element) {
        var me = this;
        me.center = element.getAttribute("data-center").split(",");
        me.zoom = element.getAttribute("data-zoom");
        me.locdiv = element.getAttribute("data-locations");
        me.map = new mxn.Mapstraction(element.id,'esri');
    	var latlon = new mxn.LatLonPoint(me.center[1], me.center[0]);
    	me.map.setCenterAndZoom(latlon, me.zoom);   
        me.locations = [];
        me.map.addSmallControls();
    };
        
    Geomap.prototype.mapLocations = function() {
        if(this.locdiv !== undefined && this.locdiv !== null && this.locdiv.length !== 0) {
            var locs = document.getElementById(this.locdiv);
            var marker_loc;
            for(var cn = locs.children, j=cn.length-1; j>=0; j--) {
                console.log("cn", cn)
                marker_loc = JSON.parse(cn[j].getAttribute("data-coordinates"));
                
                icon_marker = new mxn.Marker(new mxn.LatLonPoint(marker_loc[1], marker_loc[0]));
                var iconURL = "http://static.arcgis.com/images/Symbols/Shapes/BluePin1LargeB.png";
                icon_marker.setIcon(iconURL);
                icon_marker.setIconSize([32,32]);
                icon_marker.setIconAnchor([0,16]);
                icon_marker.setLabel(cn[j].innerHTML);
                
                this.map.addMarker(icon_marker);
                this.locations.push(icon_marker);
            }
        }        
    };
    
    function getElementsByClassName(matchClass) {
        var c = [], 
            elems = document.getElementsByTagName('*'), i;
        for (i in elems) {
            if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ')
                    > -1) {
                c.push(elems[i]);
            }
        }
        return c;
    }
    var scriptLoader = function(filename, fn) {
      var head   = document.getElementsByTagName('head')[0],
          script = document.createElement('script');
      script.type= 'text/javascript';
      script.src = filename;
      console.log("script", filename)
      if(typeof fn === 'function'){ script.onload = fn; }
      head.appendChild(script);
    };
    function loadProviders(providers, cb) {
        // scriptLoader("http://leaflet.cloudmade.com/dist/leaflet.js", function() {
        //     scriptLoader("http://river.local/Projects/mapstraction/mxn/source/mxn.js?(leaflet)", cb)
        // });

        document.write ('<link href="http://serverapi.arcgisonline.com/jsapi/arcgis/3.3/js/esri/css/esri.css" media="all" rel="stylesheet" type="text/css" \/>');
        document.write ('<script src="http://serverapi.arcgisonline.com/jsapi/arcgis/?v=3.3" type="text/javascript"><\/script>');       
        // document.write('<link href="http://leaflet.cloudmade.com/dist/leaflet.css" media="all" rel="stylesheet" type="text/css" \/>');
        // document.write('<script src="http://leaflet.cloudmade.com/dist/leaflet.js" type="text/javascript"><\/script>');
        
        document.write ('<script type="text/javascript" charset="utf-8" src="https://raw.github.com/mapstraction/mxn/integration/source/mxn.js?(esri)"></script>');
        setTimeout(cb, 1000); // hack for onload
    }
    var g = getElementsByClassName('chassis');
    loadProviders(["esri"], function() {
        for(var i = g.length-1; i >= 0; i--) {
            geomaps.push(new Geomap(g[i]));
        }
        setTimeout(function() {geomaps[0].mapLocations()}, 1200); // another onload hack. it's presentation time.
    });
})();
