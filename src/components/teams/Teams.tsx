import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import React from "react";

export const Teams = () => {
    return (
        <>
            <Image src={'../../../nieuweLeden.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
            <h3 className={'text-center secondary-text'}>Ploegen</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8} className={'text-center d-flex flex-column'}>
                    <div className={'team-text'}>
                        <pre><b>Ploeg A Afdeling 5  </b> Vincent Bart Gert Noah</pre>
                        <pre><b>Ploeg B Afdeling 6  </b> Jöel Lode Jos</pre>
                        <pre><b>Ploeg C Afdeling 8A  </b> Thomas Levi Filip Arno</pre>
                        <pre><b>Ploeg D Afdeling 9A  </b> Guido Ivo Niels Theo</pre>
                        <pre><b>Ploeg E Afdeling 10A  </b> Lawrens Wouter Sam Koen Dietwald</pre>
                        <pre><b>Ploeg F Afdeling 11A  </b> Karel Eduardo Jean Nathalie</pre>
                        <pre><b>Ploeg G Afdeling 11B  </b> Lieve Rudy Luc C. Luc D.</pre>
                        <pre><b>Ploeg H Afdeling 11A  </b> Guy Jonas Emmanuel Mick</pre>
                    </div>
                </Col>
            </Row>
        </>
    )
}