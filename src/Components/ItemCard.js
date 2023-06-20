import { Button, Col, Form } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
export const ItemCard = ({ id, src, name, handleComment, submitComment }) => {
  return (
    <Col md={3} className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={src} alt="Image" />
      </div>
      <p>{name}</p>
      <Form
        onSubmit={() => {
          submitComment(id, this);
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
    </Col>
  );
};
