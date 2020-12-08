function match(female, male) {
    if(female.interest == male.gender && male.interest == female.gender) {
        return "It is a match"
    } else {
        return "It is not a match"
    }
};
