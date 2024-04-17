"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvailableTeacher = exports.getRequirements = exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
// Define constants for subjects
exports.cpp = 'C++ Subjects';
exports.java = 'Java Subjects';
exports.react = 'React Subjects';
// Define a Teacher object
exports.cTeacher = {
    experienceTeachingC: 10
};
// Define methods for each subject
function getRequirements(subject) {
    switch (subject) {
        case exports.cpp:
            return 'C++ requirements: Intermediate to advanced knowledge of C++ programming language.';
        case exports.java:
            return 'Java requirements: Familiarity with object-oriented programming concepts.';
        case exports.react:
            return 'React requirements: Understanding of JavaScript and web development basics.';
        default:
            return 'Unknown subject';
    }
}
exports.getRequirements = getRequirements;
function getAvailableTeacher(subject, teacher) {
    switch (subject) {
        case exports.cpp:
        case exports.java:
        case exports.react:
            return "Available teacher for ".concat(subject, ": Experience teaching C/C++ subjects: ").concat(teacher.experienceTeachingC, " years.");
        default:
            return 'Unknown subject';
    }
}
exports.getAvailableTeacher = getAvailableTeacher;
// Log information for each subject
console.log('C++');
console.log(getRequirements(exports.cpp));
console.log(getAvailableTeacher(exports.cpp, exports.cTeacher));
console.log('\nJava');
console.log(getRequirements(exports.java));
console.log(getAvailableTeacher(exports.java, exports.cTeacher));
console.log('\nReact');
console.log(getRequirements(exports.react));
console.log(getAvailableTeacher(exports.react, exports.cTeacher));
