class Validator {

    _storedNode;
    _tagName;
    _inputtype;
    _maxlength;
    _minlength;

    _attrcorrect;
    _regex;
    _isValid;


    constructor ($element, $maxLength = null, $minLength = null, $attrCorrect = 'data-validate-ok', $regex = null) {

        this._storedNode = $element;

        this._tagName = this._storedNode.tagName;

        if (this._tagName == "input") {
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

    get _storedNode() {
        return this._storedNode;
    }

    get _tagName() {
        return this._tagName;
    }

    get _inputtype() {
        return this._inputtype;
    }

    get _maxlength() {
        return this._maxlength;
    }

    get _minlength() {
        return this._minlength;
    }

    get _attrcorrect() {
        return this._attrcorrect;
    }

    get _regex() {
        return this._regex;
    }

    get _isValid() {
        return this._isValid;
    }

    set _storedNode($var) {
        this._storedNode = $var;
    }

    set _tagName($var) {
        this._tagName = $var;
    }

    set _inputtype($var) {
        this._inputtype = $var;
    }

    set _maxlength($var) {
        this._maxlength = $var;
    }

    set _minlength($var) {
        this._minlength = $var;
    }

    set _attrcorrect($var) {
        this._attrcorrect = $var;
    }

    set _regex($var) {
        this._regex = $var;
    }

    doValidate() {


        if (this._tagName=="select") {

            //Seems OK
            this.validateQuestionSelect();


        } else if (this._tagName=="input" && this._inputtype=="checkbox") {

            //dolater
            //this.validateQuestionCheckbox();
            this.validateQuestionRadio();

        } else if (this._tagName=="input" && this._inputtype=="radio") {

            //Seems ok
            this.validateQuestionRadio();


        } else if (this._tagName=="input" && this._inputtype=="textbox") {

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

            if (select.options[select.selectedIndex].getAttribute(corrTag) == "correct") {
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
        var corrTag = this._attrcorrect;
        var status = false;

        // Checks if selected option has the token
        //for (var i = 0; i<opciones.length; i++) {
            if (txtbx.value == txtbx.getAttribute(corrTag)) {
                status = true;
            }
        //}

        this._isValid = status;

    }    

}




