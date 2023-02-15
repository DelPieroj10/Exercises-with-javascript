//      API IndexedDB I - Introducción y creación.

        /*  IndexedDB.
        ----------------*/

/*  Es una manera de almacenar datos de forma persistente en el navegador.
Alacena pares llave-valor. Los valores pueden ser objetos con estructuras complejas, y las llaves pueden ser propiedades de esos objetos.
Las llaves de IndexedDB es mayormente asíncrona.
IndexedDB usa eventos DOM para notificar cuando los resultados están disponibles.
IndexedDB es orientada a objetos.

            IndexedDB Creación
        ---------------------------

° Crear la base de datos a través del objeto IndexedDB y el método open()
° Comprobar si la base de datos existe o tiene que ser creada a través del método   onupgradeneeded()
° Crear almacén de objetos con el método createObjectStore()
° Escuchar los eventos de éxito y de error con los métodos onsucces() y onerror()
*/
/*
const indexedDB = window.indexedDB

if (indexedDB) {
    let db
    const request = indexedDB.open('taskslist', 1)
    
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = () => {
        db = request.result
        console.log('Create', db)
        const ObjectStore = db.createObjectStore('tasks')
        const ObjectStore2 = db.createObjectStore('tasks2')
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }
}
*/

//  NOTA: Esta API funciona mejor en chrome.


/*      API IndexedDB II - Añadir datos a nuestra bas de datos.
        ------------------------------------------------------- */

/*
const indexedDB = window.indexedDB
const form = document.getElementById('form')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('taskslist', 1)
    
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result 
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            //autoIncrement: true // Con este método podremos hacer que en el almacenamiento se cree una "key" de forma automática a la base de datos.
            
            keyPath: 'taskTitle'  // Con este método puedes indicar la ruta de la "key", que propiedad de nuestro objeto va a ser la clave unica e indicarle un valor unico a la base de datos. 
        })
    }

    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        //console.log(data)
        addData(data)
    })
}   
*/

/*      API IndexedDB III - Leer datos.
    -------------------------------------------- */
const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')

if (indexedDB && form) {
    let db
    const request = indexedDB.open('taskslist', 1)
    
    request.onsuccess = () => {
        db = request.result
        console.log('OPEN', db)
        readData()  // Se llama a la función de leer para que lea las tareas creadas en primera instancia.
    }

    request.onupgradeneeded = (e) => {
        db = e.target.result
        console.log('Create', db)
        const objectStore = db.createObjectStore('tasks', {
            autoIncrement: true
        })
    }
    request.onerror = (error) => {
        console.log('Error', error)
    }

    const addData = (data) => {
        const transaction = db.transaction(['tasks'], 'readwrite')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.add(data)
        readData()  // Se llama de nuevo a la función para que se pueda leer las nuevas tareas agregadas.
    }

    const readData = () => {
        const transaction = db.transaction(['tasks'], 'readonly')
        const objectStore = transaction.objectStore('tasks')
        const request = objectStore.openCursor() // openCursor: este es el método que nos abre el cursor y nos permite leer la información.
        const fragment = document.createDocumentFragment()

        request.onsuccess = (e) => {
            //console.log(e.target)  //   En este caso "target" será el cursor 
            const cursor = e.target.result
            if (cursor) {
                // console.log(cursor.value)
                const taskTitle = document.createElement('P')
                taskTitle.textContent = cursor.value.taskTitle
                fragment.appendChild(taskTitle)
                const taskPriority = document.createElement('P')
                taskPriority.textContent = cursor.value.taskPriority
                fragment.appendChild(taskPriority)
                cursor.continue()
            } else {
                //console.log('No more data')
                //console.dir(fragment) // Para mostrar el fragmento en consola
                tasks.textContent = ''  // Con este fragmento de código podremos agregar una nueva tarea y que aparezca en pantalla como si fueran en tiempo real sin que se nos duplique todas las tareas anteriores. Sin embargo, lo que realmente esta sucediendo es que esta borrando toda la data y cargandola de nuevo.
                tasks.appendChild(fragment)
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const data = {
            taskTitle: e.target.task.value,
            taskPriority: e.target.priority.value
        }
        addData(data)
    })
}