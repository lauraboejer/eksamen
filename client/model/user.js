class User {
    constructor(fullname, password, email, birthday, userID) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.userID = userID;
    }

    selectedInterest() {
        var interest = null;
        if (req.body.interestM.checked) {
            interest = req.body.interestM;
            this.interest = interest;
            return interest;
        };
        if (req.body.interestF.checked) {
            interest = req.body.interestF;
            this.interest = interest;
            return interest;
        };
        if (req.body.interestB.checked) {
            interest = req.body.interestB;
            this.interest = interest;
            return interest;
        };
    };
    selectedGender() {
        var gender = null;
        if (req.body.genderM.checked) {
            gender = req.body.genderM;
            this.gender = gender;
            return gender;
        };
        if (req.body.genderF.checked) {
            gender = geq.body.genderF;
            this.gender = gender;
            return gender;
        };
}};

module.exports = User;



