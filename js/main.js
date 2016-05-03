$(document).ready(function(){
  $(".carousel-caption").css("width", "98%");


  var mymap = L.map('map-container').setView([46.852, -121.760], 12);

  var mapStuff = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,

  }).addTo(mymap);

  var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap" target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
      subdomains: ['otile1','otile2','otile3','otile4']
  });

  var mapLayers = {
      "Satellite": satLayer,
      "Map View": drawLayer,
      "Open Street Maps": mapStuff
  }
  L.control.layers(mapLayers).addTo(mymap);
  satLayer.addTo(mymap);

  var marker = L.marker([46.852, -121.760]).addTo(mymap);
  marker.bindPopup("<b>Welcome to Mt. Rainier!</b><br>This peak is 14,411 feet high.");

  var marker2 = L.marker([46.853441, -121.789265]).addTo(mymap);
  marker2.bindPopup("<b>Let's name all the rocks!</b><br>This one's named for St Andrew");

  var marker3 = L.marker([46.862922, -121.774825]).addTo(mymap);
  marker3.bindPopup("<b>Liberty Cap!</b><br>Lowest of the three summits");

  var circle = L.circle([46.852, -121.760], 50, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
  }).addTo(mymap);

});
