(function () {
    timeInterval = setInterval(timeIncrement, 1000);
    var seconds = 0;



    var formulario = document.getElementById("formulario");
    var respuestas = document.getElementsByClassName("respuestas");
    var respuestasOk = new Array ();


    var allpreguntas = document.getElementsByClassName("pregunta").length;


    var contestados = new Array ();
    initContestados();







    var textarea = document.getElementsByClassName("textarea");

    textarea[0].addEventListener("keydown", function (e) {
        validateTextarea(e.target);

    });
    

    
    function submitForm(e) {
        e.preventDefault();


        //Recoge datos de preguntas correctas o no
        for (var i=0; i<2; i++) {
            respuestasOk[i] = validateQuestionCheckbox(i);
        }

        for (var i=2; i<4; i++) {
            respuestasOk[i] = validateQuestionRadio(i);
        }

        for (var i=4; i<7; i++) {
            respuestasOk[i] = validateQuestionSelect(i);
        }

        for (var i=7; i<9; i++) {
            respuestasOk[i] = validateQuestionTextbox(i);
        }

        writeCorrectIncorrect(respuestasOk);
        writeAnsUnans();

    }

    function initContestados () {
        for ( var i = 0 ; i<respuestas.length; i++) {
            contestados[i] = false;
        }
    }







    //Datos abajo

    function timeIncrement () {
            seconds ++;
            var timeSpan = document.getElementById("timeStat");
            timeSpan.textContent = seconds;
    }

    function writeCorrectIncorrect (array) {

        var ansSpan = document.getElementById("ansStat");
        var unansSpan = document.getElementById("unansStat");

        var correctSpan = document.getElementById("corrStat");
        var failedSpan = document.getElementById("failStat");
        var percentSpan = document.getElementById("pcStat");

        

        var countAns = 0;
        var countUnans = 0;
        var questions = array.length;
        var countOk = 0;
        var countFail = 0;
        


        for (var i = 0; i<questions ; i++) {
            if (array[i] == false) {
                countFail++;
            } else {
                countOk++;
            }

        }

        for (var i = 0; i<contestados.length ; i++) {
            if (contestados[i] == false) {
                countUnans++;
            } else {
                countAns++;
            }

        }

        

        var percent = countOk*100/questions;

        correctSpan.textContent = countOk;
        failedSpan.textContent = countFail;
        ansSpan.textContent = countAns;
        unansSpan.textContent = countUnans;
        percentSpan.textContent = Math.floor(percent) + "%";

        


        if (countOk == questions) {
            clearInterval(timeInterval);
            document.getElementById("submit").disabled = true;

        } else {
            document.getElementById("submit").value = "Reintentar";
        }

    }




    

    // Validaciones OK

    function validateQuestionCheckbox (numQ) {
        // All options
        var opciones = respuestas[numQ].getElementsByTagName("input");

        //Correct option array and answer array
        var opcionesOk = new Array();
        var selectedOpt = new Array();
        var status = false;

        for (var i = 0; i<opciones.length; i++) {
            if (opciones[i].getAttribute("data-questionnaire") != null) {
                opcionesOk[i] = true;
            } else {
                opcionesOk[i] = false;
            }

            if (opciones[i].checked) {
                contestados[numQ] = true;
                selectedOpt[i] = true;
            } else {
                selectedOpt[i] = false;
            }
        }

        for (var i = 0; i<opciones.length; i++) {
            if (opcionesOk[i]!=selectedOpt[i]) {
                status = false;
            } else {
                status = true;
            }
        }
        return status;
    }

    function validateQuestionRadio (numQ) {
        // All options
        var opciones = respuestas[numQ].getElementsByTagName("input");

        //Correct option array and answer array
        var status = false;

        for (var i = 0; i<opciones.length; i++) {

            if (opciones[i].checked) {
                contestados[numQ] = true;
            }

            if (opciones[i].checked && opciones[i].getAttribute("data-questionnaire") != null) {
                status = true;
            }

        }

        return status;
    }


    function validateQuestionSelect (numQ) {
        // All options
        var opciones = respuestas[numQ].getElementsByTagName("select");
        var status = false;

        // Checks if selected option has the token
        for (var i = 0; i<opciones.length; i++) {


            if (opciones[i].options[opciones[i].selectedIndex].getAttribute("data-questionnaire") == "correct") {
                status = true;
            }

            if (opciones[i].options[opciones[i].selectedIndex].getAttribute("data-questionnaire") != "default") {
                contestados[numQ] = true;
            }
        }

        return status;

    }

    function validateQuestionTextbox (numQ) {
        // All options
        var opciones = respuestas[numQ].getElementsByTagName("input");
        var status = false;

        // Checks if selected option has the token
        for (var i = 0; i<opciones.length; i++) {
            if (opciones[i].value == opciones[i].getAttribute("data-questionnaire")) {
                status = true;
            }
            if (opciones[i].value.length != 0 || opciones[i].value != '') {
                contestados[numQ] = true;
            }
        }

        return status;

    }

    function validateTextarea (numq) {
        var textarea = numq;
        var length = textarea.maxlength;

            var texto = textarea.value;
            var textoLength = texto.split("");
            
            textarea.nextElementSibling.textContent = (textoLength.length) + "/100";

    }

    //Reset form event listener
    formulario.addEventListener("reset", function (e) {
        if (!confirm('Borrar datos?')) {
            e.preventDefault();
            
        }
        if (document.getElementById("submit").disabled == true) {
            document.getElementById("submit").disabled = false;
        }
        
        initContestados();
    })

    //Submit form event
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm(e)}
    );



})();