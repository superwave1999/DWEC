function refreshControls() {
    var containerDOM = document.getElementById("container");
    var webContent = '<input list="dia" id="input-day" />' +
        '<datalist id="dia">'+
        '<option value="Lunes">'+
        '<option value="Martes">'+
        '<option value="Miercoles">'+
        '<option value="Jueves">'+
        '<option value="Viernes">'+
        '<option value="Sabado">'+
        '<option value="Domingo">'+
        '</datalist>'+
        '<input type="button" id="input-btn" onclick="proces" value="Comprueba tu intelihensia"/>';
    containerDOM.innerHTML = webContent;
    document.getElementById("input-btn").addEventListener("click",proces);
}

function proces() {
    var input = document.getElementById("input-day").value;
    var outputDOM = document.getElementById("output");
    var isWkEnd;
    switch (input) {
        case "Sabado":
            isWkEnd=true;
        break;
        case "Domingo":
            isWkEnd=true;
        break;
        default:
            isWkEnd=false;
        break;
    }
    switch (isWkEnd) {
        case true:
            outputDOM.textContent = "Es fin de semana";
        break;
        case false:
            outputDOM.textContent = "No es finde :(";
        break;
    }
    refreshControls();
}

//document.getElementById("input-btn").addEventListener("click",proces);

window.onload = function () {
    refreshControls();
}