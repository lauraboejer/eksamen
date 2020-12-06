//log in
var logInEmail = document.getElementById('logInEmail');
var logInPassword = document.getElementById('logInPassword');

function rememberLogIn() {
    localStorage.setItem('email', logInEmail.value);
    localStorage.setItem('password', logInPassword.value);    
};

//log out
function logOut() {
	localStorage.removeItem ('email');
	localStorage.removeItem ('password'); //alternativt kan localStorage.clear() bruges til at fjerne alle gemte oplysninger
};

//     document.getElementById('logInButton').addEventListener('click', function validateLogIn() {
//         for(let i = 0; i < users.length; i++) {
//             console.log("hej");
//             if(users[i].email == logInEmail && users[i].password == logInPassword) {
//                 console.log("hej");
//                 localStorage.setItem('email', logInEmail);
//                 localStorage.setItem('password', logInPassword);
//                 console.log(users[i].email)
//                 console.log(users[i].password)
//                 console.log(logInEmail)
//                 console.log(logInPassword)
//                 return res.send("You have successfully logged in!");
//             } else {
//                 return res.send("E-mail or password incorret. Please try again or sign up to create an account!");
//             };
//         };
//     });
// };
