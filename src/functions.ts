import { EDAMAM_API } from "./consts";

export const searchRecipe = async (
  ingredients: string,
  calories: string,
  setRecipes: Function,
) => {
  const response = await fetch(
    `${EDAMAM_API}q=${ingredients}&app_id=4a56c6f2&app_key=4fa2e7fa253e4057afc6666d972943ef&calories=${calories}`,
  );
  const json = await response.json();
  console.log(json.hits);
  if (setRecipes) {
    setRecipes(json.hits);
  }
};
