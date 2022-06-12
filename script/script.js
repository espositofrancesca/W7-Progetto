
let promise = fetch('../json/users.json').then(response => response.json());
promise.then(json => {
    /* console.log(json); */
    let nodo = document.querySelector('.container')
    json.forEach(element => {
        let div = document.createElement('div');
        div.className = 'card'
        div.innerHTML = `<img class="card-image" src="${element.image}"></img>
                     <h2 class="card-name">${element.firstName}  ${element.lastName} </h2>
                     <p class="card-email">${element.email}</p>`

        let divButton = document.createElement('div')
        divButton.className = 'card-details'
        divButton.innerHTML = ` <p class="details"> Age: ${element.age}</p>
                            <p class="details"> City: ${element.city}</p>
                            <p class="details"> Job: ${element.job}</p>`

        let button = document.createElement('button')
        button.innerText = 'Show More...'
        button.addEventListener('click', function () {
            div.classList.toggle('card-height')
            if (div.className == 'card') {
                button.innerText = 'Show More...'
            } else {
                button.innerText = 'Show Less...'
            }
        })
        nodo.appendChild(div)
        div.appendChild(button)
        div.appendChild(divButton)
    });
});

