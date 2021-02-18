var map;
function initialize_map() {
  if ($("#map").length) {
    var myLatLng = new google.maps.LatLng(-37.814199, 144.96156);
    var mapOptions = {
      zoom: 17,
      center: myLatLng,
      scrollwheel: false,
      panControl: false,
      zoomControl: true,
      scaleControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      tittle: "Envato",
      icon: "/static/images/map-locator.png",
    });
  } else {
    return false;
  }
}
google.maps.event.addDomListener(window, "load", initialize_map);
