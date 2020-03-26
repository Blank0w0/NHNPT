// Start Restricting The Bounds Of The Map
var map;
var NayPyiTaw_BOUNDS = {
  north: 20.005667,
  south: 19.479977,
  west: 95.617247,
  east: 96.569698,
};
var NPT = { lat: 19.850599, lng: 96.118430 };

function initAutocomplete() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: NPT,
    restriction: {
      latLngBounds: NayPyiTaw_BOUNDS,
      strictBounds: false,
    },
    zoom: 10,
    gestureHandling: 'greedy',
    // End Restricting The Bounds Of The Map

    // For Night Mode
    styles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
      }

    ]
    // End Night-Mode


  });
  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  // End Search Bar

  // Define the MinisitryZone coordinates for the polygon. 
  var MinisitryZone = [
    { lat: 19.859079, lng: 96.144339 },
    { lat: 19.860044, lng: 96.138459 },
    { lat: 19.851326, lng: 96.133854 },
    { lat: 19.848582, lng: 96.122606 },
    { lat: 19.838972, lng: 96.117410 },
    { lat: 19.824841, lng: 96.120284 },
    { lat: 19.819227, lng: 96.127708 },
    { lat: 19.814099, lng: 96.124317 },
    { lat: 19.806583, lng: 96.112048 },
    { lat: 19.799099, lng: 96.109683 },
    { lat: 19.796417, lng: 96.097964 },
    { lat: 19.789838, lng: 96.097397 },
    { lat: 19.789689, lng: 96.095293 },
    { lat: 19.785584, lng: 96.091871 },
    { lat: 19.782973, lng: 96.092630 },
    { lat: 19.782468, lng: 96.094103 },
    { lat: 19.782226, lng: 96.094272 },
    { lat: 19.779620, lng: 96.095560 },
    { lat: 19.778086, lng: 96.094615 },
    { lat: 19.776309, lng: 96.092384 },
    { lat: 19.77340, lng: 96.093328 },
    { lat: 19.771625, lng: 96.092899 },
    { lat: 19.767748, lng: 96.094787 },
    { lat: 19.766608, lng: 96.095639 },
    { lat: 19.764413, lng: 96.095300 },
    { lat: 19.763906, lng: 96.095993 },
    { lat: 19.767143, lng: 96.099952 },
    { lat: 19.765824, lng: 96.101626 },
    { lat: 19.764138, lng: 96.101185 },
    { lat: 19.755198, lng: 96.109397 },
    { lat: 19.755105, lng: 96.111877 },
    { lat: 19.753809, lng: 96.114957 },
    { lat: 19.753250, lng: 96.116229 },
    { lat: 19.751375, lng: 96.115472 },
    { lat: 19.749498, lng: 96.116814 },
    { lat: 19.759815, lng: 96.137742 },
    { lat: 19.778481, lng: 96.142613 },
    { lat: 19.790274, lng: 96.145278 },
    { lat: 19.792620, lng: 96.147103 },
    { lat: 19.793875, lng: 96.146095 },
    { lat: 19.817709, lng: 96.148032 },
    { lat: 19.820344, lng: 96.149086 },
    { lat: 19.831052, lng: 96.147674 },
    { lat: 19.833841, lng: 96.146238 },
    { lat: 19.836222, lng: 96.144242 },
    { lat: 19.837766, lng: 96.143533 },
    { lat: 19.840906, lng: 96.143042 },
    { lat: 19.842056, lng: 96.142849 },
    { lat: 19.842206, lng: 96.142392 },
    { lat: 19.843023, lng: 96.142348 },
    { lat: 19.845135, lng: 96.145556 },
    { lat: 19.859079, lng: 96.144339 },
  ];
  var HotelZone = [
    { lat: 19.723207, lng: 96.111318 },
    { lat: 19.724024, lng: 96.120177 },
    { lat: 19.723838, lng: 96.123258 },
    { lat: 19.719475, lng: 96.123558 },
    { lat: 19.718930, lng: 96.117056 },
    { lat: 19.714535, lng: 96.117210 },
    { lat: 19.713193, lng: 96.118151 },
    { lat: 19.712821, lng: 96.119432 },
    { lat: 19.709895, lng: 96.122014 },
    { lat: 19.709085, lng: 96.123025 },
    { lat: 19.709120, lng: 96.123094 },
    { lat: 19.707338, lng: 96.122714 },
    { lat: 19.705751, lng: 96.121984 },
    { lat: 19.703954, lng: 96.122306 },
    { lat: 19.703408, lng: 96.123980 },
    { lat: 19.703984, lng: 96.125310 },
    { lat: 19.701620, lng: 96.128331 },
    { lat: 19.697240, lng: 96.132683 },
    { lat: 19.689431, lng: 96.132529 },
    { lat: 19.682343, lng: 96.130551 },
    { lat: 19.673222, lng: 96.126558 },
    { lat: 19.673925, lng: 96.122997 },
    { lat: 19.678243, lng: 96.123919 },
    { lat: 19.678687, lng: 96.121548 },
    { lat: 19.692426, lng: 96.123876 },
    { lat: 19.692285, lng: 96.125023 },
    { lat: 19.693891, lng: 96.125297 },
    { lat: 19.696721, lng: 96.122459 },
    { lat: 19.695962, lng: 96.121539 },
    { lat: 19.706143, lng: 96.111592 },
    { lat: 19.707435, lng: 96.110870 },
    { lat: 19.715415, lng: 96.108603 },
    { lat: 19.715407, lng: 96.111930 },
    { lat: 19.723178, lng: 96.111227 },

  ];
  var DiplomacyZone = [
    { lat: 19.720749, lng: 96.106930 },
    { lat: 19.710033, lng: 96.110086 },
    { lat: 19.698947, lng: 96.068319 },
    { lat: 19.709578, lng: 96.065066 },
    { lat: 19.714049, lng: 96.081770 },
    { lat: 19.717840, lng: 96.080672 },
    { lat: 19.719329, lng: 96.086214 },
    { lat: 19.718565, lng: 96.089434 },
    { lat: 19.719521, lng: 96.093172 },
    { lat: 19.719561, lng: 96.093478 },
    { lat: 19.719557, lng: 96.093887 },
    { lat: 19.719474, lng: 96.094429 },
    { lat: 19.719305, lng: 96.094877 },
    { lat: 19.719080, lng: 96.095188 },
    { lat: 19.718854, lng: 96.095423 },
    { lat: 19.717800, lng: 96.095761 },
    { lat: 19.720708, lng: 96.106896 },
  ];
  var MilitaryZone = [
    { lat: 19.880296, lng: 96.295856 },
    { lat: 19.885741, lng: 96.302839 },
    { lat: 19.887613, lng: 96.302838 },
    { lat: 19.889005, lng: 96.301817 },
    { lat: 19.890396, lng: 96.302327 },
    { lat: 19.891692, lng: 96.304675 },
    { lat: 19.893947, lng: 96.305747 },
    { lat: 19.894475, lng: 96.307687 },
    { lat: 19.891663, lng: 96.311048 },
    { lat: 19.887343, lng: 96.310792 },
    { lat: 19.883456, lng: 96.306709 },
    { lat: 19.877431, lng: 96.310363 },
    { lat: 19.865826, lng: 96.316986 },
    { lat: 19.866291, lng: 96.317694 },
    { lat: 19.865583, lng: 96.319474 },
    { lat: 19.863902, lng: 96.319363 },
    { lat: 19.861555, lng: 96.325677 },
    { lat: 19.858912, lng: 96.327649 },
    { lat: 19.855744, lng: 96.328160 },
    { lat: 19.853344, lng: 96.327956 },
    { lat: 19.851520, lng: 96.329231 },
    { lat: 19.848626, lng: 96.333263 },
    { lat: 19.848959, lng: 96.334646 },
    { lat: 19.849055, lng: 96.336279 },
    { lat: 19.848569, lng: 96.337008 },
    { lat: 19.846125, lng: 96.335781 },
    { lat: 19.846193, lng: 96.333833 },
    { lat: 19.847076, lng: 96.331956 },
    { lat: 19.844187, lng: 96.328447 },
    { lat: 19.842987, lng: 96.327426 },
    { lat: 19.843371, lng: 96.326354 },
    { lat: 19.840875, lng: 96.324721 },
    { lat: 19.836843, lng: 96.325028 },
    { lat: 19.836921, lng: 96.326440 },
    { lat: 19.835710, lng: 96.326955 },
    { lat: 19.835065, lng: 96.324295 },
    { lat: 19.832562, lng: 96.325067 },
    { lat: 19.832077, lng: 96.323351 },
    { lat: 19.833692, lng: 96.318459 },
    { lat: 19.832723, lng: 96.314854 },
    { lat: 19.830705, lng: 96.315970 },
    { lat: 19.829332, lng: 96.315283 },
    { lat: 19.825215, lng: 96.316828 },
    { lat: 19.822550, lng: 96.316630 },
    { lat: 19.822098, lng: 96.318572 },
    { lat: 19.820061, lng: 96.317705 },
    { lat: 19.819653, lng: 96.315179 },
    { lat: 19.817548, lng: 96.316767 },
    { lat: 19.815443, lng: 96.316479 },
    { lat: 19.813579, lng: 96.317879 },
    { lat: 19.812666, lng: 96.317575 },
    { lat: 19.812448, lng: 96.316857 },
    { lat: 19.812889, lng: 96.314656 },
    { lat: 19.811837, lng: 96.309965 },
    { lat: 19.808631, lng: 96.310157 },
    { lat: 19.808190, lng: 96.289078 },
    { lat: 19.808647, lng: 96.287924 },
    { lat: 19.808475, lng: 96.286407 },
    { lat: 19.813614, lng: 96.284647 },
    { lat: 19.813597, lng: 96.281313 },
    { lat: 19.817993, lng: 96.281313 },
    { lat: 19.818861, lng: 96.281009 },
    { lat: 19.819708, lng: 96.281262 },
    { lat: 19.822013, lng: 96.283303 },
    { lat: 19.824625, lng: 96.284242 },
    { lat: 19.824901, lng: 96.285395 },
    { lat: 19.826918, lng: 96.285548 },
    { lat: 19.828166, lng: 96.283609 },
    { lat: 19.830999, lng: 96.285038 },
    { lat: 19.830999, lng: 96.284119 },
    { lat: 19.829271, lng: 96.282588 },
    { lat: 19.830519, lng: 96.282333 },
    { lat: 19.830172, lng: 96.280632 },
    { lat: 19.831121, lng: 96.279334 },
    { lat: 19.831349, lng: 96.280258 },
    { lat: 19.835688, lng: 96.283050 },
    { lat: 19.836316, lng: 96.285720 },
    { lat: 19.837173, lng: 96.287359 },
    { lat: 19.841797, lng: 96.289302 },
    { lat: 19.842139, lng: 96.288755 },
    { lat: 19.843452, lng: 96.289483 },
    { lat: 19.848533, lng: 96.286449 },
    { lat: 19.850931, lng: 96.287177 },
    { lat: 19.850531, lng: 96.288816 },
    { lat: 19.851216, lng: 96.289787 },
    { lat: 19.851533, lng: 96.290646 },
    { lat: 19.851101, lng: 96.292075 },
    { lat: 19.856220, lng: 96.289481 },
    { lat: 19.858332, lng: 96.284201 },
  ];
  // Construct the polygon for Zone = MinisirtyZone
  var Zone = new google.maps.Polygon({
    paths: MinisitryZone,
    strokeColor: '#FF000',
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: '#2ca25f',
    fillOpacity: 0.35,
    maxWidth: 200
  });
  Zone.setMap(map);

  // Construct the polygon for Zone1 = HotelZone
  var Zone1 = new google.maps.Polygon({
    paths: HotelZone,
    strokeColor: '#FF000',
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: '#3182bd',
    fillOpacity: 0.35
  });
  Zone1.setMap(map);
  // Construct the polygon for Zone2 = Diplomancy Zone
  var Zone2 = new google.maps.Polygon({
    paths: DiplomacyZone,
    strokeColor: '#FF000',
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: '#c994c7',
    fillOpacity: 0.35
  });
  Zone2.setMap(map);
  // Construct the polygon for Zone3 = Military Zone
  var Zone3 = new google.maps.Polygon({
    paths: MilitaryZone,
    strokeColor: '#FF000',
    strokeOpacity: 0,
    strokeWeight: 3,
    fillColor: '#2ca25f',
    fillOpacity: 0.35
  });
  Zone3.setMap(map);

  // Add a listener for the click event.
  Zone.addListener('click', showArrays); // for zone 
  Zone1.addListener('click', showArrays1); // for zone 1
  Zone2.addListener('click', showArrays2); // for zone 2
  Zone3.addListener('click', showArrays3); // for zone 2

  infoWindow = new google.maps.InfoWindow;
}

// Show array for zone
/** @this {google.maps.Polygon} */
function showArrays(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();
  var Zoneinfo = "<center><h3><b>Minisity Zone</b></h3></center><br>" + 
  "<center><p style='font-family: Ubuntu; font-size: 1em; color: green; '>The city's Ministry zone contains the headquarters of Myanmar's government ministries. All the ministry buildings are identical in appearance. A parliamentary complex consisting of 31 buildings and a 100-room presidential palace are also located there. The zone also contains the city hall building, which has many characteristics of Stalinist architecture, but with a Burmese-style roof.</h6></center <br>";
  // Replace the info window's content and position.
  infoWindow.setContent(Zoneinfo);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
  setTimeout(function () { infoWindow.close(); }, 20000);
}

// showarrays for zone 1
/** @this {google.maps.Polygon} */
function showArrays1(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var Zone1info = "<center><h3><b>Hotel Zone</b></h3><center><br>" + 
  "<center><p  style='font-family: Ubuntu; font-size: 1em; color: blue;' >The Hotel zone has a handful of villa-style hotels on the hilly outskirts of the city. There are currently twelve hotels located in or near Naypyidaw. Eight of these are located within the Naypyidaw Hotel Zone, and two are located in Laeway (Lewe) on the Yangon-Mandalay Road. Forty villas were constructed near the Myanmar Convention Centre in preparation for the 25th ASEAN summit conducted in Naypyidaw in November 2014. Construction of the villas was begun in 2010 by the government. However, funds were limited, so the project was later put out to tender for completion by private sector investors. A total of 348 hotels and 442 inns were constructed to house the athletes and spectators of the 2013 Southeast Asian Games, which was hosted in Naypyidaw.</p></center> </br>";
  // Replace the info window's content and position.
  infoWindow.setContent(Zone1info);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
  setTimeout(function () { infoWindow.close(); }, 50000);
}

// showarrays for zone 2
/** @this {google.maps.Polygon} */
function showArrays2(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var zone2info = "<center><h3><b>Diplomantic Zone</b></h3><center><br>" +
  "<center><p  style='font-family: Ubuntu; font-size: 1em; color: #c994c7;'>The government has set aside 2 hectares (4.9 acres) of land each for foreign embassies and headquarters of United Nations missions. The Chinese embassy has formally opened its interim liaison office in 2017. The liaison office is the first foreign office to be permitted to open in Naypyidaw. Bangladesh and Malaysia have also signed agreements to open embassies in Naypyidaw. The government confirms that proposals have been put forward by 11 other countries to move their embassies to Naypyidaw, namely Russia, China, the United States, India, Saudi Arabia, Qatar, the Philippines, Indonesia, Thailand, Turkey and Kuwait. In February 2018, State Counsellor Daw Aung San Suu Kyi chaired a meeting at the Ministry of Foreign Affairs in Naypyidaw where she urged foreign governments to move their embassies to the capital.</p></center> </br>";
  // Replace the info window's content and position.
  infoWindow.setContent(zone2info);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
  setTimeout(function () { infoWindow.close(); }, 50000);
}
// showarrays for zone 3
/** @this {google.maps.Polygon} */
function showArrays3(event) {
  // Since this polygon has only one path, we can call getPath() to return the
  // MVCArray of LatLngs.
  var vertices = this.getPath();

  var zone3info = "<center><h3><b>Military Zone</b></h3><center><br>" + 
  "<center><p  style='font-family: Ubuntu; font-size: 1em; color: green;' >High-ranking military officers and other key officials live 11 km (6.8 mi) away from regular government employees in a complex said to consist of tunnels and bunkers; this area is restricted to the public. The city also hosts a military base, which is inaccessible to citizens or other personnel without written permission.</p></center> </br>";
  // Replace the info window's content and position.
  infoWindow.setContent(zone3info);
  infoWindow.setPosition(event.latLng);

  infoWindow.open(map);
  setTimeout(function () { infoWindow.close(); }, 20000);
}


