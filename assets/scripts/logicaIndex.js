async function enviarDatos(){
    const nombre = document.getElementById('btn').value;
 
    try{
        const resultado = await enviarDatosAlServidor(nombre);
        mensajeAgradecimiento(resultado);
    }catch(e){
        mensajeError(e);
    }
}


function enviarDatosAlServidor(nombre){
    return new Promise((resolve,reject) => {
        
        setTimeout(() =>{
            const exito = nombre.toLowerCase() !== 'error';
            
            const resultado = exito ? 'https://www.formula1.com/' : 'Datos erroneos';
            exito ? resolve(resultado) : reject(resultado);


        }, 2000);

    });
}

function mensajeAgradecimiento(mensaje){
    const mensajeElement = document.getElementById('btn');
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.remove('oculto');
}
