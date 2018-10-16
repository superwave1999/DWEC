(function () {

    document.getElementById("send").addEventListener("click", processAll);

function processAll() {
    var numero = document.getElementById("txtbx").value;
    var resultLetHTML = document.getElementById("result");
    resultLetHTML.textContent = process(numero);

    var numero = document.getElementById("txtbx2").value;
    var resultLetHTML = document.getElementById("result2");
    resultLetHTML.textContent = process(numero);

    var numero = document.getElementById("txtbx3").value;
    var resultLetHTML = document.getElementById("result3");
    resultLetHTML.textContent = process(numero);

}


function process(parImpar) {
    var valor = parImpar;
    var toReturn = "N/A";
    if (validarTexto(valor)) {

        var upp = valor.toUpperCase();

        var low = parImpar.toLowerCase();

        if (parImpar == upp) {
            toReturn = "Es mayusculas";
        } else if (parImpar == low) {
            toReturn = "Es minusculas";
        } else {
            toReturn = "Es una mezcla de caracteres";
        }

    }

    return toReturn;

}

function validarTexto (input) {
    if (isNaN(input)) {
        return true;
    } else {
        return false;
    }
}

})();