//EJERCICIO: FUNCIÓN CON ITERACIÓN Y CONDICIONAL DE OBJETOS. 

var contactos = [
    {
        "nombre": "Aragorn",
        "apellido": "de Dunedain",
        "numero": "+3584573964587",
        "gustos": ["Arwen", "Gobernar la tierra media"]
    },
    {
        "nombre": "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violín"]
    }
];

function buscarPerfil(nombre, propiedad) {
    for (var i = 0; i < contactos.length; i++) {
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe.";
        }
    }
    return "El contacto no está en la lista.";
}

console.log(buscarPerfil("Aragorn", "apellido"));
