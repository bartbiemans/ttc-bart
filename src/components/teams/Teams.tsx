import {Col, Row} from "react-bootstrap";
import React from "react";

export const Teams = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Ploegen</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8} className={'text-center d-flex flex-column'}>
                    <div className={'team-text'}>
                        <pre><b>Ploeg A Afdeling 3  </b> Vincent Bart Noah Arno</pre>
                        <pre><b>Ploeg B Afdeling 5A  </b> Jöel Levi Jos Gert</pre>
                        <pre><b>Ploeg C Afdeling 5B  </b> Thomas Lode Eduardo Filip</pre>
                        <pre><b>Ploeg D Afdeling 7A  </b> Guido Lawrens Johan Koen Wouter</pre>
                        <pre><b>Ploeg E Afdeling 7B  </b> Glenn Emmanuel Jonas Niels</pre>
                        <pre><b>Ploeg F Afdeling 9A  </b> Lieve Rudy Jean Nathalie</pre>
                        <pre><b>Ploeg G Afdeling 9B  </b> Luc Guy Els</pre>
                        <pre><b>Jeugd A Afdeling 5  </b> Rinus Trever Levin Tristan Xander</pre>
                    </div>
                </Col>
            </Row>
        </>
    )
}