(function(){

$('#elForm').on("submit", function(event) {

    var that = this;

    $('#aviso1').text('');
    $('#aviso2').text('');

    event.preventDefault();

    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 

    var vEmail1 = $('#txtbx1').val().trim();
    var vEmail2 = $('#txtbx2').val().trim();

    var isEmail1 = vEmail1.match(emailRegex);
    var isEmail2 = vEmail2.match(emailRegex);
    
    if (isEmail1==null) {
        $('#aviso1').text('No es direccion valida');
    } else {
        $('#aviso1').text('');
    }
    if (isEmail2==null) {
        $('#aviso2').text('No es direccion valida');
    } else {
        $('#aviso2').text('');
    }

    if(vEmail1==null || vEmail1=='') {
        $('#aviso1').text('Vacio');
    } else {
        $('#aviso1').text('');
    }

    if (vEmail2==null || vEmail2=='') {
        $('#aviso2').text('Vacio');
    } else {
        $('#aviso2').text('');
    }

    if (vEmail1 == vEmail2 && isEmail1 != null && isEmail2 != null) {
        alert('Enviado');
        return true;//event.submit();
        
    } else if (vEmail1 != vEmail2) {
        $('#aviso1').text('No coinciden');
        $('#aviso2').text('No coinciden');
    }

});

$('#elForm').on("reset", function(event) {
    if (!confirm('Resetear?')) {
        event.preventDefault();
    } else {
        return true;
    }
});


/*Function end*/

$('<span id="aviso1"></span>').insertAfter('#txtbx1');
$('<span id="aviso2"></span>').insertAfter('#txtbx2');



})();




/*
Reset and Submit on form OK

Añadir mensaje de vacio OK

utiliza patrón módulo OK

utiliza trim() para quitarle los espacios a los campos antes de la validación OK
*/