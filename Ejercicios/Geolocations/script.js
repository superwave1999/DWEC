/* Coordenadas del mapa */

myPosition = null;
liveTrackingId = null;
var locationGranada = {
    latitude: 37.1809411,
    longitude: -3.6262912,
    zoom: 13
}

var locationWombourne = {
    latitude: 52.5312503,
    longitude: -2.1970127,
    zoom: 14.5
}

var locationHome = {
    latitude: 37.1475972,
    longitude: -3.5737759,
    zoom: 16.28
}


/* Posicion estática - en directo */

function enableLivePosition() {
    if (liveTrackingId == null) {
        liveTrackingId = navigator.geolocation.watchPosition(goodPos, badPos);
    }
}

function disableLivePosition() {
    if (liveTrackingId != null) {
        navigator.geolocation.clearWatch(liveTrackingId);
    }
    
    navigator.geolocation.getCurrentPosition(goodPos, badPos);
}


function displayHome() {
    if (liveTrackingId != null) {
        navigator.geolocation.clearWatch(liveTrackingId);
    }
    renderMap(locationHome);
}

function displayWombourne() {
    if (liveTrackingId != null) {
        navigator.geolocation.clearWatch(liveTrackingId);
    }
    renderMap(locationWombourne);

}

function displayGranada() {
    if (liveTrackingId != null) {
        navigator.geolocation.clearWatch(liveTrackingId);
    }
    renderMap(locationGranada);

}

//Renderiza el mapa
var renderMap = function ($location) {
    var divMapa = document.getElementById("mapa");
    
    var opcionesMapa = {
        zoom: 15,
        //center: googleLatLong
        center: {lat: $location.latitude, 
                 lng: $location.longitude},
        mapTypeId: google.maps.MapTypeId.HYBRID 
    };
    
    
    
    //if ($location.coords.zoom == null || $location.coords.zoom == '') { $location.coords.zoom = 12 };
    var mapa = new google.maps.Map(divMapa, opcionesMapa);
  // var mapa = new google.maps.Map(divMapa, {zoom: 8, center: {lat: -34.397, lng: 150.644}});
}



/* SI la posicion esta bien o no */
function goodPos(position) {
    myPosition = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
    };

    renderMap(position.coords);
    distanceBetweenTwo(myPosition);
}

function badPos(error) {
    var errCodes = ['Error 0','Error 1', 'Error 2', ' Error 3']
    var message = errCodes[error.code];

    var div = document.getElementById("situacion");
        div.textContent = message;

    myPosition = null;
}


/* Otros*/

var distanceBetweenTwo = function (posicion) {
    divSituacion = document.getElementById('distancia');

    var latitud = posicion.latitude;
    var longitud = posicion.longitude;
    divSituacion.textContent = "Estás en Latitud: " + Math.round(latitud * 100) / 100 + " , Longitud: " + Math.round(longitud * 100) / 100;
    var km = calcularDistancia(posicion, locationHome);
    var divElement = document.createElement('div');
    divElement.textContent = "Estás a " + km + " km de casa";
    divSituacion.appendChild(divElement);
    var km = calcularDistancia(posicion, locationWombourne);
    var divElement = document.createElement('div');
    divElement.textContent += "Estás a " + km + " km de wom";
    divSituacion.appendChild(divElement);
}

var calcularDistancia = function (coordenadasOrigen, coordenadasDestino) {
        var radianesLatInicio = gradosARadianes(coordenadasOrigen.latitude);
        var radianesLongInicio = gradosARadianes(coordenadasOrigen.longitude);
        var radianesLatDestino = gradosARadianes(coordenadasDestino.latitude);
        var radianesLongDestino = gradosARadianes(coordenadasDestino.longitude);
        var Radio = 6371; // radio de la Tierra en Km
        var distancia = Math.acos(Math.sin(radianesLatInicio) * Math.sin(radianesLatDestino) + Math.cos(radianesLatInicio) * Math.cos(radianesLatDestino) * Math.cos(radianesLongInicio - radianesLongDestino)) * Radio;
        return Math.round(distancia * 100) / 100;
    }

    var gradosARadianes = function (grados) {
        var radianes = (grados * Math.PI) / 180;
        return radianes;
    }



/* Startup */
disableLivePosition();

document.getElementById('currLocBt').addEventListener('click', function (e) {
    disableLivePosition();
})

document.getElementById('liveLocBt').addEventListener('click', function (e) {
    enableLivePosition();
})

document.getElementById('houseLocBt').addEventListener('click', function (e) {
    displayHome();
})

document.getElementById('granadaLocBt').addEventListener('click', function (e) {
    displayGranada();
})

document.getElementById('wombourneLocBt').addEventListener('click', function (e) {
    displayWombourne();
})