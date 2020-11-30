class User {
    constructor(fullname, password, email, birthday, gender, interest, userID) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.gender = gender;
    this.interest = interest;
    this.userID = Date.now();
    }
};

let users = [];
const storeUser = (event) => {
    event.preventDefault();    
    var gender = null;
    var genderFemale = document.getElementById("genderFemale");
    var genderMale = document.getElementById("genderMale");
    if (genderMale.checked) {
        gender = genderMale.value;
    }
    if (genderFemale.checked) {
        gender = genderFemale.value;
    }

    var interest = null;
    var interestFemale = document.getElementById("interestFemale");
    var interestMale = document.getElementById("interestMale");
    var interestBoth = document.getElementById("interestBoth");
    if (interestMale.checked) {
        interest = interestMale.value;
    }
    if (interestFemale.checked) {
        interest = interestFemale.value;
    }
    if (interestBoth.checked) {
        interest = interestBoth.value;
    }
    var fullname = document.getElementById('fullname').value;
    var password = document.getElementById('signUpPassword').value;
    var birthday = document.getElementById("birthday").value;
    var email = document.getElementById("signUpEmail").value;
    
    var user = new User (
        fullname,
        password, 
        email, 
        birthday, 
        gender, 
        interest
    );
    users.push(user);
    document.getElementById("signUpForm").reset(); //fordi jeg laver .preventDefault;, da jeg ikke ønsker at siden genindlæser og overskriver min information
    
    localStorage.setItem("userList", JSON.stringify(users));
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('signUpButton').addEventListener('click', storeUser);
});