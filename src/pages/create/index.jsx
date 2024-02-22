import React, { useState } from "react";
import "./create.scss";

const Create = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    method: "",
    cookingTime: "",
    ingridients: [],
  });
  const [newIngridients, setNewIngridients] = useState("");

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = () => {
    const ing = newIngridients.trim();

    if (ing && !recipe.ingridients.includes(ing)) {
      setRecipe({
        ...recipe,
        ingridients: [...recipe.ingridients, ing],
      });
    }
    setNewIngridients("");
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
          <span>Recipe Ingridients:</span>
          <div className="ingredients">
            <input
              type="text"
              id="ingridient"
              value={newIngridients}
              onChange={(e) => setNewIngridients(e.target.value)}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {recipe.ingridients.map((i) => (
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
