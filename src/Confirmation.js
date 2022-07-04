import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import confirmationImage from './img/confirmationImage.svg';

function Confirmation() {

  const history = useHistory();

  const handleClick = () => {
      history.push('/');
  }

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center">
            <Container className = "confirmation-container px-5 pt-5 pb-4 mt-5">
                <Col className="text-center">
                    <div className="form-title">Registration confirmed!</div>
                    <div className="confirmation-paragraph">We’ll get in touch shortly.</div>
                    <Container className = "confirmation-inner-2 pt-2">
                        <div onClick={handleClick} className="overlap-group">
                                <div className="confirmation-rectangle"></div>
                                <div className="confirmation-text text-center">OK</div>
                        </div>
                    </Container>
                </Col>
            </Container>
            <Container className = "confirmation-image d-none d-md-flex">
                    <img className="pose-2" src={confirmationImage} />
            </Container>
        </Container>
    </div>
  );
}

export default Confirmation;
