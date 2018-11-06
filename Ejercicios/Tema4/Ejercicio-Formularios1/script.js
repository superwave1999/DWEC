(function () {

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    var form = document.getElementById('form');
    
    var formName=document.getElementsByName('firstname');
    var formPassword=document.getElementsByName('password');
    var formPassword2=document.getElementsByName('password2');
    var formMail=document.getElementsByName('email');
    var formBday=document.getElementsByName('bday');
    var formFile=document.getElementsByName('file');
    var formTest=document.getElementsByName('test');
    var formTerms=document.getElementsByName('terms');

    generateAlerts();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        submitForm(e)}
    );


    form.addEventListener("reset", function (e) {
        if (!confirm('Borrar datos?')) {
            e.preventDefault();
        }
    })

    formName[0].addEventListener("change",function (e) {
        formNameValidate(e.target);
    });
    formPassword[0].addEventListener("change",function (e) {
        formPasswordValidate();
    });
    formPassword2[0].addEventListener("change",function (e) {
        formPasswordValidate();
    });
    formMail[0].addEventListener("change",function (e) {
        formEmailValidate(e.target);
    });
    formBday[0].addEventListener("change", function (e) {
        formAgeValidate(e.target);
    });
    formFile[0].addEventListener("change", function (e) {
        formPhotoValidate(e.target);
    });
    formTest[0].addEventListener("change", function (e) {
        functionMathsCheck(e.target);
    });
    formTerms[0].addEventListener("change", function (e) {
        functionAcceptTerms(e.target);
    });





    function generateAlerts() {
        var inputs = document.getElementsByTagName('input');

        for (var i=0; i<inputs.length; i++) {
            var spanElement = document.createElement('span');
            insertAfter(spanElement,inputs[i]);
        }

    }

    function changeSpan(active, text) {
 
        active.nextSibling.textContent = text;

    }

    //Valida el nombre OK

    function formNameValidate (active) {

        if (formNameLength(active)==false) {
            changeSpan(active,"Longitud erronea");
            return false;
        } else {
            changeSpan(active,"OK");
            return true;
        }

    }


    function formNameLength (active) {
        var name = active.value;
        var express = "^[a-zA-Z0-9]*$";

        var matches = name.match(express);

        if (name.length > 15 || name.length < 3) {

            return false;
        }

        if (matches) {
            return true;
        } else{
            return false;
        }

    }

    //Valida la contraseña MAKE THE REGEX WORK

    function formPasswordValidate () {

        var status = false;

        var pass1=formPassword[0].value;
        var pass2=formPassword2[0].value;

        var pass1ok=formPasswordLength(pass1);
        var pass2ok=formPasswordLength(pass2);
        var passSame = formPasswordSame(pass1,pass2);

        if (pass1ok && pass2ok && passSame) {

                changeSpan(formPassword2[0],"OK");
                status = true;

        } else {

            changeSpan(formPassword2[0],"No coincide o no reune los requisitos de complejidad");
            status = false;
        }

        return status;

    }

    function formPasswordLength (pass) {
        var express = "^[a-zA-Z0-9]*$";

        var matches = pass.match(express);; //CBA

        if (pass.length > 15 || pass.length < 6) {

            return false;
        }

        if (matches) {

            return true;
        } else {
            return false;
        }


    }

    function formPasswordSame (pass1, pass2) {
        if (pass1===pass2) {
            return true;
        } else {
            return false;
        }

    }





    //Valida el correo ALL OK

    function formEmailValidate(active) {

        if (formEmailLength(active)==false) {
            changeSpan(active,"Dirección incorrecta");
            return false;
        } else {
            changeSpan(active,"OK");
            return true;
        }
    }


    function formEmailLength(active) {

        var status = false;
        var email = active.value;

        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var matches = email.match(re);

        if (nullOrEmpty(email)) {
            status = false;
        } else if (matches) {
            status = true;
        } else {
            status=false;
        }

        return status;
 
    }

    //Valida el serso CHECKED
    //Valida foto

    function formPhotoValidate(active){
        var valido = false;
        var foto = active.value;
        var extension = foto.substr(foto.length-4, 4);
        if (extension != '.jpg') {
            changeSpan(active, "No es una foto");
        }else{
            changeSpan(active, "OK");
            valido = true;
        }
        return valido;
    }

    //Valida la edad NO VA

    function formAgeValidate (active) {

        if (formAgeLength(active)==false) {
            changeSpan(active,"Fecha no permitida");
            return false;
        } else {
            changeSpan(active,"OK");
            return true;
        }


    }


    function formAgeLength (active) {

        var status = false;

        var age = active.value;
        //Y-m-d
        var ageOk=getAge(age)

        if (age != null && (ageOk >= 18)) {
            status=true;

        } else {
            status = false;
        }

        return status;

    }

    function getAge(active){
        var dateOB = new Date(active);
        var curDate = new Date();
        curDate.toLocaleDateString("es-ES");
        var age = curDate.getFullYear() - dateOB.getFullYear();
        dateOB.setFullYear(curDate.getFullYear());
            if (curDate > dateOB) {
                age--;
            }
        return age;

    }


    // Maths and accept

    function functionMathsCheck (active) {

        var result = active.value;

        if (result==4) {
            changeSpan(active,"OK");
            return true;
        } else {
            changeSpan(active,"Captcha incorrecto");
            return false;
        }

    }

    function functionAcceptTerms () {
        return formTerms[0].checked;
    }


    function nullOrEmpty(string) {
        if (string == '' || string == null) {
            return true;
        }
        return false;

    }


    function submitForm (e) {

        e.preventDefault();

        var states = new Array();

        states.push(formNameValidate(formName[0]));
        states.push(formPasswordValidate());
        states.push(formEmailValidate(formMail[0]));
        states.push(formAgeValidate(formBday[0]));
        states.push(formPhotoValidate(formFile[0]));
        states.push(functionMathsCheck(formTest[0]));
        states.push(functionAcceptTerms(formTerms[0]));


        var status = true;

        for (var i = 0; i<states.length; i++ ) {
            if (states[i]===false) {
                status = false;
            }
        }

        if (!status) {
            e.preventDefault();
        } else {
            submit();
        }

    }

})();