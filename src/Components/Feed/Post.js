import React from "react";
import { Link } from "react-router-dom";
import MockUsers from "../../MockData/MockUsers";

const Post = ({ username, recipename, picture }) => {
  let postUser = MockUsers.users.filter(user => user.username === username);
  let userPicture = postUser[0].profilepicture;
  return (
    <div className="recipepost">
      <Link to={"/profile/" + username}>
        <div className="user-pic-container">
          <img className="user-pic" src={userPicture} alt="profilepic" />
        </div>
        <h2 className="post-user">{username}</h2>
      </Link>
      <Link to={"/recipe/" + recipename}>
        <img className="recipe-picture" src={picture} alt="recipe" />
        <h4 className="caption">{recipename}</h4>
      </Link>
    </div>
  );
};

export default Post;
