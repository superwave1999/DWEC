
class Media {

    constructor(titel) {
        this._titulo = titel;
        this._prestado = false;
        this._valoraciones = new Array();

    }

    set titulo(tit) {
        this._titulo = tit;
    }

    set prestado(prest) {
        this._prestado = prest;
    }

    set valoraciones(valora) {
        this._prestado = valora;
    }

    get titulo() {
        return this._titulo;
    }

    get prestado() {
        return this._prestado;
    }

    get valoraciones() {
        return this._valoraciones;
    }

    getMediaValoraciones() {
        var array = this._valoraciones;
        var sum = 0;

        for( var i = 0; i < array.length; i++ ){
            sum += parseInt( array[i], 10 );
        }
        
        var avg = sum/array.length;
        return avg;
    }

    cambiarEstadoPrestado(status) {
        if (status == 1 || status == true) {
            _prestado = true;
        } else {
            _prestado = false;
        }
    }

    addValoracion(newval) {
        if (!isNaN(newval)) {
            this._valoraciones.push(newval);
        }

    }

}


class Libros extends Media {

    constructor(titulo, autor, paginas) {
        super(titulo);
        this._autor = autor;
        this._paginas = paginas;

    }

    set autor(autor) {
        this._autor = autor;
    }

    set paginas(paginas) {
        this._paginas = paginas;
    }

    get autor() {
        return this._autor;
    }

    get paginas() {
        return this._paginas;
    }

}


class Peliculas extends Media {

    constructor(titulo, director, runTime) {
        super(titulo);
        this._director = director;
        this._runTime = runTime;

    }

    set director(director) {
        this._director = director;
    }

    set runTime(runTime) {
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }

}

class CD extends Media {

    constructor(titulo, artista, canciones) {
        super(titulo);
        this._artista = artista;

        var splitted = canciones.split(", ");
        this._canciones = splitted;

    }

    set artista(director) {
        this._artista = director;
    }

    set canciones(canciones) {
        this._canciones = canciones;
    }

    get artista() {
        return this._artista;
    }

    get canciones() {
        return this._canciones;
    }


    barajar() {

        var songArr = this._canciones;

        this._canciones = songArr.shuffle();

    }

}

Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}





var arrayLibros = new Array();
var arrayPelis = new Array();
var arrayCD = new Array();

var addbox = document.getElementById("addbox");
var addButton = document.getElementById("addbutton");
var clrButton = document.getElementById("clrbutton");
var selector = addbox.getElementsByTagName("select");

selector[0].addEventListener("change",divDisplay);


addButton.addEventListener("click", addItem);
clrButton.addEventListener("click", clearAll);



document.getElementById('barajaCD').addEventListener('click', shuffleSongs);





function divDisplay() {
    var strUser = selector[0].options[selector[0].selectedIndex].value;

    var boxLibro = document.getElementById("box_libro");
    var boxPeli = document.getElementById("box_peli");
    var boxMusi = document.getElementById("box_musi");

    boxLibro.classList.add("hidden");
    boxPeli.classList.add("hidden");
    boxMusi.classList.add("hidden");
    
    switch (strUser) {
        case "libro":
        boxLibro.classList.remove("hidden");
        break;
        case "pelicula":
        boxPeli.classList.remove("hidden");
        break;
        case "cd":
        boxMusi.classList.remove("hidden");
        break;
        default:
        boxLibro.classList.add("hidden");
        boxPeli.classList.add("hidden");
        boxMusi.classList.add("hidden");
        break;
    }

}

function addItem() {

    var titulo = document.getElementsByName("titulo")[0].value;
    var prestado = document.getElementsByName("prestado")[0].checked;
    var valoracion = document.getElementsByName("valoracion")[0].value;
    var mediatype = document.getElementsByName("mediatype")[0].options[document.getElementsByName("mediatype")[0].selectedIndex].value;

    if (mediatype=="libro") {
        var var1 = document.getElementsByName("libro_autor")[0].value;
        var var2 = document.getElementsByName("libro_pags")[0].value;

        var nu = new Libros(titulo, var1, var2);
        nu.prestado = prestado;
        nu.addValoracion(valoracion);

        arrayLibros.push(nu);
        updateLibros();

    } else if (mediatype=="pelicula") {
        var var1 = document.getElementsByName("peli_dir")[0].value;
        var var2 = document.getElementsByName("peli_length")[0].value;

        var nu = new Peliculas(titulo, var1, var2);
        nu.prestado = prestado;
        nu.addValoracion(valoracion);

        arrayPelis.push(nu);
        updatePelis();



    } else if (mediatype=="cd") {
        var var1 = document.getElementsByName("musi_artista")[0].value;
        var var2 = document.getElementsByName("musi_canciones")[0].value;

        var nu = new CD(titulo, var1, var2);
        nu.prestado = prestado;
        nu.addValoracion(valoracion);

        arrayCD.push(nu);
        updateCD();

    }


}

function updateLibros() {

    var librosDiv = document.getElementById("libros");

    while (librosDiv.firstChild) {
        librosDiv.removeChild(librosDiv.firstChild);
    }

    for (var i=0; i<arrayLibros.length; i++) {

        var v1 = arrayLibros[i].titulo;
        var v2 = arrayLibros[i].autor;
        var v3 = arrayLibros[i].paginas;
        var v4 = arrayLibros[i].prestado;
        var v5 = arrayLibros[i].valoraciones;

        var newLi = document.createElement('li');

        strng1 = v1 + ' de ' + v2 + ' con ' + v3 + 'páginas.' ;

        if (v4) {
            strng2 = ' Prestado. ';
        } else {
            strng2 = ' No prestado. '
        }

        strng3 = v5 + ' puntos.';

        newLi.textContent = strng1 + strng2 + strng3;

        librosDiv.appendChild(newLi);

    }

}

function updatePelis() {

    var pelisDiv = document.getElementById("peliculas");

    while (pelisDiv.firstChild) {
        pelisDiv.removeChild(pelisDiv.firstChild);
    }

    for (var i=0; i<arrayPelis.length; i++) {

        var v1 = arrayPelis[i].titulo;
        var v2 = arrayPelis[i].director;
        var v3 = arrayPelis[i].runTime;
        var v4 = arrayPelis[i].prestado;
        var v5 = arrayPelis[i].valoraciones;

        var newLi = document.createElement('li');

        strng1 = v1 + ' de ' + v2 + ' con ' + v3 + 'minutos de duracion.' ;

        if (v4) {
            strng2 = ' Prestado. ';
        } else {
            strng2 = ' No prestado. '
        }

        strng3 = v5 + ' puntos.';

        newLi.textContent = strng1 + strng2 + strng3;

        pelisDiv.appendChild(newLi);

    }

}

function updateCD() {

    var cdDiv = document.getElementById("cd");

    while (cdDiv.firstChild) {
        cdDiv.removeChild(cdDiv.firstChild);
    }

    for (var i=0; i<arrayCD.length; i++) {

        var v1 = arrayCD[i].titulo;
        var v2 = arrayCD[i].artista;
        var v3 = arrayCD[i].canciones;
        var v4 = arrayCD[i].prestado;
        var v5 = arrayCD[i].valoraciones;

        var newLi = document.createElement('li');

        strng1 = v1 + ' de ' + v2 + ' con las canciones: ' + v3 + '.' ;

        if (v4) {
            strng2 = ' Prestado. ';
        } else {
            strng2 = ' No prestado. '
        }

        strng3 = v5 + ' puntos.';

        newLi.textContent = strng1 + strng2 + strng3;

        cdDiv.appendChild(newLi);

    }

}

function clearAll() {
    var librosDiv = document.getElementById("libros");
    var pelisDiv = document.getElementById("peliculas");
    var cdDiv = document.getElementById("cd");

    while (librosDiv.firstChild) {
        librosDiv.removeChild(librosDiv.firstChild);
    }
    while (pelisDiv.firstChild) {
        pelisDiv.removeChild(pelisDiv.firstChild);
    }
    while (cdDiv.firstChild) {
        cdDiv.removeChild(cdDiv.firstChild);
    }

}





function shuffleSongs() {

    for (var i=0; i<arrayCD.length; i++) {
        arrayCD[i].barajar();
    }

    updateCD();

}