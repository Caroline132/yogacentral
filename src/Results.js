import child from './img/child.svg';
import catCow from './img/catCow.svg';
import downDog from './img/downDog.svg';
import forwardChair from './img/forwardChair.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";

function Results() {

  const history = useHistory();

  const handleClick = () => {
      history.push('/build');
  }

  return (
    <div className="Results">
        <Container className="justify-content-center align-items-center">
            <Container className = "results-container px-5 pt-5 pb-4 mt-5">
                <Row className="">
                <Col className="text-center">
                    <div className="results-title text-md-start">Here's your 5-minute yoga sequence</div>
                    <Container className = "results-inner align-items-center mt-3 p-3">
                        <div className="list pb-2">
                        <p className="results-sequence">1.  Child’s Pose (1 minute)</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={child} />
                        </div>
                        <div className="list p-2">
                        <p className="results-sequence">2. Cat Cow (1 minute)</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={catCow} />
                        </div>
                        <div className="list p-2">
                        <p className="results-sequence">3. Downward Facing Dog (1 minute)</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={downDog} />
                        </div>
                        <div className="list-2 pt-2">
                        <p className="results-sequence">4. Forward Fold to Chair Pose (2 minutes)</p>
                        <div className="rectangle-11"></div>
                        <img className="pose-2" src={forwardChair} />
                        </div>
                    </Container>
                </Col>
                </Row>
                <Container className = "results-inner-2 pt-2">
                    <div onClick={handleClick} className="overlap-group">
                            <div className="rectangle"></div>
                            <div className="go-back text-center">Go back</div>
                    </div>
                </Container>
            </Container>
        </Container>
    </div>
  );
}

export default Results;
