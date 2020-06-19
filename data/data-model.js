const db = require("../data/dbConfig");

//SELECT * from recipes;
function getRecipes() {
  return db("recipes");
}

function getRecipe(id) {
  return db("recipes").where({ id });
}

// SELECT i.name as ingredient,
//   ROUND(ri.quantity, 3) || " " || u.name AS quantity
// FROM recipe_ingredients AS ri
// JOIN units AS u
//   ON u.id = ri.unit_id
// JOIN ingredients AS i
//   ON i.id = ri.ingredient_id
// WHERE ri.recipe_id = 2
// ORDER BY i.name;
function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .where({ recipe_id })
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .join("units as u", "ri.unit_id", "u.id")
    .select("i.name", "ri.quantity", "u.name as unit");
}

// SELECT * from steps
//   WHERE recipe_id=1
//   ORDER BY step_number;
function getInstructions(recipe_id) {
  return db("steps").where({ recipe_id }).select("step_number", "directions");
}

module.exports = { getRecipes, getRecipe, getShoppingList, getInstructions };
