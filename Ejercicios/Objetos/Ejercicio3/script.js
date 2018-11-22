
class Media {

    constructor(titulo) {
        this.titulo = titulo;
        this.prestado = false;
        this.valoraciones = new Array();

    }

    set titulo(titulo) {
        this.titulo = titulo;
    }

    set prestado(prestado) {
        this.prestado = prestado;
    }

    set valoraciones(valoraciones) {
        this.prestado = valoraciones;
    }

    get titulo() {
        return this.titulo;
    }

    get prestado() {
        return this.prestado;
    }

    get valoraciones() {
        return this.valoraciones;
    }

    getMediaValoraciones() {
        var array = this.valoraciones;
        var sum = 0;

        for( var i = 0; i < array.length; i++ ){
            sum += parseInt( array[i], 10 );
        }
        
        var avg = sum/array.length;
        return avg;
    }

    cambiarEstadoPrestado(status) {
        if (status == 1 || status == true) {
            prestado = true;
        } else {
            prestado = false;
        }
    }

    addValoracion(newval) {
        if (!isNaN(newval)) {
            this.valoraciones.push(newval);
        }

    }

}


class Libros extends Media {

    constructor(titulo, autor, paginas) {
        super(titulo);
        this.autor = autor;
        this.paginas = paginas;

    }

    set autor(autor) {
        this.autor = autor;
    }

    set paginas(paginas) {
        this.paginas = paginas;
    }

    get autor() {
        return this.autor;
    }

    get paginas() {
        return this.paginas;
    }

}


class Peliculas extends Media {

    constructor(titulo, director, runTime) {
        super(titulo);
        this.director = director;
        this.runTime = runTime;

    }

    set director(director) {
        this.director = director;
    }

    set runTime(runTime) {
        this.runTime = runTime;
    }

    get director() {
        return this.director;
    }

    get runTime() {
        return this.runTime;
    }

}

class CD extends Media {

    constructor(titulo, artista, canciones) {
        super(titulo);
        this.artista = artista;
        this.canciones = canciones;

    }

    set artista(director) {
        this.artista = director;
    }

    set canciones(canciones) {
        this.canciones = canciones;
    }

    get artista() {
        return this.artista;
    }

    get canciones() {
        return this.canciones;
    }

}



document.getElementById

