import React from "react";
import { Link } from "react-router-dom";

const RecipeThumbnail = ({ recipename, picture }) => {
  return (
    <Link to={"/recipe/" + recipename}>
      <div className="thumbnail">
        <img src={picture} alt="recipe" className="thumbnail-picture" />
        <p className="recipe-name">{recipename}</p>
      </div>
    </Link>
  );
};

export default RecipeThumbnail;
