import React, { useEffect, useState } from "react";
import RecipeList from "../../components/recipeList";
import "./home.scss";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await fetch("http://localhost:3006/recipes");
        const data = await res.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div className="home">
      {error && <p className="error">Error fetching data...</p>}
      {loading && <p className="loading">Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
};

export default Home;
