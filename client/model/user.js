class User {
    constructor(fullname, password, email, birthday, userID) {
    this.fullname = fullname;
    this.password = password;
    this.email = email;
    this.birthday = birthday;
    this.userID = userID;
    }
    // selectedGender() {
    //     var gender = null;
    //     if (req.body.genderM.checked) {
    //         gender = req.body.genderM;
    //         this.gender = gender;
    //         return gender;
    //     };
    //     if (req.body.genderF.checked) {
    //         gender = req.body.genderF;
    //         this.gender = gender;
    //         return gender;
    //     };
    // };
    // selectedInterest() {
    //     var interest = null;
    //     if (interestM.checked) {
    //         interest = req.body.interestM;
    //         this.interest = interest;
    //         return interest;
    //     };
    //     if (interestF.checked) {
    //         interest = req.body.interestF.value;
    //         this.interest = interest;
    //         return interest;
    //     };
    //     if (req.body.interestB) {
    //         interest = req.body.interestB.value;
    //         this.interest = interest;
    //         return interest;
    //     };
    //};
};

module.exports = User;



