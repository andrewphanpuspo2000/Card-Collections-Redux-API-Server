import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Product = () => {
  const { product } = useSelector((state) => state.itemArr);
  return (
    <div>
      <Row>
        <Col>
          <div>
            <img src={product.url} />
          </div>
        </Col>
        <Col>
          <div>{product.itemName}</div>
        </Col>
      </Row>
    </div>
  );
};
