/*
    API webStorage:
        The two mechanisms in the web storage are the next:

            *sessionStorage: maintains a separate storage area for each origin that is available for as long as you are logged in to the page (as long as the browser is open, including reloading and resetting the page).

            *localStorage: it does the same, but keep on even when the browser is closed and it's reopen.
            
            Both of them work with key:value and they have two fundamental methods getItem() to assign a key:value and getItem() that recieve as parameter the key of what we want obtain the value.
*/

const form = document.getElementById('form')
const keys = document.getElementById('keys')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    // const person = {
    //     name: 'Jean Piero',
    //     email: 'jeanp10@hotmail.com'
    // }
    
    //sessionStorage.setItem('name', 'Piero')
    //sessionStorage.setItem('person', JSON.stringify(person))

    sessionStorage.setItem(form.key.value, form.value.value)

    keys.innerHTML += `<option>${form.key.value}</option>`
    
    form.reset()
})
/*
keys.addEventListener('change', () => {
    document.getElementById('infovalue').textContent =
        sessionStorage.getItem(keys[keys.selectedIndex].textContent)
})
*/

keys.addEventListener('change', () => {
    document.getElementById('infovalue').textContent =
        localStorage.getItem(keys[keys.selectedIndex].textContent)
})


// localStorage.clear()
// localStorage.removeItem('email')