import React from 'react';
import { NavLink } from 'react-router-dom';

export class PublicMenu extends React.Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                <a className="navbar-brand" href="./">Horse Camp Management System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <a className="nav-item nav-link register" id="horses" href="./orgregistration">Register New Organization</a>

                    <button type="button" className="btn" data-toggle="modal" data-target=".dialog-box">Log In</button>
                    <div className="modal fade dialog-box">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className = "modal-header">
                                    <h6>Log In </h6>
                                    <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                </div>

                                <div className="modal-body modal-sm">
                                    <div className="row login">
                                      <div className="col-md-4">Username:</div>
                                      <div className="col-md-4 ml-auto"><input type="text" name="username" /> </div>
                                    </div>      
                                    <div className="row login">
                                      <div className="col-md-4">Password:</div>
                                      <div className="col-md-4 ml-auto"><input type="text" name="password" /> </div>
                                    </div>                                                                     
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Forgot Password?</button>
                                    <a href="./adminhome" className="btn btn-secondary" role="button">Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        )
    }
}
