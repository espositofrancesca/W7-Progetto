const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());

let count = 5;

let users = [
    {id: 1 , name: 'Carlo', lastname:'Conti', email: 'cconti@gmail.com', phone:'1-570-236-7033' , gender: 'male' },
    {id: 2 , name: 'Beppe', lastname:'Vessicchio', email: 'bvessicchiono@gmail.com', phone:'1-570-236-7033', gender: 'male'},
    {id: 3 , name: 'Demon', lastname:'Salvatore',email: 'dsalvatore@gmail.com', phone:'1-570-236-7033', gender: 'male'},
    {id: 4 , name: 'Nina', lastname:'Dobrev', email: 'ndobrev@gmail.com', phone:'1-570-236-7033', gender: 'female'}
];

/* GET */
app.get('/api/users', (request, response) => {
    response.json(users);
})
/* POST */
app.post('/api/users', (request, response) =>{
    const obj = request.body;
    obj.id = count++
    users.push(obj);
})
/* PUT */
app.put('/api/users/:id', (request, response) => {
const id = request.params.id;
const obj_mod = request.body;

let obj = users.find(ele => ele.id === +id);
obj = obj_mod;

response.json('Utente Modificato nel DB');
})
/* DELETE */
app.delete('/api/users/:id', (request, response) => {
    const id = request.params.id;
    users = users.filter(ele => ele.id !== +id);


    response.json('Utente Eliminato dal DB');
})


app.listen(3000, () => console.log('server attivo'));