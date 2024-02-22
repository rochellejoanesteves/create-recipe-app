import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import "./recipe.scss";

const Recipe = () => {
  const { mode } = useTheme();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await fetch(`http://localhost:3006/recipes/${id}`);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchRecipe();
  }, []);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">Error fetching recipe...</p>}
      {loading && <p className="loading">Loading...</p>}
      {data && (
        <div>
          <h3 className="page-title">{data.title}</h3>
          <p>Takes {data.cookingTime} to coke.</p>
          <ul>
            {data?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p className="method">{data.method}</p>
        </div>
      )}
    </div>
  );
};

export default Recipe;
