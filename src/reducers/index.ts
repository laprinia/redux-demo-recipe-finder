import { SET_RECIPES } from "../actions";

export const recipes = (state = [], action: any) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
};
