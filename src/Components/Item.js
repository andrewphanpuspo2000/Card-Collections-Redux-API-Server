import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { retrieveData } from "../redux/taskAction";
import { ItemCard } from "./ItemCard";

export const Item = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.itemArr);
  //items come from reduxSlice
  const { items } = data;

  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-center">Cards</h2>
      <Row>
        {items.length > 0 &&
          items.map((item, i) => (
            <ItemCard key={i} src={item.url} name={item.itemName} />
          ))}
      </Row>
    </div>
  );
};
