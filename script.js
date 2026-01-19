function agregar(valor) {
    document.getElementById("pantalla").value += valor;
}

function borrar() {
    document.getElementById("pantalla").value = "";
}

function calcular() {
    const resultado = eval(document.getElementById("pantalla").value);
    document.getElementById("pantalla").value = resultado;    
}

const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener('touchend', () => {
        boton.blur(); // Elimina el foco del botón en dispositivos táctiles
      });
});
