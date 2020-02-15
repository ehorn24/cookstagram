import React from "react";
import MockUsers from "../../MockData/MockUsers";
import MockRecipes from "../../MockData/MockRecipes";
import RecipeThumbnail from "./RecipeThumbnail";

const Profile = ({ match }) => {
  let currentProfile = MockUsers.users.filter(
    user => user.username === match.params.username
  );
  let userRecipes = MockRecipes.recipes.filter(
    recipe => recipe.username === match.params.username
  );
  console.log(userRecipes);
  let {
    firstname,
    lastname,
    username,
    profilepicture,
    bio
  } = currentProfile[0];

  return (
    <main>
      <section className="sidebar">
        <h1 className="full-name">
          {firstname} {lastname}
        </h1>
        <h2 className="user-name">@{username}</h2>
        <img src={profilepicture} alt="profile" className="profile-picture" />
        <p className="bio">{bio}</p>
      </section>
      <section className="user-recipes">
        {userRecipes.map(recipe => {
          return <RecipeThumbnail {...recipe} />;
        })}
      </section>
    </main>
  );
};

export default Profile;
