import Form from 'react-bootstrap/Form';
import Header from './Header';

function Contact() {
  return (
    <>
      <Header />
    <Form>
      <Form.Group className="mb-3" type="text" controlId="contactName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="input" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="contactMessage">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      </Form>
      <Footer />
      </>
  );
}

export default Contact;
