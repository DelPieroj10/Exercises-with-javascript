
// Un Objeto esta compuesto por: PROPIEDADES Y METODOS.

// PROPIEDADES: Son las características que la cadena tiene por ser cadena: Ejm: Longitud.

// length -------> CONTABILIZA O DEVUELVE LA CANTIDAD DE CARACTERES

//        METODOS: Todos aquellos que devuelven la copia de una cadena con modificaciones, manteniendo la original intacta.
//      -----------
/*
    -----------
    search    ----
    indexOf       |
    lastIndexOf   |
    match         |  BUSQUEDA
    substr         >
    substring    |
    charAt        |
    startsWith    |
    endsWith      |
    includes  ----
    -----------
    repeat 
    replace ------> Para carácteres Mutables
    slice (inicio[, fin]) ---> Es igual que "substring" pero admite valores negativos, si ponemos valores negativos empezará desde atrás.

    - Si no se incluye el final extrae hasta el final.

    - En el caso de colocarlo de la forma ( 2, -4 ) -> Empieza a contar en el tercer caracter y los últimos -4 no los considera. 
    split --------> Sirve para convertir strings en Arrays
    trim  --------> QUITA LOS ESPACIOS SOBRANTES QUE SE PUEDEN ENCONTRAR AL INICIO Y FINAL DE UN OBJETO. Suele ser usado mucho en formularios EJM: "   HOLA A TODOS   ";
    toLowerCase
    toUpperCase
    concat -------> CONCATENAR
*/


var a = "Oi all Motherfuckers from Venezuela! Everybody who live in Venezuela is a badass Motherfuckers. <br>";

var b = "You have being better people,";

var c = "more awaken, emphatic, kindless and righteous.";

//document.write( c.length );
//document.write( a.search("Venezuela") );
//document.write( a.indexOf("Motherfuckers") );
//document.write( a.lastIndexOf("Motherfuckers") );
//document.write( a.match(/Motherfuckers/gi) );
//document.write( a.substr (3, 17) );
//document.write( a.substring (3, 17) );
//document.write( a.charAt (3) );
//document.write( a.startsWith ("Oi") );
//document.write( a.startsWith ("V", 26) );
//document.write( a.endsWith ("Motherfuckers") );
//document.write( a.endsWith ("Motherfuckers", 20) );
//document.write( a.includes ("Every", 24) );
//document.write( a.repeat (10) );
//document.write( a.replace ("Motherfuckers" , "my dear fellows") );
//document.write( a.slice(-31) );
//document.write( a.slice(37) );
//console.log( a.slice (37, -20) );
//console.log( a.split (" ") );
//document.write( a.trim () );
//document.write( b.toLowerCase () );
//document.write( a.toUpperCase () );
/*
let cadenaMayus = b.toUpperCase();
console.log(cadenaMayus);
*/
//document.write( a.concat (b, " ",c) );
//----> Esta siguiente forma de concatenar también es conocida como "Template Strings". Se pueden incluir variables, condicionales, etc...
//document.write( `How about you going homelanders? <br>${b} more wholeness, ${c}` );


    //***/ OTRA FORMA DE CONCATENAR PUEDE SER LA SIGUIENTE (¡MEJOR NO ABUSAR DE SU USO!):

/*
var mensajeCompleto = "Estoy aprendiendo a programar con: ";
var parteFinal = "freeCodeCamp, Yoney Gallardo y Dorian Desings"

mensajeCompleto += parteFinal;

document.write(mensajeCompleto);
*/

    //***/ OTRA FORMA de acceder y traer elementos de un arreglo usando su índice con square brackets [].

//console.log(a[7]);

//***/ ACCEDIENDO AL INDICE DE LA CADENA Y ORDENANADOLOS TIPO LISTA:
/*
console.log(a[7]); // M
console.log(a[8]); // o
console.log(a[9]); // t
console.log(a[10]); // h
console.log(a[11]); // e
console.log(a[12]); // r
console.log(a[13]); // f
console.log(a[14]); // u
console.log(a[15]); // c
console.log(a[16]); // k
console.log(a[17]); // e
console.log(a[18]); // r
console.log(a[19]); // s
*/

//***/ ACCEDIENDO AL ÚLTIMO CARÁCTER DE LA CADENA:
// - (El último índice siempre es[longitud - 1] porque en js siempre comenzamos a contar desde "0".
// - De la misma forma puedes acceder al penultimo, antepnultimo... carácter restando - 2, - 3, ...)

// console.log(b[b.length - 1]);
/*
n = 5
    
console.log(c[c.length - n]);    
*/

//--------------------------------------------------------------------------------------

    //COMO ESCAPAR O SALTAR COMILLAS DE CARACTERES CUANDO SE ENCUENTRAN MAS DE 2 EN UNA CADENA:
/*
var miCadena = "Soy una cadena de caracteres \"con comillas\"";

console.log(miCadena);
*/

//---> Una mejor práctica seria usar también comillas simples, combinandolos y asi evitar na lectura confusa y problematica del codigo:
/*
var miMeta = 'Soy una cadena de caracteres "con comillas"';

console.log(miMeta);
*/

//-----------------------------------------------------------------------------------------

/*
//  SECUENCIA DE ESCAPE:

    Código  |  Resultado
-----------------------------
    \'        Comilla Simple
    \"        Comilla Doble
    \\        Barra invertida  
    \n        Línea Nueva
    \r        Carrys Return
    \t        Tab
    \b        Retroceso
    \f        Salto de Página
    ...
*/

//console.log("Estoy aprendiendo \\ Javascript");
//console.log("Estoy aprendiendo: \n- HTML \n- CSS \n- Javascript \n- React");
//console.log("Estoy aprendiendo: \n- HTML \rY CSS \n- Javascript \n- React");
//                                         ----



// ----> Donde consultar la documentación pertinente sobre los metodos y demás de javascript: w3school.com