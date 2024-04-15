#!/usr/bin/node
function getStudentsByLocation(students, location) {
  if (!Array.isArray(students) && (typeof location !== 'string')) {
    return [];
  }

  return students
    .filter((student) => student.location === location);
}

export default getStudentsByLocation;
