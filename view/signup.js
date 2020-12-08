function signUp(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var birthday = document.getElementById("birthday").value;

    var genderF = document.getElementById("genderF");
    var genderM = document.getElementById("genderM");

    var interestF = document.getElementById("interestF");
    var interestM = document.getElementById("interestM");
    var interestB = document.getElementById("interestB");

    var userId = Date.now();

        let gender = null;
        if (genderF.checked) {
            gender = genderF.value;
            gender;
        }
        if (genderM.checked) {
            gender = genderM.value
            gender;
        }
        interest = null;
        if (interestF.checked) {
            interest = interestF.value;
            interest;
        } 
        if (interestM.checked) {
            interest = interestM.value;
            interest;
        }
        if (interestB.checked) {
            interest = interestB.value;
            interest;
        }

    const user = { 
        firstName, 
        lastName, 
        email, 
        password, 
        birthday, 
        gender, 
        interest, 
        userId
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };

    fetch('http://localhost:8000/users', options);
    window.location.href="/login";
    alert("You have now created an account. Log in to get started!")
};
