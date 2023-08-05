import ProjectPicOne from "./Images/Profile_picture.jpeg";
import ProjectPicTwo from "./Images/Profile_picture.jpeg";
import ProjectPicThree from "./Images/Profile_picture.jpeg";
import ProjectPicFour from "./Images/Profile_picture.jpeg";
import ProjectPicFive from "./Images/Profile_picture.jpeg";
import ProjectPicSix from "./Images/Profile_picture.jpeg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Portfolio() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 4</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 5</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Project 6</Card.Title>
              <Card.Text>Copy/Paste from README</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Portfolio;
