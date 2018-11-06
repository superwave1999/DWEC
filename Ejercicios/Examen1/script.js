
//Ejercicio1.1
function addSpans () {
    var formName=document.getElementById("nombre");
    var formSurname=document.getElementById("apellidos");
    var formPC=document.getElementById("codPostal");




    var newspan = document.createElement("span");
    newspan.textContent("*");
    newspan.classList.add("ayuda");
    formName.insertBefore(newspan,formName.nextElementSibling);

    var newspan = document.createElement("span");
    newspan.textContent("*");
    newspan.classList.add("ayuda");
    formSurname.insertBefore(newspan,formSurname.nextElementSibling);

    var newspan = document.createElement("span");
    newspan.textContent("*");
    newspan.classList.add("ayuda");
    formPC.insertBefore(newspan,formPC.nextElementSibling);

}

//Ejercicio1.2
function validaNombre () {
    var status = false;
    var name = formName.value;

    if (name.length>=3) {
        status = true;
    }

    return status;

}

function validaApellido () {
    var status = true;
    var name = formSurname.value;

    if (name.length==0 || name == '' || name == null) {
        status = false;
    }

    return status;

}

function validaCP () {
    var status = false;
    var cp = formPC.value;

    if (cp.length==5) {
        status = true;

    }
    return status;

}


function validaSubmit (e) {

    e.preventDefault();

    var submitvar = true;

    var status = new Array();

    status[0] = validaNombre();
    status[1] = validaApellido();
    status[2] = validaCP();

    for (let i=0; i<status.length; i++) {
        if (status[i] == false) {
            submitvar=false;
        }
    }

    if (submitvar) {
        e.submit();
    }

}


document.getElementById("formulario1").addEventListener("submit", function (e) {
    validaSubmit(e)
});

//Ejercicio1.3
document.getElementById("formulario1").nextElementSibling.addEventListener("reset", function (e) {
    if (!confirm('Reset?')) {
        e.preventDefault();
    }
});

//Ejercicio2
function deleteText(cla) {
    var classes = document.getElementsByClassName(cla);

    for (var i = 0; i<classes.length; i++) {


    }

}

//Ejercicio3
function moveParrafo () {
    var para = document.getElementById('razones');
    para.textContent = 'Estas son las 3 razones';

    var parent = para.parentElement;

    parent.appendChild(para);

}

//Ejercicio4
function addClass () {
    var toAdd = document.getElementsByClassName('ayuda');

    for (var i=0; i<toAdd.length; i++) {
        toAdd[i].classList.add('mensaje');
    }

}