const express = require("express");
const cors = require("cors");
const router = require("../src/routes/router");

const app = express();

app.use(cors());
app.use(router);

module.exports = app;
