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


export const ClubTournament = () => {
    return(
    <>
        <TournamentTable date={'2019'} tableElements={content2019}/>
        <TournamentTable date={'2018'} tableElements={content2018}/>
        <TournamentTable date={'2017'} tableElements={content2017}/>
        <TournamentTable date={'2016'} tableElements={content2016}/>
        <TournamentTable date={'2015'} tableElements={content2015}/>
        <TournamentTable date={'2014'} tableElements={content2014}/>
        <TournamentTable date={'2013'} tableElements={content2013}/>
        <TournamentTable date={'2012'} tableElements={content2012}/>
    </>
)
}