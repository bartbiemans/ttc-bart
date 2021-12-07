import {Col, Row, Table} from "react-bootstrap"
import React from 'react';
import Image from "react-bootstrap/Image";

export const Board = () => {
    return (
        <>
            <Image src={'../../../bestuur.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
            <div className={'text-center'}>
                <h1 className={'secondary-text'}>Het bestuur</h1>
                <span>Bij vragen over de club kan u steeds terecht bij een van onderstaande bestuursleden. <br/> De mailadressen zijn niet vervolledigd om spam te vermijden.</span>
            </div>
            <Row>
                <Col xs={4}/>
                <Col xs={6}>
                    <div className={'d-flex justify-content-center board-table'}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Functie</th>
                                <th>Mail</th>
                                <th>GSM</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Joël Holsters</td>
                                <td>Voorzitter</td>
                                <td>holstersjoel@... ( gmail.com )</td>
                                <td>0476 58 61 12</td>
                            </tr>
                            <tr>
                               <td>Lieve Pillens</td>
                               <td>Secretaris</td>
                               <td>lieve_pillens@... ( yahoo.com )</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Filip Heijnemans</td>
                                <td>Penningmeester</td>
                                <td>filip.heijnemans@... (gmail.com)</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Lawrens Halens</td>
                                <td>Toogverantwoordelijke</td>
                                <td>lawrens.hales@... (hotmail.com)</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Thomas Jenné</td>
                                <td>Jeugdverantwoordelijke</td>
                                <td>thomas.jenne@... (hotmail.com)</td>
                                <td/>
                            </tr>
                            <tr>
                                <td>Guido Swaelen</td>
                                <td>Raadslid</td>
                                <td/>
                                <td/>
                            </tr>
                            <tr>
                                <td>Herman Rutten</td>
                                <td>Raadslid</td>
                                <td/>
                                <td/>
                            </tr>
                            </tbody>
                        </Table>

                    </div>
                </Col>
                <Col xs={2}/>
            </Row>

        </>
    )
}