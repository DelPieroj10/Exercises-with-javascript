//  EJERCICIO 1:

/*
Tenemos un objeto que representa parte de una colección de álbunes musicales.

Cada álbum tiene un número de id. único asociado a otras propiedades.

No todos los álbunes tienen la información completa.
*/

/* 
Define una función "actualizarDiscos" que tome los paramétros siguientes:
- discos (el objeto que representa la colección de discos).
- id.
- propiedad.
- valor.

Tu meta es completar la función implementado las siguientes reglas para modificar el objeto pasado a la función:

- Si "valor" es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asignar el valor del parámetro "valor" a la propiedad.
Si la propiedad no existe, debes crearla y asignar este valor.
*/  

/* 
var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold",
    },
};

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id] [propiedad];
    } else if (propiedad === "canciones") {
        discos[id] [propiedad] = discos[id] [propiedad] || [];
        discos[id] [propiedad].push(valor);
    } else {
        discos[id] [propiedad] = valor; 
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum);

console.log(coleccionDeDiscos[7853]); 


console.log(coleccionDeDiscos[5439].canciones);
actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");
console.log(coleccionDeDiscos[5439].canciones); 
console.log(coleccionDeDiscos[5439].artista);
actualizarDiscos(coleccionDeDiscos, 5439, "artista", "ABBA");
console.log(coleccionDeDiscos[5439].artista);

console.log(coleccionDeDiscos[5439]);
*/

//  EJERCICIO 2:

/* 
Crea una clase libro.
- La clase libros tendrá: autor, año y género.
- Crea un método que devuelva toda la información del libro.
- Pide 3 libros y guárdalos en un array.
- Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
- Validar que los campos no se introduzcan vacíos.
- Validar que el año sea un número y que tenga 4 dígitos.
- Validar que el género sea: Aventuras, Terror o Fantasía.
- Crea una función que muestre todos los libros.
- Crea una función que muestre los autores ordenados alfabéticamente.
- Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando el método que devuelve la información.
*/


class Book{
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor() {
        return this.author
    }

    getGender() {
        return this.gender
    }

    bookInfo() {
        return `${this.title} is a book of ${this.gender} wrote by ${this.author} in ${this.year}`
    }
}

let books = []

let i = 0;
let contador = 1;

while (books.length < 3) {
    let title = prompt(`Introduce el título del libro ${contador}`)
    let author = prompt(`Introduce el autor del libro ${contador}`)
    let year = prompt(`Introduce el año del libro ${contador}`)
    let gender = prompt(`Introduce el género del libro ${contador}`).toLowerCase()

    if (title != '' && 
        author != '' && 
        !isNaN(year) && 
        year.length == 4 && 
        (gender == 'adventure' || gender == 'terror' || gender == 'fantasy')) {

        books.push (new Book(title, author, year, gender))
        i++;
        contador++;
    }
}

const showAllBooks = () => {
    console.log(books); // ---> Esta es para mostrar los libros en el array
}

const showAuthors = () => { 
    let authors = []

    for (const book of books) {
        authors.push(book.getAuthor()); 
    }

    console.log(authors.sort()); // ----> Esta es para mostrar los autores en orden alfabético. 
}

const showGender = () => {
    const gender = prompt('Introduce el género a buscar')

    for (const book of books) {
        if (book.getGender() == gender) {
            console.log(book.bookInfo())
        } // ----> Esta es para mostrar los géneros.
    }
}

showAllBooks()
showAuthors()
showGender()

