
document.addEventListener('DOMContentLoaded', () => {
    user();
    addNewUser();
    let newUser = document.querySelector('#add')
    newUser.addEventListener('click', addUser);
})

const urlApi = 'http://localhost:3000/api/users/'

/* --- CREO CARD PER OGNI OGGETTO ARRAY --- */
function createCard(users) {
    let nodo = document.querySelector('.container')
    nodo.innerHTML = '';
    users.forEach(element => {

        let div = document.createElement('div');
        div.className = 'card'

        let divImg = document.createElement('img');
        divImg.src = './images/user-circle.png'


        let divTitle = document.createElement('h5');
        divTitle.className = 'card-name'
        divTitle.innerText = element.name + ' ' + element.lastname;

        let divNumber = document.createElement('p');
        divNumber.innerText = 'Number: ' + element.phone

        let divEmail = document.createElement('p');
        divEmail.innerText = 'Email: ' + element.email

        let divButton = document.createElement('div')
        divButton.className = 'div-button'
        divButton.innerHTML = ` <button onclick="deleteCard(${element.id})"><i class="bi bi-trash3"></i></button>`

        nodo.appendChild(div)
        div.appendChild(divImg)
        div.appendChild(divTitle)
        div.appendChild(divNumber)
        div.appendChild(divEmail)
        div.appendChild(divButton)
    });
}

function user() {
    fetch(urlApi).then(response => response.json()).then(json => {
        createCard(json)
    })
}

/* --- DELETE --- */
function deleteCard(id) {
    fetch(urlApi + id, { method: 'DELETE' }).then(response => response.json()).then(json => {
        user()
    })
}
/* --- ADD --- */
function addUser() {
    let modal = document.querySelector('#modal')
    modal.classList.remove("active")

    let name = document.querySelector('.content input[name="name"]');
    let lastname = document.querySelector('.content input[name="lastname"]');
    let number = document.querySelector('.content input[name="number"]');
    let email = document.querySelector('.content input[name="email"]');

    let newObj = {
        name: name.value,
        lastname: lastname.value,
        phone: number.value,
        email: email.value
    }
    fetch(urlApi, {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json()).then(json => {
        user()
    })
}


/* --- AGGIUNGO CLASSE ACTIVE CHE APRE MODALE PER AGGIUNGERE NUOVO UTENTE */
function addNewUser() {
    let modal = document.querySelector('#modal')
    let addUser = document.querySelector('#add-user')
    addUser.addEventListener('click', function () {
        modal.classList.add("active")
    })
}





