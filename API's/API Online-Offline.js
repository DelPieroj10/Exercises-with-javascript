const alert = document.getElementById('alert')

addEventListener('online', (e) => {
    //console.log(e) // >> Para verificar que el evento este funcionando, además que nos arroja información que tal vez en alguna situación podriamos necesitar. 
    setAlert(1)
}) 

addEventListener('offline', (e) => {
    //console.log(e)
    setAlert(0)
})

const setAlert = (status) => {
    //console.log(status) // >> Nos ayudara a verificar si el evento se esta ejecutando correctamente.
    alert.classList.remove('alert--online')
    alert.classList.remove('alert--offline')

    status === 0 ?
        setTimeout(() => {
            alert.textContent = "Ups, it seems you're offline"
            alert.classList.add('alert--offline')
        }, 200) :
        setTimeout(() => {
            alert.textContent = "Great, You're online again!"
            alert.classList.add('alert--online')
        }, 200)
}