import React from 'react';
import { NavLink } from 'react-router-dom';

export class ManagementTabs extends React.Component {
    render() {
        return (

            <ul className="nav nav-tabs" id="management-tabs">
                <li className="nav-item" id="manage-horses">
                    <NavLink to={'/managehorses'} className="nav-link" id="manage-horses">Manage Horses</NavLink>
                </li>
                <li className="nav-item" id="manage-users">
                    <NavLink to={'/manageusers'} className="nav-link" id="manage-users">Manage Users</NavLink>
                </li>
                <li className="nav-item" id="manage-organization">
                    <NavLink to={'/manageorg'} className="nav-link" id="manage-organization" >Manage Organization</NavLink>
                </li>
            </ul>

        )
    }
}
