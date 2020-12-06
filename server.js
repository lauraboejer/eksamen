//først har jeg kaldet min installerede express-pakke, samt defineret min server og hvilken port den skal køre på.
const express = require('express'); //express er en del af API'et
const server = express(); //express server
const PORT = 8000;
const fs = require('fs');

const bodyParser = require('body-parser'); //opsamler data fra body (som sendes i en POST-request) og gør dem synlige ved req.body
server.use(bodyParser.urlencoded({ extended: false })) //behandler POST-requesten

server.use(express.static('/client/view')) //gør det muligt at tilgå alle html
server.use(express.static('/storage/storage.json'))

let storage = fs.readFileSync('storage/storage.json', "utf8");
let users = JSON.parse(storage);
console.log(users);

//front page
server.get('/', function (req, res) { //henviser brugeren til front page-siden på endpoint /frontpage
  fs.readFile(__dirname + '/client/view/frontpage.html', 'utf8', function (err, text) {
      res.send(text)
      console.log("Front page endpoint reached");
  });
});

//sign up page
server.get('/signup', function (req, res) { //henviser brugeren til sign up-siden på endpoint /signup
  fs.readFile(__dirname + '/client/view/signup.html', 'utf8', function (err, text) {
      res.send(text)
      console.log("Sign up endpoint reached");
  });
});

let User = require('./client/model/user.js');
server.post('/signup', function signUp(req, res) {
    let user = new User(
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
			return res.redirect(`users/${users[i].userID}`); //redirecter til brugerens profil
  		} else {
      		return res.send("E-mail or password incorret. Please try again or sign up to create a user.");
  	}};
});

//show all users page
server.get('/users', function showUsers(req, res) {
	res.send(users);
});

//show specific user page
server.get('/users/:userID', function showSpecificUser(req, res) {
	let userID = req.params.userID;
	let specificUser = users.find((user) => user.userID == userID);
	res.send(specificUser);
});

//profile page
server.get('/users/:userID', function(req, res) { //henviser brugeren til log in-siden på endpoint /loign
	fs.readFile(__dirname + '/client/view/profile.html', 'utf8', function (err, text) {
	  res.send(text)
	  console.log("Profile endpoint reached");
	})
  }); 

//update specific user page
server.patch('/users/:userID', function updateSpecificUser(req, res) {
	let userID = req.params.userID;
	let specificUser = users.find((user) => user.userID == userID);
	let { fullname, password, email, birthday, gender, interest } = req.body;
	if(fullname) {
		user.fullname = fullname;
	}
	if(password) {
		user.password = password;
	}
	if(email) {
		user.email = email;
	}
	if(birthday) {
		user.birthday = birthday;
	}
	if(fullname) {
		user.gender = gender;
	}
	if(fullname) {
		user.interest = interest;
	}

	res.send('Update completed!')
}); //put overwriter og ændrer "det hele", hvorfor jeg bruger patch, som ændre dele af elementet

//delete specific user page
server.delete('/users/:userID', function deleteSpecificUser(req, res) {
	let userID = req.params.userID;
	users = users.filter((user) => user.userID !== userID); //sammenligner userID med id i URL'en og filtrer de brugere fra, hvis ID ikke stemmer overens, og sletter derved kun den specifikke bruger.
	res.send('Following user has been deleted from the database: ' + userID)
});

server.listen(PORT, function (req, res) {
  console.log('Server application is running on http://localhost:' + PORT)
});
