import React from "react";
import Post from "./Post";
import MockRecipes from "../../MockData/MockRecipes";

const Feed = () => {
  return (
    <main>
      {MockRecipes.recipes.map((recipe, key) => {
        return <Post key={key} {...recipe} />;
      })}
    </main>
  );
};

export default Feed;
