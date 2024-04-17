interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Luffy',
    lastName: 'Monkey D.',
    age: 19,
    location: 'East Blue'
};

const student2: Student = {
    firstName: 'Zoro',
    lastName: 'Roronoa',
    age: 21,
    location: 'East Blue'
};

const studentsList: Student[] = [student1, student2];
