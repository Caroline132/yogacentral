import 'bootstrap/dist/css/bootstrap.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { useTranslation } from "react-i18next";

function Build() {
    
  const history = useHistory();

  const { t } = useTranslation();

  const [difficulty, setdiff] = useState(true);
  const [goal, setgoal] = useState(true);

  const handleClick = () => {
      history.push('/results');
  }

  const handleClick2 = () => {
    setdiff(true);
  }
  
  const handleChange = () => {
    if(difficulty){
        setdiff(!difficulty);
    }
  }
  
  const handleChange2 = () => {
    setgoal(!goal);
  }

  const [ value, setValue ] = useState(0); 
  

  return (
    <div className="Home">
        <Container className="justify-content-center align-items-center">
            <Container className = "build-container px-5 pt-5 pb-4 mt-5">
                <Row className="">
                <Col className="text-center">
                    <div className="form-title text-md-start">{t("buildTitle")}</div>
                    <div className="build-paragraph text-md-start">{t("buildPara")}</div>
                    <Container className = "build-inner align-items-center mt-3 pt-3">
                        <Form className="form">
                            <Form.Group className="form-group mb-3" controlId="formBasicEmail1">
                                <Form.Label className="form-label">{t("difficulty")}</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={t("easy")}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                        checked={difficulty}
                                        onClick={handleClick2}
                                    />
                                    <Form.Check
                                        inline
                                        label={t("medium")}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        onChange={handleChange}
                                    />
                                    <Form.Check
                                        inline
                                        label={t("hard")}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-3`}
                                        onChange={handleChange}
                                    />
                                    </div>
                                ))}
                            </Form.Group>
                            <Row className="justify-content-md-center">
                                <Col md="auto">
                                <Form.Group className="slider-group" controlId="formBasicEmail2">
                                <Form.Label className="form-label">{t("length")}</Form.Label>
                                <RangeSlider
                                    class="slider"
                                    value={value}
                                    onChange={changeEvent => setValue(changeEvent.target.value)}
                                    max="30"
                                    tooltip = 'on'
                                    tooltipPlacement = 'bottom'
                                />
                                </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group className="form-group mb-3" controlId="formBasicEmail2">
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="form-label">{t("goal")}</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check
                                        inline
                                        label={t("exercise")}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label={t("stretch")}
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                        checked={goal}
                                        onChange={handleChange2}
                                    />
                                    <Form.Check
                                        inline
                                        label={t("anxiety")}
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
                <Container className = "text-center">
                    <Button className = "text-center build-button mt-4" type="submit" onClick={handleClick}>{t("buildButton")}</Button>
                </Container>
            </Container>
        </Container>
    </div>
  );
}

export default Build;
