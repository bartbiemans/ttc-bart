import React from 'react';
import './App.css';
import {Route, Router, Switch} from 'react-router';
import {createBrowserHistory} from 'history';
import {Header} from './components/header/Header';
import {Home} from "./components/home/Home";
import {Board} from "./components/board/Board";
import {History} from "./components/history/History";
import {ClubTournament} from "./components/clubTournament/ClubTournaments";
import {NewMembers} from "./components/newmembers/NewMembers";
import {Training} from "./components/training/Training";
import {Teams} from "./components/teams/Teams";
import {Contact} from "./components/contact/Contact";
import {Calender} from "./components/calender/Calender";
import {Document} from "./components/document/Document";


const browserHistory = createBrowserHistory();

function App() {
    return (
        <div>
            <Router history={browserHistory}>
                {renderRouting()}
            </Router>
        </div>
    );
}

const renderRouting = () => {
    return (
        <>
            <Header/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/board'} component={Board}/>
                    <Route exact path={'/historiek'} component={History}/>
                    <Route exact path={'/club-tournament'} component={ClubTournament}/>
                    <Route exact path={'/newmembers'} component={NewMembers}/>
                    <Route exact path={'/training'} component={Training}/>
                    <Route exact path={'/ploegen'} component={Teams}/>
                    <Route exact path={'/contact'} component={Contact}/>
                    <Route exact path={'/calendar'} component={Calender}/>
                    <Route exact path={'/documents'} component={Document}/>
                </Switch>
        </>
    )
}

export default App;
