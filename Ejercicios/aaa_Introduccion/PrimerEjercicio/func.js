function msg() {
    var numero1;
    var numero2;
    var result;
        function Sumar () {
            var numero="siete";
            nombre = "ana";
            return nombre;
        }

        alert("nombre " + Sumar());

        for (let i=0; i<2; i++) {
            alert("Cuenta let: " + i);

        }

        var funcOut = function () {
           alert("Function var works");
        };

        funcOut();

        function generateHTML () {
            var ide = document.getElementById("math");
            ide.innerHTML += "<input id='sum1' type='text' />";
            ide.innerHTML += "<input id='sum2' type='text' />";
            ide.innerHTML += "<input id='sumbt' type='button' value='Calcular' onclick='sumar'/>";
            ide.innerHTML += "<input id='res' type='text'/>";
            document.getElementById("sumbt").addEventListener("click", sumar);
        }

        generateHTML();

        numero1 = document.getElementById("sum1").getAttribute("value");
        numero2 = document.getElementById("sum2").getAttribute("value");

        if (isNaN(numero1) || isNaN(numero2)) {
            alert('Debe introducir numeros');

            document.getElementById("sum1").setAttribute("value") = "";
            document.getElementById("sum2").setAttribute("value") = "";

        }

        
        function sumar() {
            result = numero1 + numero2;
            document.getElementById("res").setAttribute("value") = result;
        }

}

document.getElementById("jsbt").addEventListener("click", msg);





(function msp() {
 //AURORA METHOD OF DOING THINGS;
})();