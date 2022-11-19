import './RecipeCard.css'
import Button from "../Button/Button";

const RecipeCard = ({recipe}) => {
  // console.log(recipe);
    return (
      <li 
      className={`recipeCard `}>
        <img src={recipe.recipe.image}alt={recipe.label}/>
        <h3>{recipe.recipe.label}</h3>
        <p>{recipe.recipe.ingredientLines.map((ing, i) => (<i key={i}>{ing}</i>))}</p>
        <h4>{recipe.recipe.cuisineType[0]}</h4>

        <span >
          {recipe.recipeText}
        </span>
      </li> 
    )
};

export default RecipeCard