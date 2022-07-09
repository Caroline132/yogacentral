import landing from './img/landing.svg';
import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const history = useHistory();

  const handleClick = () => {
      history.push('/build');
  }

  return (
    <div className="Home">
      <Container className = "mt-5">
        <Row className="justify-content-center align-items-center g-4">
          <Col lg={6} className="text-center text-lg-start p-5">
            <h1 className="quote my-4">{t("quote")}</h1>
            <div className="group">
            <Button className = "text-center home-button mb-5" type="submit" onClick={handleClick}>{t("homeButton")}</Button>
            </div>
          </Col>
          <Col className="text-center d-none d-md-block">
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
