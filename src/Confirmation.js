import 'bootstrap/dist/css/bootstrap.css'
import { Container, Col, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import confirmationImage from './img/confirmationImage.svg';
import { useTranslation } from "react-i18next";

function Confirmation() {

  const history = useHistory();

  const { t } = useTranslation();

  const handleClick = () => {
      history.push('/');
  }

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center py-2">
            <Container className = "confirmation-container px-5 pt-5 pb-4 mt-4">
                <Col className="text-center">
                    <div className="form-title">{t("confirmTitle")}</div>
                    <div className="confirmation-paragraph">{t("confirmPara")}</div>
                    <Button className = "confirmation-button mt-4" type="submit" onClick={handleClick}>{t("ok")}</Button>
                </Col>
            </Container>
            <Container className = "confirmation-image d-none d-lg-flex">
                    <img className="pose-2" src={confirmationImage} />
            </Container>
        </Container>
    </div>
  );
}

export default Confirmation;
