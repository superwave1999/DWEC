var resolt;
var jsObject;
var divLoc = $('#location');
var divDate = $('#date');
var divCopy = $('#copy');
var divSource = $('#source');

refreshData();
$('#refBtn').on('click',refreshData);

setInterval(refreshData, 15000);


function refreshData() {
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
    
        if (jsObject != null) {
            for(var i=0; i<jsObject.length; i++) {
                if (jsObject[i].nombre == "Granada" && jsObject[i].provincia== "Granada") {

                    divLoc.text(jsObject[i].nombre);
                    divDate.text(jsObject[i].elaborado);
                    divSource.text(jsObject[i].origen.productor);
                    divCopy.text(jsObject[i].origen.copyright);

                    drawPrediccion(jsObject[i]);
                }
            }
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