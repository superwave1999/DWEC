export default class Validator {

    /*
    TODO: Write manual;
    */

    constructor($formelement) {
        this._storedNode = $formelement;
        this._paramResults = 'data-ir-form';
        this._attrcorrect = 'data-check';

        this._toCheck = this.processNode();
        this._statsNode = this.searchStatNode();

        this.assignResetEvent();
        this.assignSubmitEvent();


        this._results = new Array();

        //this._doval = this.doValidate();

    }

    processNode() {
        //Stores inputs and selects in an array
        var $formelements = new Array();
        var $child = this._storedNode.children;

        for (var i=0; i<$child.length; i++) {
            
            if ($child[i].tagName == "INPUT" || $child[i].tagName == "SELECT") {
                $formelements.push($child[i]);
            }
        }

        return $formelements;
    }

    searchStatNode() {

        var $child = this._storedNode.children;
        var $resultTag = this._paramResults;
        for (var i=0; i<$child.length; i++) {
            
            if (($child[i].tagName != "INPUT" &&
                $child[i].tagName != "SELECT") &&
                $child[i].getAttribute($resultTag)=="results") {

                return $child[i];
            }
        }

        return null;

    }

    assignResetEvent() {

        var that = this;

        this._storedNode.addEventListener("reset", function (e) {
            e.preventDefault();

            if (confirm('Reset form?')) {
                reset();
            }

        });
    }

    assignSubmitEvent() {

        var that = this;

        this._storedNode.addEventListener("submit", function (e) {
            e.preventDefault();
            that.doValidate();

        });
    }

    doValidate() {

        var $items = this._toCheck;

        for (var i=0; i<$items.length; i++) {
            var $status="Not verifiable"

            if ($items[i].tagName=="SELECT") {

                //Seems OK
                $status = this.validateQuestionSelect($items[i]);
    
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="radio") {
    
                //dolater
                //this.validateQuestionCheckbox();
                $status = this.validateQuestionRadio($items[i]);
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="checkbox") {
    
                //Seems ok
                $status = this.validateQuestionCheckbox($items[i]);
    
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="text") {
    
                //Seems ok
                $status = this.validateQuestionTextbox($items[i]);
    
            }

            this._results.push($status);
        }


        this.displayResults();
        console.log('Validated');

    }


    validateQuestionCheckbox ($var) {
        // All options
        var checkbox = $var;
        var corrTag = this._attrcorrect;

        var status = false;

        //for (var i = 0; i<opciones.length; i++) {
            if (checkbox.getAttribute(corrTag) != null && checkbox.checked) {
                status = true;
            }
        //}


        return status;
    }

    validateQuestionRadio ($var) {
        // All options
        var radio = $var;
        var attr = this._attrcorrect;

        //Correct option array and answer array
        var status = false;

        if (radio.checked && radio.getAttribute(attr) != null) {
            status = true;
        }

        return status;
    }


    validateQuestionSelect ($var) {
        // All options
        var select = $var;
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

        return status;
    }

    validateQuestionTextbox ($var) {
        // All options
        var txtbx = $var;
        var corrTag = txtbx.dataset.check;
        var status = false;
        
        // Checks if selected option has the token
        //for (var i = 0; i<opciones.length; i++) {
            if (txtbx.value == corrTag) {
                status = true;
            }
        //}

        return status;

    }    


    displayResults() {
        var $allResults = this._results;
        var $resultNode = this._statsNode;

        while ($resultNode.firstChild) {
            $resultNode.removeChild($resultNode.firstChild);
        }

        for (var i=0; i<$allResults.length ; i++) {
            var line = document.createElement('p');
            line.textContent = 'Item ' + i + ' of form: ' + $allResults[i];
            $resultNode.appendChild(line);

        }

        

        this._results = new Array();

    }



}
