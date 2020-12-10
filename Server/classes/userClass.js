class User {
    constructor(firstName, lastName, email, password, birthday, gender, interest, userId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.gender = gender;
    this.interest = interest;
    this.userId = userId;
    this.liked = [];
    this.disliked = [];
    this.matches = [];
    }
};

module.exports = User;



