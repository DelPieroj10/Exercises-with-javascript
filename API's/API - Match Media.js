/*
    https://developer.mozilla.org/es/docs/Web/API/Window/matchMedia
    mql = window.matchMedia(mediaQueryString)
    mql viene de media query list, que es el objeto que se crea con el método matchMedia()
    mediaQueryString es cualquier media query válida en CSS
*/

//  innerWidth no se recomienda utilizar para responsive

const title = document.getElementById('title')

//const mql = matchMedia('(min-width: 400px)')
    // Con esta linea de codigo siguiente puedes saber en que posición esta el dispositivo 
const mql = matchMedia('(min-width: 400px) and (orientation: landscape)')

//console.log(mql)
const applyMatchMedia = mql => {
    mql.matches ?
        //NO HACER ESTO NUNCA SALVO EN CASOS MUY CONCRETOS
        document.body.style.backgroundColor = 'orange'

        //ESTO SI
        // title.classList.add('clase que sea')
        :
        // title.classList.remove('clase que sea')

        //NO HACER ESTO NUNCA SALVO EN CASOS MUY CONCRETOS
        document.body.style.backgroundColor = 'royalblue'
}

addEventListener('resize', () => applyMatchMedia(mql))
addEventListener('DOMContentLoaded', () => applyMatchMedia(mql))







/*  Nota: Esto no sistituye a las media querys de css. Sirve para cuando tienes que utilizar media querys para lógica en javascript. Las MQ siguen siendo de css y todo lo que puedas hacer con css se recomienda pripordialmente hacerlo allí.

Cuando si usarlo. 
En el caso de que después de cierta MQ necesites quitar o agregar clases a un elemento.
Ej: title.classList.add('clase que sea')
*/ 