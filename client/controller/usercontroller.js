var fs = require('fs');
fs.readFile('storage.json', 'utf8', (err, storage) => {
    if (err) {
        console.log("Error reading file from disk:", err)
        return;
    } try { 
        const users = JSON.parse(storage); //laver JSON-string om til objekter, så jeg kan pushe et nyt objekt i.
    } catch(err) {
        console.log('Error parsing JSON string:', err)
    }
});

var User = require('../model/user');
// var fullname = document.getElementById('fullname');
// var password = document.getElementById('password');
// var email = document.getElementById("email");
// var birthday = document.getElementById('birthday');

// var genderFemale = document.getElementById('genderFemale');
// var genderMale = document.getElementById('genderMale');

// var interestFemale = document.getElementById('interestFemale');
// var interestMale = document.getElementById('interestMale');
// var interestBoth = document.getElementById('interestBoth');

const createUser = (req, res) => {   
    var gender = null;
    if (genderMale.checked) {
        gender = genderMale.value;
    }
    if (genderFemale.checked) {
        gender = genderFemale.value;
    }
    
    var interest = null;
    if (interestMale.checked) {
        interest = interestMale.value;
    }
    if (interestFemale.checked) {
        interest = interestFemale.value;
    }
    if (interestBoth.checked) {
        interest = interestBoth.value;
    }
    var user = new User (
    fullname.value,
    password.value,
    email.value,
    birthday.value,
    gender,
    interest
    );
    users.push(user);
    fs.writeFile('./storage.json', JSON.stringify(users, null, 4), (err) => {
        if (err) {
            console.error(err);
            return; 
        } else {
        console.log("File has been created");
        }
    });
}
   
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