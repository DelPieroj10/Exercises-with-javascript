//PUNTAJES EN EL GOLF:

/*
En el juego de golfcada hoyo tiene un par que representa el número promedio de golpes que se espera que haga un golfista para intoducir la pelota en el hoyo.

Hay un nombre diferente dependiendo de que tan por encima o por debajo del par estén sus golpes.

Tu función tomará ls argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad:

    Golpes                 Retornar
---------------------------------------
    1                   "Hole-in-one!"
<= par - 2                  "Eagle"
par - 1                     "Birdie"
    par                       "Par"
par + 1                     "Bogey"
par + 2                 "Double Bogey"
>= par + 3                  "Go Home"
*/
/*
function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
        return "Hole-in-one MotherF***Up!";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes == par + 1) {
        return "Bogey";
    } else if (golpes == par + 2) {
        return "Double Bogey";
    } else if (golpes >= par + 3) {
        return "Go Home Asshole!";
    }
}

document.write(puntajeDeGolf(4, 1));
*/


//  switch:

/*
var producto = "helado";

switch (producto) {
    case "pizza":
        console.log("La pizza básica cuesta $10.55"); break;
    case "hamburguesa":
        console.log("Las hamburguesas s/tocineta cuestan $6.78"); break;
    case "BaconBurguer":
        console.log("Las hamburguesas c/tocineta cuestan $8.15"); break;
    case "helado":
        console.log("El helado cuesta $2.8"); break;
}

console.log("Aquí Comienza un nuevo listado...");
*/

function seleccionarIdioma(valor) {
    var idioma;
    
    switch (valor) {
        case 1: idioma = "Español"; break;
        case 2: idioma = "Frances"; break;
        case 3: idioma = "Italiano"; break;
        default: idioma = "Inglés"; break;
    }
    return idioma;
}
document.write(seleccionarIdioma(2));
