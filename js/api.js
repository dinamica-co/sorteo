// ==========================================
// API RIFA ONLINE V4
// ==========================================

const API_URL = "https://script.google.com/macros/s/AKfycbwrKq3B6rTwHFrEp7G_njTymQGOr0FL1NN4IvKThYmqUzbmTw5BkZWCZnxmLz-N0frS/exec";

// ==========================================
// GUARDAR RESERVA
// ==========================================

async function guardarReserva(datos) {

    datos.accion = "guardar";

    try {

        const respuesta = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify(datos)

        });

        return await respuesta.json();

    } catch (error) {

        return {

            ok: false,

            mensaje: error.toString()

        };

    }

}

// ==========================================
// OBTENER CONFIGURACIÓN
// ==========================================

async function obtenerConfiguracion() {

    const respuesta = await fetch(API_URL + "?accion=configuracion");

    return await respuesta.json();

}

// ==========================================
// OBTENER SOLICITUDES
// ==========================================

async function obtenerSolicitudes() {

    const respuesta = await fetch(API_URL + "?accion=solicitudes");

    return await respuesta.json();

}

// ==========================================
// OBTENER NÚMEROS VENDIDOS
// ==========================================

async function obtenerVendidos() {

    const respuesta = await fetch(API_URL + "?accion=vendidos");

    return await respuesta.json();

}

// ==========================================
// CONFIRMAR
// ==========================================

async function confirmarSolicitud(fila) {

    const respuesta = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify({

            accion: "confirmar",

            fila: fila

        })

    });

    return await respuesta.json();

}

// ==========================================
// CANCELAR
// ==========================================

async function cancelarSolicitud(fila) {

    const respuesta = await fetch(API_URL, {

        method: "POST",

        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify({

            accion: "cancelar",

            fila: fila

        })

    });

    return await respuesta.json();

}
