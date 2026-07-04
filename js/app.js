// =====================================
// RIFA ONLINE DIARIA
// Generar los números del 00 al 99
// =====================================

// Contenedor donde se mostrarán los números
const tablero = document.getElementById("tableroNumeros");

// Crear los 100 números
for (let i = 0; i < 100; i++) {

    // Agregar cero adelante (00,01,02...)
    const numero = i.toString().padStart(2, "0");

    // Crear botón
    const boton = document.createElement("button");

    boton.innerText = numero;

    boton.className = "numero";
// Seleccionar y deseleccionar número
boton.addEventListener("click", function () {
    boton.classList.toggle("seleccionado");
});
    // Agregar al tablero
    tablero.appendChild(boton);

}