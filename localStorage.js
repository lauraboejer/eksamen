logInEmail = document.getElementsById('logInEmail');
logInPassword = document.getElementsById('logInPassword');

function validateLogIn() {
    for(let i = 0; i < users.length; i++) {
        if(users[i].email == logInEmail && users[i].password == logInPassword) {
            localStorage.setItem('email', logInEmail);
            localStorage.setItem('password', logInPassword);
        } else {
            return res.send("E-mail or password incorret. Please try again or sign up to create a user.");
        };
    };
};