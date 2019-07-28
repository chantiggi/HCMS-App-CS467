import React from 'react';
import { Link } from 'react-router-dom';

export class ManagementTabs extends React.Component {
    render() {
        return (

            <ul className="nav nav-tabs" id="management-tabs">
                <li className="nav-item" id="manage-horses">
                    <Link to={'/managehorses'} className="nav-link active" id="manage-horses">Manage Horses</Link>
                </li>
                <li className="nav-item" id="manage-users">
                    <Link to={'/manageusers'} className="nav-link" id="manage-users">Manage Users</Link>
                </li>
                <li className="nav-item" id="manage-organization">
                    <Link to={'/manageorg'} className="nav-link" id="manage-organization" >Manage Organization</Link>
                </li>
            </ul>

        )
    }
}