// DOM - Crear e Insertar Elementos

/*
Crear un elemento: document.createElement(element)
Escribir texto en un elemento: elelment.textContent = texto
Escribir HTML en el elemento: element.innerHTML = código HTML

Añadir un elemento al DOM: parent.appendChild(element)

Fragmentos de código: document.createDocumentFragment()
*/

/*
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Semana']

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')

// const itemList = document.createElement('LI')
// itemList.textContent = 'Lunes'

// daysList.appendChild(itemList)

title.textContent =  'DOM - Crear e Insertar Elementos I (2° documento con contenido sobre DOM)'   

const fragment = document.createDocumentFragment()
*/

/*
for (const day of days) {
    const itemList = document.createElement('LI')
    itemList.textContent = day
    fragment.appendChild(itemList)
} */

//daysList.appendChild(fragment)

//console.log(fragment);

//console.log(itemList)

//      COMO RELLENAR EL SELECT:
/*
for (const day of days) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', day.toLowerCase())
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

daysSelect.appendChild(fragment)
*/


//      DOM - Recorrer (DOM Traversing)
//  --------------------------------------

/*
Padre - parent (Nodo del que desciende)
    - parentNote - Devuelve el nodo padre (que puede no ser un elemento. El parentNode del elemento html es el document (y document no es un elemento), parentElement del elemento html es null (document.parentElement))
    - parentElement - Devuelve el nodo elemento padre

    NOTA:
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devuelve el primer nodo hijo
    - firstElementChild - Devuelve el primer nodo elemento hijo
    - lastChild - Devuelve el último nodo hijo
    - lastElementChild - Devuelve el último nodo elemento hijo
    - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no lo tiene

Hermanos - sibling (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling
    - previousSibling
    - previousElementSibling

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla con el selector, aún es un método experimental.
*/

// const parent = document.getElementById('parent')

//console.log(parent.parentNode);
//console.log(document.parentElement);

// console.log(parent.childNodes);
// console.log(parent.children);
// console.log(parent.children[2]);
// console.log(parent.firstChild);
// console.log(parent.firstElementChild);
// console.log(parent.lastChild);
// console.log(parent.lastElementChild);
// console.log(parent.hasChildNodes());
// console.log(parent.firstChild.hasChildNodes());


// console.log(parent.nextSibling);
// console.log(parent.nextElementSibling);
// console.log(parent.parentElement.nextElementSibling);
// console.log(parent.parentElement.previousSibling);
// console.log(parent.parentElement.previousElementSibling);


/*
        Insertar y eliminar elementos II
    ----------------------------------------

    parent.insertBefore(newElement, referenceElement) - Insertar un elemento antes del elemento dd referencia

    SOPORTE TOTAL
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentHTML(position, HTML)
    parent.insertAdjacentText(position, text)
NOTA: Estos últimos dos no se utilizan casi.

positions:
    beforebegin - Antes de que empiece (hermano anterior)
    afterbegin - después de que empiece (primer hijo)
    beforeend - antes de que acabe (últimmo hijo)
    afterend - después de que acabe (hermano siguiente)

parent.replaceChild(newChild, oldChild) - Reemplaza un hijo por otro
*/

const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = "I'm a new element"

//list.appendChild(newElement)
//list.insertBefore(newElement, list.children[0])

//list.children[0].insertAdjacentElement('beforebegin', newElement)
//list.insertAdjacentElement('afterbegin', newElement)
//list.insertAdjacentElement('beforeend', newElement)
//list.children[0].insertAdjacentElement('afterend', newElement)
/*
list.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>')
list.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>')
*/

//list.replaceChild(newElement, list.children[1])

/*
    DOM manipulation convenience methods - JQuery Like
    htttp://caniuse.com/#search=jQuery-like

    positions:
        parent.before() - Antes de que empiece (hermano anterior)
        parent.prepend() - después de que empiece (primer hijo)
        parent.append() - antes de que acabe (último hijo)
        parent.after() - después de que acabe (hermano siguiente)

        child.replaceWith(newChild)
*/

//list.children[0].before(newElement)
//list.prepend(newElement)
//list.append(newElement)
//list.children[0].after(newElement)

//list.children[0].replaceWith(newElement)
//document.getElementById('child-to-replace').replaceWith(newElement)

/*
    Clonar y elmiminar elementos
        element.cloneNode(true/false) - Clona el nodo. Si le pasamos "true" clona todo el elemento con los hijos, si le pasamos "false" clona solo el elemento sin hijos.
        element.remove() - Elimina el nodo del DOM
        element.removeChild(child) - Elimina el nodo hijo del DOM
*/

//console.log(list.cloneNode(true));
//list.after(list.cloneNode(true));

//list.remove()
list.removeChild(list.children[1])