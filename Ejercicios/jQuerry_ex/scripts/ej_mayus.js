var elemInput = $('.txtbx');
var elemOut = $('.result');


function func() {

    for (var i=0; i<elemInput.length; i++) {

    var inputText = elemInput.eq(i).val();

    

    var upperInput = inputText.toUpperCase();
    var lowerInput = inputText.toLowerCase();

    if (inputText == upperInput) {
        elemOut.eq(i).text('Upper');

    } else if (inputText == lowerInput) {
        elemOut.eq(i).text('Lower');

    } else if (inputText != upperInput && inputText != lowerInput){
        elemOut.eq(i).text('Mix');
    }

    if (inputText == '' || inputText.length == 0) {
        elemOut.eq(i).text('Empty box');
    }
}
    
};


$('#send').click(func);