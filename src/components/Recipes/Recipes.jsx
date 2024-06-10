import { useEffect, useState } from 'react';
import PropTypes from "prop-types"; 
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipesHandler}) => {
    const [recipes, setRecipes] = useState([]);

    useEffect (() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data));
    }, [])

    return (
        <div className='mt-10 mb-10 flex flex-col items-center'>
            <h3 className='font-semibold text-[40px]'>
                Our Recipes {recipes.length}
            </h3>
            <p className='text-[1rem] w-[823px]'>
                Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. 
            </p>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                {
                    recipes.map((recipe) => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                    recipesHandler={recipesHandler}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

Recipes.propTypes = {
    recipesHandler: PropTypes.func
}

export default Recipes;