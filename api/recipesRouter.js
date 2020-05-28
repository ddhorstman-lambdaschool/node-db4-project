const router = require("express").Router();
const db = require("../data/data-model");
const { Validator } = require("jsonschema");
const { catchAsync, AppError } = require("./errors");

const validateID = catchAsync(validateRecipeID);

router.get(
  "/",
  catchAsync(async (req, res) => {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  })
);

router.get(
  "/:id/instructions",
  validateID,
  catchAsync(async (req, res) => {
    const {id} = req.recipe;
    const instructions = await db.getInstructions(id);
    res.status(200).json(instructions)
  })
);

/*----------------------------------------------------------------------------*/
/* Middleware
/*----------------------------------------------------------------------------*/
//Don't call directly! Wrap in catchAsync before using
async function validateRecipeID(req, res, next) {
  const { id } = req.params;
  //recipes are returned as an array - we just want the first entry
  const [recipe] = await db.getRecipe(id);
  req.recipe = recipe;
  recipe ? next() : next(new AppError(`${id} is not a valid recipe ID`, 404));
}

module.exports = router;
