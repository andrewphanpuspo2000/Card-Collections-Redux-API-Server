import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { addCard } from "../redux/taskAction";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
export const FormInput = () => {
  const [newItem, setNewItem] = useState({});
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
    console.log(e.target);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = dispatch(addCard(newItem));
    console.log(result);
  };
  return (
    <Form className="bg-secondary" onSubmit={handleOnSubmit}>
      <Row className="p-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Item name"
            name="itemName"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="URL"
            name="url"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md={2}>
          <Button type="submit">Add card</Button>
        </Col>
      </Row>
    </Form>
  );
};
