import React from "react";
import SearchRecipe from "./SearchRecipe";
import "../index.css";
import RecipeList from "./RecipeList";
const App = () => {
  return (
    <>
      <section className="section">
        <h1 className="header">Recipe Finder</h1>
        <SearchRecipe />
      </section>
      <section className="section2">
        <RecipeList />
      </section>
    </>
  );
};

export default App;
