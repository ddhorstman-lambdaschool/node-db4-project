exports.seed = function (knex) {
    //cc cookies = 1, doodles = 2, bread = 3, cake = 4
  return knex("steps").insert([
    { recipe_id: 1, step_number: 1, directions: "Do a thing" },
  ]);
};
