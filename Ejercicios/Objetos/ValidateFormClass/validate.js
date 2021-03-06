class Validator {

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



    }

    processNode() {
        //Stores inputs and selects in an array
        var $formelements = null;
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
        
        this._storedNode.addEventListener("reset", function (e) {
            e.preventDefault();

            if (confirm('Reset form?')) {
                reset();
            }

        });
    }

    assignSubmitEvent() {
        this._storedNode.addEventListener("submit", function (e) {
            e.preventDefault();
            this.doValidate();

        });
    }

    doValidate() {

        var $items = this._toCheck;

        for (var i=0; i<$items.length; i++) {
            var $status="No question"

            if ($items[i].tagName=="SELECT") {

                //Seems OK
                $status = this.validateQuestionSelect();
    
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="radio") {
    
                //dolater
                //this.validateQuestionCheckbox();
                $status = this.validateQuestionRadio();
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="checkbox") {
    
                //Seems ok
                $status = this.validateQuestionCheckbox();
    
    
            } else if ($items[i].tagName=="INPUT" && $items[i].getAttribute('type')=="text") {
    
                //Seems ok
                $status = this.validateQuestionTextbox();
    
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
            if (checkbox.getAttribute(corrTag) != null) {
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

        for (var i=0; i>$allResults.length ; i++) {
            var line = document.createElement('p');
            line.textContent = 'Item ' + i + ' of form: ' + $allResults[i];
            $resultNode.appendChild(line);

        }


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
