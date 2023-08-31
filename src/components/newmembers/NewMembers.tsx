import Image from "react-bootstrap/Image";
import React from "react";
import {Col, Row} from "react-bootstrap";

export const NewMembers = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Info voor nieuwe leden</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Voor wie?</b></h3>
                    <p>
                        Iedereen! Tafeltennis is een sport voor zowel jong als oud. Wij hebben leden die beginnen op
                        hun 12, terwijl anderen er pas na hun pensioen mee beginnen!
                        Iedereen heeft steeds de mogelijkheid om, vooraleer het lidgeld te betalen, drie keer te
                        komen proeven op een speelavond.
                        Aansluiten kan het ganse seizoen, na nieuwjaar gelden gereduceerde lidgeldtarieven.
                    </p>
                </Col>
            </Row>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Praktische info</b></h3>
                    <p>
                        Beginnende spelers kunnen een paletje van de club gebruiken.
                        Bij aansluiting als competitielid voorzien we één gratis truitje. Voorzie ook propere
                        sportschoenen, d.w.z. schoenen die niet gebruikt zijn om buiten te sporten. Buiten het
                        competitieseizoen kunnen al onze leden op dinsdagavond vrij komen spelen. Daarnaast spelen we
                        het hele jaar door op donderdagmiddag vanaf 13u30.
                    </p>
                </Col>
            </Row>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8}>
                    <h3 className={'pt-2'}><b>Prijzen</b></h3>
                    <span>Lidgeld Seniors</span>
                    <ul>
                       <li>70€</li>
                       <li>Competitie op maandag & dinsdag avond</li>
                    </ul>
                    <span>Lidgeld Jeugd</span>
                    <ul>
                       <li>40€</li>
                       <li>Competitie op zaterdagvoormiddag</li>
                    </ul>
                    <span>Lidgeld recreant</span>
                    <ul>
                       <li>40€</li>
                       <li>Recreanten kunnen invallen bij de competitiespelers, meld dit even bij het inschrijven</li>
                    </ul>
                    <span>Buiten competitieseizoen</span>
                    <ul>
                       <li>Vrij spelen op dinsdagavond en donderdagnamiddag</li>
                    </ul>
                </Col>
            </Row>
        </>
    )
}