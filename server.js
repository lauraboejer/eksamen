const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = 8000;

const userRoutes = require('./routes/userRoutes.js');
const matchRoutes = require('./routes/matchRoutes.js');

server.use(bodyParser.json()); 

server.use('/user', userRoutes);

server.use('/match', matchRoutes);

server.use("/view", express.static('./view/'));

//connecter endpoints og html
server.get('/', (req, res) => {
    res.sendFile('./view/homepage.html', {root: __dirname});
});

server.get('/signup', (req, res) => {
    res.sendFile('./view/signup.html', {root: __dirname});
});

server.get('/login', (req, res) => {
     res.sendFile('./view/login.html', {root: __dirname});
});

server.get('/profile', (req, res) => {
    res.sendFile('./view/profile.html', {root: __dirname});
});

server.get('/editProfile', (req, res) => {
    res.sendFile('./view/editProfile.html', {root: __dirname});
});

server.get('/deleteProfile', (req, res) => {
    res.sendFile('./view/deleteProfile.html', {root: __dirname});
});

server.get('/potentialMatches', (req, res) => {
    res.sendFile('./view/potentialMatches.html', {root: __dirname});
});

//tester serveren
server.listen(PORT, (req, res) => {
    console.log('Server application is running on http://localhost:' + PORT);
});

