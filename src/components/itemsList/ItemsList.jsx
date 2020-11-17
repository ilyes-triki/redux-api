import React from "react";
import { useSelector } from "react-redux";
import Item from "../item/Item";
import "./ItemsList.css";

import CircularProgress from "@material-ui/core/CircularProgress";

function ItemsList() {
  const items = useSelector((state) => state.Items.items);
  const loading = useSelector((state) => state.Items.loading);
  return (
    <div className="items">
      {loading ? (
        <CircularProgress />
      ) : items === null ? (
        "Nothing To Show"
      ) : (
        items.map((el, i) => {
          return <Item key={i} item={el} />;
        })
      )}
    </div>
  );
}

export default ItemsList;
