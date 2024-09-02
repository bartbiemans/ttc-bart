import {Col, Row} from "react-bootstrap";
import React from "react";

export const Youth = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Training</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Praktische regeling</b></h3>
                    <span>Onze jeugdtrainingen zijn er voor iedereen tussen 8 en 21 jaar. </span>
                    <ul>
                        <li>Beginners van 6 tot ongeveer 10 jaar trainen op woensdag van 18u tot 19u.
                            Meer gevorderde spelers trainen op woensdag van 19u tot 20u en op vrijdag van 18u30 tot 20u.
                        </li>
                        <li>Voor beginnende spelers voorzien we paletjes, je hebt enkel sportschoenen nodig.
                        </li>
                        <li>
                            Aansluitingsgeld bedraagt 40€. Onze jeugdleden drinken aan verminderd tarief in onze cafetaria.
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