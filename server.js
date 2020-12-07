const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 5000;

const userRoutes = require('./routes/usersRoutes.js');

server.use(bodyParser.json()); 

server.use('/users', userRoutes);

server.get('/', (req, res) => {
    console.log('Test!');

    res.send('Hello from homepage!');
}); //homepage


server.listen(PORT, (req, res) => {
    console.log('Server application is running on http://localhost:' + PORT);
});

