const express = require("express");
const getClients = require("../controllers/ixcController");

const router = express.Router();

router.get("/cliente", getClients);

module.exports = router;
