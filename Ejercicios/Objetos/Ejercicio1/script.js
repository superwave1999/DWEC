Array.prototype.ultimo = function() {

    return this[(this.length-1)];
};

Array.prototype.primero = function() {

    return this[0];
};

Array.prototype.compacta = function() {


    var leng = this.length;

    for (let i=0; i<leng; i++) {
        if (this[i] == null || this[i] == '' || this[i] == undefined) {
            this.splice(i, 1);
            leng--;
        }

    }

}

Array.prototype.limpia = function() {
    for (let i=0; i<this.length; i++) {
        this.shift();

    }
}


var array = new Array();

array[0] = "0";
array[1] = "1";
array[2] = "2";
array[3] = undefined;
array[4] ="3";

document.getElementById("start").textContent = array;


document.getElementById("first").textContent = array.primero();
document.getElementById("last").textContent = array.ultimo();

array.compacta();
document.getElementById("comp").textContent = array;

array.limpia();
document.getElementById("clean").textContent = array;