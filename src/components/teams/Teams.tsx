import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import React from "react";

export const Teams = () => {
    return (
        <>
            <Image src={'../../../nieuweLeden.jpg'} fluid style={{width: '100%'}}/>
            <h3 className={'text-center secondary-text'}>Ploegen</h3>
            <Row className={'d-flex justify-content-center pt-2 ml-2 mr-2'}>
                <Col lg={8} className={'text-center d-flex flex-column'}>
                    <div className={'team-text'}>
                        <pre><b>Ploeg A Afdeling 6  </b> Vincent Bart Gert Noah</pre>
                        <pre><b>Ploeg B Afdeling 7A  </b> Jöel Lode Jos Cristophe</pre>
                        <pre><b>Ploeg C Afdeling 8A  </b> Thomas Levi Filip Arno</pre>
                        <pre><b>Ploeg D Afdeling 9A  </b> Guido Ivo Niels</pre>
                        <pre><b>Ploeg E Afdeling 10A  </b> Lawrens Wouter Sam Vince Dietwald</pre>
                        <pre><b>Ploeg F Afdeling 10B  </b> Karel Koen Johan Theo</pre>
                        <pre><b>Ploeg G Afdeling 11A  </b> Rob Toon Kevin Dominique</pre>
                        <pre><b>Ploeg H Afdeling 12  </b> Lieve Rudy Luc</pre>
                        <pre><b>Ploeg I Afdeling 12  </b> Jonas Emmanuel Mick Guy</pre>
                        <pre><b>Ploeg J Afdeling 12 </b> Eduardo Nathalie Jean</pre>
                    </div>
                </Col>
            </Row>
        </>
    )
}