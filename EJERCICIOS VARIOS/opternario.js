// condición ? TRUE : FALSE;

//var uno = 10;
//var dos = 10;

//document.write(uno == dos ? "ES IGUAL" : "NO ES IGUAL");

// EJEMPLO DE FORMA DE USO:
// var max = (num1 > num2) ? num1 : num2;

/*
var a = 5;
var b = 9;

console.log(a < b ? a + 2 : b * 3);
*/


//OTRA DE FORMA DE HACERLO ES:

/*let num = 3;

console.log(num % 2 == 0) ? "es par" : "es impar";
*/

// condición ? PAR : IMPAR;

//let num = 3;

//(num % 2 == 0) ? document.write(`${num} es par`) : document.write(`${num} es impar`);

//(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} es impar`);

/*
(num % 2 == 0) ?
    (
        console.log(`${num} es par`),
        console.log(`${num} es par 2`)
    )
        :
    (
        console.log(`${num} es impar`),
        console.log(`${num} es impar`)
    )    
*/


//EJEMPLOS CON DATOS:

/*
var miEdad = 24;
var mayorEdad = 18;


(mayorEdad == 18) && (miEdad == 24) ? document.write('Sí eres mayor de edad') : document.write('No sigue intentando');
*/


/*
var miEdad = 19;
var mayorEdad = (miEdad > 18) ? console.log('Sí, eres mayor de edad') : console.log('No, sigue intentando');
*/


/*
//var diaFeriado = false;
var diaFeriado = true;
'Hoy debo pagar' + console.log( diaFeriado ? '19 pesos' : '15 pesos');
*/



//DESDE UNA FUNCIÓN CON MULTIPLES OPERADORES:
/*
var a = 20;

var numeroObtenido= a == 5 ? 'Cinco':
                    a == 7 ? 'Siete':
                    a == 11 ? 'Once':
                    a == 15 ? 'Quince':
                    'Otro Número';

document.write( numeroObtenido ); // Once
*/

/*
function retornarMinimo(x, y) {

    console.log(x < y ? "x" : "y");
}

    retornarMinimo (5, 8);
    retornarMinimo (3, 1);
    retornarMinimo (5, 5);
*/

    

function compararNumeros(a, b) {
    return a == b ? "a y b son iguales" :
            a > b ? "a es mayor que b" :
            "b es mayor que a";
}

console.log(compararNumeros(7, 11));
console.log(compararNumeros(22, 11));
console.log(compararNumeros(11, 11));
