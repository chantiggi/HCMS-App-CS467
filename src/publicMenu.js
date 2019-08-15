import React from 'react';
import { NavLink } from 'react-router-dom';
import { OrgReg } from './org_reg';

import { LogInModal } from './logInModal';

export class PublicMenu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navigation">
                <a className="navbar-brand" href="./">Horse Care Management System</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <a className="nav-item nav-link register" id="horses" data-toggle="modal" href="#regmodal">Register New Organization</a>

                        <div className="modal fade edit-user-modal" data-backdrop="static" id="regmodal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6>Register New Organization</h6>
                                        <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                    </div>
                                    <div className="modal-body">
                                        <OrgReg />
                                    </div>
                                </div>
                            </div>
                        </div>

                    <LogInModal></LogInModal>

                </div>
            </nav>

        )
    }
}
