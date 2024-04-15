function updateStudentGradeByCity(students, city, newgrade) {
  if (!Array.isArray(students) || (typeof city !== 'string') || (!Array.isArray(newgrade))) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const targetgrade = newgrade.filter(({ studentId }) => studentId === student.id);
      const { grade = 'N/A' } = targetgrade.length > 0 ? targetgrade[0] : {};
      return { ...student, grade };
    });
}

export default updateStudentGradeByCity;
