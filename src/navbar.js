import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                <Link to={'/'} className="navbar-brand">Horse Care Management System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/adminhome'} className="nav-item nav-link active" id="home">Home<span className="sr-only">(current)</span></Link>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/admin" id="costs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Manage Preferences
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <Link to={'/managehorses'} className="dropdown-item">Manage Horses</Link>
                                <Link to={'/manageusers'} className="dropdown-item">Manage Users</Link>
                                <Link to={'/manageorg'} className="dropdown-item">Manage Organization</Link>
                            </div>
                        </li>

                        <Link to={'/viewhorses'} className="nav-item nav-link" id="horses">View Horses</Link>
                        <Link to={'/feed'} className="nav-item nav-link" id="feed">Feed</Link>
                        <Link to={'/meds'} className="nav-item nav-link" id="medications">Medications</Link>
                        <Link to={'/logout'} className="nav-item nav-link" id="logout">Log Out</Link>
                    </div>
                </div>
            </nav>
        )
    }
}