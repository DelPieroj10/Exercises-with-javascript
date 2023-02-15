// EJERCICIO JUEGO "PALABRAS EN BLANCO"

var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrio";
var miAdverbio = "rápidamente";

/*
Las oraciones a conseguir son:
1.- El perro negro corrió rápidamente a la tienda.
2.- La bicicleta pequeña voló a la tienda lentamente.
*/

//1.-

//console.log( `El ${miSustantivo} ${miAdjetivo} ${miVerbo} ${miAdverbio} a la tienda.`);

//2.- Forma para reemplazar cadena de carácteres inmutable:

var palabrasEnBlanco = "El perro negro corrió rápidamente a la tienda.";

palabrasEnBlanco = "La bicicleta pequeña voló a la tienda lentamente.";

document.write(palabrasEnBlanco);


//----------> Ejecución de prueba. 
/*
var palabrasEnBlanco = "El " + miSustantivo + " " + miAdjetivo + " " + miVerbo + " " + miAdverbio + " a la tienda.";

document.write(palabrasEnBlanco);
*/