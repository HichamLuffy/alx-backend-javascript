function sumMajorCredits(subject1, subject2) {
    console.log("Summing major credits...");
    var result = { credits: subject1.credits + subject2.credits };
    console.log("Result:", result);
    return result;
}
function sumMinorCredits(subject1, subject2) {
    console.log("Summing minor credits...");
    var result = { credits: subject1.credits + subject2.credits };
    console.log("Result:", result);
    return result;
}
// Example testing:
var majorSubject1 = { credits: 10, _majorBrand: undefined };
var majorSubject2 = { credits: 15, _majorBrand: undefined };
var minorSubject1 = { credits: 5, _minorBrand: undefined };
var minorSubject2 = { credits: 8, _minorBrand: undefined };
console.log("Major Credits:");
sumMajorCredits(majorSubject1, majorSubject2);
console.log("\nMinor Credits:");
sumMinorCredits(minorSubject1, minorSubject2);
