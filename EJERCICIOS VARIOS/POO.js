//  Programación Orientada a Objetos:

//  Determinismo: Crear un Objrto = INSTANCIAR UN OBJETO

/*
OBJETOS{
    - Propiedades (variables)
    - Métodos (funciones)
}
*/

//  FORMA ANTERIOR:
/*
function Heroe (name, age, power) {
    this.one = name;
    this.two = age;
    this.three = power;

    this.toHelp = function () {
        document.write("The heroe ", name, " helps with his ", power);
    }
};

var Heroe1 = new Heroe("Wolverin", "190 years old about", "adamantium claws, Super power and Regeneration.");

var Heroe2 = new Heroe("Spiderman", "29 years old", "Spider webs, Aracnic sense and Super power.");

var Heroe3 = new Heroe("Ironman", "53 years old", "Ginius and Money.");

//document.write(Heroe1.three);

Heroe2.toHelp();
*/

//-----------------------------------------------------------------------------------

//  FORMA ACTUAL USANDO UN CONSTRUCTOR:

class Heroe {
    constructor(name, age, power) {
        this.one = name
        this.two = age
        this.three = power

        this.datos = `The heroe ${name} who has ${age} helps with his ${power} `
    }

    toHelp () {
        return `The heroe ${this.one} helps with his ${this.three}.`
    }
};

const Heroe1 = new Heroe('Wolverin', '190 years old about', 'adamantium claws, Super power and Regeneration.');

const Heroe2 = new Heroe('Spiderman', '29 years old', 'Spider webs, Aracnic sense and Super power.');

const Heroe3 = new Heroe('Ironman', '53 years old', 'Ginius and Money.');

document.write(Heroe3);
console.log(Heroe1)
console.log(Heroe2)
console.log(Heroe3)

console.log(Heroe2.toHelp());  //Acceso a través de "NOTACIÓN DE PUNTO".


/*
class Animal {
    constructor(tipo, raza) {
        this.zero = tipo;
        this.one = raza;
    };
};

class Domesticos extends Animal{
    constructor(zero, name, age, weight) {
        super(zero)
        this.name = name;
        this.age = age;
        this.weight = weight;
    };
};

var animal1 = new Domesticos("Hogar", "Boby", 8, 6);
var animal2 = new Domesticos("Heroe", "Kripton", 7, 20);

var unico = new Animal("Savage", "Pure");

document.write(animal2.name);  //Acceso a través de "NOTACIÓN DE PUNTO".

document.write(unico.zero);
*/


//-----------------------------------------------------------------------------------

//  FORMA ACTUAL SIN CONSTRUCTOR:
/*
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "numero de paginas": 500,
    numeroDeHojas: 250,
    "titulo": "Diagnostic and Statistical Manual of mental Disorders"
};

console.log(miCuaderno.titulo);
console.log(miCuaderno["numero de paginas"]);
console.log(miCuaderno.numeroDeHojas);
*/

// EJM: Posición por resultados en una competencia:
/*
var resultados = {
    1: "Nora_256",
    2: "Gino*577",
    3: "Estef-543",
    4: "Kiara566"
};

var posicion = 4;

console.log(resultados[posicion]);
*/


//      CAMBIANDO O REASIGNANDO VALOR A LAS PROPIEDADES DE UN OBJETO:
/*
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuadernnos", "merienda"]
};

//console.log(mochila.color);
//mochila.color = "verde";
//console.log(mochila.color);

console.log(mochila.contenido);
mochila.contenido.push("creyones");
console.log(mochila.contenido);
*/


//      AGREGAR PROPIEDADES:
/*
var curso = {
    "titulo": "Aprende Javascript desde Cero",
    "idioma": "Español",
    "duracion": 30
};

curso.vistas = 34500; // También puede ser:
curso["vistas"] = 34500;
console.log(curso.vistas);
*/

//      ELIMINAR PROPIEDADES:
/*
var curso = {
    "titulo": "Aprende Javascript desde Cero",
    "idioma": "Español",
    "duracion": 30,
    "vistas": 34500
};

console.log(curso);
delete curso.vistas;
console.log(curso);
console.log(curso.vistas);
*/


//      OBJETOS PARA BÚSQUEDAS:

//function buscarElementoQuimico(simbolo) {
    
/*    
    var elementoQuimico = "";

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "Br":
            elementoQuimico = "Bromo";
            break;
        case "Ba":
            elementoQuimico = "Bario";
            break;
        case "Li":
            elementoQuimico = "Litio";
            break;
    }
    return elementoQuimico;
*/
    
//NOTA: Sustituimos la sentencia switch por una forma más concisa, resumida y con una asociación directa utilizando la metodología de objeto.
/*    
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "Br": "Bromo",
        "Ba": "Bario",
        "Li": "Litio"
    };

        return simbolosQuimicos[simbolo];
    
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("Br"));
console.log(buscarElementoQuimico("Ba"));
console.log(buscarElementoQuimico("Li"));
*/


//      VERIFICAR PROPIEDADES DE UN OBJETO:
//  Este método siguiente es oportuno cuando estamos trabajando con condicionales.

/*
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(miCuaderno.hasOwnProperty("color"));
console.log(miCuaderno.hasOwnProperty("edicion"));
*/


/*
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad];
    } else {
        return "El objeto no tiene esta propiedad.";
    }
}

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "edicion"));
*/


//      OBJETOS COMPLEJOS:
/*
var ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "anchoas"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "champiñones",
            "pimentón"
        ],
        "paraLlevar": false
    }
];

console.log(ordenesDePizzas[0]);
console.log(ordenesDePizzas[0].tipo);

console.log(ordenesDePizzas[1]);
console.log(ordenesDePizzas[1].tamaño);
console.log(ordenesDePizzas[1].toppings[1]);
*/

//      OBJETOS ANIDADOS:

/*
var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
};

console.log(miReceta.descripcion);
console.log(miReceta.costo);
console.log(miReceta.ingredientes);
console.log(miReceta.ingredientes.masa);
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa.sal);
console.log(miReceta.ingredientes.masa["agua"]);

console.log(miReceta.ingredientes.cobertura);
console.log(miReceta["ingredientes"].cobertura.azucar);
console.log(miReceta.ingredientes.cobertura.chocolate);
console.log(miReceta.ingredientes.cobertura.mantequilla);
*/

//      ARREGLOS ANIDADOS DENTRO DE UN OBJETOS:

/*
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dintes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];

var primeraFlor = misPlantas[0].lista[1]
console.log(primeraFlor);

var arbolDestacado = misPlantas[1].lista[2]
console.log(arbolDestacado);
*/