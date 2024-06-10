import PropTypes from "prop-types";
import Cooking from "../Cooking/Cooking";
import "./Sidebar.css";

const Sidebar = ({ addRecipes, cookingHandler, cooking }) => {
  return (
    <div className="w-full border mt-[9rem] rounded-xl">
      <div className="font-semibold text-[24px] p-5">
        <h3 className="text-center">Want to cook : {addRecipes.length}</h3>
      </div>
      <hr className="horizontal"></hr>
      <div className="mt-">
        <table className="m-auto w-full">
          <thead>
            <tr>
              <th className="w-10 pt-5 pb-5 "></th>
              <th className="w-[122px] text-left">Name</th>
              <th className="w-16 pt-5 pb-5 text-left">Time</th>
              <th className="w-10 pt-5 pb-5  text-left">Calories</th>
              <th className="w-10 pt-5 pb-5 "></th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {addRecipes.map((item, index) => (
              <Cooking
                key={item.recipe_id}
                item={item}
                index={index}
                cookingHandler={cookingHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="font-semibold text-[24px] p-5">
        <h3 className="text-center">Currently Cooking : {cooking.length}</h3>
      </div>
      <hr className="horizontal"></hr>
      <div className="mt-">
        <table className="m-auto w-full">
          <thead>
            <tr>
              <th className="w-10 pt-5 pb-5 "></th>
              <th className="w-[122px] text-left">Name</th>
              <th className="w-16 pt-5 pb-5 text-left">Time</th>
              <th className="w-10 pt-5 pb-5  text-left">Calories</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {cooking.map((item, index) => (
              <Cooking
                key={index}
                item={item}
                index={index}
                cookingHandler={cookingHandler}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  addRecipes: PropTypes.array,
  cookingHandler: PropTypes.func,
  cooking: PropTypes.array,
};
export default Sidebar;
