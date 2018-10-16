(function(){
var texto= document.getElementById("texto");
var enlaces = texto.getElementsByTagName("a");
var texto2 = document.getElementById("texto2");
var total= enlaces.length;
var texto3=document.getElementById("texto3");
var texto4=document.getElementById("texto4");
var texto5=document.getElementById("texto5");  
var cont = 0;

texto2.textContent = "El número de enlaces es "+total;
texto3.textContent = "La dirección es: "+enlaces[enlaces.length-2].href;

for(let i=0;i<enlaces.length;i++){
	
	if (enlaces[i].href == "http://www.google.com"){

		cont +=1;

	}
}    
    
texto4.textContent = "Hay "+cont+" enlaces que contienen esa dirección";
    
var parafos = document.getElementsByTagName('p');
  
var enlaces2 =  parrafos[2].getElementsByTagName('a'); 
    
texto5.textContent = "Hay "+enlaces2.length+" enlaces en el tercer parrafo"; 


})();