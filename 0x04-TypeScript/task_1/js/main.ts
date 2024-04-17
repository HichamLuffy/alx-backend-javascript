interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'Gojo',
    fullTimeEmployee: false,
    lastName: 'Satoru',
    location: 'Tokyo',
    contract: false,
    alive: false
};

console.log(teacher3);