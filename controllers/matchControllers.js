function match(female, male) {
    if(female.interest == male.gender && male.interest == female.gender && female.hobby == male.hobby) {
        return "It is a match"
    } else {
        return "It is not a match"
    }
};
items.reduce(function(buckets, item){
    if(!buckets[item.age]) buckets[item.age] = [];
    buckets[item.age].push(item);
    return buckets;
});


// sample usage
const nums = [1,2,3,4,5,6,7]
const [evens, odds] = partition(nums, (el) => el%2 == 0)


const fs = require('fs');
let matchStorage = fs.readFileSync('./storage/MatchStorage.json', "utf8");
let matches = JSON.parse(matchStorage);

let Match = require('../model/matchModel.js');

function showAllMatches(req, res) { //refererer i dette tilfælde til hhtp://localhost:5000/users/
    res.send(matches)
};

function createMatch(req, res) {
    let match = new Match(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password,
        req.body.birthday,
        req.body.gender,
        req.body.interest,
        Date.now()
    );

    matches.push(match);

    let matchStorage = JSON.stringify(matches, null, 2);
    fs.writeFileSync('./storage/userStorage.json', matchStorage, 'utf8')

    res.send("Hello " + match.firstName + "! Welcome to Tinder 2.0. You have succesfully created an acount.")
};

function showSpecificMatch(req, res) {
	const email = req.params.email;
	const specificUser = matches.find((match) => match.email == email);
    res.send(specificMatch);
    console.log(specificMatch)
};

function deleteSpecificMatch(req, res) {
    const email = req.params.email;
    for(let i = 0; i < matches.length; i++) {
        if(matches[i].email == email) {
            console.log(matches[i].email);
            matches.splice(i, 1);

            let matchStorage = JSON.stringify(matches, null, 2);
            fs.writeFileSync('./storage/userStorage.json', matchStorage, 'utf8')

            res.send("Goodbye, my lover! We hope you are leaving because you found someone else.")
        };
    };
    res.send("It's not you, it's us. There's just no chemistry between the written e-mail and the database.")
};

module.exports = {
    showAllMatches,
    createMatch,
    showSpecificMatch,
    deleteSpecificMatch
};

