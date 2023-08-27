// app.js
// defines the route handlers

const express = require("express");
const cors = require("cors");
const studentsController = require("./controllers/studentsController");
const studentsControllerV2 = require("./controllers/v2/studentsControllerV2");

// create an instance of an express application
const app = express();

// set up middleware
// functions that will work with req, res before
// The final route handler function
app.use(cors());

app.use("/students", studentsController);
app.use("/v2/students", studentsControllerV2);

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
