import landing from './img/landing.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";

function Build() {

  const history = useHistory();

  const handleClick = () => {
      history.push('/results');
  }

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center">
            <Container className = "build-container px-5 pt-5 pb-4 mt-5">
                <Row className="">
                <Col className="text-center">
                    <div className="form-title text-md-start">Build Your Own Yoga Sequence</div>
                    <div className="build-paragraph text-md-start">Fill out the questionnaire below and we’ll create a tailored yoga sequence just for you!</div>
                    <Container className = "build-inner align-items-center mt-3 pt-3">
                        <Form className="form">
                            <Form.Group className="form-group mb-3" controlId="formBasicEmail1">
                                <Form.Label className="form-label">Difficulty</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Easy"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Medium"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Hard"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    </div>
                                ))}
                            </Form.Group>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                <Form.Group className="mb-3" controlId="formBasicEmail2">
                                <Form.Label className="form-label">Length</Form.Label>
                                <Form.Range type="range" class="form-range" min="0" max="60"/>
                            </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="form-group mb-3" controlId="formBasicEmail2">
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form-label">Goal</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label="Excercise"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Stretch"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Relieve Anxiety"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                    </div>
                                ))}
                            </Form.Group>
                        </Form>
                    </Container>
                </Col>
                </Row>
                <Container className = "build-inner-2 pt-2">
                    <div onClick={handleClick} className="overlap-group-5">
                            <div className="rectangle-1-1"></div>
                            <div className="build-sequence">Build Sequence</div>
                    </div>
                </Container>
            </Container>
        </Container>
    </div>
  );
}

export default Build;
