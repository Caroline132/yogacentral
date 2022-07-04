import { Accordion, Card, Row } from "react-bootstrap";
import { Component } from "react";

const FAQ = () => {
    return ( 
        <div className="faq">
            <Row className="justify-content-center pt-5">
                <Accordion className= "justify-content-center col-12 col-sm-10 col-lg-8" defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Do I need any equipment?</Accordion.Header>
                        <Accordion.Body>
                            No, YogaCentral is build around portability. You can just build a sequence and then start flowing. If you would like to add a yoga mat for comfort, that could be useful. Also, for beginners, you could buy a block to help with more challenging poses.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Where should I start?</Accordion.Header>
                        <Accordion.Body>
                            <p>If you are new to yoga, I would start off by selecting an easy sequence that is short in length and you can select any goal you want. </p>

                            <p>This will allow you to gain a good foundation in yoga and slowly improve your skills.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How are the registered classes structured?</Accordion.Header>
                        <Accordion.Body>
                            <p>Our team of experts will email you with an available time to meet up. Then, you will join a zoom call and the instructor will help you with your needs.</p>
                            
                            <p>The Yoga sessions are 30 minutes long and you select the format. You can select a nice flow (to relax, energize, stretch, etc.) or you can get help on certain postures.</p>

                            <p>The meditation sessions are 15 minutes long and the instructor will guide you through a meditation practice. You can mention to your instructor the type of meditation you prefer.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Do I need to pay for the registered classes?</Accordion.Header>
                        <Accordion.Body>
                            <p>Our classes are 100% free! We aim to provide free yogo and meditation classes to individuals. We believe that there's a great need for such services and offering them for free is crucial for them to be accessible for all.</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </div>
     );
}
 
export default FAQ;