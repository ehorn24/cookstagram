import React from "react";

const RecipeThumbnail = ({ recipename, picture }) => {
  return (
    <div>
      <img src={picture} alt="recipe" />
      <p className="recipe-name">{recipename}</p>
    </div>
  );
};

export default RecipeThumbnail;
