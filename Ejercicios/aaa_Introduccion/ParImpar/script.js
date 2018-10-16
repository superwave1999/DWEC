document.getElementById("send").addEventListener("click", validate);
resultLetHTML=document.getElementById("result");
numero = document.getElementById("txtbx");

function validate() {

    var parImpar = numero.value;

    if (validateLength(parImpar)) {
        
        parImpar = parseInt(parImpar);

        if ((parImpar%2)==0) {
            resultLetHTML.innerHTML = "Es par";
        } else {
            resultLetHTML.innerHTML = "Es impar";
        }

    }

}

function validateLength (input) {
    if (isNaN(input)) {
        return false;
    } else {
        return true;
    }
}