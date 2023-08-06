import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

function About() {
  return (
    <>
      <Stack gap={3}>
        <Container fluid>
          <Row>
            <Col md="auto">
              <div className="py-3 p-2">
                <img
                  src={require("../assets/images/headshots/MHM-headshot1.jpg")}
                  alt={"Marlena Hooker Moore, photo by Wendy Wood"}
                  width={200}
                ></img>
              </div>
            </Col>
          <Col>
          <div className="me-auto p-2">
            <p>
              Marlena Hooker Moore hails from King George County, Virginia. If
              you've never heard of it, that's ok. If you have heard of it, are
              you sure you aren't mixing it up with Prince George's County? <br />
                   Marlena trained as a musician and happily taught and performed
              music in the metro Denver area until she had a child of her own,
              whereupon she realized that there was something to be said for the
              reliability of a "day job." She then decided to do a whole career
              re-set and jumped into web development. <br />     Marlena figured that
              learning full-stack in its entirety would help her to choose the
              area for which she is best suited. Now that class is completed,
              she is looking forward to working her way up in this exciting new
              career!
            </p>{" "}
              </div>
              </Col>
          </Row>
        </Container>
      </Stack>
      <Footer />
    </>
  );
}

export default About;



  
