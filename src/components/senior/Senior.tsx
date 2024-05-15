import {Col, Row} from "react-bootstrap";
import React from "react";

export const Senior = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Senioren</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <p>Onze club is er voor jong en oud. Elke donderdagmiddag, heel het jaar door, vanaf 14u tot …,
                        komen onze senior-recreanten samen om iets te drinken en een balletje te slaan op onze club.
                        Deze speelmiddag is een recreatieve middag waarbij gezelligheid en spelplezier centraal
                        staan. </p>
                    <p>Daarnaast biedt de club voor elke senior-recreant ook de mogelijkheid om training te volgen met
                        oefeningen aangepast aan niveau. Neem contact op met onze trainers als je graag eens wil
                        meetrainen.</p>
                </Col>
            </Row>
        </>
    )
}