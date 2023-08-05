import Form from 'react-bootstrap/Form';
import Footer from './Footer';

function Contact() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" type="text" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>
      <Footer />
      </>
  );
}

export default Contact;
