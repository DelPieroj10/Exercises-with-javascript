//          EVENTOS:
//	      -----------


/*
function apretar() {
    alert("Oi Mothefucker!");
};

function encima() {
    alert("El ratón esta aquí");
};

function fuera() {
    alert("El ratón esta AFUERA");
};
*/

/*
var eventUno = document.querySelector(".tres");

eventUno.addEventListener("click", function() {alert("Oi Mothefucker!")})
*/

// Ejemplo: Element.addEventListener('event', callback)

        //EVENTOS DE RATÓN Y TECLADO:
   //   ---------------------

/*
Eventos de ratón:
    °click: Cuando pulsamos el botón izquierdo del ratón
    °dbclick: Cuando pulsamos dos veces seguidos el botón izquierdo del ratón
    °mouseenter: Cuando entramos en la zona que tiene el eventos
    °mouseleave: Cuando salimos de la zona que tiene el evento
    °mousedown: Cuando pulsamos el boton izquierdo del ratón
    °mouseup: Cuando soltamos el boton izquierdo del ratón
    °mousemove: Cuando movemos el ratón

NOTA: "mousedown Y mouseup" puede utilizarse, por ejemplo, en la API de Drag & Drop para arrastrar elementos; donde es necesario saber cuando empiezas a pulsar y luego haber solatado para colocar el elemento   

Eventos de teclado:
    keyDown: cuando pulsamos una tecla
    keyPress: cuando soltamos una tecla
    keyUp: cuando pulsamos una tecla y no la solatamos
*/

//const button = document.getElementById('button')

/*button.addEventListener('click', () => {
    console.log('CLICK')
})*/

/*button.addEventListener('dblclick', () => {
    console.log('DOBLE CLICK')
})*/


//const box = document.getElementById('box')
/*
box.addEventListener('mouseenter', () => {
    box.classList.replace("crimson", "green")
})

box.addEventListener('mouseleave', () => {
    box.classList.replace("green", "crimson")
})
*/

/*
box.addEventListener('mousedown', () => {
    console.log('HAS PULSADO EN LA CAJA');
})

box.addEventListener('mouseup', () => {
    console.log('HAS SOLTADO EL BOTON IZQUIERDO EN LA CAJA');
})
*/
/*
box.addEventListener('mousemove', () => {
    console.log('HAS MOVIENDO EL RATÓN EN LA CAJA');
})
*/


const form = document.getElementById('form')
const input = document.getElementById('input')
const button = document.getElementById('button')


//input.addEventListener('keyup', (e) => { console.log(e); }) //---> Dispara un evento

//input.addEventListener('keyup', (e) => { console.log(e.key); }) //---> Para saber que tecla estamos pulsando

//input.addEventListener('keyup', (e) => { console.log(e.target.attributes[0].nodeValue); })

//addEventListener('click', (e) => { console.log(e); })

//button.addEventListener('click', (e) => { console.log(e.target); })

// window.addEventListener("keydown", function () { this.alert("Ouch!, You pushed a key") });

// window.addEventListener("keyPress", function () { this.alert("Aha!, You held on a key") });

// window.addEventListener("keyUp", function () { this.alert("Aha!, You kept out a key") });

/*
window.addEventListener("keydown", function (event) {
    //alert(event.keyCode);
    alert(String.fromCharCode(event.keyCode))
});
*/


    //    EVENTOS DE CARGA Y TEMPORIZADOR:
    //  -----------------------------------

// window.addEventListener("load", function () {alert ("YA CARGO")} )

/*
    setInterval
    setTimeout
*/

/*
var tiempo = setInterval(
    function () {
        document.write ("PARALELEPIPEDO <br>")    
    }, 2000
);
*/

/*
setTimeout(
    function () {
        document.write("THIS IS ALREADY A KITE")
    }, 3000
);
*/

    //    EVENTOS MULTIMEDIAS:
    //  -----------------------

/*    
Play
Ended
Seeking
*/

//var video = document.querySelector(".primero");

/*
video.addEventListener("play",
    function () {
        alert("LE DISTE PLAY")
    });
*/

/*
video.addEventListener("seeking",
    function () {
        alert("this.currentTime")
    });  //----> Este tipo de función con una alerta de este tipo nos dice el momento exacto donde has adelantado la barra de tiempo.

*/

    // EJERCICIO 1/ DELEGACIÓN DE EVENTOS DE FORMA OPTIMIZADA 
    //        (Ubicando los elementos en los hijos):
    // ------------------------------------------------------

//const gallery = document.getElementById('gallery')
/*
gallery.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.target.textContent);
})
*/

/*
gallery.addEventListener('click', (e) => {
    e.target.classList.add('red');
})
*/



    // EJERCICIO 2/ DELEGACIÓN DE EVENTOS DE FORMA OPTIMIZADA 
    //                  (preventDefault):
    // ------------------------------------------------------
    

const link = document.getElementById('link')
    
link.addEventListener('click', (e) => {
    e.preventDefault()
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('El formulario se ha enviado');
})

// Forzar a que el evento suceda:

button.addEventListener('click', () => {
    input.value = 'Has hecho click'
})

button.click()
