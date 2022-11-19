import './Search.css'
import SearchForm from "../../../components/SearchForm/SearchForm";
import RecipeList from "../../../components/RecipeList/RecipeList";


const Search = ({recipes, search}) => {
  console.log(recipes, "SEARCH");

  return (
    <section className="search">
      <SearchForm search={search} />
      <RecipeList recipes={recipes} />
    </section>
  );
};

export default Search;
