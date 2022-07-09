import { Accordion, Card, Row } from "react-bootstrap";
import { Component } from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
    const { t } = useTranslation();
    return ( 
        <div className="faq">
            <Row className="justify-content-center pt-5">
                <Accordion className= "justify-content-center col-12 col-sm-10 col-lg-8" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>{t("q1")}</Accordion.Header>
                        <Accordion.Body>
                        {t("a1")}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>{t("q2")}</Accordion.Header>
                        <Accordion.Body>
                            <p>{t("a2_1")}</p>

                            <p>{t("a2_2")}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>{t("q3")}</Accordion.Header>
                        <Accordion.Body>
                            <p>{t("a3_1")}</p>
                            
                            <p>{t("a3_2")}</p>

                            <p>{t("a3_3")}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>{t("q4")}</Accordion.Header>
                        <Accordion.Body>
                            <p>{t("a4")}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </div>
     );
}
 
export default FAQ;