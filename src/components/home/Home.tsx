import React from "react";
import Image from "react-bootstrap/Image";
import {Col, Row} from "react-bootstrap";
import {Announcement} from "../announcement/Announcement";

export const Home = () => {
    return (
        <div>
            <div style={{position: 'relative', textAlign: 'center'}}>
                <Image src={'../../../../legeTafel.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
                <h1 className={' d-none d-lg-block secondary-text'}
                    style={{position: 'absolute', top: '15%', left: '50%', transform: 'translate(-50%, -50%)'}}>TTC Bart Merksem</h1>
            </div>
            <Row>
                <Col className={'justify-content-center'}>
                    <h3 className={'text-center pt-2 secondary-text'}><b>De tofste club uit merksem en omstreken!</b>
                    </h3>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <Col lg={8}>
                    <p className={'text-center pt-2'}>Welkom op onze vernieuwe website. Hier kan u alle info
                        terugvinden over onze club</p>
                </Col>
            </Row>
            <Row>
                <Col lg={7} sm={10}>
                    <Announcement title={'Vernieuwde site!'}
                                  body={'Welkom op onze nieuwe site. Mocht u nog problemen hebben mag u altijd onze webmaster contacteren ( biemansbart@... ). Vervang de ... door gmail.com ( dit om automatische spam te vermijden )'}
                                  date={new Date(2021, 7, 21)}/>
                </Col>
                <Col lg={1}/>
                <Col lg={3} sm={0} className="pt-5 d-none d-lg-block">
                    <iframe title={'facebook'}
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTTCBartMerksem&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2817641565220366"
                            width="500" height="600" style={{border: 'none', overflow: 'hidden'}} frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
                </Col>
            </Row>
        </div>
    )
}