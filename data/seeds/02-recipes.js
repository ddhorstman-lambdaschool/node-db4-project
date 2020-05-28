exports.seed = function (knex) {
  return knex("recipes").insert([
    { name: "Chocolate Chip Cookies", author: "Nestle" },
    { name: "Snickerdoodles", author: "spendwithpennies.com" },
    { name: "Bread", author: "butterwithasideofbread.com" },
    { name: "Chocolate Cake", author: "The Stay-At-Home Chef" },
  ]);
};
