function logIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    fetch(`http://localhost:8000/user/${email}`)
    .then((response) => response.json())
    .then((data) => {
        if(data.email == email && data.password == password) {
            rememberMe(email, password);
            window.location.href = "/profile";
            alert("Log in succesful! We just can't seem to forget you, so this is just a quick reminder: remember logging out after use if you're on a public computer.")
        } else {
            alert("Looks like the e-mail or password is incorret. Please try again or sign up to create an account.")
        };
    });
};

function rememberMe(email, password){
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
};