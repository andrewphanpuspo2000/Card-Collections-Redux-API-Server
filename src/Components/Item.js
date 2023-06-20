import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { putComment, retrieveData } from "../redux/taskAction";
import { ItemCard } from "./ItemCard";

export const Item = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.itemArr);
  //items come from reduxSlice
  const { items } = data;
  const [comment, setComment] = useState("");

  const handleOnComment = (e) => {
    const { value } = e.target;
    setComment(value);
    console.log(comment);
  };
  const submitComment = async (id, e) => {
    // e.preventDefault();
    const push = dispatch(putComment({ _id: id, comment: comment }));
    if (push === "success") setComment("");
  };

  useEffect(() => {
    dispatch(retrieveData());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-center">Cards</h2>
      <Row>
        {items.length > 0 &&
          items.map((item, i) => (
            <ItemCard
              key={i}
              id={item._id}
              src={item.url}
              name={item.itemName}
              handleComment={handleOnComment}
              submitComment={submitComment}
            />
          ))}
      </Row>
    </div>
  );
};
