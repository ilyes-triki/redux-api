import { SEARCH } from "../constants/Search";
const initialState = {
  search: "",
};
export const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    default:
  }
  return state;
};
