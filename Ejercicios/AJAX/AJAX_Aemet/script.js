var dataObject;
var resolt;
var jsObject;


var divAlt = $('#altitud');
var divIndi = $('#indicativo');
var divInds = $('#indsinop');
var divLat = $('#latitud');
var divLon = $('#longitud');


refreshData();
$('#refBtn').on('click',refreshData);

setInterval(refreshData, 15000);


function refreshData() {
    $.ajax({
        "async": false,
        "crossDomain": true,
        "url": "https://opendata.aemet.es/opendata/api/valores/climatologicos/inventarioestaciones/todasestaciones/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlcndhdmUxOTk5QGdtYWlsLmNvbSIsImp0aSI6ImExMTZkNTk4LTFjYWMtNDExNC1iNWNkLWQ5ZWZlYmJiNWNjMyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTQ2OTM3MjM4LCJ1c2VySWQiOiJhMTE2ZDU5OC0xY2FjLTQxMTQtYjVjZC1kOWVmZWJiYjVjYzMiLCJyb2xlIjoiIn0.qgsINYf9o3OwOpXYS0o-d_qqPaevI6UnztGzomAJ77Y",
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
                if (jsObject[i].provincia == "GRANADA" && jsObject[i].nombre== "GRANADA AEROPUERTO") {
                    divAlt.text('Altitud:' + jsObject[i].altitud + 'm');
                    divIndi.text('Indicativo:' + jsObject[i].indicativo);
                    divInds.text('Indsinop(?):' + jsObject[i].indsinop);
                    divLat.text('Latitud:' + jsObject[i].latitud + 'º');
                    divLon.text('Longitud:' + jsObject[i].longitud + 'º');
                }
            }
        }
    ;});
}