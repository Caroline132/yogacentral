import child from './img/child.svg';
import catCow from './img/catCow.svg';
import downDog from './img/downDog.svg';
import forwardChair from './img/forwardChair.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Results() {

  const history = useHistory();

  const { t } = useTranslation();

  const handleClick = () => {
      history.push('/build');
  }

  return (
    <div className="Results">
        <Container className="justify-content-center align-items-center mb-5">
            <Container className = "results-container px-5 pt-5 pb-4 mt-5">
                <Row className="">
                <Col className="text-center">
                    <div className="results-title text-md-start">{t("resultsTitle")}</div>
                    <Container className = "results-inner align-items-center mt-3 p-3">
                        <div className="list pb-2">
                        <p className="results-sequence">{t("pose1")}</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={child} />
                        </div>
                        <div className="list p-2">
                        <p className="results-sequence">{t("pose2")}</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={catCow} />
                        </div>
                        <div className="list p-2">
                        <p className="results-sequence">{t("pose3")}</p>
                        <div className="rectangle-11"></div>
                        <img className="pose" src={downDog} />
                        </div>
                        <div className="list-2 pt-2">
                        <p className="results-sequence">{t("pose4")}</p>
                        <div className="rectangle-11"></div>
                        <img className="pose-2" src={forwardChair} />
                        </div>
                    </Container>
                </Col>
                </Row>
                <Container className = "text-center">
                <Button className = "text-center results-button mt-4" type="submit" onClick={handleClick}>{t("goback")}</Button>
                </Container>

            </Container>
        </Container>
    </div>
  );
}

export default Results;
