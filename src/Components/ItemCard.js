import { Button, Col, Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";

import { Link } from "react-router-dom";
import { addProd } from "../redux/taskAction";
import { useDispatch } from "react-redux";
export const ItemCard = ({
  id,
  src,
  name,
  handleComment,
  submitComment,
  comment,
}) => {
  const proInfo = {
    _id: id,
    url: src,
    itemName: name,
    comment: comment,
  };
  const dispatch = useDispatch();
  const sendToProductPage = (item) => {
    console.log("sendToProductPage is running");
    const pushItem = dispatch(addProd(item));
  };

  return (
    <Col md={3} className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={src} alt="Image" />
      </div>
      <p>{name}</p>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submitComment(id);
        }}
      >
        <FloatingLabel
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            onChange={handleComment}
            required
          />
        </FloatingLabel>
        <Button type="submit">Add Comment</Button>
      </Form>
      <Link to="/product">
        <Button
          onClick={() => {
            sendToProductPage(proInfo);
          }}
        >
          to product
        </Button>
      </Link>
      <p>{comment.length}</p>
    </Col>
  );
};
