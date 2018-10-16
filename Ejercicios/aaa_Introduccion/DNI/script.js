//Quita el ejemplo de insercion onclick DONE
function clrTxt() {
    document.getElementById("txtbx").setAttribute("value", "");
}

document.getElementById("txtbx").addEventListener("click", clrTxt);
document.getElementById("send").addEventListener("click", validate);
resultLetHTML=document.getElementById("resultlet");
dniIn = document.getElementById("txtbx");
setTopText(0);

//Ejecución al comienzo

/*
window.onload=function(){
    document.getElementById("send").addEventListener("click", validate);
}
*/

function validateLength(dniProc) {
    if (dniProc.length>9) {
        setTopText(3);
        return false;
    } else if (dniProc.length<8) {
        setTopText(2);
        return false;
    } else if (dniProc==null || dniProc.length==0 || dniProc=="") {
        setTopText(1);
        return false;
    } else {
        setTopText(0);
        return true;
    }

}

function convertFirstChar (dniSplit) {
    console.log(dniSplit);
    var dniModif = dniSplit;
    console.log(dniModif);
    //NIF K DONE
    if (dniModif[0]=="K") {
        dniModif[0]=0;
        setDNIType(1);
    }
    //NIF L DONE
    if (dniModif[0]=="L") {
        dniModif[0]=0;
        setDNIType(2);
    }
    //NIF M DONE
    if (dniModif[0]=="M") {
        dniModif[0]=0;
        setDNIType(3);
    }
    //NIF X +1997 DONE
    if (dniModif[0]=="X") {
        dniModif[0]=0;
        setDNIType(5);
    }
    //NIF Y Extranjeros 2008+ DONE
    if (dniModif[0]=="Y") {
        dniModif[0]=1;
        setDNIType(6);
    }
    //NIF Z Extranjeros 2018+ DONE
    if (dniModif[0]==="Z") {
        dniModif[0]=2;
        setDNIType(7);
    }

    return dniModif;

}

/*function check10Char(dniProc) {
    var longitud = dniProc.length;

    if (longitud==8) {
        //8 caracteres puede ser DNI español o X 2000 sin letra
        //X7068337[T]
        return false;
        
    } else if (longitud==9 && isNaN(dniProc.charAt(longitud))) {
        //9 caracteres puede ser DNI español o x completo y X 1990 sin letra.
        //X7068337T  X07068337[T]
        return false;

    } else if (longitud==9 && isNaN(dniProc.charAt(longitud))==false) {
        //9 caracteres teniendo el CRC numerico

        return true;

    } else if (longitud==10 && isNaN(dniProc.charAt(longitud))) {
        //X 1990 completo (debe tener las 10 cifras y el 10 es letra)

        return true;
    } else {
        alert("Error en checkSpecial()");
        return null;
    }
}*/

function removeFinalLetter(dniSplit) {
    var dniMod = dniSplit;

    //Si hay letra al final, se quita.
    if (isNaN(dniMod[dniMod.length-1])) {
        dniMod.pop();
    }
    return dniMod;
}

function calculoLet(input) {
    var dniSplit = input;
    var caracteres = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dniResto;
    var dniValor=0;

    for (var i=0; i<dniSplit.length; i++) {
        dniValor = dniValor + dniSplit[i];
        
    }
    dniResto = (parseInt(dniValor) % 23);
    return caracteres[dniResto];
}

function setTopText(errorNum) {
    var topText = document.getElementById("toptext");
    if (errorNum==1) {
        topText.setAttribute("class","redalert");
        topText.textContent = "DNI vacío o nulo";
    } else if (errorNum==2) {
        topText.setAttribute("class","redalert");
        topText.textContent = "DNI demasiado corto";
    } else if (errorNum==3) {
        topText.setAttribute("class","redalert");
        topText.textContent = "DNI demasiado largo";
    }
    
    else {
        //Inicio, proximo DNI
        topText.textContent = "Introduzca su DNI";
        topText.removeAttribute("class");
    }
}

function setDNIType (type) {
    var resultTypeHTML=document.getElementById("resulttype");

    if (type == 0) {
        resultTypeHTML.textContent = "DNI Nacional convencional";
    }
    if (type == 1) {
        resultTypeHTML.textContent = "NIF K, menores españoles";
    }
    if (type == 2) {
        resultTypeHTML.textContent = "NIF L, españoles fuera de territorio nacional";
    }
    if (type == 3) {
        resultTypeHTML.textContent = "NIF M, extranjeros sin NIE";
    }
    if (type == 4) {
        //(BETA)
        resultTypeHTML.textContent = "NIF X, extranjeros en españa antes del 1997";
    }
    if (type == 5) {
        resultTypeHTML.textContent = "NIF X, extranjeros en españa a partir del 1997 hasta el 2008";
    }
    if (type == 6) {
        resultTypeHTML.textContent = "NIF Y, extranjeros en españa a partir del 2008";
    }
    if (type == 7) {
        resultTypeHTML.textContent = "NIF Z (beta), previsto para el 2018";
    }
    if (type == 8) {
        resultTypeHTML.textContent = "Aviso: Ningun tipo de DNI coincide";
    }

}

function validate() {
    //Coge el valor del text y lo convierte en un array de caracteres
    var dniTmp = dniIn.value;
    var dniProc, dniUp, dniProc3, dniProc2;
    clrTxt();
    if (validateLength(dniTmp)) {
        console.log(dniProc);
        dniUp = dniTmp.toUpperCase();
        dniProc = dniUp.split("");
        console.log(dniProc);
        //var dniX1997 = checkNIE1997(dniProc);
        //var dniLength =;

        //Convierte a mayusculas

        //dniProc = dniProc.convertMayus(dniProc);

        //Sustituye letras iniciales
        dniProc2 = convertFirstChar(dniProc);
        console.log(dniProc2);
        //Quita la ultima letra
        dniProc3 = removeFinalLetter(dniProc2);
        console.log(dniProc3);
        var dniCalc = calculoLet(dniProc3)
        console.log(dniCalc);
        alert(dniCalc);

        resultLetHTML.innerHTML = dniCalc;

    }

}