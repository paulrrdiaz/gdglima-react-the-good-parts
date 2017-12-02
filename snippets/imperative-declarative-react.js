const myLatLng = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

// Imperative
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 5,
  center: myLatLng,
});

const marker = new google.maps.Marker({
  position: myLatLng,
  title: 'Hello GDG Lima 2017',
});

marker.setMap(map);

// Declarative
<Gmaps lat={myLatLng.lat} lng={myLatLng.lng} zoom={12}>
  <Marker lat={coords.lat} lng={coords.lng} title='Hello GDG Lima 2017' />
</Gmaps>
