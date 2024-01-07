import {Col, Row} from "react-bootstrap";
import React from "react";

export const Training = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Training</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Praktische regeling</b></h3>
                    <span>De trainingen worden in onze club steeds verzorgd door een gediplomeerd trainer.</span>
                    <ul>
                        <li>De trainingen werken op inschrijving: als je je engageert, verwachten we dat je komt,
                            uitgezonderd heirkracht of ziekte.
                        </li>
                        <li>Trainingen gaan voor senioren door op woensdag in twee groepen, van 19u tot 20u30 en van 20u45 tot 22u15. Jeugdleden trainen op vrijdag van 18u30 tot 20u.
                            De senioren krijgen training van Jacques Van Mirlo. De jeugd krijgt training van Thomas Jenné. Beide trainers zijn gediplomeerde initiators tafeltennis.
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