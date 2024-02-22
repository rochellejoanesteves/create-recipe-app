import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RecipeList from "../../components/recipeList";
import "./search.scss";

const Search = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("q");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("http://localhost:3006/recipes");
        const data = await res.json();
        setRecipes(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.title?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [query, recipes]);

  return (
    <div>
      {error && <p className="error">Error fetching data</p>}
      {loading && <p className="loading">Loading...</p>}
      {filteredRecipes.length === 0 ? (
        <p className="error">No data found</p>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </div>
  );
};

export default Search;
