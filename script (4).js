L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &amp; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/10/512/512.png?access_token=YOUR_ACCESS_TOKEN
