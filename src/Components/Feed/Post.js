import React from "react";

const Post = ({ user, recipename, picture }) => {
  return (
    <div>
      <h2>{user}</h2>
      <h4>{recipename}</h4>
      <img src={picture} alt="recipe" />
    </div>
  );
};

export default Post;
