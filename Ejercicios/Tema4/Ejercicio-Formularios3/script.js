(function () {

    var tours = document.getElementsByClassName("tour");

    for (var i=0; i<tours.length; i++) {
        var numNoches = tours[i].getElementsByTagName('input');
        numNoches[0].addEventListener("change", function (e) {
            cambiarPrecio(e);
        });

        var buttonRes = tours[i].getElementsByTagName("button");

        if ((buttonRes[0].classList.contains('book'))) {
            buttonRes[0].addEventListener("click", function (e) {
                displayText(e);
            });
        }


    }

    var photoToggle = document.getElementsByClassName("ver-fotos");
    photoToggle[0].addEventListener("click", function (e) {
        displayPhotos(e);
    })

    function cambiarPrecio (e) {
        var clicked = e.target;
        var padre = clicked.parentNode;
        var spanChng = padre.getElementsByClassName("total");

        var pricePerDay = padre.getAttribute("data-precio-dia");

        var nights = clicked.value;

        var nightsText = padre.getElementsByClassName("numero-noches");
        nightsText[0].textContent = nights;

        //Actualiza el precio
        spanChng[0].textContent = pricePerDay * nights;
    }

    function displayText (e) {
        var clicked = e.target;
        var padre = clicked.parentNode;

        var button = padre.getElementsByTagName("button");
        button[0].setAttribute("disabled","disabled");

        alert('Llame al 902 30 30 30 para reservar');

    }

    function displayPhotos (e) {
        var target = e.target;
        if (target.nodeName == "A") {
            var photoList = target.nextElementSibling;

            if (photoList.style.display=="") {
                photoList.style.display = "block";
            }


            if (photoList.style.display == "none") {
                photoList.style.display = "block";
            } else if (photoList.style.display == "block") {
                photoList.style.display = "none";
            }

        }

    }

})();