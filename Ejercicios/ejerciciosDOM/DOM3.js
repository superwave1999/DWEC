(function (){
	var bt = document.getElementById('bt');
		bt.addEventListener("click",ejercicio);
	 
	function insertar(elementoReferencia){
		var p=document.getElementById('myParagraph')
		var btn = document.createElement("button");
		var t = document.createTextNode("clickeame");
		btn.appendChild(t); 
		p.insertBefore(btn,elementoReferencia.nextSibling)

	}

			
	function ejercicio(){
	var elementoReferencia= document.getElementById('refe');
	insertar(elementoReferencia);	
	}		
})();	
	
