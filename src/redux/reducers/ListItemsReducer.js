import { GET_ITEMS } from "../constants/GetItems";
const initialState = {
  items: [],
  loading: true,
};
export const ListItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    default:
      return state;
  }
};
