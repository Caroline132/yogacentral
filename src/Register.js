import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import registerImage from './img/registerImage.svg';

function Register() {

  const history = useHistory();

  const handleClick = () => {
      history.push('/confirmation');
  }

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center p-5">
            <Row>
                <Col lg={6} >
                    <Container className = "register-container px-5 pt-5 pb-4 mt-5">
                    <Row className="">
                    <Col className="text-center">
                        <div className="form-title text-md-start">Register for a class</div>
                        <div className="register-paragraph text-md-start">We deliver personal Zoom sessions to practice your yoga and meditation skills.</div>
                        <Container className = "register-inner align-items-center mt-3 py-3">
                            <Form className="form">
                                <Form.Group className="form-group-2 mb-3 py-2" controlId="formBasicEmail1">
                                    <Form.Control type="name" placeholder="name" />
                                </Form.Group>
                                <Form.Group className="form-group-2 mb-3 py-2" controlId="formBasicEmail2">
                                    <Form.Control type="email" placeholder="email" />
                                </Form.Group>
                                <Form.Group controlId="date" className="form-group-2 mb-3 py-2">
                                <Form.Label>Practice Type</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">Yoga</option>
                                    <option value="2">Meditation</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="date" className="form-group-2 mb-3 py-2">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control 
                                        type="date" 
                                        name="date" 
                                        defaultValue=""
                                        placeholder="Date of registration" 
                                        onChange={(e) => this.props.onChange(e)} />
                                </Form.Group>
                                <Form.Group controlId="time" className="pt-2">
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control 
                                        type="time" 
                                        name="doj" 
                                        defaultValue=""
                                        placeholder="Time of Joining" 
                                        onChange={(e) => this.props.onChange(e)} />
                                </Form.Group>
                            </Form>
                        </Container>
                    </Col>
                    </Row>
                    <Container className = "results-inner-2 pt-2">
                        <div onClick={handleClick} className="overlap-group">
                                <div className="register-rectangle"></div>
                                <div className="register-text text-center">Register</div>
                        </div>
                    </Container>
                </Container>
                </Col>
                <Col lg={5} className="d-none d-md-block pt-5">
                    <img className="pose-2" src={registerImage} />
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Register;
