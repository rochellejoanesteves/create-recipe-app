import React, { useState } from "react";
import "./create.scss";

const Create = () => {
  const [recipe, setRecipe] = useState({});

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title: </span>
          <input type="text" id="title" onChange={handleChange} required />
        </label>
        <label>
          <span>Recipe Method: </span>
          <textarea type="text" id="method" onChange={handleChange} required />
        </label>
        <label>
          <span>Cooking Time (minutes): </span>
          <input
            type="number"
            id="cookingTime"
            onChange={handleChange}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
