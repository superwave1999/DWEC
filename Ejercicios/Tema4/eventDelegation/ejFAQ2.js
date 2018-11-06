(function() {
	window.addEventListener('load',function() {
		var faqs = document.getElementById("faqs");
		var elementosH2 = faqs.getElementsByTagName("h2");
		var elementosLi = document.getElementsByTagName('a');
		var nodoH2,nodoLi;

		faqs.addEventListener('click',cambiar,false);


		/*

		for (var i = 0; i < elementosH2.length; i++) {
			nodoH2 = elementosH2[i];
			nodoH2.addEventListener('click' ,cambiar,false);
		}


		for (var i = 0; i < elementosLi.length; i++) {
			nodoLi = elementosLi[i];
			nodoLi.addEventListener('click' ,cambiarLink,false);
		}






		/*for (var i = 0; i < elementosH2.length; i++) {
			nodoH2 = elementosH2[i];
			nodoH2.addEventListener('click' ,cambiar,false);
		}*/

		function cambiar(e) {
			var h2 = e.target;

			if (h2.tagName == 'H2') {
				console.log(e.target)
				
				h2.classList.toggle("mas");
				h2.classList.toggle("menos");
				h2.nextElementSibling.classList.toggle("abierto");
				h2.nextElementSibling.classList.toggle("cerrado");

				photoChange(0);
			}



			if (h2.tagName == 'A' ) {
				e.preventDefault();

					for (var i = 0; i<elementosLi.length; i++) {
						if (h2.isEqualNode(elementosLi[i])) {
							photoChange(i+1);
						}

					}

			}



		};

		function photoChange(number) {
			var vara= document.getElementById("photo");
			vara.className = "abierto";
			vara.removeAttribute("src");

			switch (number) {
				case 1:
					vara.setAttribute("src","foto1.jpg");
				break;
				case 2:
					vara.setAttribute("src","foto2.png");
				break;
				case 3:
					vara.setAttribute("src","foto3.jpg");
				break;
				case 4:
					vara.setAttribute("src","foto4.jpg");
				break;
				default:
					vara.className = "cerrado";
					vara.removeAttribute("src");
				break;
			}
		}
	});
}())