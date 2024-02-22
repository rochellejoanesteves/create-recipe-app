import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Recipes</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default NavBar;
