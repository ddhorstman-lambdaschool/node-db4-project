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
    const { id } = req.recipe;
    const instructions = await db.getInstructions(id);
    res.status(200).json(instructions);
  })
);

router.get(
  "/:id/shoppingList",
  validateID,
  catchAsync(async (req, res) => {
    const { id } = req.recipe;
    const shoppingList = await db
      .getShoppingList(id)
      .then(list =>
        list.map(({ name, quantity, unit }) => ({
          name,
          amount: { quantity, unit },
        }))
      )
      .then(list =>
        list.reduce((ac, val) => {
          const existingEntry = ac.find(item => item.name === val.name);
          if (existingEntry) {
            Array.isArray(existingEntry.amount)
              ? existingEntry.amount.push(val.amount)
              : (existingEntry.amount = [existingEntry.amount, val.amount]);
          } else ac.push(val);
          return ac;
        }, [])
      )
      .then(list =>
        list.map(item =>
          !Array.isArray(item.amount)
            ? {
                ...item,
                amount: `${item.amount.quantity}${
                  item.amount.unit ? " " + item.amount.unit : ""
                }${
                  item.amount.unit ? (item.amount.quantity == 1 ? "" : "s") : ""
                }`,
              }
            : {
                ...item,
                amount: item.amount
                  .reduce((ac, val) => {
                    const existingUnit = ac.find(
                      x => x.unit && x.unit === val.unit
                    );
                    existingUnit
                      ? (existingUnit.quantity =
                          Number(existingUnit.quantity) + Number(val.quantity))
                      : ac.push(val);
                    return ac;
                  }, [])
                  .reduce(
                    (ac, amount) =>
                      ac +
                      `${ac === "" ? "" : " +"} ${amount.quantity}${
                        amount.unit ? " " + amount.unit : ""
                      }${amount.quantity != 1 ? "s" : ""}`,
                    ""
                  ),
              }
        )
      );
    res.status(200).json(shoppingList);
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

