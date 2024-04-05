require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./Src/Routes');
const app = express();
require("./Src/DB/index");

// Enable CORS for the client at http://localhost:8080
app.use(
    cors({
        origin: "http://localhost:8080",
        credentials: true,
    })
);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        errors: err.errors,
    });
});

// Set up body parser to parse incoming request bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
