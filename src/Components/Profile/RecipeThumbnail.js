import React from "react";

const RecipeThumbnail = ({ recipename, picture }) => {
  return (
    <div className="thumbnail">
      <img src={picture} alt="recipe" className="thumbnail-picture" />
      <p className="recipe-name">{recipename}</p>
    </div>
  );
};

export default RecipeThumbnail;
