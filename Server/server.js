const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = 8000;
const path = require('path'); //gør så jeg kan serve statiske filer fra en anden overmappe

const userRoutes = require('./routes/userRoutes.js');
const matchRoutes = require('./routes/matchRoutes.js');

server.use(bodyParser.json()); 

server.use(express.static(path.join(__dirname, '../Client/view/')));
server.use(express.static(path.join(__dirname, '../Client/view/js/')));

server.use('/user', userRoutes);

server.use('/match', matchRoutes);

//connecter endpoints og html-sider
server.get('/', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/homepage.html'));
});

server.get('/signup', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/signup.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/login.html'));
});

server.get('/profile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/profile.html'));
});

server.get('/editProfile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/editProfile.html'));
});

server.get('/deleteProfile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/deleteProfile.html'));
});

server.get('/potentialMatches', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Client/view/html/potentialMatches.html'));
});

//tester serveren
server.listen(PORT, (req, res) => {
    console.log('Server application is running on http://localhost:' + PORT);
});

