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

// SELECT s.step_number, s.directions, r.name AS recipe_name
//  FROM steps AS s
//  JOIN recipes AS r
//  ON r.id = s.recipe_id
//  WHERE recipe_id=1 ORDER BY step_number;
function getInstructions(recipe_id) {
  return db("steps")
    .where({ recipe_id })
    .join("recipes", "steps.recipe_id", "recipes.id")
    .select(
      "steps.step_number",
      "steps.directions",
      "recipes.name as recipe_name"
    );
}

module.exports = { getRecipes, getRecipe, getShoppingList, getInstructions };
