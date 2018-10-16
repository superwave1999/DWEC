
    //This references an object
    'use strict';   //More errors

    //modifying the prototype of a object.
    HTMLElement.prototype._insertAfter = function (newNode,refNode) {
        this.insertBefore(newNode, refNode.nextSibling);
    }

    HTMLElement.prototype._insertAfterNext = function (newNode,refNode) {
        this.insertBefore(newNode, refNode.nextElementSibling);
    }


    var btn = document.getElementById("theButton");
    var para = document.getElementById("parr");
    btn.addEventListener("click",doEdit);

    

    function doEdit () {

        var newElement = document.createElement("h1");
        newElement.textContent="pos";

        para.parentNode._insertAfter(newElement, para);

    }