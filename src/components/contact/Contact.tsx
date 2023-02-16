import Image from "react-bootstrap/Image";
import React from "react";
import {Col, Row} from "react-bootstrap";

export const Contact = () => {
    return (
        <>
            <Image src={'../../../bestuur.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
            <div className={'text-center'}>
                <h1 className={'secondary-text'}>Contact</h1>
                       <Row>
                           <Col xs={6}>
                               <h3>Adres</h3>
                               <div>Recreatiedomein Fort van merksem </div>
                               <div>Fortsteenweg  120 2170 merksem</div>
                               <div>Auto’s kunnen worden geparkeerd buiten het fort op de daarvoor voorziene parking. Ingang lokaal aan kant van petanquevelden. Lokaal bevindt zich op eerste verdieping (geen lift).</div>
                               <Image src={'../../../plattegrond.png'}/>
                           </Col>
                           <Col xs={6}>
                               <h3>Meer info nodig?</h3>
                               <div>Voor algemene info kunt u ons mailen op : <a href="mailto:ttcbartmerksembestuur@gmail.com">ttcbartmerksembestuur ( @gmail.com )</a></div>
                           </Col>
                       </Row>

            </div>
        </>
    )

}