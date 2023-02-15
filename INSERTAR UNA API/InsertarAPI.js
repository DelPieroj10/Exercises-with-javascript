
// alert("Qué hay de nuevo viejo");

// function suma(a, b, c, d) {
// let resultado = a + b + c + d;
// alert("El resultado de la suma es "+ resultado);
// }

// suma("El ", "Chocolate ", "es ", "Sabroso!");

// function mostrarNombre(n) {
    
// document.getElementById("mensaje").innerHTML = n;
// }

// mostrarNombre("Henrietta");


async function traerPais(){

    const respuesta = await fetch("https://api.nationalize.io/pollos?name=Silvia");

    if (!respuesta.OK) {
    
    let oops = "404 no encontré naita";
    alert(oops);
    throw new Error(oops);
}

const nombre = respuesta.json();

    return nombre;
}

function mostrarNombre(n) {
    document.getElementById("mensaje").innerHTML = n.country[0].country_id;
}
    
traerPais().then(mostrarNombre);
    
    

