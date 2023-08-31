import Image from "react-bootstrap/Image";
import React from "react";

export const Calender = () => {
    return (
        <>
            <div className={'d-flex justify-content-center'}>
                <iframe
                    src="https://calendar.google.com/calendar/embed?src=ttcbartmerksembestuur%40gmail.com&ctz=Europe%2FBrussels"
                    style={{border: 0, width: 800, height: 600}}/>
            </div>
        </>
    )
}