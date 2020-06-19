const express = require("express");
const recipesRouter = require("./recipesRouter");
const ingredientsRouter = require("./ingredientsRouter");
const { custom404, errorHandling } = require("./errors");

const server = express();
server.use(express.json());

server.get("/api", (req, res) => {
  res.status(200).json({ message: "API is up" });
});
server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);

server.all("*", custom404);
server.use(errorHandling);

module.exports = server;
