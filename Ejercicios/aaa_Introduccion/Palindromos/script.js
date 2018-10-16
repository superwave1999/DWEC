document.getElementById("send").addEventListener("click", validate);
resultLetHTML=document.getElementById("result");
numero = document.getElementById("txtbx");

function validate() {

    var parImpar = numero.value;

    if ((parImpar==null) || (parImpar=="")) {
        
        resultLetHTML.innerHTML = "vacío";
    } else {
        var arrSplit = parImpar.split("");
        var arRev = arrSplit.reverse();
        var strJoin = arRev.join("");

        resultLetHTML.innerHTML = strJoin;
    }

}

function validateLength (input) {
    if (isNaN(input)) {
        return true;
    } else {
        return false;
    }
}