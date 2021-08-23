import {Col, Row, Table} from "react-bootstrap"
import React from 'react';
import Image from "react-bootstrap/Image";

export const Board = () => {
    return (
        <>
            <Image src={'../../../bestuur.jpg'} fluid style={{width: '100%'}}/>
            <div className={'text-center'}>
                <h1>Het bestuur</h1>
                <span>Bij vragen over de club kan u steeds terecht bij een van onderstaande bestuursleden. <br/> De mailadressen zijn niet vervolledigd om spam te vermijden.</span>
            </div>
            <Row>
                <Col md={4}/>
                <Col md={6}>
                    <div className={'d-flex justify-content-center board-table'}>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Naam</th>
                                <th>Functie</th>
                                <th>Mail</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Joël Holsters</td>
                                <td>Voorzitter</td>
                                <td>holstersjoel@... ( gmail.com )</td>
                            </tr>
                            <tr>
                               <td>Lieve Pillens</td>
                               <td>Secretaris</td>
                               <td>lieve_pillens@... ( yahoo.com )</td>
                            </tr>
                            <tr>
                                <td>Filip Heijnemans</td>
                                <td>Penningmeester</td>
                                <td>filip.heijnemans@... (gmail.com)</td>
                            </tr>
                            <tr>
                                <td>Lawrens Halens</td>
                                <td>Toogverantwoordelijke</td>
                                <td>lawrens.hales@... (hotmail.com)</td>
                            </tr>
                            <tr>
                                <td>Thomas Jenné</td>
                                <td>Jeugdverantwoordelijke</td>
                                <td>thomas.jenne@... (hotmail.com)</td>
                            </tr>
                            <tr>
                                <td>Karel Heirman</td>
                                <td>Maker der croqueskes</td>
                                <td>karel.heirman@... (telenet.be)</td>
                            </tr>
                            <tr>
                                <td>Guido Swaelen</td>
                                <td>Raadslid</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Herman Rutten</td>
                                <td>Raadslid</td>
                                <td></td>
                            </tr>
                            </tbody>
                        </Table>

                    </div>
                </Col>
                <Col md={2}/>
            </Row>

        </>
    )
}