const gradesDataV2 = require("../../data/v2/gradesDataV2.json");

const getAllGradesV2 = () => {
  const { grades } = gradesDataV2;
  return grades;
};

const getGradeByIdV2 = (id) => {
  const { grades } = gradesDataV2;
  const grade = grades.find((grade) => grade.id === id);
  return grade;
};

const GetGradesByStudentIdV2 = (id) => {
  const results = [];
  const { grades } = gradesDataV2;

  for (const grade of grades) {
    const { studentId } = grade;
    if (studentId === id) {
      results.push(grade);
    }
  }
  return results;
};

module.exports = { getAllGradesV2, getGradeByIdV2, GetGradesByStudentIdV2 };
