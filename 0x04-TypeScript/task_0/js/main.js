var student1 = {
    firstName: 'Luffy',
    lastName: 'Monkey D.',
    age: 19,
    location: 'East Blue'
};
var student2 = {
    firstName: 'Zoro',
    lastName: 'Roronoa',
    age: 21,
    location: 'East Blue'
};
var studentsList = [student1, student2];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
