import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.scss";

const Create = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    method: "",
    cookingTime: "",
  });
  const [newIngredients, setNewIngredients] = useState("");

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3006/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAdd = () => {
    const ing = newIngredients.trim();

    if (ing && !recipe.ingredients.includes(ing)) {
      setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, ing],
      });
    }
    setNewIngredients("");
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input
            type="text"
            id="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              id="ingridient"
              value={newIngredients}
              onChange={(e) => setNewIngredients(e.target.value)}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {recipe.ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method: </span>
          <textarea
            type="text"
            id="method"
            value={recipe.method}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes): </span>
          <input
            type="number"
            id="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
