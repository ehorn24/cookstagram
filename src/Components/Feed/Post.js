import React from "react";

const Post = ({ user, recipename, picture }) => {
  return (
    <div class="recipepost">
      <h2>{user}</h2>
      <img src={picture} alt="recipe" />
      <h4>{recipename}</h4>
    </div>
  );
};

export default Post;
