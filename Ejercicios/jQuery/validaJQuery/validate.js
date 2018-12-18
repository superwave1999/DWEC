(function(){

$('#elForm').on("submit", function(event) {    

    var vEmail1 = validaCorreo('txtbx1', 'No es una direccion valida');
    var vEmail2 = validaCorreo('txtbx2', 'No es una direccion valida');

    if (vEmail1 && vEmail2 && ($('#txtbx1').val() == $('#txtbx2').val())) {
        alert('Enviado');
    } else if ($('#txtbx1').val() != $('#txtbx2').val()) {
        $('#txtbx1_v').text('No coinciden');
        $('#txtbx2_v').text('No coinciden');
        event.preventDefault();
    } else {
        event.preventDefault();
    }

});

$('#elForm').on("reset", function(event) {
    if (!confirm('Resetear?')) {
        event.preventDefault();
    }
});


/*Function end*/

function addSpan(idname) {
    $('<span id="'+idname+'_v"></span>').insertAfter('#'+idname);
}




function validaCorreo(id, mensaje) {

    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; 
    var element = $('#'+id);
    var text = element.val();

    $('#'+id+'_v').text('');

    var status = false;

    if (text==null || text=='') {
        $('#'+id+'_v').text('Esta vacio');
    } else {
        status = emailRegex.test(element.val().trim());
        if (status) {
            $('#'+id+'_v').text('');
        } else {
            $('#'+id+'_v').text(mensaje);
        }
    }
    return status;
}


addSpan('txtbx1');
addSpan('txtbx2');

})();