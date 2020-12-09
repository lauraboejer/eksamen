function deleteProfile() {
    let email = localStorage.getItem('email');
    localStorage.clear();
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`http://localhost:8000/user/${email}`, options)
        window.location.href = "/";
        alert("Okay, you made your decision. We're letting you go. Have a good life!")
}; 