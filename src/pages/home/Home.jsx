import ItemsList from "../../components/itemsList/ItemsList";
import React, { useEffect } from "react";
import { GetItems } from "../../redux/actions/GetItemsAction";
import { useDispatch } from "react-redux";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetItems());
  }, []);

  return (
    <div>
      <ItemsList />
    </div>
  );
}

export default Home;
