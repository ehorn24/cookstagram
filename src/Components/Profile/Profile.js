import React from "react";
import MockUsers from "../../MockData/MockUsers";
import MockRecipes from "../../MockData/MockRecipes";

const Profile = ({ match }) => {
  let currentProfile = MockUsers.users.filter(
    user => user.username === match.params.username
  );
  let userRecipes = MockRecipes.recipes.filter(
    recipe => recipe.user === match.params.username
  );
  let { firstname, lastname, username, profilepicture } = currentProfile[0];

  return (
    <main>
      <section className="sidebar">
        <h1>
          {firstname} {lastname}
        </h1>
        <h2>{username}</h2>
        <img src={profilepicture} alt="profile" />
      </section>
      <section className="user-recipes">
        {userRecipes.map(recipe => {
          return <div>{recipe.recipename}</div>;
        })}
      </section>
    </main>
  );
};

export default Profile;
