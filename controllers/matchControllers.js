const fs = require('fs');
let userStorage = fs.readFileSync('./storage/userStorage.json', "utf8");
let users = JSON.parse(userStorage);

function potentialMatches(req, res) {
    const email = req.params.email;
    const removeUser = users.map((user) => { 
        return user.email;   
    }) 
    .indexOf(email);
    users.splice(removeUser, 1);
    res.send(users);
};

function likeUser(req, res) { //kan både slette og opdatere, dvs. sende og modtage data. Her bruges ikke put, da jeg blot ønsker at ændre specifikke attributter i mine objekter.
    const email = req.params.email;
    const likedEmail = req.body.liked;

    let specificUser = users.find((user) => user.email == email);

    specificUser.liked.push(likedEmail);

    let userStorage = JSON.stringify(users, null, 2);
    fs.writeFileSync('./storage/userStorage.json', userStorage, 'utf8')

    res.send("User like registered");
    console.log("User like registered");
};

module.exports = {
    potentialMatches,
    likeUser
};

