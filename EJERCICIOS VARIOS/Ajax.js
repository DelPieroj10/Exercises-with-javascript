//      AJAX I - Objeto XMLHttpRequest I:
//     ------------------------------------

/* Protocolo HTTP:
    https://es.wikipedia.org/wiki/Protocolo_de_trasferencia_de_hipertexto

    Código de estado de respuesta de HTTP:
    https://developer.mozilla.org/es/docs/web/HTTP/Status
*/

// API for developers - JSONPlaceholder : Es una API a la cual podemos hacer peticiones normales o peticiones ajax como si se estuviera llamando a un servidor 


const button = document.getElementById('button')

button.addEventListener('click', () => {
    let xhr 
    if (window.XMLHttpRequest()) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

//Método "open" para peticiones html mediante ajax
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

    xhr.addEventListener('load', (data) => {
    // console.log(data)
        const dataJSON = JSON.parse(data.target.response)
    
        const list = document.getElementById('list')
        for (const userInfo of dataJSON) {
            const listItem = document.createElement('LI')
            listItem.textContent = '${userInfo.id} - ${userInfo.name}'
            list.appendChild(listItem)
        }
        
    })

    xhr.send()
//Observación: Por algún motivo (que desconozco hasta el momento) esta construcción arroja error

})