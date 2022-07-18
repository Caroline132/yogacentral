import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import registerImage from './img/registerImage.svg';
 import { useState } from 'react';
 import { useTranslation } from "react-i18next";

function Register() {

  const history = useHistory();
  const { t } = useTranslation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
        history.push('/confirmation');
    }

    setValidated(true);
  };

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center py-5">
            <Row>
                <Col lg={5} >
                    <Container className = "register-container px-5 pt-5 pb-4 mt-3">
                    <Row className="">
                    <Col className="text-center">
                        <div className="form-title text-md-start">{t("registerTitle")}</div>
                        <div className="register-paragraph text-md-start">{t("registerPara")}</div>
                        <Container className = "register-inner align-items-center mt-3 py-3">
                            <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="form-group-2 mb-3 py-2" controlId="formBasicEmail1">
                                    <Form.Control type="text" placeholder={t("namePH")} required/>
                                    <Form.Control.Feedback type="invalid">
                                    {t("registerNameError")}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="form-group-2 mb-3 py-2" controlId="formBasicEmail2">
                                    <Form.Control type="text" placeholder={t("emailPH")} pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" required/>
                                    <Form.Control.Feedback type="invalid">
                                    {t("registerEmailError")}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="date" className="form-group-2 mb-3 py-2">
                                <Form.Label>{t("practiceType")}</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    <option value="1">{t("yoga")}</option>
                                    <option value="2">{t("meditation")}</option>
                                </Form.Select>
                                </Form.Group>
                                <Form.Group controlId="" className="form-group-2 mb-3 py-2">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control 
                                        type="date" 
                                        name="date" 
                                        defaultValue=""
                                        placeholder="Date of registration" 
                                        onChange={(e) => this.props.onChange(e)} required/>
                                    <Form.Control.Feedback type="invalid">
                                    {t("registerDateError")}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="time" className="pt-2">
                                    <Form.Label>{t("time")}</Form.Label>
                                    <Form.Control 
                                        type="time" 
                                        name="doj" 
                                        defaultValue=""
                                        placeholder="Time of Joining" 
                                        onChange={(e) => this.props.onChange(e)} required/>
                                    <Form.Control.Feedback type="invalid">
                                    {t("registerTimeError")}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button className = "register-button mt-4" type="submit">{t("register")}</Button>
                            </Form>
                        </Container>
                    </Col>
                    </Row>
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
