function initMap() {
  // Create center marker at UCSD
  var ucsd_ltlng = {
    lat: 32.878827,
    lng: -117.236043,
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    center: ucsd_ltlng,
    zoom: 15,
  });

  var marker = new google.maps.Marker({
    position: ucsd_ltlng,
    map: map,
    title: 'UCSD',
  });
}
