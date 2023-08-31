import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import React from "react";

export const Youth = () => {
    return (
        <>
            <Image src={'../../../training.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
            <h3 className={'text-center secondary-text'}>Training</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Praktische regeling</b></h3>
                    <span>Onze jeugdtrainingen zijn er voor iedereen tussen 8 en 21 jaar. </span>
                    <ul>
                        <li>We trainen op vrijdagavond van 18u tot 20u30. Je eerste twee keer trainen zijn gratis en zonder verplichtingen!
                        </li>
                        <li>Voor beginnende spelers voorzien we paletjes, je hebt enkel sportschoenen nodig.
                        </li>
                        <li>
                            Aansluitingsgeld bedraagt 40€, trainingsgeld 20€ per half jaar (augustus-december en januari – april). Onze jeugdleden drinken aan verminderd tarief in onze cafetaria.
                        </li>
                        <li>
                            Competitie spelen kan, maar is nooit verplicht. De jeugdcompetitie gaat door op zaterdag van 9u30 tot ongeveer 12u, en wisselt tussen thuis en op verplaatsing.
                            Vragen over de jeugdtraining? Contacteer jeugdtrainer Thomas Jenné op 0496 15 01 37 of ttcbartmerksembestuur@gmail.com.
                        </li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}