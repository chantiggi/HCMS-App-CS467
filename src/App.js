import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from './home';
import { MedPage } from './med';
import { FeedPage } from './feed';
import { ViewHorsesPage } from './viewHorses';
import { ViewIndivHorsePage } from './viewIndivHorse';

export class App extends React.Component {
    render() {
        return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                    <a className="navbar-brand" href="/">Horse Care Management System</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to={'/'} className="nav-item nav-link active" id="home">Home<span className="sr-only">(current)</span></Link>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/admin" id="costs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Manage Preferences
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/manageusers">Manage Users</a>
                                    <a className="dropdown-item" href="/managehorses">Manage Horses</a>
                                    <a className="dropdown-item" href="/manageorg">Manage Organization</a>
                                </div>
                            </li>

                            <Link to={'/viewhorses'} className="nav-item nav-link" id="horses">View Horses</Link>
                            <Link to={'/feed'} className="nav-item nav-link" id="feed">Feed</Link>
                            <Link to={'/meds'} className="nav-item nav-link" id="medications">Medications</Link>
                            <a className="nav-item nav-link" id="logout" href="/logout">Log Out</a>
                        </div>
                    </div>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/viewhorses' component={ViewHorsesPage} />
                    <Route path='/feed' component={FeedPage} />
                    <Route path='/meds' component={MedPage} />
                    <Route path='/viewhorses/:horseid' component={ViewIndivHorsePage} />
                </Switch>
            </div>
        </Router>
        )
    }
}