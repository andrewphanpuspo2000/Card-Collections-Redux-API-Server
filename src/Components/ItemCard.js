import { Col } from "react-bootstrap";

export const ItemCard = ({ src, name }) => {
  return (
    <Col md={3} className="card-wrapper">
      <div className="card-image-wrapper">
        <img src={src} alt="Image" />
      </div>
      <p>{name}</p>
    </Col>
  );
};
