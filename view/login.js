function logIn() {
	let logInEmail = document.getElementById('logInEmail').value;
	let logInPassword = document.getElementById('logInPassword').value;

	fetch(`http://localhost:5000/users/${userId}`).then((res) => res.json()).then(function(specificUser) {
		if(specificUser.logInEmail = logInEmail && specificUser.logInPassword == logInPassword) {
			window.location.href = "/profile.html";
			rememberLogIn(userId, logInPassword);
		} else {
			alert("Looks like the e-mail or password is incorret. Please try again or sign up to create an account.")
		}
	})
};

function rememberLogIn(logInEmail, logInPassword) {
    localStorage.setItem('email', logInEmail);
    localStorage.setItem('password', logInPassword);    
};
