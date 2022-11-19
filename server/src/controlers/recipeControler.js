const recipeModel = require('../models/recipeModel.js');

const getRecipes = async (req, res) => {
    const allRecipes = await recipeModel.getAllRecipes();
   res.json(allRecipes)
};

const createRecipe = async (req, res) => {
    const { acknowledged } = await recipeModel.createNewRecipe(req.body);
    if (!acknowledged){
        res.json({message: `Something went wrong!`});
    } else {
        res.json({message: `New recipe has been created`});
    }

};

const getRecipeById = async (req, res) => {
    const {id} = req.params 
    const oneRecipe = await recipeModel.getRecipeById(id);
    if(!oneRecipe) {
        res.json({message: `No Recipe has been found, ID:${id} don't exist`});
    } else {
        res.json(oneRecipe)
    }
};

const updateRecipeById = async (req, res) => {
    const {id} = req.params 
    const {matchedCount} = recipeModel.updateRecipe(id, req.body);
    if(!matchedCount) {
        res.json({message: `No Recipe has been updated, ID:${id} don't exist`});
    } else {
        res.json({message: `The recipe has been updated`});
    }
};

const deleteRecipeById = async (req, res) => {
    const {id} = req.params
    const { deletedCount } = await recipeModel.deleteRecipe(id);
    if(!deletedCount) {
        res.json({message: `No Recipe has been deleted, ID:${id} don't exist`});
    } else {
    res.json({message: `The recipe has been deleted`});
    }
};

module.exports = { 
    getRecipes,
    createRecipe,
    getRecipeById,
    updateRecipeById,
    deleteRecipeById
} 