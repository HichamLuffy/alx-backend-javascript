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

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Yami',
  lastName: 'Sukehiro',
  location: 'Clover Kingdom',
  fullTimeEmployee: true,
  numberOfReports: 100,
};

console.log(teacher3);
console.log(director1);
