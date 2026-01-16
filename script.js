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