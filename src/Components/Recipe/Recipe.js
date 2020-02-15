import React from "react";
import { Link } from "react-router-dom";
import MockRecipes from "../../MockData/MockRecipes";

const Recipe = ({ match }) => {
  let currentRecipe = MockRecipes.recipes.filter(
    recipe => recipe.recipename === match.params.recipename
  );
  let {
    username,
    recipename,
    picture,
    instructions,
    ingredients
  } = currentRecipe[0];

  return (
    <main>
      <h2 className="recipe-name">
        {recipename}{" "}
        <span className="username">
          by{" "}
          <Link to={"/profile/" + username}>
            <h4 className="username-link">{username}</h4>
          </Link>{" "}
        </span>
      </h2>
      <img src={picture} alt="recipe" className="recipe-picture" />
      <div className="ingredients-container">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map(ingredient => {
            return <li>{ingredient}</li>;
          })}
        </ul>
      </div>
      <div className="instructions-container">
        <h3>Instructions</h3>
        <ol>
          {instructions.map(instruction => {
            return <li>{instruction}</li>;
          })}
        </ol>
      </div>
    </main>
  );
};

export default Recipe;
