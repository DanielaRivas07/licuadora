var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora= document.getElementById("blender-button-sound")
var licuadora = document.getElementById("blender"); 

function controlarLicudora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        hacerBrr();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagada"
        hacerBrr();
        licuadora.classList.remove("active") 
    }
}

function hacerBrr(){

    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play()
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
        
    }
}