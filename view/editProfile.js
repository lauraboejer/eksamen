function editProfile() {
    let email = localStorage.getItem('email');

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let password = document.getElementById("password").value;
    let birthday = document.getElementById("birthday").value;

    let genderF = document.getElementById("genderF");
    let genderM = document.getElementById("genderM");

    let interestF = document.getElementById("interestF");
    let interestM = document.getElementById("interestM");

    user = {};

    if(firstName) {
        user.firstName = firstName;
    };
    if(lastName) {
        user.lastName = lastName;
    };
    if(password) {
        user.password = password;
    };
    if(birthday) {
        user.birthday = birthday;
    };
    if(genderF.checked) {
        user.gender = genderF.value;
    };
    if(genderM.checked) {
        user = genderM.value;
    };
    if(interestF.checked) {
        user.interest = interestF.value;
    };
    if(interestM.checked) {
        user.interest = interestM.value;
    };

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch(`http://localhost:8000/user/${email}`, options)
        window.location.href = "/profile";
        alert("Your changes has been saved!")
};