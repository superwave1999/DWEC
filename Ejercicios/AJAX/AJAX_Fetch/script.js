/* BROWSER COMPATIBILITY TEST
if (self.fetch) {
    // run my fetch request here
} else {
    // do something with XMLHttpRequest?
}*/

var jsonData;
var divLoc = $('#location');
var divDate = $('#date');
var divCopy = $('#copy');
var divSource = $('#source');

//refreshData();
//$('#refBtn').on('click',refreshData);

//setInterval(refreshData, 15000);


if (self.fetch) {
    var myHeaders = new Headers();
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.append('Content-Type', 'application/json');

    var url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcndhdmUxOTk5QGdtYWlsLmNvbSIsImp0aSI6ImExMTZkNTk4LTFjYWMtNDExNC1iNWNkLWQ5ZWZlYmJiNWNjMyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTQ2OTM3MjM4LCJ1c2VySWQiOiJhMTE2ZDU5OC0xY2FjLTQxMTQtYjVjZC1kOWVmZWJiYjVjYzMiLCJyb2xlIjoiIn0.qgsINYf9o3OwOpXYS0o-d_qqPaevI6UnztGzomAJ77Y"
    var myInit = { method: 'GET',
                    async: 'false',
                headers: myHeaders,
                mode: 'cors', //Is same as "crossDomain" in ajax
                cache: 'no-cache' };

    var myRequest = new Request(url, myInit);


    fetch(myRequest).then(function(response) {
        var contentType = response.headers.get("content-type");
        if(contentType && contentType.includes("application/json")) {
            console.log(response); //Response are the headers
            return response.json();
        }
        throw new TypeError("First fetch() request error - Check connection and URL!");
    }).then(function(json) {
        var jsonURL = json.datos;
        //json is an object
        console.log(json);
        //Same init as before
        var request2 = new Request(jsonURL, myInit);
        fetch(request2).then(function(response2) {
                return response2.json();

        }).then(function(json) {
            jsonData = json;
            console.log(jsonData);
            /*
            for(var i=0; i<jsonData.length; i++) {
                if (jsonData[i].nombre == "Granada" && jsonData[i].provincia== "Granada") {

                    divLoc.text(jsonData[i].nombre);
                    divDate.text(jsonData[i].elaborado);
                    divSource.text(jsonData[i].origen.productor);
                    divCopy.text(jsonData[i].origen.copyright);

                    drawPrediccion(jsonData[i]);
                }
            }*/
            drawPrediccion(jsonData[0]);

        });

    }).catch(function(error) { console.log(error); });

} else {
    //AJAX JQUERY
    $.ajax({
        "async": false,
        "crossDomain": true,
        "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/18087/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcndhdmUxOTk5QGdtYWlsLmNvbSIsImp0aSI6ImExMTZkNTk4LTFjYWMtNDExNC1iNWNkLWQ5ZWZlYmJiNWNjMyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTQ2OTM3MjM4LCJ1c2VySWQiOiJhMTE2ZDU5OC0xY2FjLTQxMTQtYjVjZC1kOWVmZWJiYjVjYzMiLCJyb2xlIjoiIn0.qgsINYf9o3OwOpXYS0o-d_qqPaevI6UnztGzomAJ77Y",
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }).done(function(result){
            resolt = result.datos;
      });
    
    $.getJSON( resolt, function(res) {
        jsObject = res;
    
        if (jsObject != null && jsObject[i].nombre == "Granada" && jsObject[i].provincia== "Granada") {

                    divLoc.text(jsObject[i].nombre);
                    divDate.text(jsObject[i].elaborado);
                    divSource.text(jsObject[i].origen.productor);
                    divCopy.text(jsObject[i].origen.copyright);

                    drawPrediccion(jsObject[i]);

        }
    ;});
}






function drawPrediccion(datos) {

    $('#contenedorTabla').empty();

    var tabla = $(`<table class="table-dark">
    <thead>
        <tr>
            <th>Día</th>
            <th>Prob precipitacion</th>
            <th>Cota de nieve</th>
            <th>Viento</th>
            <th>Temperatura</th>
            <th>Sensación térmica</th>
            <th>Humedad relativa</th>
        </tr>
    </thead>
    </table>`);

    var bodytabla = $('<tbody></tbody>');
    for(var i=0; i<7; i++){
        var cota = datos.prediccion.dia[i].cotaNieveProv[0].value;
        if(cota ==""){
            cota = '---';
        }else{
            cota = datos.prediccion.dia[i].cotaNieveProv[0].value + 'm';
        }

        bodytabla.append ('<tr>'
        + '<td>' + datos.prediccion.dia[i].fecha + '</td>'
        + '<td>' + datos.prediccion.dia[i].probPrecipitacion[0].value + '%</td>'
        + '<td>' + cota + '</td>' 
        + '<td>' + datos.prediccion.dia[i].viento[0].velocidad  + 'km/h </td>' 
        + '<td>' + datos.prediccion.dia[i].temperatura.minima + '-' + datos.prediccion.dia[i].temperatura.maxima + 'ºC </td>' 
        + '<td>' + datos.prediccion.dia[i].sensTermica.minima + '-' + datos.prediccion.dia[i].sensTermica.maxima + 'ºC </td>' 
        + '<td>' + datos.prediccion.dia[i].humedadRelativa.minima + '-' + datos.prediccion.dia[i].humedadRelativa.maxima + '%</td></tr>');
    }
    tabla.append(bodytabla);
    var content = $('#contenedorTabla');
    content.append(tabla);

}