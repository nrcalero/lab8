function initMap() {
  // Create center marker at UCSD
  var ucsdLatLong = {
    lat: 32.878803,
    lng: -117.235912,
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsdLatLong,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: ucsdLatLong,
    map: map,
    title: 'UCSD',
  });
}
