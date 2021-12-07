var Http = new XMLHttpRequest();
var latitud = 19.4978;
var logitud = -99.1269;
var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitud + ',' + logitud
    + '&key=TU_LLAVE_API_DE_GOOGLE_MAPS';
Http.open('POST', url);
Http.send();
Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
}