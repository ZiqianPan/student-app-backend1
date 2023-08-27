const studentsDataV2 = require("../../data/v2/studentsDataV2.json");

const { GetGradesByStudentIdV2 } = require("./gradesQueriesV2");


const getAllStudentsV2 = () => {
  const { students } = studentsDataV2;
  return students;
};

const getAllStudentsWithGradesV2 = () => {
  const results = [];

  const students = getAllStudentsV2();
  for (const student of students) {
    const { id } = student;
    const grades = GetGradesByStudentIdV2(id);

    const copy = { ...student };
    copy.grades = grades;
    results.push(copy);
  }
  return results;
};

const getStudentByIdV2 = (id) => {
  const { students } = studentsDataV2;
  const student = students.find((student) => student.id === id);
  return student;
};

module.exports = { getAllStudentsV2, getStudentByIdV2, getAllStudentsWithGradesV2 };
