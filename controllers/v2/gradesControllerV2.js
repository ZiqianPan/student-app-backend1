const express = require("express");
const gradesControllerV2 = express.Router();

const {
  getAllGradesV2,
  getGradeByIdV2,
} = require("../../queries/v2/gradesQueriesV2");


//
gradesControllerV2.get("/", (request, response) => {
  try {
    const grades = getAllGradesV2();
    return response.status(200).json({ data: grades });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Get /grades/:id
gradesControllerV2.get("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const grade = getGradeByIdV2(id);

    if (grade) {
      response.status(200).json({ data: grade });
    } else {
      response.status(404).json({ error: `No grade with id of ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = gradesControllerV2;
