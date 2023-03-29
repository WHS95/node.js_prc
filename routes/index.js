const express = require("express");
const goods = require("./goods");

const router = express.Router();

router.use("/goods", goods);

module.exports = router;
