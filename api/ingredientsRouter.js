const router = require("express").Router();
const db = require("../data/dbConfig");
const { Validator } = require("jsonschema");
const { catchAsync, AppError } = require("./errors");

module.exports = router;
