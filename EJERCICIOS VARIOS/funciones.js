/*
function uno() {
    console.log("Oi Motherfuckers!");
}

uno();
*/

/*
function sumar(a, b) { // <- Parametros
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: " + suma);
}

sumar(5, 3)
sumar(17859, 54323)    // <-Lista de argumentos
sumar(2023, 1740)
sumar(8, 9 )
*/

/*
function concatenarTresCadenas(cadena1, cadena2, cadena3) {
    console.log(cadena1 +" " + cadena2 + " " + cadena3);
}

concatenarTresCadenas("Estoy aprendiendo a", "Progrmar,", "Carajo!!!");
*/


/*
(function dos(a, b, c,) {
    var datos = document.write("Mi nombre es: " + a + "<br>Mi apellido es: " + b + "<br>Mi edad es: " + c);

    return datos;
})();

dos("Jean Piero", "Parra", 39);
*/

/*
function tres(nombre = "") {
    var nombreCompleto = nombre;
    return document.write(nombreCompleto);
};

tres("Piero Bustamante");
*/

/*
function cuatro(nombre, apellido) {
    if (nombre != null && apellido != null) {
        respuesta = document.write(nombre + " ", apellido);
    } else {
        respuesta = document.write("No puso sus datos completos");
    };
    return respuesta;
}

cuatro("Piero", "Bustamante");
*/

/*
function mesesDelAño(...meses) {
    for (let uno of meses) {
        document.write(uno + "<br>");
    }

};

mesesDelAño("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
*/

/*
function seis(nombre, precio, peso) {
    return "Nombre: " + nombre + " " +"<br>Precio: " + precio + " " + "<br>Peso (grs): " + peso;
}

var juguete = ['Soldado', 25, 20];

document.write(seis(...juguete));
*/


//      VARIABLE ANONIMA:
//     ------------------

/*
var siete = function() {
    respuesta = "Qué onda carnales";
    return respuesta;
};
*/
//===================================================

/*
var a = function (nombre, uno) { var e = nombre; uno(e); };
var b = function (i) { document.write(i); };
*/


//         MODO LANDA:
//        ------------
/*
var uno = nombre => nombre;

document.write(uno("Alexander David Turner"));
*/
//var dos = (nombre, apellido) => nombre + apellido;

//console.log(dos("Damon" +" ", "Albarn"));


