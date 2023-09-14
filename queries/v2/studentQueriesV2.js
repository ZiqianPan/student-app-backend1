const db = require("../../db");

const { GetGradesByStudentIdV2 } = require("./gradesQueriesV2");


const getAllStudentsV2 = async () => {
  const students = db.any('SELECT * FROM students');
  return students;
};

const getAllStudentsWithGradesV2 = async () => {

  const students = await getAllStudentsV2();
  for (const student of students) {
    const { id } = student;
    const grades = await GetGradesByStudentIdV2(id);
    student.grades = grades; 
  }
  
  return students;
};

const getStudentByIdV2 = async (id) => {
  const student = await db.oneOrNone('SELECT * FROM students where id = $1', [id]);
  return student;
};

module.exports = { getAllStudentsV2, getStudentByIdV2, getAllStudentsWithGradesV2 };
