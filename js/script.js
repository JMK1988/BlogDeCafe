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

    //enviar formulario

    
})


function leerTexto(e) {
    /* console.log(e.target.value); */
    datos[e.target.id] = e.target.value;
    
    

    console.log(datos);
};

// elemento de submit



