import {Col, Row} from "react-bootstrap";
import React from "react";
import Image from 'react-bootstrap/Image'

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
                        <li>Trainingen gaan voor senioren door op woensdag, van 20u tot 21u. Jeugdleden trainen op
                            woensdag van 18u tot 19u (beginners) en op woensdga van 19u tot 20u (gevorderden). Op
                            vrijdag krijgen de gevorderden ook les van 18u30 tot 20u.
                        </li>
                        <li>
                            We voorzien twee “trainingsblokken”, van augustus tot half december, en van januari tot
                            einde april.
                        </li>
                    </ul>
                </Col>
            </Row>
            {/*<Row>*/}
            {/*   <Col md={6} className={'d-flex justify-content-center'}>*/}
            {/*       <Image className={'trainer-image'} src="../../winnaar1.jpg" roundedCircle={true}/>*/}
            {/*   </Col>*/}
            {/*    <Col md={6} className={'d-flex justify-content-center'}>*/}
            {/*        <Image className={'trainer-image'} src="../../winnaar1.jpg" roundedCircle={true}/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </>
    )
}