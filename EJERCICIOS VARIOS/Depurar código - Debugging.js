/*  Introducción a la consola de Depuración.
    --------------------------------------- */

/* 
Tutorial chrome https://developers.google.com/web/tools/chrome-devtools/javascript?hl=es
*/

//  Código s/depurar:
/*
const form = document.getElementById('form')
const resultElement = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.number1.value != '' && e.target.number2.value != '') {
        const number1 = e.target.number1.value
        const number2 = e.target.number2.value
        const result = number1 + number2
        resultElement.textContent = `${number1} + ${number2} = ${result}`

        e.target.reset()
    }
})
*/

/*
Proceso en la consola:

1.- Depurador
2.- Ir a los scripts
3.- En el menú desplegado a la derecha ir a "puntos de ruptura". En puntos de ruptura puedes seleccionar la línea donde quieres que se detenga la ejecución del código, al hacer esto y ejecutar el código aparecera una ventanilla que pedira la confirmación de: si de avanzar a la siguiente línea de código o ejecutar el código como si no hubiera pasado nada.
4.- En el mismo menú desplegado a la derecha ir a "Expresiones vigiladas" donde podemos acceder a cualquier valor, allí vamos a colocar el operador "typeof"; esta nos dice el tipo de variable que vamos a analizar.
5.- Vamos a evalura "result"
6.- Luego ir al código y hacer la corrección correspondiente. Para efectos de este ejemplo sera decirle al código que devuelva los valores como números y no como string u objecto.

*/

//  Código depurado:

const form = document.getElementById('form')
const resultElement = document.getElementById('result')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.number1.value != '' && e.target.number2.value != '') {
        const number1 = parseInt(e.target.number1.value)
        const number2 = parseInt(e.target.number2.value)
        const result = number1 + number2
        resultElement.textContent = `${number1} + ${number2} = ${result}`

        e.target.reset()
    }
})