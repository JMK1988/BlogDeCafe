//generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

// agrega href
nuevoEnlace.href='nuevo-enlace.html';
//agregar texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//agregar clase
nuevoEnlace.classList.add('navegacion__enlace');

/* //agregar al documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);




// eventos

console.log(1);

window.addEventListener('load', function(){ //load espera a que el js y los archivos que dependen del html esten listos.
    console.log(2);

})

window.onload = function() {

    console.log(3);

}

document.addEventListener('DOMContentLoaded', function() { //espera que se descargue el html, no espera a que cargue imagenes o js o CSS
    console.log(4);
})


console.log(5);


function imprimir() {

    console.log(2);
} */


/* window.onscroll = function() {
    console.log('scrolling..');
} */


// seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

/* btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();


    //validar un formulario
    console.log('enviando formulario');

    

    
}); */


// eventos de los inputs y textarea

const datos = {
    nombre:'',
    email:'',
    mensaje:'',
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    //validar formulario
    const { nombre, email, mensaje} = datos;
    
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error')

        return;/*corta el codigo*/
    }
        mostrarAlerta('Mensaje enviado')

    //enviar formulario

});


function leerTexto(e) {
    /* console.log(e.target.value); */
    datos[e.target.id] = e.target.value;
    
    

    //console.log(datos);
};

// elemento de submit


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error');
    }else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000)

}

//muestra un error en pantalla
/* function mostrarError(mensaje) {
    formulario.appendChild( error );
    //desaparesca despues de 5 seg

    setTimeout(() => {
        error.remove();
    }, 5000)
};

function mostrarConfirmacion(mensaje) { 
    formulario.appendChild( aviso );
    setTimeout(() => {
        aviso.remove();
    }, 5000)
} */
 

