import PropTypes from "prop-types"; // ES6
import "./Recipe.css";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, recipesHandler }) => {
  const {
    image,
    recipe_name,
    short_description,
    ingredients,
    calories,
    preparing_time,
  } = recipe;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{recipe_name}</h2>
          <p>{short_description}</p>
          <hr></hr>
          <h3>Ingredients : {ingredients.length}</h3>
          <ul className="unordered_ingredients">
            {ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
          <hr></hr>
          <div className="flex justify-between">
            <div className="flex">
              <IoMdTime />
              <p>{preparing_time}</p>
            </div>
            <div className="flex">
              <AiOutlineFire />
              <p className="flex">{calories}</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              className="btn btn-success"
              onClick={() => recipesHandler(recipe)}
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  recipesHandler: PropTypes.func,
};

export default Recipe;
