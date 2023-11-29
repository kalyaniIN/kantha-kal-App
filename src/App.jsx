import { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [recipes, setRecipes] = useState([]);

  // const [query, setQuery] = useState("");
  const APP_ID = "f643af62";
  const APP_KEY = "2a8e753613ccb01b4d26d9716e1b971d";
  const [query, setQuery] = useState('label');

  useEffect(() => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        setRecipes(json.hits);
        console.log("data is", json);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [query]);

  return (
    <>
      <div>
      <h1>Food Recipe App </h1>
      <form>
        <input type="text" placeholder="Search for recipes" />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
      </div>
    </>
  );
};

export default App;
