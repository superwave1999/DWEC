class Validator {

    constructor ($element, $maxLength = null, $minLength = null, $attrCorrect = 'data-validate-ok', $regex = null) {

        this._storedNode = $element;

        this._tagName = this._storedNode.tagName;

        if (this._tagName == "INPUT") {
            this._inputtype = this._storedNode.getAttribute('type');

        } else {
            this._inputtype = null;
        }



        this._maxlength = $maxLength;
        this._minlength = $minLength;
        this._attrcorrect = $attrCorrect;
        this._regex = $regex;

        this._isValid = false;

    }

    get storedNode() {
        return this._storedNode;
    }

    get tagName() {
        return this._tagName;
    }

    get inputtype() {
        return this._inputtype;
    }

    get maxlength() {
        return this._maxlength;
    }

    get minlength() {
        return this._minlength;
    }

    get attrcorrect() {
        return this._attrcorrect;
    }

    get regex() {
        return this._regex;
    }

    get isValid() {
        return this._isValid;
    }

    set storedNode($var) {
        this._storedNode = $var;
    }

    set tagName($var) {
        this._tagName = $var;
    }

    set inputtype($var) {
        this._inputtype = $var;
    }

    set maxlength($var) {
        this._maxlength = $var;
    }

    set minlength($var) {
        this._minlength = $var;
    }

    set attrcorrect($var) {
        this._attrcorrect = $var;
    }

    set regex($var) {
        this._regex = $var;
    }

    doValidate() {


        if (this._tagName=="SELECT") {

            //Seems OK
            this.validateQuestionSelect();


        } else if (this._tagName=="INPUT" && this._inputtype=="radio") {

            //dolater
            //this.validateQuestionCheckbox();
            this.validateQuestionRadio();

        } else if (this._tagName=="INPUT" && this._inputtype=="checkbox") {

            //Seems ok
            this.validateQuestionCheckbox();


        } else if (this._tagName=="INPUT" && this._inputtype=="text") {

            //Seems ok
            this.validateQuestionTextbox();

        }

        return this._isValid;


    }


    validateQuestionCheckbox () {
        // All options
        var checkbox = this._storedNode;
        var corrTag = this._attrcorrect;

        var status = false;

        //for (var i = 0; i<opciones.length; i++) {
            if (checkbox.getAttribute(corrTag) != null) {
                status = true;
            }
        //}


        this._isValid = status;
    }

    validateQuestionRadio () {
        // All options
        var radio = this._storedNode;
        var attr = this._attrcorrect;

        //Correct option array and answer array
        var status = false;

        if (radio.checked && radio.getAttribute(attr) != null) {
            status = true;
        }

        this._isValid = status;
    }


    validateQuestionSelect () {
        // All options
        var select = this._storedNode;
        var corrTag = this._attrcorrect;
        var status = false;

        // Checks if selected option has the token
        //for (var i = 0; i<select.length; i++) {

            if (select.options[select.selectedIndex].getAttribute(corrTag) != null) {
                status = true;
            }

            /*
            if (select.options[select.selectedIndex].getAttribute(corrTag) != "default") {
                contestados[numQ] = true;
            }
            */
        //}

        this._isValid=status;
    }

    validateQuestionTextbox () {
        // All options
        var txtbx = this._storedNode;
        var corrTag = txtbx.dataset.check;
        var status = false;
        
        // Checks if selected option has the token
        //for (var i = 0; i<opciones.length; i++) {
            if (txtbx.value == corrTag) {
                status = true;
            }
        //}

        this._isValid = status;

    }    

}

var button = document.getElementById('but');
button.addEventListener('click', processVal);

function processVal() {
    var ck1 = document.getElementById('chk1');
var valid = new Validator(ck1,null,null,'data-check');
var ck1res = valid.doValidate();

var ck1 = document.getElementById('chk2');
var valid = new Validator(ck1,null,null,'data-check');
var ck2res = valid.doValidate();

var ck1 = document.getElementById('rd1');
var valid = new Validator(ck1,null,null,'data-check');
var rd1res = valid.doValidate();

var ck1 = document.getElementById('rd2');
var valid = new Validator(ck1,null,null,'data-check');
var rd2res = valid.doValidate();

var ck1 = document.getElementById('txtbx1');
var valid = new Validator(ck1,null,null,'data-check');
var tb1res = valid.doValidate();

var ck1 = document.getElementById('sel1');
var valid = new Validator(ck1,null,null,'data-check');
var selres = valid.doValidate();

var results = document.getElementById("results");


results.innerHTML = 'Ck1: ' + ck1res +'<br>';
results.innerHTML += 'Ck2: ' + ck2res +'<br>';
results.innerHTML += 'Rd1: ' + rd1res +'<br>';
results.innerHTML += 'Rd2: ' + rd2res +'<br>';
results.innerHTML += 'Tb1: ' + tb1res +'<br>';
results.innerHTML += 'Sel: ' + selres +'<br>';

}
