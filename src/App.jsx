import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/index";
import Search from "./pages/search/index";
import Recipe from "./pages/recipe/index";
import Create from "./pages/create/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/recipes/:id" element={<Recipe />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;