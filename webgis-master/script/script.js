satellite = document.getElementById("1");
topo = document.getElementById("2");
osm = document.getElementById("3");
streets = document.getElementById("4");

require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
    let map1 = new Map({basemap:"streets"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1  
        , zoom: 15,
        center: [22.57, 51.25],
     }); 
   })


require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   satellite.addEventListener("click", function(){
    let map1 = new Map({basemap:"satellite"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1 
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   topo.addEventListener("click", function(){
    let map1 = new Map({basemap:"topo"});
    let mapContainer = new MapView({
        container: "b",  
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   osm.addEventListener("click", function(){
    let map1 = new Map({basemap:"osm"});
    let mapContainer = new MapView({
        container: "b", 
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
   streets.addEventListener("click", function(){
    let map1 = new Map({basemap:"streets"});
    let mapContainer = new MapView({
        container: "b", 
        map: map1  
        , zoom:15,
        center: [22.57, 51.25],
     }); 
   })})

   





