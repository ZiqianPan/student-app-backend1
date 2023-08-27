const express = require("express");
const { getAllStudents, getStudentById } = require("../queries/studentQueries");
const studentsController = express.Router();

studentsController.get("/", (request, response) => {
  try {
    const students = getAllStudents();
    response.status(200).json({ data: students });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Get /students/:id
studentsController.get("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const student = getStudentById(id);

    if (student) {
      response.status(200).json({ data: student });
    } else {
      response.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = studentsController;
