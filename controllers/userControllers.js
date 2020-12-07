const fs = require('fs');
let usersStorage = fs.readFileSync('./storage/usersStorage.json', "utf8");
let users = JSON.parse(usersStorage);

let User = require('../model/userModel.js');

function showAllUsers(req, res) { //refererer i dette tilfælde til hhtp://localhost:5000/users/
    res.send(users)
};

function createUser(req, res) {
    let user = new User(
        req.body.firstName,
        req.body.lastName,
        req.body.password,
        req.body.email,
        req.body.age,
        req.body.gender,
        req.body.interest,
        Date.now()
    );

    users.push(user);

    let usersStorage = JSON.stringify(users, null, 2);
    fs.writeFileSync('./storage/usersStorage.json', usersStorage, 'utf8')

    res.send("Hello " + user.firstName + "! Welcome to Tinder 2.0. You have succesfully created an acount.")
};

function showSpecificUser(req, res) {
	const email = req.params.email;
	const specificUser = users.find((user) => user.email == email);
    res.send(specificUser);
    console.log(specificUser)
};

function deleteSpecificUser(req, res) {
    const userId = req.params.userId;
    for(let i = 0; i < users.length; i++) {
        if(users[i].userId == userId) {
            console.log(users[i].userId);
            users.splice(i, 1);

            let usersStorage = JSON.stringify(users, null, 2);
            fs.writeFileSync('./storage/usersStorage.json', usersStorage, 'utf8')

            res.send("Goodbye, my lover! We hope you are leaving because you found someone else.")
        };
    };
    res.send("It's not you, it's us. There's just no chemistry between the written user-id and the database.")
};

function editSpecificUser(req, res) { //kan både slette og opdatere, dvs. sende og modtage data. Her bruges ikke put, da jeg blot ønsker at ændre specifikke attributter i mine objekter.
    const userId = req.params.userId;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;

    const specificUser = users.find((user) => user.userId == userId);

    if(firstName) {
        specificUser.firstName = firstName;
    };
    if(lastName) {
        specificUser.lastName = lastName;
    };
    if(age) {
        specificUser.age = age;
    };
    let usersStorage = JSON.stringify(users, null, 2);
    fs.writeFileSync('./storage/usersStorage.json', usersStorage, 'utf8')

    res.send("Good news! Your profile has successfully been updated.")
};

module.exports = {
    showAllUsers,
    createUser,
    showSpecificUser,
    deleteSpecificUser,
    editSpecificUser,
};