import { GET_ITEM } from "../constants/GetItem";
const initialState = {
  item: [],
  loadingItem: true,
};
export const ItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return {
        ...state,
        loadingItem: false,
        item: action.payload,
      };

    default:
  }
  return {
    state,
  };
};
