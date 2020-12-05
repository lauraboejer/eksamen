//først har jeg kaldet min installerede express-pakke, samt defineret min server og hvilken port den skal køre på.
const express = require('express'); //express er en del af API'et
const server = express(); //express server
const PORT = 8000;
const fs = require('fs');

const bodyParser = require('body-parser'); //opsamler data fra body (som sendes i en POST-request) og gør dem synlige ved req.body
server.use(bodyParser.urlencoded({ extended: false })) //behandler POST-requesten

server.use(express.static('./view')) //gør det muligt at tilgå alle html

var storage = fs.readFileSync('storage/storage.json', "utf8");
var users = JSON.parse(storage);
console.log(users);

//front page
server.get('/', function (req, res) { //henviser brugeren til front page-siden på endpoint /frontpage
  fs.readFile(__dirname + '/client/view/frontpage.html', 'utf8', function (err, text) {
      res.send(text)
      console.log("Front page endpoint reached");
  });
});

//const userController = require('./client/controller/usercontroller.js');

//sign up page
server.get('/signup', function (req, res) { //henviser brugeren til sign up-siden på endpoint /signup
  fs.readFile(__dirname + '/client/view/signup.html', 'utf8', function (err, text) {
      res.send(text)
      console.log("Sign up endpoint reached");
  });
});

var User = require('./client/model/user.js');
server.post('/signup', function signUp(req, res) {
    var user = new User(
    req.body.fullname,
    req.body.password,
    req.body.email,
    req.body.birthday,
    Date.now(),
    req.body.gender,
    req.body.interest,
    function selectedGender() {
        if (req.body.gender == "male") {
            return req.body.gender;
        }
        if (req.body.gender == "female") {
            return req.body.gender;
        }
    },
        function selectedInteret() {
        if (req.body.interest == "male") {
            return req.body.interest;
        } 
        if (req.body.interest == "female") {
            return req.body.interest;
        }
        if (req.body.interest == "both") {
            return req.body.interest;
        }
    })
    console.log(user);
    users.push(user);

    var storage = JSON.stringify(users, null, 2);
    fs.writeFileSync('storage/storage.json', storage, "utf8")
    console.log("Log in endpoint reached");
    return res.redirect('/login');
});

//log in page
server.get('/login', function(req, res) { //henviser brugeren til log in-siden på endpoint /loign
  fs.readFile(__dirname + '/client/view/login.html', 'utf8', function (err, text) {
    res.send(text)
    console.log("Log in endpoint reached");
  })
});

server.post('/login', function logIn(req, res) { //bruger POST, da data ikke sendes i URL
  for(let i = 0; i < users.length; i++) {
  if(users[i].email == req.body.logInEmail && users[i].password == req.body.logInPassword) {
      return res.redirect('/');
  } else {
      return res.send("E-mail or password incorret. Please try again or sign up to create a user.");
  }}
});

server.listen(PORT, function (req, res) { //
  console.log('Server application is running on http://localhost:' + PORT)
});
