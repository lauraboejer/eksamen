const email = localStorage.getItem('email');

fetch(`http://localhost:8000/user/${email}`)
.then((response) => response.json())
.then((data) => {
    document.getElementById("fullName").innerHTML = data.firstName + " " + data.lastName;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("birthday").innerHTML = data.birthday;
    document.getElementById("gender").innerHTML = data.gender;
    document.getElementById("interest").innerHTML = data.interest;
});

function logOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/';
    alert("Leaving already? Okay then. You are now logged for out - see you soon!")
};