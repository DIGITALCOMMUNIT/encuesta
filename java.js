var colores = ["#d2f2ef", "#55757a"];
var indice = 0;

function cambiarColor() {
    document.querySelector("body").style.backgroundColor = colores[indice];
    if (indice == 0) {
        document.querySelector(".mi-icono").src = "icon dia.png";
        indice++;
    } else {
        document.querySelector(".mi-icono").src = "icon noche.png";
        indice--;
    }
}

