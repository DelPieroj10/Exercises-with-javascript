//  BOM (Browser Object Model) Y DOM (Document Object Model):
//  -----------------------------------------------------------


/*
window.name = "CLASE DE BOM Y DOM";

var dato = "El nombre es: " + window.name + "<br>";
var ancho = "El ancho es: " + window.outerWidth + "<br>";
var alto = "El alto es: " + window.outerHeight +"<br>";
var anchoInterno = "El ancho interno es: " + window.innerWidth +"<br>";
var altoInterno = "El alto interno es: " + window.innerHeight +"<br>";
var scrollHorizontal = "El Scroll Horizontal es: " + window.pageXOffset +"<br>";
var scrollVertical = "El Scroll Vertical es: " + window.pageYOffset +"<br>";
var distanciaIzquierda = "La distancia desde la Izquierda es: " + window.screenX +"<br>";
var distanciaTop = "La distancia Arriba es: " + window.screenY +"<br>";


document.write(dato, ancho, alto, anchoInterno, altoInterno, scrollHorizontal, scrollVertical, distanciaIzquierda, distanciaTop);
*/


// window.alert ("How you doing");

// --------------------------------------------------------------------------------------------------------

//  METÓDOS DE WINDOWS EN EL BOM:
// -------------------------------
/*
function visitar(){
    ventana = window.open("ayuda.html", "_blanck", "width=500", "height=300");
};

 function cerrar(){
    ventana.close();
};

function dimensionar(){
    ventana.resizeBy(100, 100);
};

function dimensionarTo(){
    ventana.resizeTo(500, 500);
};

function moving(){
    ventana.moveBy(500, 500);
};

function movingTo(){
    ventana.moveTo(500, 100);
};

function enfocar(){ // Para este boton no importa cuentas ventanas tengas abierta, si el boton esta activo traera la ventana poseedora a primer lugar.
    ventana.focus();
};

function imprimir(){
    ventana.print();
};
*/

//  iframe:
/*
window.name = "CLASE SOBRE BOM";

alert(window.length);
alert(window.name);
alert(window.self);
alert(window.parent);
alert(window.outerWidth); //...

// NOTA: Aparentemente este objeto (iframe) esta descontinuado.
*/

/*
//  history:

var historial = window.history;
console.log(historial);

//  location:

var localizacion = window.location;
document.write(localizacion);

//  navigator:

var navegador = window.navigator.vendor;
document.write(navegador);

var navegador = window.navigator;
console.log(navegador);

//  screen:

var pantalla = window.screen;
console.log(pantalla);
*/

//   METÓDOS DE DOCUMENTO EN EL DOM:
// -----------------------------------

//  querySelector:

/*
var a = document.querySelector(".primero");
//var a = document.querySelector("#dos");
var a = document.querySelector("#todito");

a.style.color = "green";

var a = document.querySelector(".ultima h1");
a.style.color = "orange";

var a = document.querySelector("a[class='vinculo']");
a.style.color = "gray";

var a = document.querySelectorAll("p")[0];
a.style.color = "magenta";
*/

//  getElements / getElementById:

/*
var b = document.getElementById("uno");
b.style.color = "red";
*/

/*
var b = document.getElementsByClassName("primero")[2];
b.style.color = "red";
*/

/*
var b = document.getElementsByClassName("primero")[0];
b.style.color = "gray";
b.style.border = "1px solid orange";
b.style.fontFamily = "Helvetica";
b.style.padding = "7px 30px";

b.className = b.className.replace("primero", "principal")


var b = document.getElementsByTagName("p")[1];
b.style.color = "purple";
b.innerHTML = ["You're such an inspiration for the ways <br> That I'll never ever choose to be <br> Oh so many ways for me to show you <br> How your savior has abandoned you <br> Fuck your God <br> Your Lord and your Christ <br> He did this <br> Took all you had and <br> Left you this way <br> Still you pray, you never stray <br> Never taste of the fruit <br> You never thought to question why <br> It's not like you killed someone <br> It's not like you drove a hateful spear into his side <br>  Praise the one who left you <br> Broken down and paralyzed <br> He did it all for you <br> He did it all for you <br> Oh so many many ways for me to show you <br> How your dogma has abandoned you <br> Pray to your Christ, to your god <br> Never taste of the fruit <br> Never stray, never break <br> Never choke on a lie <br> Even though he's the one who did this to you <br> You never thought to question why <br> Not like you killed someone <br> It's not like you drove a spiteful spear into his side  Talk to Jesus Christ <br> As if he knows the reasons why <br> He did it all for you <br> Did it all for you <br> He did it all for you <br>"] ;
b.innerHTML += "<p> Compositores: Billy Howerdel / Maynard Keenan <br> Letra de Judith © BMG Rights Management, Universal Music Publishing Group</p>"; 

var b = document.getElementsByTagName("h1")[2];
b.style.color = "royalblue";
b.innerHTML = "Judith";
b.innerHTML += " by Perfect Circle";
*/


var a = document.getElementById("todito");

function fondo(color){
    if(color == "rojo"){
        a.style.backgroundColor = "crimson";
        a.style.color = "orange";
    }else if (color == "verde"){
        a.style.backgroundColor = "green";
        a.style.color = "white";
    }else if (color == "azul"){
        a.style.backgroundColor = "royalblue";
        a.style.color = "orange";
    }else{}
}

