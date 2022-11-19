import './RecipeList.css';
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeList = ({recipes}) => {
    return (
        <section className="recipeList">
            {recipes && recipes.map((recipe, i) => 
            <RecipeCard 
            key={i} 
            recipe={recipe} 
            />)}
        </section>
    )
};

export default RecipeList