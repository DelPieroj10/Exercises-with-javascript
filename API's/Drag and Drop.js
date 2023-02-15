/*
    API Drag $ Drop:

    Existen dos partes principales en esta API, el objeto a arrastrar y la zona donde vamos a dejarlo.
    
    Para controlar estas acciones tenemos varios eventos de cada una de las partes.
        Objeto a arrastrar:
        dragstart: Se dispara al comenzar a arrastrar
        drag: Se dispara mientras arrastramos
        dragend: Se dispara cuando solatamos el objeto.

        Zona de destino:
            dragenter: Se dispara cuando el objeto entra en la zona de destino.
            dragover: Se dispara cuando el objeto se mueve sobre la zona de destino.
            drop: Se dispara cuando soltamos el objeto en la zona de destino.
            dragleave: Se dispara cuando el objeto sale de la zona de destino
*/


//const idea = document.getElementById('idea')
//const dropZone = document.getElementById('drop-zone')
/*
idea.addEventListener('dragstart', () => {
    console.log('Drag Start')
})
*/
/*
idea.addEventListener('drag', () => {
    console.log('Drag')
})
*/
/*
idea.addEventListener('dragend', () => {
    console.log('Drag End')
})
*/
/*
dropZone.addEventListener('dragenter', ()=> {
    console.log('Drag Enter')
})
*/
/*
dropZone.addEventListener('dragover', ()=> {
    console.log('Drag Over')
})
*/
/*
dropZone.addEventListener('dragleave', ()=> {
    console.log('Drag Leave')
})
*/

/*
//  Estos dos elementos siguientes deben ir juntos sino no funciona el "drop"

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault()
    console.log('Drag Over')
})
dropZone.addEventListener('drop', () => {
    console.log('Drop')
})
*/

/* API Drag & Drop II*/

const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

/*
pendingTasks.addEventListener('dragstart', (e) => {
    //console.log(e.target)
    //console.log(e.dataTransfer)

//    e.dataTransfer.setData('text/plain', e.target.id)
//    console.log(e.dataTransfer.getData('text'));
})
*/
//  Nota: "dataTransfer" no es necesario en chrome pero si firefox, sus metodos son:
                //setData: Establece la información que queremos compartir
                //getData: Establece la información que queremos obtener


pendingTasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id)
})

pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

pendingTasks.addEventListener('dragover', (e)=>{
    e.preventDefault()
})
            
pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const elementReceived = document.getElementById(e.dataTransfer.getData('text'))
                
    for (const element of pendingTasks.children) {
        if( element == elementReceived ){
            e.target.before(elementReceived)
        }
    }

    for (const element of finishedTasks.children) {
        if( element == elementReceived ){
            pendingTasks.appendChild(finishedTasks.removeChild(elementReceived))
            elementReceived.classList.remove('active')
        }
    }
})

finishedTasks.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData('text/plain', e.target.id)
})
finishedTasks.addEventListener('drag', (e)=>{
    e.target.classList.add('active')
})
finishedTasks.addEventListener('dragend', (e)=>{
    e.target.classList.remove('active')
})       

finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

//finishedTasks.addEventListener('drop', (e) => {
  //  e.preventDefault()
    //const element = document.getElementById(e.dataTransfer.getData('text'))
    //element.classList.remove('active')
    //finishedTasks.appendChild(pendingTasks.removeChild(element))
//})

finishedTasks.addEventListener('drop', (e)=>{
    e.preventDefault()
    const elementReceived = document.getElementById(e.dataTransfer.getData('text'))
                
    for (const element of finishedTasks.children) {
        if( element == elementReceived ){
            e.target.before(elementReceived)
        }
    }

    for (const iterator of pendingTasks.children) {
        if( iterator == elementReceived ){
            finishedTasks.appendChild(pendingTasks.removeChild(elementReceived))
                        elementReceived.classList.remove('active')
        }
    }

})