const express = require("express");
const router = express.Router();
const routes = require("../controlers/recipeControler");

router.get("/recipes", routes.getRecipes);
router.post("/newrecipe", routes.createRecipe);
router.get("/recipes/:id", routes.getRecipeById);
router.patch("/recipes/:id", routes.updateRecipeById);
router.delete("/recipes/:id", routes.deleteRecipeById);

module.exports = router;