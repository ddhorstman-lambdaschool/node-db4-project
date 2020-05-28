exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "Butter" },
    { name: "Flour" },
    { name: "White Sugar" },
    { name: "Brown Sugar" },
    { name: "Vanilla Extract" },
    { name: "Cinnamon" },
    { name: "Chocolate chips" },
    { name: "Water" },
    { name: "Vegetable Oil" },
    { name: "Eggs" },
    { name: "Yeast" },
    { name: "Powdered Sugar" },
    { name: "Salt" },
    { name: "Baking Soda" },
    { name: "Baking Powder" },
    { name: "Cream of Tartar" },
    { name: "Buttermilk" },
    { name: "Cream Cheese" },
    { name: "Milk" },
    { name: "Cocoa Powder" },
  ]);
};
