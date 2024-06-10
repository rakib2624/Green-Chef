import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/Cover/Cover";
import Recipes from "./components/Recipes/Recipes";
import Sidebar from "./components/Sidebar/Sidebar";
import { useState } from "react";

function App() {
  const [addRecipes, setAddRecipes] = useState([]);
  const [cooking, setCooking] = useState([]);

  const recipesHandler = (recipe) => {
    setAddRecipes([...addRecipes, recipe]);
  };

  const cookingHandler = (cook) => {
    setCooking([...cooking, cook]);
  };

  // console.log(addRecipes.length);
  return (
    <div className="w-[1320px] m-auto">
      <Header></Header>
      <Slider></Slider>
      <div className="flex">
        <Recipes recipesHandler={recipesHandler}></Recipes>
        <Sidebar
          addRecipes={addRecipes}
          cookingHandler={cookingHandler}
          cooking={cooking}
        ></Sidebar>
      </div>
    </div>
  );
}

export default App;
