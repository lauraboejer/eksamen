const express = require('express'); //express er en del af API'et
const server = express(); //express server
const fs = require('fs'); //kalder fileSaver

const bodyParser = require('body-parser'); //opsamler data fra body (som sendes i en POST-request) og gør dem synlige ved req.body
server.use(bodyParser.urlencoded({extended: false})) //behandler POST-requesten

var storage = fs.readFileSync('storage/storage.json');
var users = JSON.parse(storage);
console.log(users);

var User = require('../model/user.js');
function signUp(req, res) {   
    var user = new User (
    req.body.fullname,
    req.body.password,
    req.body.email,
    req.body.birthday,
    Date.now(),
    //user.selectedGender(),
    //user.selectedInterest()
    );
    console.log(user);
    users.push(user);
      
    var storage = JSON.stringify(users, null, 2);
    fs.writeFileSync('storage/storage.json', storage, "utf8"), (err) => {
        console.log("hej");
        if (err) {
            console.error(err);
            alert("Account creating failed!")

            return; 
        } else {
            console.log("File has been created");
            alert("Account creating succesful!")
        };
    }
    return res.redirect('/login');
}; 

   

   
// const showAllUsers = (req, res) => {
//     console.log("Users in the database: " + users);

//     res.send(users);
// };

// const showUser = (req, res) => {
//     res.send(req.params.id)
// };

// const deleteUser = (req, res) => { 
//     console.log("user with id " + req.params.id + " has been deleted");
    
//     users = users.filter((user) => user.id !== req.params.id);
// };

// const updateUser =  (req, res) => {
//     let user = users.find((user) => user.id === req.params.id);
    
//     user.username = req.body.username;
//     user.age = req.body.age;

    
//     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// };

//exports.showAllUsers = showAllUsers;
module.exports = createUser();
// exports.showUser = showUser;
// exports.deleteUser = deleteUser;
// exports.updateUser = updateUser;