exports.seed = function (knex) {
  //cc cookies = 1, doodles = 2, bread = 3, cake = 4
  return knex("steps").insert([
    { recipe_id: 1, step_number: 1, directions: "Preheat oven to 375" },
    {
      recipe_id: 1,
      step_number: 2,
      directions: "Combine flour, baking soda and salt in small bowl.",
    },
    {
      recipe_id: 1,
      step_number: 3,
      directions:
        "Beat butter, white sugar, brown sugar, and vanilla extract in large mixer bowl until creamy.",
    },
    {
      recipe_id: 1,
      step_number: 4,
      directions: "Add eggs, one at a time, beating well after each addition.",
    },
    {
      recipe_id: 1,
      step_number: 5,
      directions: "Gradually beat in flour mixture. Stir in chocolate chips.",
    },
    {
      recipe_id: 1,
      step_number: 6,
      directions: "Drop by rounded tablespoon onto ungreased baking sheets.",
    },
    {
      recipe_id: 1,
      step_number: 7,
      directions:
        "Bake for 9 to 11 minutes until golden brown. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.",
    },
    { recipe_id: 2, step_number: 1, directions: "Preheat oven to 400" },
    {
      recipe_id: 2,
      step_number: 2,
      directions:
        "Combine flour, cream of tartar, baking soda, cinnamon, and salt. Set aside",
    },
    {
      recipe_id: 2,
      step_number: 3,
      directions:
        "With mixer on medium, combine sugar, butter, and eggs. Stir in flour mixture.",
    },
    {
      recipe_id: 2,
      step_number: 4,
      directions: "Combine cinnamon and sugar for topping in a small bowl.",
    },
    {
      recipe_id: 2,
      step_number: 5,
      directions:
        "Divide dough into 32 pieces and roll each piece into a ball. Roll balls in cinnamon-sugar mixture. Place 2 inches apart on ungreased cookie sheet.",
    },
    { recipe_id: 2, step_number: 6, directions: "Bake 8-10 minutes." },
    {
      recipe_id: 3,
      step_number: 1,
      directions:
        "In a large bowl, dissolve the 1 TBSP of the sugar in warm water and then stir in yeast. Allow to proof until yeast resembles a creamy foam, about 5 minutes.",
    },
    {
      recipe_id: 3,
      step_number: 2,
      directions:
        "Mix remaining sugar, salt and oil into the yeast. Mix in flour one cup at a time. Dough should be tacky and clean the sides of the bowl save for a small part at the bottom. Too much flour added in yields a dry loaf of bread, so if you're worried you added too much, add a bit more hot water, until you get the correct consistency.",
    },
    {
      recipe_id: 3,
      step_number: 3,
      directions:
        "Knead dough for 7 minutes. Place in a well oiled bowl, and turn dough to coat. Cover with a damp cloth. Allow to rise until doubled in bulk, about 1 hour.",
    },
    {
      recipe_id: 3,
      step_number: 4,
      directions:
        "Punch dough down. Knead for 1 minute and divide in half. Shape into loaves and place into two greased 9x5 inch loaf pans. Allow to rise for 30 minutes, or until dough has risen 1 inch above pans.",
    },
    {
      recipe_id: 3,
      step_number: 5,
      directions:
        "Bake at 350 degrees F (175 degrees C) for 30-40 minutes. Cool, brush with butter and enjoy!",
    },
    {
      recipe_id: 4,
      step_number: 1,
      directions:
        "Preheat oven to 350 degrees Fahrenheit. Butter three 9-inch cake rounds. Dust with flour and tap out the excess.",
    },
    {
      recipe_id: 4,
      step_number: 2,
      directions:
        "Mix together flour, sugar, cocoa, baking soda, baking powder, and salt in a stand mixer using a low speed until combined.",
    },
    {
      recipe_id: 4,
      step_number: 3,
      directions:
        "Add eggs, buttermilk, warm water, oil, and vanilla. Beat on a medium speed until smooth. This should take just a couple of minutes.",
    },
    {
      recipe_id: 4,
      step_number: 4,
      directions:
        "Divide batter among the three pans. I found that it took just over 3 cups of the batter to divide it evenly.",
    },
    {
      recipe_id: 4,
      step_number: 5,
      directions:
        "Bake for 30-35 minutes in a 350 degree oven until a toothpick inserted into the center comes out clean.",
    },
    {
      recipe_id: 4,
      step_number: 6,
      directions:
        "Cool on wire racks for 15 minutes and then turn out the cakes onto the racks and allow to cool completely.",
    },
    {
      recipe_id: 4,
      step_number: 7,
      directions: "Frost with your favorite frosting and enjoy!",
    },
    {
      recipe_id: 4,
      step_number: 8,
      directions:
        "In a large bowl, beat together butter and cream cheese until fluffy. Use a hand mixer or stand mixer for best results",
    },
    {
      recipe_id: 4,
      step_number: 9,
      directions:
        "Add in cocoa powder and vanilla extract. Beat until combined.",
    },
    {
      recipe_id: 4,
      step_number: 10,
      directions:
        "Beat in powdered sugar, 1 cup at a time. Add milk as necessary to make a spreadable consistency. The frosting should be very thick and will thicken even more if refrigerated.",
    },
  ]);
};
