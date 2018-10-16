(function () {

    HTMLElement.prototype._insertAfter = function (newNode,refNode) {
        this.insertBefore(newNode, refNode.nextSibling);
    }

    HTMLElement.prototype._insertAfterNext = function (newNode,refNode) {
        this.insertBefore(newNode, refNode.nextElementSibling);
    }


document.getElementById("BotonAdd").addEventListener("click",addSong);
document.getElementById("BotonSort").addEventListener("click",sortAlph);
document.getElementById("BotonSearch").addEventListener("click",searchSong);

var songInput = document.getElementById("CancionTextInput");
var songList = document.getElementById("listaCanciones");
var songName,songItem;

function addSong() {

    songName = songInput.value;

    clearInput();

    if (checkEmpty(songName) && (checkDuplicate(songName)==false)) {
        alert("añadido" + songName);
        songItem = document.createElement("li");
        songItem.textContent = songName;

        songItem.appendChild(createBorrar());

        if (songList.hasChildNodes()) {
            songList._insertAfterNext(songItem, songList.lastChild);
        }

        songList.appendChild(songItem);
    }

}

function createBorrar() {
    var deleteButton = document.createElement("input");
        deleteButton.value = "Borrar";
        deleteButton.class = "deleteBtn"
        deleteButton.type = "button"
        deleteButton.addEventListener("click",deleteSong);
    return deleteButton;
}

function deleteSong() {
    var e = window.event;
    var toDelete = e.currentTarget.parentNode;
    var confirm = prompt('Escriba S para eliminar');
    if (confirm=='S') {
        songList.removeChild(toDelete);
    }

}


function sortAlph() {

    var children = songList.children;
    var arrayTemp = new Array();

    for (let li=0; li<children.length; li++) {
        arrayTemp[li] = children[li].textContent;
    }

    arrayTemp.sort();

    for (let li=0; li<children.length; li++) {
        children[li].textContent = arrayTemp[li];
        children[li].appendChild(createBorrar());
    }

}







function searchSong() {
    var $search = songInput.value;
    clearInput();
    var children = songList.childNodes;
    for (var i=0; i<children.length ; i++) {
        var $found = children[i].textContent;
        if ($search.toUpperCase()===$found.toUpperCase()) {
            alert('Canción '+$found+ ' encontrada');
            songList.insertBefore(children[i], children[0]);
        }
    }

    return false;
}









function checkEmpty(songName) {
    if (songName==null, songName===''){
        alert('Cadena vacía');
        return false;
    }
    return true;

}

function checkDuplicate($search) {

    var children = songList.childNodes;

    for (var i=0; i<children.length ; i++) {
        var $found = children[i].textContent;
        if ($search.toUpperCase()===$found.toUpperCase()) {
            alert('Canción duplicada' +$found);
            return true;
        }
    }

    return false;

}

function clearInput () {
    songInput.value = '';
}

})();