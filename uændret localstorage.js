// opstiller variable for hver sign up form og giver dem et kalde navn 
var fullname = document.getElementById('fullname');
var password = document.getElementById('password');
var email = document.getElementById("email");
var birthday = document.getElementById("birthday");

var genderFemale = document.getElementById("genderFemale");
var genderMale = document.getElementById("genderMale");

var interestFemale = document.getElementById("interestFemale");
var interestMale = document.getElementById("interestMale");
var interestBoth = document.getElementById("interestBoth");

// kalder localstorage og bruger set funktionen til at sætte keyword til den value
function storeData() {
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
    localStorage.setItem('fullname', fullname.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("gender", gender);
    localStorage.setItem("interest", interest)
}
// check if stored data from register-form is equal to entered data in the login-form
function checkData() {
    // stored data from the register-form
    var storedEmail = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');

    // entered data from the login-form
    var loginEmail = document.getElementById('loginEmail');
    var loginPassword = document.getElementById('loginPassword');

    // check if stored data from register-form is equal to data from login form
    if(loginEmail.value == storedEmail && loginPassword.value == storedPassword) {
        alert('You are logged in!');
    }else {
        alert('ERROR!');
    }
};