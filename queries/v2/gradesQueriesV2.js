const gradesDataV2 = require("../../data/v2/gradesDataV2.json");

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

module.exports = { GetGradesByStudentIdV2 };
