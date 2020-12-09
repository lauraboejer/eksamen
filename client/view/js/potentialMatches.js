let email = localStorage.getItem('email');

fetch(`http://localhost:8000/match/${email}`)
.then((response) => response.json()) 
.then((data) => {
    for(let i = 0; i < data.length; i++) {
        document.getElementById("fullName").innerHTML = data[i].firstName + " " + data[i].lastName;
        document.getElementById("email").innerHTML = data[i].email;
        document.getElementById("birthday").innerHTML = data[i].birthday;
        document.getElementById("gender").innerHTML = data[i].gender;
        document.getElementById("interest").innerHTML = data[i].interest;
    };
});


function likeUser() {
    let user = {};
    let likedEmail = document.getElementById('email').value;
    user.liked.push(likedEmail);
    
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    fetch(`http://localhost:8000/match/${email}`, options)
        alert("Like has been registered");
        findMatch();
        window.location.reload();
};

//--------------------Forsøg på at udarbejde matchfunktion----------------------
//
// function findMatch() {
// for(let i = 0; i < users.length; i++) {
//     if(users.liked !== undefined || user.liked.length !== 0) {
//         for(let j = 0; j < users.length; j++) {
//             for(let k = 0; k < users.length; i++) {
//                      if (users[j].liked.some( users[j].email => users[k].liked.includes(users[j].email) == true)) {
//                         if (users[k].liked.some(users[k].email => users[j].liked.includes(users[k].email) == true)) {
//                             return alert(`Congratulations! There is a match between ${users[j].firstName} and ${users[k].firstName}!`)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// };