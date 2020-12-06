fetch('/storage/storage.json')
	.then(function (res) {
		return res.json();
	})
	.then(function (users) {
		appendData(users);
	})
	.catch(function (err) {
		console.log(err);
		alert("An error has occured!");
});

function appendData(users) {
	let container = document.getElementById('userData');
	for (let i = 0; i < users.length; i++) {
		let div = document.createElement("div");
		div.innerHTML = 'Name: ' + users[i].fullname;
		div.innerHTML = 'Name: ' + users[i].email;
		div.innerHTML = 'Name: ' + users[i].birthday;
		div.innerHTML = 'Name: ' + users[i].userID;
		div.innerHTML = 'Name: ' + users[i].gender;
		div.innerHTML = 'Name: ' + users[i].interest;
		container.appendChild(div);
	}
};

