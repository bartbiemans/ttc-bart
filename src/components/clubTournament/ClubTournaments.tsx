import React from 'react';
import content2019 from "./clubTournament2019.json"
import content2018 from "./clubTournament2018.json"
import content2017 from "./clubTournament2017.json"
import content2016 from "./clubTournament2016.json"
import content2015 from "./clubTournament2015.json"
import content2014 from "./clubTournament2014.json"
import content2013 from "./clubTournament2013.json"
import content2012 from "./clubTournament2012.json"
import {TournamentTable} from "./TournamentTable";
import Image from "react-bootstrap/Image";


export const ClubTournament = () => {
    return (
        <>
            <Image src={'../../../clubkampioenschap.jpg'} fluid style={{width: '100%'}}/>
            <h3 className={'text-center secondary-text'}>Clubkampioenschap</h3>
            <div style={{width:"50%", margin:'auto'}} className={'text-center'}>Elk jaar, uitgezonderd 2020 en 2021 door het corona-virus, spelen we een clubkampioenschap.
                Dit is een leuke manier om iedereen nog eens te zien en samen te sporten en plezier te maken.
                Hieronder vind je het palmares van vorige jaren.

</div>
            <div className={'d-flex align-items-center flex-column'}>
                <TournamentTable date={'2019'} tableElements={content2019}/>
                <TournamentTable date={'2018'} tableElements={content2018}/>
                <TournamentTable date={'2017'} tableElements={content2017}/>
                <TournamentTable date={'2016'} tableElements={content2016}/>
                <TournamentTable date={'2015'} tableElements={content2015}/>
                <TournamentTable date={'2014'} tableElements={content2014}/>
                <TournamentTable date={'2013'} tableElements={content2013}/>
                <TournamentTable date={'2012'} tableElements={content2012}/>
            </div>
        </>
    )
}