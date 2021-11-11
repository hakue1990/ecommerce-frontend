import { Form, Button } from 'react-bootstrap';
const ContactScreen = () => (
  <>
    <Form>
      <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
        <Form.Label>email</Form.Label>
        <Form.Control type='email' placeholder='imie@protonmail.com' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
        <Form.Label>naszpisz do nas :)</Form.Label>
        <Form.Control as='textarea' rows={3} />
      </Form.Group>
      <Button variant='primary'>wyślij</Button>
    </Form>
  </>
);

export default ContactScreen;
