const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    
    res.send('Hello World !!! with Nodemon');
});


const users = [
    {id : 0, name : 'Sagor', email : 'sagor@gmail.com', phone : '01711111111'},
    {id : 1, name : 'Nasir', email : 'nasir@gmail.com', phone : '01722222222'},
    {id : 2, name : 'Mehedi', email : 'mehedi@gmail.com', phone : '01733333333'},
    {id : 3, name : 'Razib', email : 'razib@gmail.com', phone : '01744444444'}
]

// Use quary parameter
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// Use dynamic API

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);    
})





app.listen(port, () => {
    console.log('listening from port', port);
})