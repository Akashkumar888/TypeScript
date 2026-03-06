var favHobbies = function (hobby) {
    if (typeof hobby === 'object' && Array.isArray(hobby)) {
        return hobby.map(function () { });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("Akash");
