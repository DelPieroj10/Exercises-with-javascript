/*
Objeto window: Es el objeto global, de él descienden todos los objetos.
    alert()
    prompt()
    confirm()
*/

const button = document.getElementById('button')

// Forma rápida de hacer un "confirm" (algo que casi nunca se utiliza):

/* if (confirm('Accept?')) {
    console.log('User accept');
} else {
    console.log('User not accept');
} */


/*
Objeto console: Es el objeto que contiene la consola del navegador.
    https://developer.mozilla.org/es/docs/Web/API/console

    console.log()
    console.dir()
    console.error()
    console.table()
*/

addEventListener('click', (e) => {
    console.log(e)
})

const person = {
    name: 'Leonel',
    age: '34',
    email: 'Messi10@gmail.com'
}

//console.log(person)
//console.table(person)


/*
Objeto location: Es el objeto que contiene la barra de direcciones.
    https://developer.mozilla.org/es/docs/Web/API/Location

    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/
console.log(location.href)
console.log(location.protocol)
console.log(location.host)
console.log(location.pathname)
console.log(location.hash)
//console.log(location.reload())
//location.href = 'https://goggle.com'


/*
Objeto history: 
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

    back()
    forward()
    go(n|-n)

    length
*/

/*
Objeto date:
    https://developer.mozilla.org/es/docs/Web/Javascript/Referencia/Objetos_glbales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/
/*
const date = new Date();
console.log(date);
*/

/*
Timers:
    Timeout:
    https://developer.mozilla.org/es-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(() =>{code}, delay-in-miliseconds) : Hace que se ejecute la función después de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia).

    Interval:
    https://developer.mozilla.org/es-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(() =>{code}, delay-in-miliseconds) : Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia).
*/

// Si la funcion es externa:
/*
button.addEventListener('click', () => {
    setTimeout(saludar, 3000)
})

const saludar = () => {
    console.log('How you doing?')
}
*/
// Si la opción es que la funcion quede dentro de la construcción:
/*
button.addEventListener('click', () => {
    setTimeout(() => {
        console.log('Keeping touch!');
    },3000)
})
*/

//En caso de que se quiera detener el Timeout.
/*
button.addEventListener('click', () => {
    const timeout = setTimeout(() => {
        console.log('Keeping touch!');
    }, 3000)
    
    clearTimeout(timeout)
})
*/
/*
const timeout = setTimeout(() => {
        console.log('Keeping touch!');
}, 3000)
    
button.addEventListener('click', () => {
        clearTimeout(timeout);
    })
*/

//Colocar intervalo:
/*
const saludar = () => {
    console.log('How you doing?')
}

const interval = setInterval(saludar, 3000)
*/

/*
const saludar = () => {
    console.log('How you doing?')
}

let cont = 0

setInterval(() => {
    console.log(cont)
    cont++
},3000)
*/

//En caso de que quiera detener el intervalo.


const saludar = () => {
    console.log('How you doing?')
}

let cont = 0

const interval = setInterval(() => {
    console.log(cont)
    cont++
}, 3000)

button.addEventListener('click', () => {
        clearInterval(interval);
    })