var express = require('express');
var server = express();

var bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({extended: false})) //behandler POST-requesten

var fs = require('fs');


   

   
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
exports.createUser = createUser;
// exports.showUser = showUser;
// exports.deleteUser = deleteUser;
// exports.updateUser = updateUser;