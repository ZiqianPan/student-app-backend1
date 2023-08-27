const express = require("express");
const {
  getAllStudentsV2,
  getStudentByIdV2,
  getAllStudentsWithGradesV2
} = require("../../queries/v2/studentQueriesV2");
const { GetGradesByStudentIdV2 } = require("../../queries/v2/gradesQueriesV2");
const studentsControllerV2 = express.Router();

studentsControllerV2.get("/", (request, response) => {
  try {
    const { include } = request.query;
    if (include === "grades") {
      const students =  getAllStudentsWithGradesV2();
      return response.status(200).json({ data: students });
    } else {
      const students = getAllStudentsV2();
      return response.status(200).json({ data: students });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Get /students/:id
studentsControllerV2.get("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const student = getStudentByIdV2(id);

    if (student) {
      response.status(200).json({ data: student });
    } else {
      response.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

//GET /students/:id/grades
studentsControllerV2.get("/:id/grades", (request, response) => {
  try {
    const { id } = request.params;
    const student = getStudentByIdV2(id);

    if (student) {
      const grades = GetGradesByStudentIdV2(id);

      response.status(200).json({ data: grades });
    } else {
      response.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = studentsControllerV2;
