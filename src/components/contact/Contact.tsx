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
                               <iframe style={{border:"none"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9986.189119308796!2d4.4566028!3d51.2642444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c409fc125902cd%3A0xd0ce71c43dff7b5a!2sTTC%20Bart%20Merksem!5e0!3m2!1snl!2sbe!4v1693468508128!5m2!1snl!2sbe" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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