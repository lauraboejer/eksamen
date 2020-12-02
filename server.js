//først har jeg kaldet min installerede express-pakke, samt defineret min server og hvilken port den skal køre på.
const express = require('express'); //express er en del af API'et
const server = express(); //express server
const PORT = 8000;
const fs = require('fs');

//const controllers = require('../client/controller/usercontroller.js')

//server.post('/signup', controllers.createUser);

server.get('/frontpage', function(req, res) { //henviser brugeren til front page-siden på endpoint /frontpage
  fs.readFile(__dirname + '/client/view/frontpage.html', 'utf8', function(err, text){
    res.send(text)
    console.log("Front page endpoint reached");
  })
});

server.get('/signup', function(req, res) { //henviser brugeren til sign up-siden på endpoint /signup
  fs.readFile(__dirname + '/client/view/signup.html', 'utf8', function(err, text){
    res.send(text)
    console.log("Sign up endpoint reached");
  })
});

server.get('/login', function(req, res) { //henviser brugeren til log in-siden på endpoint /loign
  fs.readFile(__dirname + '/client/view/login.html', 'utf8', function(err, text){
    res.send(text)
    console.log("Log in endpoint reached");
  })
});

server.listen(PORT, function(req, res){ //
  console.log('Server application is running on http://localhost:' + PORT)
});
