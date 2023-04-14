import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INTIAL_STATE = { fashion_categories: [] };

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES: {
      return { ...state, fashion_categories: payload };
    }
    default:
      return state;
  }
};
