import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <>
      <Container>
        <Form action="https://api.web3forms.com/submit" method="POST">
          <Form.Control
            type="hidden"
            name="access_key"
            value="12db8a49-36c0-4aaa-8837-1c37c62646e6"
          />
          <Form.Group className="mb-3" type="text" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={3} />
          </Form.Group>
          <Form.Control
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          <Button as="input" type="submit" value="Submit" />
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
