(function () {

    var array = ['pepe', 'paco'];

    document.write('In es posicion <br>');

    for (var pos in array) {
        document.write(pos + '<br>');
    }

    document.write('Of es  el valor de la posicion <br>');
    for (var val of array) {
        document.write(val + '<br>');
    }

} ());