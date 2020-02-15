import React from "react";
import { Link } from "react-router-dom";

const Post = ({ user, recipename, picture }) => {
  return (
    <div class="recipepost">
      <Link to={"/profile/" + user}>
        <h2>{user}</h2>
      </Link>
      <Link to={"/recipe/" + recipename}>
        <img src={picture} alt="recipe" />
        <h4>{recipename}</h4>
      </Link>
    </div>
  );
};

export default Post;
