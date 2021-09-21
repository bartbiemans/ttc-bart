import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import React from "react";

export const Training = () => {
    return (
        <>
            <Image src={'../../../training.jpg'} fluid style={{width: '100%'}}/>
            <h3 className={'text-center secondary-text'}>Training</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Praktische regeling</b></h3>
                    <span>De trainingen worden in onze club steeds verzorgd door een gediplomeerd trainer.</span>
                    <ul>
                        <li>De trainingen werken op inschrijving: als je je engageert, verwachten we dat je komt,
                            uitgezonderd heirkracht of ziekte.
                        </li>
                        <li>Trainingen gaan door op woensdag of vrijdag naargelang je groep, van 19u30 tot 21u. Er is
                            geen training tijdens de schoolvakanties.
                        </li>
                        <li>
                            We voorzien twee “trainingsblokken”, van augustus tot half december, en van januari tot
                            einde april. Voor elk trainingsblok vragen we een beperkte bijdrage van 20€.
                        </li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}