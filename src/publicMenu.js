import React from 'react';
import { NavLink } from 'react-router-dom';

export class PublicMenu extends React.Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                <a class="navbar-brand" href="./">Horse Camp Management System</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <a class="nav-item nav-link register" id="horses" href="./orgregistration">Register New Organization</a>

                    <button type="button" class="btn" data-toggle="modal" data-target=".dialog-box">Log In</button>
                    <div class="modal fade dialog-box">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class = "modal-header">
                                    <h6>Log In </h6>
                                    <button type="button" class="close" aria-label="Close" data-dismiss="modal">X</button>
                                </div>

                                <div class="modal-body modal-sm">
                                    <div class="row login">
                                      <div class="col-md-4">Username:</div>
                                      <div class="col-md-4 ml-auto"><input type="text" name="username" /> </div>
                                    </div>      
                                    <div class="row login">
                                      <div class="col-md-4">Password:</div>
                                      <div class="col-md-4 ml-auto"><input type="text" name="password" /> </div>
                                    </div>                                                                     
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Forgot Password?</button>
                                    <a href="./adminhome" class="btn btn-secondary" role="button">Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

        )
    }
}
