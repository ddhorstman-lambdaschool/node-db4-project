exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("units").insert([
    { name: "cup" },
    { name: "teaspoon" },
    { name: "ounce" },
    { name: "tablespoon" },
    { name: "pound" },
    { name: null },
  ]);
};

