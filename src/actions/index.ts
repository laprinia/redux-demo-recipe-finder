export const SET_RECIPES = "SET_RECIPES";

export function setRecipes(items: any) {
  return {
    type: SET_RECIPES,
    items,
  };
}
