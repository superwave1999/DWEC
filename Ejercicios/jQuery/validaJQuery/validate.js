$('#submit').click(function(event) {

    $('#aviso1').text('');
    $('#aviso2').text('');

    event.preventDefault();

    var emailRegex = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$'; 

    var isEmail1 = $('#txtbx1').val().match(emailRegex);
    var isEmail2 = $('#txtbx2').val().match(emailRegex);

    if (!isEmail1) {
        $('#aviso1').text('No es direccion valida');
    } else {
        $('#aviso1').text('');
    }
    if (!isEmail2) {
        $('#aviso2').text('No es direccion valida');
    } else {
        $('#aviso2').text('');
    }

    var em1 = $('#txtbx1').val();
    var em2 = $('#txtbx2').val();

    if (em1 == em2 && isEmail1 && isEmail2) {
        this.submit();
    } else if (em1 != em2) {
        $('#aviso1').text('No coinciden');
        $('#aviso2').text('No coinciden');

    }



});

$('#reset').click(function(event) {
    
    if (confirm('Resetear?')) {
        this.reset();
    } else {
        event.preventDefault();
    }

});


/*Function end*/

$('<span id="aviso1"></span>').insertAfter('#txtbx1');
$('<span id="aviso2"></span>').insertAfter('#txtbx2');