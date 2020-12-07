const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const PORT = 8000;

const userRoutes = require('./routes/usersRoutes.js');
const { Server } = require('net');

server.use(bodyParser.json()); 

server.use('/users', userRoutes);

server.use("/staticFiles", express.static('./staticFiles/'));

server.get('/', (req, res) => {
    res.sendFile('./view/homepage.html', {root: __dirname});
});

server.get('/signup', (req, res) => {
    res.sendFile('./view/signup.html', {root: __dirname});
});

server.get('/login', (req, res) => {
    res.sendFile('./view/login.html', {root: __dirname});
});


server.listen(PORT, (req, res) => {
    console.log('Server application is running on http://localhost:' + PORT);
});

