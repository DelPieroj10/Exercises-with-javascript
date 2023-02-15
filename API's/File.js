/*
    API File:
    Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTranfer de la API Drag&Drop.

    La interfaz más utilizada para interactuar con ella es FileReader
    https://developer.mozilla.org/es/docs/Web/API/FileReader
*/

// const fileInput = document.getElementById('file')
// const img = document.getElementById('img')
// const texto = document.getElementById('text')
// const images = document.getElementById('img')

// fileInput.addEventListener('change', (e) => {
//     // console.log(e.target.files); // -> Para probar la carga del archivo y su target

//     const file = e.target.files[0]
//     const fileReader = new FileReader()
//     fileReader.readAsText(file)
//     fileReader.addEventListener('load', (e) => {
        //console.log(e.target.result);  // -> Para ver el contenido del archivo en consola (hasta los momentos solo archivo de tipo txt)

//        text.textContent = e.target.result  // -> Con este codigo logras cargar el el "p" el contenido del archivo y que se imprima en pantalla
//     })
// })


// Para cargar imagenes:
// 1) Carga simple de imagen:
/*
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.addEventListener('load', (e) => {
        img.setAttribute('src', e.target.result) 
    })
})
*/

// 2) Carga multiple de imagenes:
/*
fileInput.addEventListener('change', (e) => {
    const files = e.target.files
    const fragment = document.createDocumentFragment()
    for (const file of files) {
        const fileReader = new FileReader()
        const img = document.createElement('IMG')
        fileReader.readAsDataURL(file)
        fileReader.addEventListener('load', (e) => {
            img.setAttribute('src', e.target.result) 
        })
        fragment.appendChild(img)
    }
    images.appendChild(fragment)
})
*/

/*  API File II 
    ----------- */

const fileInput = document.getElementById('file')
const progress = document.getElementById('progress')

/*
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        // console.log(e.loaded);   // Para prueba
        // console.log(e.total);    // Para prueba
        // console.log(e.loaded * 100 / e.total);   // Para prueba

        progress.style.width = Number.parseInt(e.loaded * 100 / e.total) + '%'
    })

    fileReader.addEventListener('Loadend', () => {
        // console.log('100%');    // Para prueba

        progress.style.width = '100%'
    })
})
*/

const root = document.documentElement

// La construcción de esta función nos permite interactuar directamamente con el css.

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.addEventListener('progress', (e) => {
        root.style.setProperty('--bar-width', Number.parseInt(e.loaded * 100 / e.total) + '%' )
    })

    fileReader.addEventListener('Loadend', () => {
        root.style.setProperty('--bar-width', '100%' )
    })
})