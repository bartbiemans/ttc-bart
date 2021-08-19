import {Col, Row} from "react-bootstrap";

export const History = () => {
    return (
        <>
            <h1 className={'text-center'}>Historiek</h1>
            <Row>
                <Col className={'text-center'}>
                    <div className={'history-title'}>Een levende en enthousiaste club!</div>
                </Col>
            </Row>
            <Row>
                <Col className={'pl-5'} md={6}>
                        <div className={'mb-5 text-center history-title'}>
                            Vroeger
                        </div>
                        <div>
                            Gegroeid vanuit de chirowerking Bart te Merksem, maar werkelijk gestart in jeugdclub Grafiek, destijds gevestigd in het Gildenhuis in de Gildenstraat, met drie spelers en één ploeg in de competitie van KVKT (nu Sporta) in 1971. Al spoedig werden we benaderd door enkele enthousiaste voetballers van de club bart Koninklijke Sport Vereniging, toen en nog steeds gevestigd in Merksem, die ook wel eens een balletje wensten te slaan. Daardoor werden we in 1974 een volwaardige club onder de naam Tafeltennisclub Bart, met vier heren- en twee damesploegen in de competitie van het seizoen 1974-1975. Buiten de naam zijn er geen verdere banden met deze voetbalclub. De naam Bart komt voort van de parochienaam Bartholomeus, waar onze club startte.
Gedurende de volgende jaren kenden we enkele hoogtes en laagtes met een schommeend ledenaantal (20 à 60). In Merksem speelden we op verschillende locaties, met als belangrijkste de Sporthal Rode Loop (vanaf 1975) en het Fort van Merksem (vanaf 2000). In 2007 beslisten we samen met Merksem TTV, sinds decennia onze zusterclub binnen dezelfde lokalen, om onze werking samen te voegen. Aldus ontstond in 2007 de fusieclub TTC Bart Merksem.
                        </div>
                </Col>
                <Col className={'pr-5'} md={6}>
                     <div className={'mb-5 text-center history-title'}>
                            Nu
                        </div>
                    <div>
                        Wij spelen nog altijd in het Fort van Merksem en zijn momenteel een stabiele club met ongeveer 75 leden, jeugdwerking en recreanten.
                    </div>
                </Col>
            </Row>
        </>
    )
}