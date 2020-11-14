import { combineReducers } from "redux";
import { ListItemsReducer } from "../reducers/ListItemsReducer";
import { ItemReducer } from "../reducers/ItemReducer";
import { SearchReducer } from "../reducers/SearchReducer";
export const RootReducer = combineReducers({
  Item: ItemReducer,
  Items: ListItemsReducer,
  Search: SearchReducer,
});
