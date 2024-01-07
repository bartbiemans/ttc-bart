import {Col, Row} from "react-bootstrap";
import React from "react";

export const Teams = () => {
    return (
        <>
            <h3 className={'text-center secondary-text'}>Ploegen</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8} className={'text-center d-flex flex-column'}>
                    <div className={'team-text'}>
                        <pre><b>Ploeg A Afdeling 4  </b> Vincent Bart Noah</pre>
                        <pre><b>Ploeg B Afdeling 6  </b> Jöel Lode Jos Gert</pre>
                        <pre><b>Ploeg C Afdeling 7  </b> Thomas Levi Filip Arno</pre>
                        <pre><b>Ploeg D Afdeling 9A  </b> Lawrens Guido Koen Wouter</pre>
                        <pre><b>Ploeg E Afdeling 9B  </b> Nields Eduardo Emmanuel Jonas</pre>
                        <pre><b>Ploeg F Afdeling 11A  </b> Lieve Rudy Luc C. Ivo</pre>
                        <pre><b>Ploeg G Afdeling 11B  </b> Nathalie Jean Guy Luc D.</pre>
                    </div>
                </Col>
            </Row>
        </>
    )
}