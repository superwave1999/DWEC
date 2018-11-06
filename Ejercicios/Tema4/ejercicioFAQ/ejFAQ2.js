(function() {
	window.addEventListener('load',function() {
		var faqs = document.getElementById("faqs");
		var elementosH2 = faqs.getElementsByTagName("h2");
		var nodoH2;

		faqs.addEventListener('click',cambiar,false);

		function cambiar(e) {
			var h2 = e.target;

			/*if (!event.target.matches('input')) {
				console.log(e.target)
				
				//We now have the correct input - we can manipulate the node here

				
			}*/

			if (h2.tagName == 'H2') {
				h2.classList.toggle("mas");
				h2.classList.toggle("menos");
				h2.nextElementSibling.classList.toggle("abierto");
				h2.nextElementSibling.classList.toggle("cerrado");
			}

			// h2 es el nodoH2 actual
			/*if (h2.getAttribute("class")== "mas"){
				h2.setAttribute("class","menos");
			}
			else {
				h2.setAttribute("class", "mas");
			}
			if (h2.nextElementSibling.getAttribute("class")=="cerrado"){
				h2.nextElementSibling.setAttribute("class", "abierto");
			}
			else{
				h2.nextElementSibling.setAttribute("class", "cerrado");
			}
			*/

			
		};
	});
}())