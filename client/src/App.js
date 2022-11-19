import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Layout/Footer/Footer";
import Home from "./Layout/Pages/Home/Home";
import Search from "./Layout/Pages/Search/Search";
import LogIn from "./Layout/Pages/LogIn/LogIn";
import SignIn from "./Layout/Pages/SignIn/SignIn";
import Header from "./Layout/Header/Header";
import Blog from "./Layout/Pages/Blog/Blog";

const App = () => {
  const [input, setInput] = useState();
  const [recipe, setRecipe] = useState();
  const navigate = useNavigate();

  // const APP_ID = "5356d460";
  // const APP_KEY = "000e634ee221f3cc3fe235e57022402b";
  const URL = `https://api.edamam.com/search?q=${input}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  useEffect(() => {
    if (input) {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data, "API");
          setRecipe(data.hits);
        });
    }
  }, [input]);

  const search = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setInput(event.target.value);
      navigate(`/search?${event.target.value}`);
    }
  };

  return (
    <section className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home search={search} />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route
            path="/search"
            element={<Search recipes={recipe} search={search} />}
          ></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
      </main>
      <Footer />
    </section>
  );
};
export default App;
