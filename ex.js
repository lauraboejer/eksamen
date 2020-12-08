let users = [
    {gender:"male", interest:"male"},
    {gender:"female", interest:"female"},
    {gender:"male", interest:"female"},
    {gender:"female", interest:"male"}
];

//inddeler i mænd og kvinder
let sorted1 = {};
for(let i = 0; i < users.length; i++) {
    if(sorted1[users[i].gender] == undefined) {
        sorted1[users[i].gender] = [];
    };
    sorted1[users[i].gender].push(users[i]);
};

//inddeler kvinder i interesse
let gFemale = sorted1["female"];

let sorted2 = {};
for(let i = 0; i < gFemale.length; i++) {
    if(sorted2[gFemale[i].interest] == undefined) {
        sorted2[gFemale[i].interest] = [];
    };
    sorted2[gFemale[i].interest].push(gFemale[i]);
};

let gFemale_iMale = sorted2["male"];
let gFemale_iFemale = sorted2["female"];


//inddeler mænd i interesse
let gMale = sorted1["male"];

let sorted3 = {};
for(let i = 0; i < gMale.length; i++) {
    if(sorted3[gMale[i].interest] == undefined) {
        sorted3[gMale[i].interest] = [];
    };
    sorted3[gMale[i].interest].push(gMale[i]);
};

let gMale_iFemale = sorted3["female"];
let gMale_iMale = sorted3["male"];

console.log(gFemale_iFemale);
console.log(gMale_iMale);
console.log(gMale_iFemale);
console.log(gFemale_iMale);
