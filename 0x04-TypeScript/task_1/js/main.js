var teacher1 = {
    firstName: 'Gojo',
    fullTimeEmployee: false,
    lastName: 'Satoru',
    location: 'Tokyo',
    contract: false,
    alive: false
};
var director1 = {
    firstName: 'Yami',
    lastName: 'Sukehiro',
    location: 'Clover Kingdom',
    fullTimeEmployee: true,
    numberOfReports: 100,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
console.log(printTeacher("Gojo", "Satoru")); // Outputs: G. Satoru
console.log(teacher1);
console.log(director1);
// testing task 4 
// Creating an instance of StudentClass
var student1 = new StudentClass("Itadory", "yuji");
// Testing the methods of StudentClass
console.log(student1.displayName()); // Outputs: Itadory
console.log(student1.workOnHomework()); // Outputs: Currently working
