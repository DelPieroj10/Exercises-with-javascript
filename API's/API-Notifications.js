/* 
https://developer.mozilla.org/es/docs/Web/API/notification 
icono:
https://www.flaticon.es/icono-gratis/en-todo-el-mundo_814513?term=world&page=1&position=18
*/

const permissions = document.getElementById('permissions')

permissions.addEventListener('click', () => {
   // Notification.requestPermission() // Probando que la notificación funcione
    
    if (Notification.permission !== 'granted') {
        getPermissions()
    } else {
        notify()
    }
})

const getPermissions = () => {
    Notification.requestPermission()
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

const notify = () => {
    const options = {
        body: 'Lorem ipsum dolor sit amet. Hic Quis consequatur est rerum esse ex dolore.',
        icon: 'Bubble dialogue.png',
        data: "Let's get cracking baby",
        tag: 'notification demo'
    }
    const notification = new Notification('Hello everyone', options)

    notification.addEventListener('show', () => console.log('SHOW'))
    notification.addEventListener('close', () => console.log('CLOSE'))

    console.log(notification.data)
    console.log(notification)
}