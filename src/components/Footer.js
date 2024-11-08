import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col size={12} className="text-center">
            <p>&copy; 2024 Priyanka. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
