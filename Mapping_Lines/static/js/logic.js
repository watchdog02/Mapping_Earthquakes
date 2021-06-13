// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map= L.map('mapid').setView([30.6213,-98.3790], 4);

//Coordinates for each point to be used in the polyline.
let line = [
    [37.6213, -122.3790],
    [30.1975, -97.6664],
    [36.1263, -86.6774],
    [43.6777, -79.6248],
    [40.6413, -73.7781]
];

  // Define a symbol using SVG path notation, with an opacity of 1.
const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
};

// Create a polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "blue",
    icons: [
        {
          icon: lineSymbol,
          offset: "0",
          repeat: "90px",
        }
      ],
    weight: 4,
    opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map)

