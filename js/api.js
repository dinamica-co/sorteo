// ==========================================
// API RIFA ONLINE
// ==========================================

const API_URL =
"https://script.google.com/macros/s/AKfycbyS8F1IL235HzwmiRQ61LgIFDyFbzMgKT6QJvyyf4b78yOCq8-rI31RUEqipD04AEIj/exec";

async function enviarSolicitud(datos){

    try{

        const respuesta = await fetch(API_URL,{

            method:"POST",

            body:JSON.stringify(datos)

        });

        const resultado = await respuesta.json();

        return resultado;

    }catch(error){

        console.error(error);

        return{

            ok:false,

            mensaje:"No fue posible conectar con el servidor."

        };

    }

}
