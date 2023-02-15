/* 
    https://developer.mozilla.org/es/docs/Web/API/NavigatorGeolocation/geolocation
*/

const button = document.getElementById('button')

button.addEventListener('click', () => {
    const geolocation = navigator.geolocation

    geolocation.getCurrentPosition(getPosition, error, options)
})

const options = {
    enablehightAccuracy: true,
    timeout: 5000,
    maximunAge: 0
}

const getPosition = (position) => {
    console.log(position)
}

const error = (error) => console.log(error)

// Nota: Estas lineas de codigo construidas para Geolocalización sirven para ordenador de mesa, para el caso de geolocalizar moviles toca revizar la documentación a través de la dirección que se encuentra al inicio de esta pagina. 