/*
Esta API sirve, sobre todo, para saber cuando un elemento esta oculto y cuando se ve
*/
/*
const boxes = document.querySelectorAll('.box ')

const callback = (entries) => {
    // console.log(entries) // Para probar las cajas en la consola **
    entries.forEach(entry => {
    if (entry.isIntersecting) {
            console.log(entry.target.id, 'is intersecting')
        }
    })
}

const options = {
    //root:
    //rootMargin: '200px'
    threshold: 0.25  
}

//const observer = new IntersectionObserver(callback) // **
const observer = new IntersectionObserver(callback, options)
boxes.forEach(element => observer.observe(element))
*/


/*      Intersection Observer II- Lazy load
    ------------------------------------------- */

const images = document.getElementById('images')
const getImages = () => {
    axios('https://picsum.photos/v2/list?page=3&limit=5').then(res => {
        const fragment = document.createDocumentFragment()
        res.data.forEach(element => {
            const newImage = document.createElement('IMG')
            newImage.src = element.download_url
            fragment.appendChild(newImage)
        })
        images.appendChild(fragment)
        setObserver()
    })
}

const callback = (entries) => {
        entries.forEach(entry => {
        // console.log(entry) // -> Para probar la interacción de la interseccion en consola.
            if (entry.isIntersecting) {
            getImages()
        } // -> Esto se hara solo en el caso de que se este intersectando.
    })
}    


const setObserver = () => {
    const options = {
        threshold: 0.5
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(images.lastElementChild)
}

getImages()