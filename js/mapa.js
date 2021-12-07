var hosiptales = new Array(
    [51.527316, -0.090122, "Moofields Eye Hospital"],
    [51.517876, -0.061412, "Royal London Hospital"],
    [51.520173, -0.046906, "BMI London Independent Hospital"],
    [51.52506, -0.042229, "Mile End Hospital"],
    [51.53371, -0.07875, "Saint Leonards Hospital"],
    [51.517236, -0.099692, "St Bartholomew's Hosital"],
    [51.46898, -0.090466, "Maudsley Hospital"],
    [51.536593, -0.131707, "St Pancras Hospital"],
    [51.487209, -0.219727, "Charing Cross Hospital"],
    [51.526475, -0.117116, "Eastman Dental Hospital"],
    [51.522683, -0.12085, "Great Ormond Street Hospital"],
    [51.503427, -0.087129, "Guy's Hospital"],
    [51.551032, -0.045533, "Homerton University Hospital"],
    [51.547883, -0.039053, "Jhon Howard Centre"],
    [51.553007, -0.16531, "Royal Free Hospital"],
    [51.58043, -0.089951, "St Ann's Hospital"],
    [51.437156, -0.171919, "Springfields Hospital"],
    [51.426775, -0.175695, "St George's Hospital"],
    [51.465451, -0.122695, "Lambeth Hospital"],
    [51.57771, 0.002747, "Whipps Cross University Hospital"],
    [51.590523, -0.007446, "Thorpe Coombre Hospital"],
    [51.613353, -0.073857, "North Middlesex Hospital"],
    [51.522897, 0.03557, "Newhoma University Hospital"],
    [51.520493, 0.038838, "East London NHS Fundation Trust"],
    [51.453953, -0.017595, "Orange Zone"],
    [51.478176, 0.050039, "Queen Elizabeth Hospital"],
    [51.382067, -0.0315, "Bethlem Royal Hospital"],
    [51.477098, -0.031703, "Waldron Health Centre"],
    [51.484535, -0.181658, "Chelsea and Wastminster Hospital"],
    [51.489198, -0.170736, "Royal Brompton Hospital"],
    [51.490467, -0.172431, "The Royal Marsden NHS Foundation Trust"],
    [51.41898, 0.10345, "Queen Mary's Hospital"],
    [51.389823, -0.110016, "Croydon University Hospital"],
    [51.34406, -0.19104, "Royal Marsden"],
    [51.349856, -0.193311, "Chiltren Health Centre"],
    [51.350418, -0.27379, "St. Ebbas's Hospital"],
    [51.34302, -0.266409, "Appleby Care Centre"],
    [51.341787, -0.301857, "New Epssom & Ewell Cottage Hospital"],
    [51.336854, -0.29808, "Ramsay House"],
    [51.334226, -0.255423, "The Old Cottage Hospital"],
    [51.325002, -0.273533, "Epsom General Hospital"],
    [51.366203, 0.058413, "Princess Royal University Hospital"],
    [51.362234, 0.094767, "Oprington Hospital"],
    [51.435329, 0.258789, "Jasmine Centre"],
    [51.446403, 0.242825, "Little Brook Hospital"],
    [51.865755, 0.174885, "Herts And Essex Community Hospital"],
    [51.754763, 0.090132, "Lister House Health Centre"],
    [51.771125, 0.086012, "Princess Alexandra Hospital"],
    [51.769403, 0.111971, "Sydenham House Surgrey"],
    [51.632075, -0.314646, "Royal National Orthopeadic Hospital"],
    [51.637616, -0.331554, "Spire Bushey Hospital"],
    [51.648539, -0.4037, "Watford General"],
    [51.473649, -0.324221, "West Middlesex Hospital"],
    [51.52523, -0.461421, "Hillingdon Hospital"],
    [51.53175, -0.573845, "Wexham Park Hospital"],
    [51.507535, -0.344944, "Eeling Hospital"],
    [51.566578, -0.139451, "The Whtittington Hospital"],
    [51.566612, -0.142605, "Highgate Mental Health Centre"],
    [51.587252, 0.04365, "Spire London East"],
    [51.592294, 0.224428, "Harold Wood Polyclinic"],
    [51.568624, 0.179749, "Queen's Hospital"],
    [51.382138, -0.056429, "Shirley Darks Hospital"],
    [51.397464, -0.163159, "The Wilson Hospital"],
    [51.499318, -0.118852, "St Thomas Hospital"],
    [51.498263, -0.118616, "Evelina Children's Hospital"],
    [51.497158, -0.109723, "Cambian Churichill"],
    [51.46808, -0.093865, "Kin's Collage Hospital"]
    );
class ambulancia{
    constructor(nombre, apellido,fecha, hora, incidente , direccion, direccion1,ciudad, calle, zip, latitud, longitud){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha = fecha;
        this.hora = hora;
        this.incidente = incidente;
        this.direccion = direccion;
        this.direccion1 = direccion1;
        this.ciudad = ciudad;
        this.calle = calle;
        this.zip = zip;
        this.latitud = latitud;
        this.longitud = longitud;
    }
    mostrarDatos(){
        return console.log(this.nombre, this.apellido,this.fecha,this.hora,this.direccion, this.direccion1, this.ciudad, this.calle, this.zip, this.latitud, this.longitud);
    }
}

var mymap_incidente = L.map('map_incidente').setView([51.505, -0.09], 13);
var mymap = L.map('map').setView([51.505, -0.09], 13);
var cont = 0;
function datos() {
    var dato = new ambulancia(
        document.getElementById("nom").value,
        document.getElementById("lastName").value,
        document.getElementById("fecha").value,
        document.getElementById("hora").value,
        document.getElementById("incidente_txt").value,
        document.getElementById("address").value,
        document.getElementById("address2").value,
        document.getElementById("ciudad").value,
        document.getElementById("calle").value,
        document.getElementById("zip").value,
        document.getElementById("latitud").value,
        document.getElementById("longitud").value
        );
    
    document.getElementById("nombre_afectado").innerHTML = dato.nombre;
    document.getElementById("apellido_afectado").innerHTML = dato.apellido;
    document.getElementById("dir1").innerHTML = dato.direccion;
    document.getElementById("dir2").innerHTML = dato.direccion1;
    document.getElementById("ciudad_afectado").innerHTML = dato.ciudad;
    document.getElementById("calle_afectado").innerHTML = dato.calle;
    document.getElementById("zip_afeactado").innerHTML = dato.zip;
    document.getElementById("in_txt").innerHTML = dato.incidente;

    document.getElementById("fecha_in").innerHTML = dato.fecha;
    document.getElementById("hora_in").innerHTML = dato.hora;
    document.getElementById("long_incidente").innerHTML = dato.longitud;
    document.getElementById("lat_incidente").innerHTML = dato.latitud;
    estimar_servicios(dato);
}

function estimar_servicios(dato){
        var distancia = Math.sqrt((Math.pow((dato.latitud - hosiptales[0][0]),2)+ Math.pow((dato.longitud - hosiptales[0][1]), 2)));
        for (let i = 0; i < hosiptales.length; i++) {
            var dis_calculo = Math.sqrt((Math.pow((dato.latitud - hosiptales[i][0]),2)+ Math.pow((dato.longitud - hosiptales[i][1]), 2)));
            if (distancia > dis_calculo) {
                distancia = dis_calculo;
                var lat_in = hosiptales[i][0];
                var long_in = hosiptales[i][1];
                var hos = hosiptales[i][2];
            }
        }
    var hospital = L.marker([lat_in, long_in]).addTo(mymap_incidente);
    hospital.bindPopup("<b>Hospital</b><br>"+ hos);
    var incidente = L.marker([dato.latitud, dato.longitud]).addTo(mymap_incidente);
    incidente.bindPopup("<b>Incidente</b>");
    L.circle([dato.latitud, dato.longitud], {radius: 600}).addTo(mymap_incidente);

    var p_hospital = L.latLng(lat_in, long_in);
    var p_incidente = L.latLng(dato.latitud, dato.longitud);
    var dis_in = p_hospital.distanceTo(p_incidente);
    
    //Datos del servicio medico
    document.getElementById("distancia_incidnete").innerHTML = dis_in + " Metros";
    document.getElementById("hospital_cercano").innerHTML = hos;
    console.log(cont);
}

for (let i = 0; i < hosiptales.length; i++) {
    var lat = hosiptales[i][0];
    var long = hosiptales[i][1];
    var marker = L.marker([lat, long]).addTo(mymap);
    marker.bindPopup("<b>Ambulancia</b><br>" + hosiptales[i][2]);
}
//MAPA 1 - OBTENCIÓN DE DATOS
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap);
var popup = L.popup();
function onMapClick(a) {
popup
.setLatLng(a.latlng)
.setContent("Las cordenadas son: " + a.latlng.toString())
.openOn(mymap);
}
mymap.on('click', onMapClick);
//MAPA 2 - INCIDENTES

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
maxZoom: 18,
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1
}).addTo(mymap_incidente);