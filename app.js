// app.js
// defines the route handlers

const express = require("express");
const cors = require("cors");
const studentData = require("./studentData.json");

// create an instance of an express application
const app = express();


// set up middleware
// functions that will work with req, res before 
// The final route handler function
app.use(cors());

// Define our routes
// Healthcheck route
// GET / method = Get path = /
app.get("/", (request, response) => {
  // handler goes here
  response.status(200).json({ data: "Service is running!" });
});

// Get /students
// define path + method and handler
// catch errors.
app.get("/students", (request, response) => {
  try {
    const { students } = studentData;
    response.status(200).json({ data: students });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Get /students/:id
app.get("/students/:id", (request, response) => {
  try {
    const { id } = request.params;
    const { students } = studentData;
    const student = students.find((student) => student.id === id);
    if (student) {
      response.status(200).json({ data: student });
    } else {
      response.status(404).json({ error: `No student with id of ${id}` });
    }
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;
