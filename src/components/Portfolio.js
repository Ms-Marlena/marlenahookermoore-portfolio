import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import "../App.css";
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
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/Password-Generator"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href="https://ms-marlena.github.io/Password-Generator/"
                >
                  App
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
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/README-Generator"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href=" https://drive.google.com/file/d/1RlDyGs2xUisbCUy_H4nsnUGVOzuvq6tm/view"
                >
                  Walkthrough Video
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={require("../assets/images/screenshots/screenshot-p3.png")}
              alt={"screenshot of project 3"}
            />
            <Card.Body>
              <Card.Title>SVG Logo Generator</Card.Title>
              <Card.Text>
                {" "}
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/logoGenerator"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href="https://drive.google.com/file/d/1URYaUttk_RjP22ym_3h3GAHXA0PHQdth/view"
                >
                  Walkthrough Video
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
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/E-Commerce_Back-End"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/E-Commerce_Back-End"
                >
                  Video Walkthrough
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
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Ms-Marlena/url-regex-tutorial"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href="https://gist.github.com/Ms-Marlena/9a42796da22427b3a4e9a7d1b3268548Links to an external site."
                >
                  Gist Link
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
              <Card.Title>KidzDirect group project</Card.Title>
              <Card.Text>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Walter-Conwell/parentSchedulingApp"
                >
                  Repository
                </a>
                <br />
                <a
                  target="_blank" rel="noreferrer"
                  href="https://github.com/Walter-Conwell/parentSchedulingAppLinks to an external site."
                >
                  App
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Portfolio;
