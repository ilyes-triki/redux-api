import ItemsList from "../../components/itemsList/ItemsList";
import React, { useEffect } from "react";
import { GetItems } from "../../redux/actions/GetItemsAction";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const search = useSelector((state) => state.Search.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetItems(search));
  }, []);

  return (
    <div>
      <ItemsList />
    </div>
  );
}

export default Home;
