/* 
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
La destructuración es una expresión de JavaScript que hace posible la extracción de datos de arreglos u objetos
*/

const person = {
    name: 'Del Piero',
    age: 40,
    email: 'Delpiero10@gmail.com'
}

//FORMA TRADICIONAL: Esta forma tiene un problema y es que estamos repitiendo el código demasidas veces (para este ejemplo es "person").

// const name = person.name
// const age = person.age
// const email = person.email

/*  DESTRUCTURING:
-------------------- */

/* const { name: nombre, age: edad, email: correo } = person // En caso de que se quiera cambiar el nombre a las variables se debe colocar 2 puntos y colocar el nuevo nombre con el que se quiera identificar la varible, luego en el "console log" se debera también colocar los nuevos nobres asignados.

console.log( nombre, edad, correo ) */

/*
const { name, age, email } = person

console.log( name, age, email )
*/

/*
const numbers = [1, 2, 3, 4]
console.log(numbers[0])
*/

//  Si quisieras utilizar destructuring co el código anterior seria:
/*
const numbers = [1, 2, 3, 4]

const [primeraPosicion, b, terceraPosicion] = numbers

console.log(terceraPosicion)
*/

/*
const printPerson = ({ name }) => {
    console.log(name)
    console.log(person)
}

printPerson(person)
*/

/*
const coordenadas = {
    x: 4,
    y: 6,
    z: 12
};

const { x, y, z } = coordenadas;

console.log(coordenadas)
console.log(x)
*/

/*
const getUsers = async () => {
    const { data: users } = await axios.get('https://jsonplaceholder.typicode.com/users')

    console.log(users)
}

getUsers()
*/

/*  SINTAXIS DE DESESTRUCTURACIÓN C/ OBJETOS ANIDADOS:
------------------------------------------------------ */
/*
const heroe = {
    TonyStark: {
        edad: 45,
        poder: "superinteligencia",
        identidad: "ironman",
        grupo: "Vengadores"
    }
};

const { TonyStark: { poder, identidad } } = heroe;

console.log(poder);
console.log(identidad);
*/

/*
const Pronostico_LocalDelClima = {
    "yesterday": {
        minimun: 61,
        maximun: 75
    },

    "today": {
        minimun: 61,
        maximun: 75
    },

    "tomorrow": {
        minimun: 61,
        maximun: 75
    }
};

const { today: { minimun: minimunToday } } = Pronostico_LocalDelClima;

console.log(minimunToday);

const { yesterday: { minimun: minimunYesterday, maximun: maximunYesterday } } = Pronostico_LocalDelClima;

console.log(minimunYesterday, maximunYesterday);
*/

/*  SINTAXIS DE DESESTRUCTURACIÓN C/ ARREGLOS:
------------------------------------------------------ */
/*
var a;
var b;
var c;

[a, b, c] = [10, 20, 30]

console.log(a);
console.log(b);
console.log(c);
*/

//  Asignar valores a un número menor de varialbles:
/*
var a;
var b;

[a, b] = [10, 20, 30, 40, 50]

console.log(a, b)
*/

//  Saltar posiciones para asignar valores:
/*
var a;
var b;
var c;

[a, b,,, c] = [10, 20, 30, 40, 50, 60]

console.log(a);
console.log(b);
console.log(c);
*/

//  Para intercambiar valores:
/*
var Pi = 2.39996;
var T = 3.141592;    // T: Ángulo áureo

[T, Pi] = [Pi, T];

console.log("Pi: " + Pi);
console.log("T: " + T)
*/

/*  SINTAXIS DE DESESTRUCTURACIÓN C/ ARREGLOS:
------------------------------------------------------ */