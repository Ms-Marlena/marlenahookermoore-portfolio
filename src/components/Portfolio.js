import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Portfolio() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p1.png")}
              alt={"screenshot of project 1"}
            />
            <Card.Body>
              <Card.Title>Password Generator</Card.Title>
              <Card.Text>
                <a target="_blank" href="https://google.com">
                  Repository
                </a>{" "}
                <a target="_blank" href="https://google.com">
                  Deployed App / Video Walkthrough
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p2.png")}
              alt={"screenshot of project 2"}
            />
            <Card.Body>
              <Card.Title>README Generator</Card.Title>
              <Card.Text>
                {" "}
                <a target="_blank" href="https://google.com">
                  REpository
                </a>{" "}
                <a target="_blank" href="https://google.com">
                  Deployed App / Video Walkthrough
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p3.svg")}
              alt={"screenshot of project 3"}
            />
            <Card.Body>
              <Card.Title>SVG Logo Generator</Card.Title>
              <Card.Text>
                {" "}
                <a target="_blank" href="https://google.com">
                  Repository
                </a>{" "}
                <a target="_blank" href="https://google.com">
                  Deployed App / Video Walkthrough
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p4.png")}
              alt={"screenshot of project 4"}
            />
            <Card.Body>
              <Card.Title>E-Commerce Back End</Card.Title>
              <Card.Text>
                {" "}
                <a target="_blank" href="https://google.com">
                  Repository
                </a>{" "}
                <a target="_blank" href="https://google.com">
                  Deployed App / Video Walkthrough
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p5.png")}
              alt={"screenshot of project 5"}
            />
            <Card.Body>
              <Card.Title>Regex Tutorial</Card.Title>
              <Card.Text>
                {" "}
                <a target="_blank" href="https://google.com">
                  Repository
                </a>{" "}
                <a target="_blank" href="https://google.com">
                  Gist 
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p6.png")}
              alt={"screenshot of project 6"}
            />
            <Card.Body>
              <Card.Title>KidzDirect</Card.Title>
              <Card.Text>Full-stack MERN Application</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Portfolio;
