const db = require('../../db');

const getAllGradesV2 = () => {
  const { grades } = gradesDataV2;
  return grades;
};

const getGradeByIdV2 = (id) => {
  const { grades } = gradesDataV2;
  const grade = grades.find((grade) => grade.id === id);
  return grade;
};

const GetGradesByStudentIdV2 = async (id) => {
  const grades = await db.any('SELECT * FROM grades WHERE student_id = $1', [id]); 
  return grades;
};

module.exports = { getAllGradesV2, getGradeByIdV2, GetGradesByStudentIdV2 };
