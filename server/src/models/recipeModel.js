const { connectRecipes } = require('../../db/db');
const { v4: uuid } = require('uuid');

const generateCartId = () => uuid();

const getAllRecipes = async () => {
    const { collection, client } = await connectRecipes();
    const data = await collection.find({}).toArray();
    setTimeout(() => client.close(), 1000);
    return data;
};

const createNewRecipe = async ({category, instructions}) => {
  const newRecipe = {
    recipeId: generateCartId(),
    category, 
    entryDate: new Date(),
    instructions,
  };
  const { collection, client } = await connectRecipes();
  const data = await collection.insertOne(newRecipe);
  setTimeout(() => client.close(), 1000);
  console.log(data);
  return data;
};

const getRecipeById = async ({id}) => {
  const { collection, client } = await connectRecipes();
  const data = await collection.findOne({ recipeId: id });
  setTimeout(() => client.close(), 1000);
  return data;
};

const updateRecipe = async ({id}, {instructions} ) => {
  const { collection, client } = await connectRecipes();
  const data = await collection.updateOne({ recipeId: id }, {$set: {instructions: instructions}});
  setTimeout(() => client.close(), 1000);
  return data;
};

const deleteRecipe = async ({id}) => {
  const { collection, client } = await connectRecipes();
  const data = await collection.deleteOne({ recipeId: id });
  setTimeout(() => client.close(), 1000);
  return data;

};

module.exports = { 
  getAllRecipes,
  createNewRecipe,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};