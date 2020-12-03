var user = new User (
    fullname,
    password,
    email,
    birthday,
    gender,
    interest
)
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