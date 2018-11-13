/*
Al hacer clic sobre el enlace “Ver fotos” aparecerán todas las fotos (previamente están ocultas), al volver a hacer clic desaparecerán.
Al modificar el campo "número de noches" de cualquier viaje,  se debe modificar automáticamente el precio (el precio por día está en el span con clase 'tour' correspondiente a ese viaje) .
Al pulsar el botón de "reserve ahora", desaparecerá dicho botón y aparecerá en su lugar el mensaje: “Llame al 902 30 30 30 para reservar este viaje”.
*/

(function () {

    var tours = document.getElementsByClassName("tour");


    




    for (var i=0; i<tours.length; i++) {
        var numNoches = tours[i].getElementsByTagName('input');
        numNoches[0].addEventListener("change", function (e) {
            cambiarPrecio(e);
        });


    }












    function cambiarPrecio (e) {
        var clicked = e.target;
        var padre = clicked.parentNode;
        var spanChng = padre.getElementsByClassName("total");

        var pricePerDay = padre.getAttribute("data-precio-dia");

        var nights = clicked.value;


        var nightsText = padre.getElementsByClassName("numero-noches");



        nightsText[0].textContent = nights;


        //Actualiza el precio
        spanChng[0].textContent = pricePerDay * nights;



    }





















})();