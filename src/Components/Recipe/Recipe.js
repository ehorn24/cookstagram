import React from "react";
import { Link } from "react-router-dom";
import MockRecipes from "../../MockData/MockRecipes";

const Recipe = ({ match }) => {
  let currentRecipe = MockRecipes.recipes.filter(
    recipe => recipe.recipename === match.params.recipename
  );
  let {
    user,
    recipename,
    picture,
    instructions,
    ingredients
  } = currentRecipe[0];
  return (
    <main>
      <Link to={"/profile/" + user}>
        <h1>{user}</h1>
      </Link>
      <h2>{recipename}</h2>
      <img src={picture} alt="recipe" />
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map(ingredient => {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <h6>Instructions</h6>
      <ol>
        {instructions.map(instruction => {
          return <li>{instruction}</li>;
        })}
      </ol>
    </main>
  );
};

export default Recipe;
