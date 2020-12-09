const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = 8000;
const path = require('path'); //gør så jeg kan serve statiske filer fra en anden overmappe


const userRoutes = require('./routes/userRoutes.js');
const matchRoutes = require('./routes/matchRoutes.js');

server.use(bodyParser.json()); 

server.use("/frontend", express.static('../Frontend'));

server.use('/user', userRoutes);

server.use('/match', matchRoutes);

//connecter endpoints og html
server.get('/', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/homepage.html'));
});

server.get('/signup', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/signup.html'));
});

server.get('/login', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/login.html'));
});

server.get('/profile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/profile.html'));
});

server.get('/editProfile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/editProfile.html'));
});

server.get('/deleteProfile', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/deleteProfile.html'));
});

server.get('/potentialMatches', (req, res) => {
    res.sendFile(path.resolve('/Users/lauraboejer/Desktop/Dokumenter/HA(it.)/1. semester/PROG./Programmering/Eksamen/Frontend/view/html/potentialMatches.html'));
});

//tester serveren
server.listen(PORT, (req, res) => {
    console.log('Server application is running on http://localhost:' + PORT);
});

