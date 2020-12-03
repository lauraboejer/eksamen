// opstiller variable for hver sign up form og giver dem et kalde navn 
var fullname = req.body.fullname;
var password = req.body.password;
var email = req.body.email;
var birthday = req.body.birthday;

var genderF = document.getElementById("genderFemale");
var genderM = document.getElementById("genderMale");

var interestF = document.getElementById("interestFemale");
var interestM = document.getElementById("interestMale");
var interestB = document.getElementById("interestBoth");

// kalder localstorage og bruger set funktionen til at sætte keyword til den value
function storeData() {
var gender = null;
    if (genderM.checked) {
        gender = genderM.value;
    }
    if (genderF.checked) {
        gender = genderF.value;
    }

var interest = null;
    if (interestM.checked) {
        interest = interestM.value;
    }
    if (interestF.checked) {
        interest = interestF.value;
    }
    if (interestB.checked) {
        interest = interestB.value;
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