import axios from "axios";
import { GET_ITEM } from "../constants/GetItem";
export const GetItem = (id) => (dispatch) => {
  axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((ress) => {
      console.log(ress.data);
      dispatch({ type: GET_ITEM, payload: ress.data.drinks });
    })
    .catch((err) => console.log(err));
};
