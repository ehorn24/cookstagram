import React from "react";

const AddRecipe = () => {
  return (
    <main>
      <h2>New Recipe</h2>
      <form>
        <ul>
          <li>
            <label htmlFor="recipename">Recipe name</label>
            <input type="text" name="recipename" id="recipename" />
          </li>
          <li>
            <label htmlFor="picture">Upload a picture</label>
            <input type="file" name="picture" id="picture" />
          </li>
          <li>
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 1"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 2"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 3"
            />
            <input
              type="text"
              name="ingredient"
              id="ingredient"
              placeholder="Ingredient 4"
            />
            <button>Add an ingredient +</button>
          </li>
          <li>
            <label htmlFor="instructions">Instructions</label>
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 1"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 2"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 3"
            />
            <input
              type="text"
              name="instructions"
              id="instructions"
              placeholder="Step 4"
            />
            <button>Add a step +</button>
          </li>
        </ul>
        <button>Post recipe</button>
      </form>
    </main>
  );
};

export default AddRecipe;
