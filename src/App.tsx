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
            <div style={{paddingTop: '7vh'}}>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/home'} component={Home}/>
                    <Route exact path={'/board'} component={Board}/>
                    <Route exact path={'/historiek'} component={History}/>
                    <Route exact path={'/club-tournament'} component={ClubTournament}/>
                    <Route exact path={'/newmembers'} component={NewMembers}/>
                    <Route exact path={'/training'} component={Training}/>
                    <Route exact path={'/ploegen'} component={Teams}/>
                </Switch>
            </div>
        </>
    )
}

export default App;
