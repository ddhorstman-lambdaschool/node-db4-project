exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("id");
      tbl.string("name").notNullable();
      tbl.string("author");
      tbl.integer('rating');
    })
    .createTable("ingredients", tbl => {
      tbl.increments("id");
      tbl.string("name").notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments("id");
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("ingredients.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.float("quantity").notNullable();
      tbl.string("unit").notNullable();
      tbl.unique(["recipe_id", "ingredient_id"]);
    })
    .createTable("steps", tbl => {
      tbl.increments("id");
      tbl.float("step_number").notNullable();
      tbl.text("directions").notNullable();
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("step_recipe_ingredients", tbl => {
      tbl.float("fractional_quantity").notNullable().defaultTo(1);
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipes.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("step_id")
        .notNullable()
        .unsigned()
        .references("steps.id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["recipe_id", "step_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("step_recipe_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
