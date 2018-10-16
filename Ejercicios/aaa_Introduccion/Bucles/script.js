var persona = {nombre:"Juan", apellido:"Sierra", edad: 25}
var texto = "";
var x;
//Recorrer propiedades de un objeto
for (x in persona) {
    texto += persona[x];
    document.write(texto+"<br/>");
}

document.write(persona.nombre+"<br/>");