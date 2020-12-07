const { METHODS } = require("http");

function createUser() {
    fetch('https://localhost:8000/users'), {
        method: "POST",
        headers: {
            "Content type": "application/json"
        },
        body: JSON.stringify({
            
        })
    }

        .then(response => { 
            return response.json;
        })
        .then(users => {
            console.log(users.data)
        });
}

createUser();