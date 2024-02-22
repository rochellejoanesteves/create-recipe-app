import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./searchBar.scss";

const SearchBar = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search)
  const [searchRecipe, setSearchRecipe] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    navigate(`/search?q=${searchRecipe}`);
  };

  useEffect(() => {
    if (search === "") {
      setSearchRecipe("");
      queryParams.set("q", searchRecipe)
    }
  }, [search]);

  return (
    <div className="searchBar">
      <form onSubmit={handleSearch}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          value={searchRecipe}
          onChange={(e) => setSearchRecipe(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
