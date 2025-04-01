import { Card, Col, Container, Row } from "react-bootstrap";

const Books = ({ books }) => (
  <Container className="my-4">
    <Row xs={2} md={4} lg={6} className="g-4">
      {books.map((book) => (
        <Col key={book.asin}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title style={{ fontSize: "0.9rem" }}>
                {book.title}
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Books;
