//  Ejercicio Arrsays:
//  Mi lista de Compras:

var miListaDeCompras = [["cajas de cereal", 3], ["litros de leche", 2], ["frasco de crema de mani", 3], ["bolsa de pan", 5], ["tipos de vegetales", 10], ["Pechugas de pollo", 7]];

/*
//  FORMA I:
var actividad = [`Voy a comprar`];

actividad.push = (`para 15 días:`);

console.log(actividad);

let deleteElement = miListaDeCompras.shift();
console.log(deleteElement);


//  Cereal
//console.log(`* ${miListaDeCompras[0][1]} ${miListaDeCompras[0][0]}.`);

//  Leche
miListaDeCompras[0][1] = 4;

console.log(`* ${miListaDeCompras[0][1]} ${miListaDeCompras[0][0]}.`);

//  Crema de maní
miListaDeCompras[1][1] = 1;
miListaDeCompras[1][0] = "frasco de 1 Kg de crema de mani s/azúcar";

console.log(`* ${miListaDeCompras[1][1]} ${miListaDeCompras[1][0]}.`);

//  Pan
miListaDeCompras[2][1] = 2;
miListaDeCompras[2][0] = "bolsa de pan de 500 grs";

console.log(`* ${miListaDeCompras[2][1]} ${miListaDeCompras[2][0]}.`);

//  Vegetales
miListaDeCompras[3][1] = 5;
miListaDeCompras[3][0] = "tipos de Vegetales Y Frutas (5 c/u)";

console.log(`* ${miListaDeCompras[3][1]} ${miListaDeCompras[3][0]}.`);

//  Pollo
miListaDeCompras[4][1] = 4;

console.log(`* ${miListaDeCompras[4][1]} ${miListaDeCompras[4][0]}.`);

//  Huevos
miListaDeCompras.push ("* 2 panales de huevo" );

console.log(miListaDeCompras);
*/

//Esta siguiente forma sirve para guardar en una variable un elemento eliminado:
/*
let deleteElement = miListaDeCompras.shift(); 

console.log(deleteElement);
*/



//  FORMA II:
/*
var actividad = [`Voy a comprar `];

let newLength = actividad.push = ("para 15 días:<br>"); // NOTA: Para la impresión de los elementos en esta FORMA II con "document.write" el Metodo "push" funciona guardando en una varialble distinta lo que deseas agregar y luego ejecutandola.

document.write(actividad);

document.write(newLength);

miListaDeCompras.shift();
*/

/*
let deleteElement = miListaDeCompras.shift();
document.write(deleteElement);
*/

//  Cereal
//document.write(`* ${miListaDeCompras[0][1]} ${miListaDeCompras[0][0]}.<br>`);

/*
//  Leche
miListaDeCompras[0][1] = 4;

document.write(`<br>* ${miListaDeCompras[0][1]} ${miListaDeCompras[0][0]}.<br>`);

//  Crema de maní
miListaDeCompras[1][1] = 1;
miListaDeCompras[1][0] = "frasco de 1 Kg de crema de mani s/azúcar";

document.write(`* ${miListaDeCompras[1][1]} ${miListaDeCompras[1][0]}.<br>`);

//  Pan
miListaDeCompras[2][1] = 2;
miListaDeCompras[2][0] = "bolsa de pan de 500 grs";

document.write(`* ${miListaDeCompras[2][1]} ${miListaDeCompras[2][0]}.<br>`);

//  Vegetales
miListaDeCompras[3][1] = 5;
miListaDeCompras[3][0] = "tipos de Vegetales Y Frutas (5 c/u)";

document.write(`* ${miListaDeCompras[3][1]} ${miListaDeCompras[3][0]}.<br>`);

//  Pollo
miListaDeCompras[4][1] = 4;

document.write(`* ${miListaDeCompras[4][1]} ${miListaDeCompras[4][0]}.<br>`);

//  Huevos
var newObject = miListaDeCompras.push ("* 2 panales de huevo");
document.write(miListaDeCompras);

document.write(newObject);
*/
// NOTA 2: Para esta FORMA II se terminana imprimiendo en pantalla no solo los cambios realizados a los Arrays sino, támbien, la variable a las que se le realizaron los cambios en su forma primaria.


