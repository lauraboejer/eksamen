function logIn() {
	let logInEmail = document.getElementById('logInEmail').value;
	let logInPassword = document.getElementById('logInPassword').value;

	fetch(`http://localhost:8000/${logInEmail}`).then((response) => response.json()).then(function(data) {
		if(data[0].email = logInEmail && data[0].logInPassword == logInPassword) {
			window.location.href = '/profile.html';
			rememberLogIn(logInEmail, logInPassword);
		}
		alert("Looks like the e-mail or password is incorret. Please try again or sign up to create an account.")
	})	
};

logIn();

function rememberLogIn(logInEmail, logInPassword) {
    localStorage.setItem('email', logInEmail);
    localStorage.setItem('password', logInPassword);    
};
