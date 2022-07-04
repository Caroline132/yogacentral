import landing from './img/landing.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";

function Home() {

  const history = useHistory();

  const handleClick = () => {
      history.push('/build');
  }

  return (
    <div className="Home">
    <Container className = "p-5">
        <Row className="g-4 justify-content-center align-items-center">
          <Col lg={5} className="text-center text-md-start">
            <div className="overlap-group2-1">
                <h1 className="quote">When you listen to yourself, everything comes naturally.</h1>
                  <div className="group-15">
                    <div className="overlap-group-1">
                      <div className="start-your-journey" onClick={handleClick}>START YOUR JOURNEY</div>
                    </div>
                  </div>
              </div>
          </Col>
          <Col lg={5} className="text-center d-none d-md-block">
              <img
                src={landing}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
