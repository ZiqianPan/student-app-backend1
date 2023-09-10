// app.js
// defines the route handlers

const express = require("express");
const cors = require("cors");
const studentsController = require("./controllers/studentsController");
const studentsControllerV2 = require("./controllers/v2/studentsControllerV2");
const gradesControllerV2 = require("./controllers/v2/gradesControllerV2");

// create an instance of an express application
const app = express();
const db = require('./db');

// set up middleware
// functions that will work with req, res before
// The final route handler function
app.use(cors());

app.use("/students", studentsController);
app.use("/v2/students", studentsControllerV2);
app.use("/v2/grades", gradesControllerV2);

app.get('/tests', async (request, response) => {
  try {
    const tests = await db.any('SELECT * FROM tests;');


    response.status(200).json({ data: tests });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});


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

module.exports = app;
