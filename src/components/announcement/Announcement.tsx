import {Col, Row} from "react-bootstrap";
import React from "react";

interface Props {
    body: string;
    title?: string
    date: Date
    link?: string
    images?: string[]
}

export const Announcement = (props: Props) => {
    return (
        <Row className={'justify-content-left ml-lg-5 mt-5 mb-5'}>
            <Col className={' announcement-card'}>
                <div style={{textAlign: 'left'}}>
                    {props.title && <div><b className={'secondary-text'}>{props.title}</b></div>}
                    <small> <i>Updated on : {props.date.toLocaleDateString()}</i></small>
                </div>
                <p className={'mt-3'}>{props.body}{props.link && <a href={props.link}>Klik hier!</a>}</p>
                <div>
                    {props.images?.map(image => (
                        <img className={'announcement-image mr-2'} alt={'announcement'} src={image}/>
                    ))}
                </div>
            </Col>
        </Row>
    )
}