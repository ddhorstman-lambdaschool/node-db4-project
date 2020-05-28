const db = require("../data/dbConfig");

//SELECT * from recipes;
function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes").where({ id });
}
function getShoppingList(id) {
  return db("");
}

// SELECT * from steps
//   WHERE recipe_id=1
//   ORDER BY step_number;
function getInstructions(recipe_id) {
  return db("steps").where({ recipe_id }).select("step_number","directions");
}

module.exports = { getRecipes, getRecipe, getShoppingList, getInstructions };
