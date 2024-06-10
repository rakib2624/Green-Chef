import PropTypes from "prop-types"; // ES6

const Cooking = ({ item, index, cookingHandler }) => {
  const { recipe_id, recipe_name, calories, preparing_time } = item;

  return (
    <tr className="pt-5">
      <td className="text-center pt-5 pb-5">{index + 1}</td>
      <td className="pt-5 pb-5">{recipe_name}</td>
      <td className="pt-5 pb-5">{preparing_time}</td>
      <td className="pt-5 pb-5">{calories}</td>
      <td className="text-center pt-5 pb-5">
        <button
          className="btn btn-success rounded-3xl"
          onClick={() => cookingHandler(item, recipe_id)}
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

Cooking.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  cookingHandler: PropTypes.func,
};

export default Cooking;
