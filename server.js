//først har jeg kaldet min installerede express-pakke, samt defineret min server og hvilken port den skal køre på.
const express = require('express'); //express er en del af API'et
const server = express(); //express server
const PORT = 8000;
const fs = require('fs');

const bodyParser = require('body-parser'); //opsamler data fra body (som sendes i en POST-request) og gør dem synlige ved req.body
server.use(bodyParser.urlencoded({extended: false})) //behandler POST-requesten

server.use(express.static('./view')) //gør det muligt at tilgå alle html

var storage = fs.readFileSync('storage/storage.json');
var users = JSON.parse(storage);
console.log(users);

var User = require('./client/model/user');
server.post('/signup', function createUser(req, res) {   
    var user = new User (
    req.body.fullname,
    req.body.password,
    req.body.email,
    req.body.birthday,
    Date.now(),
    req.body.gender,
    req.body.gender,    
    );
    
    users.push(user);
  
    var storage = JSON.stringify(users, null, 2);
    fs.writeFileSync('storage/storage.json', storage, "utf8", (err) => {
        if (err) {
            console.error(err);
            alert("Account creating failed!")
            return; 
        } else {
            console.log("File has been created");
            alert("Account creating succesful!")
        };
    });
    
});

server.get('/', function(req, res) { //henviser brugeren til front page-siden på endpoint /frontpage
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
