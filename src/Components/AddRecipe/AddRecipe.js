import React from "react";

const AddRecipe = () => {
  return (
    <main className="add-recipe-page">
      <div>
        <p className="static-message">
          Due to time constraints, this feature is not fully functional yet.
        </p>
      </div>
      <h2 className="title">New Recipe</h2>
      <form className="recipe-form">
        <ul className="recipe-fields">
          <li className="field">
            <label htmlFor="recipename">Recipe name</label>
            <input
              type="text"
              name="recipename"
              id="recipename"
              className="input-field"
            />
          </li>
          <li className="field">
            <label htmlFor="picture">Upload a picture</label>
            <input
              type="file"
              name="picture"
              id="picture"
              className="input-field"
            />
          </li>
          <li className="field">
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 1"
              className="input-field"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 2"
              className="input-field"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 3"
              className="input-field"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 4"
              className="input-field"
            />
            <button className="add-button">Add an ingredient +</button>
          </li>
          <li className="field">
            <label htmlFor="instructions">Instructions</label>
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 1"
              className="input-field"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 2"
              className="input-field"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 3"
              className="input-field"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 4"
              className="input-field"
            />
            <button className="add-button">Add a step +</button>
          </li>
        </ul>
        <button className="post-button">Post recipe</button>
      </form>
    </main>
  );
};

export default AddRecipe;
