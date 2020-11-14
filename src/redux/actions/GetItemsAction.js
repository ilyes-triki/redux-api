import { GET_ITEMS } from "../constants/GetItems";
import axios from "axios";
export const GetItems = () => (dispatch) => {
  axios
    .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((ress) => {
      console.log(ress.data);
      dispatch({ type: GET_ITEMS, payload: ress.data.drinks });
    })
    .catch((err) => console.log(err));
};
