import { SEARCH } from "../constants/Search";
export const SearchAction = (search) => {
  return {
    type: SEARCH,
    payload: search,
  };
};
