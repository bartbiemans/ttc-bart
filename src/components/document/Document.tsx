import Image from "react-bootstrap/Image";
import React from "react";

export const Document = () => {

    return (
        <>
            <Image src={'../../../nieuweLeden.jpg'} fluid style={{width: '100%', paddingTop:'5vh'}}/>
            <h3 className={'text-center secondary-text'}>Documenten</h3>
            <div className={'d-flex flex-column align-items-center justify-content-center'}>
                <a href={'aansluitingsformulier.pdf'} download={'aansluitingsformulier.pdf'}>Download het aansluitingsformulier</a>
                <a href={'huishoudelijkreglement.docx'} download={'huishoudelijkreglement.docx'}>Download het huishoudelijk reglement</a>
            </div>
        </>
    )
}