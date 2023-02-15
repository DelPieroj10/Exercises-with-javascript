    // TIPO STRiNG:
/*
var a = "10.55";

document.write(typeof a);
*/

    // TIPO NUMERO:
/*
var a = 10.55;

document.write(typeof a);
*/

    // CONVERTIR UNA VARIABLE:
/*
var a = "10.55";
var b = Number(a);

document.write(typeof a);
*/

    // CONVERTIR UN ENTERO SIN REDONDEO (parceInt):
/*
var a = 10.55;
var b = parseInt(a);

document.write(b);
*/

//...otra forma de hacerlo es:
/*
var a = 10.55;
var b = parseFloat(a);

document.write(b);
// (Este para el caso en el que se haya impreso la variable redondeada y se quiera revertir y verificar los desimales)
*/

/*
console.log(parseInt("6.7"));  // Esta forma mantiene el número base sin el desimal.
*/
/*
var a = parseInt("5");
var b = parseInt("7");

console.log(a + b);
*/

    // CONVERTIR UN ENTERO SIN REDONDEO (parceInt) con base:

//-----> Hacer conversiones de un número binario a número entero:
/*
console.log(parseInt("110111", 2));
*/

//-----> Hacer conversiones de un número de sistema hexadesimal a desimal:
/*
console.log(parseInt("3E0A", 16));
*/

    // Esto No es un numero (isNaN): 

/*
var a = "How you going dude?";
var b = isNaN(a);

document.write(b);
*/

    // Esto es un número (Number.isInteger): Se usa para confirmar que un objeto es realmente un numero y a su vez es entero.
/*    
var a = 20;
var b = Number.isInteger(a);

document.write(b);
*/

    // Para manejar la cantidad de desimales con redondeo (toFixed()):
/*    
var a = 20.4653345;
var b = a.toFixed(1);

document.write(b);
*/

    // Para convertir un numero a cadena de datos (toString()):
/*    
var a = 20.4653345;
var b = a.toString();

document.write(typeof b);
*/

//----> Manera de verificarlo
/*
var a = 20;
var b = a.toString();
var c = 5;

//document.write(b + c);
//document.write(a + c);
*/