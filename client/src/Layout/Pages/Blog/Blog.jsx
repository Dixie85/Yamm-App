import { useEffect } from "react";
import { useState } from "react";
import BlogCard from "../../../components/BlogCard/BlogCard";
import InputForm from "../../../components/InputForm/InputForm";
import "./Blog.css";

const postURL = "http://localhost:8080/api/recipes";

const Blog = () => {
  const [recipes, setRecipes] = useState("");

  const showRecipes = () => {
    console.log("here");
    fetch(postURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "API");
        setRecipes(data);
      });
  };
  useEffect(() => {
    if (!recipes) {
      showRecipes();
    }
  }, [recipes]);

  return (
    <section>
      <article>
        {recipes &&
          recipes.map((recipe, i) => <BlogCard key={i} recipe={recipe} />)}
      </article>
      <InputForm showRecipes={showRecipes} />
    </section>
  );
};

export default Blog;
