/*=====NOMBRES DE LAS ID/CLASES=======*/

	sliderClassName="slider";

/*====================================*/

function plusSlides(adv, slideNum) {		//Anterior/siguiente
	showSlides(slideIndex[slideNum] += adv, slideNum);
	//updateNum(slideNum);
}

function plusSlidesTime(slideNum) {			//Siguiente con intervalo
	showSlides(slideIndex[slideNum] += 1, slideNum);
	//updateNum(slideNum);
}

function playSlides(num, slideNum) {		//Play/pause
	txtbxPlay = document.getElementById("textbox_"+slideNum);
	txtbxSpeed = txtbxPlay.value;
	
	//Comprobar si está vacío y lo resetea
	if (txtbxSpeed == "" || txtbxSpeed.length == 0 || txtbxSpeed == null) {
		txtbxPlay.value = 2000;
		txtbxSpeed = txtbxPlay.value;
	}
	
	//Comprobar si el numero es negativo o 0 y para la diapositiva si es true
	if (txtbxSpeed<=0) {
		txtbxPlay.value = 0;
		num=0;
	}

	
	if (num==1) {
		intervalo[slideNum]=setInterval(plusSlidesTime, txtbxSpeed, slideNum);
		autoActive[slideNum]=true;
	} else {
		clearInterval(intervalo[slideNum]);
		autoActive[slideNum]=false;
	}
	changeIntervalControls(slideNum);
	//updateNum(slideNum);
}

function changeIntervalControls(slideNum) {			//Alternar entre play y pause
	var btnPlay = document.getElementsByClassName("playpause");
	
	if (autoActive[slideNum]) {
		btnPlay[slideNum].innerHTML = '<button class="button" onclick="playSlides(0,'+slideNum+')">Stop</button>';
	} else {
		btnPlay[slideNum].innerHTML = '<button class="button" onclick="playSlides(1,'+slideNum+')">Play</button>';
	}
}

function showSlides(n, slideNum) {			//Funcion principal para mostrar las diapositivas
  	var i;
  	var x = slideClass[slideNum].getElementsByTagName("li");
  	if (n > x.length) {slideIndex[slideNum] = 1}    
  	if (n < 1) {slideIndex[slideNum] = x.length}
  	for (i = 0; i < x.length; i++) {
     	x[i].style.display = "none";  
  	}
	  x[slideIndex[slideNum]-1].style.display = "block";  
	  
	  updateNum(slideIndex[slideNum]-1, slideNum);
}

function updateNum(slideInd, slideNum) {			//Contador de la diapositiva
	var imgNum = slideClass[slideNum].getElementsByClassName('imgcounter');
	var liItems = slideClass[slideNum].getElementsByTagName("li");

	imgNum[0].textContent = liItems[slideInd].firstChild.alt;

}

function generaControles() {		//Generar contenido HTML
	for (var i=0; i < slideClass.length; i++ ) {
		slideClass[i].innerHTML += '<div class="controls">';
		slideClass[i].innerHTML += '<button class="prev button" onclick="plusSlides(-1,'+i+')"> ⬅</button>';
		slideClass[i].innerHTML += '<div class="imgcounter"></div>';
		slideClass[i].innerHTML += '<button class="next button" onclick="plusSlides(1,'+i+')"> ⮕</button>';
		slideClass[i].innerHTML += '</div>';
		slideClass[i].innerHTML += '<div>';
		slideClass[i].innerHTML += '<span class="textboxdesc">Auto time(ms):</span><input class="textbox" id="textbox_'+i+'" type="number" value="2000"/>';
		slideClass[i].innerHTML += '<div class="playpause"></div>';
		slideClass[i].innerHTML += '</div>';
	}
}

window.onload = function() {
	slideClass = document.getElementsByClassName(sliderClassName);	//Array de slides
	slideIndex = [];	//Imagenes iniciales de los slides
	intervalo = new Array(slideClass.length);
	autoActive = new Array(slideClass.length);
	generaControles();

	for (var i=0; i < slideClass.length; i++) {
		slideIndex.push(1);
		showSlides(slideIndex[i],i);
		playSlides(1,i);
	}
}