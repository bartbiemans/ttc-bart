import React from "react";
import {Col, Row} from "react-bootstrap";
import {Announcement} from "../announcement/Announcement";

export const Home = () => {
    return (
        <div>
            <Row>
                <Col className={'justify-content-center'}>
                    <h3 className={'text-center pt-2 secondary-text'}><b>De tofste club uit merksem en omstreken!</b>
                    </h3>
                </Col>
            </Row>
            <Row className={'justify-content-center'}>
                <Col lg={8}>
                    <p className={'text-center pt-2'}>Welkom op onze vernieuwde website. Hier kan u alle info
                        terugvinden over onze club</p>
                </Col>
            </Row>
            <Row>
                <Col lg={7} sm={10}>
                    <Announcement title={'Kampioenschap Fort van Merksem 2023!'}
                                  body={'Vorig jaar werd het Kampioenschat van het Fort van Merksem voor het eerst georganiseerd door Koninklijke Sevos TTC. Dit jaar was het aan ons, en met een opkomst van 25 spelers we mogen het een geslaagde editie noemen!\n' +
                                      'In zowel de kwart als de halve finales bleven Sevos en Bart Merksem aan elkaar gewaagd in elke reeks, met vooral in D-reeks enkele matchen die gevolgd werden op het puntje van onze stoel, maar de finales kleurden dit jaar helemaal blauw. In de reeks NG-F won Jean van Jonas met 3-0, in de reeks E won Wouter van Levi met 3-2, en in de reeks D won Noah van Arno met 3-1.\n' +
                                      'Voor de organisatie van volgend jaar geven we de fakkel terug door aan Sevos, we kijken er al naar uit!\n'}
                                  date={new Date(2023, 12, 29)}
                    images={['../../winnaar1.jpg','../../winnaar2.jpg','../../winnaar3.jpg']}/>
                    <Announcement title={'Erkende sportclub!'}
                                  body={'Nieuwtje: vanaf juli 2023 is TTC Bart Merksem erkend als sportclub door de Stad Antwerpen! Dat wil zeggen dat we hun veiligheidsscan hebben doorlopen en hun waardeverklaringen hebben ondertekend. Op onze toog kan je nu het “erkende sportclub”-bordje zien staan.'}
                                  date={new Date(2023, 8, 31)}/>
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