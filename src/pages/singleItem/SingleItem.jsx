import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetItem } from "../../redux/actions/GetItemAction";
import ItemDetails from "../../components/itemDetails/ItemDetails";
import CircularProgress from "@material-ui/core/CircularProgress";

function SingleItem(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetItem(props.match.params.id));
  }, []);

  const loading = useSelector((state) => state.Item.loadingItem);
  const item = useSelector((state) => state.Item.state.item);
  return (
    <div>{loading ? <CircularProgress /> : <ItemDetails item={item} />}</div>
  );
}

export default SingleItem;
