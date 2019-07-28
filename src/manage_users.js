import React from 'react';
import './manage_users.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';

export class ManageUsers extends React.Component {
    render() {
        return (
            <div className="container">

                <ManagementTabs />

                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Show Inactive Users</label>
                </div>

                <div className="tab-content" id="manage-users-tab">
                    <table className="table table-striped table-bordered" id="manage-users-table">
                        <thead className="table-head">
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Handler Level</th>
                                <th>Email Address</th>
                                <th>Administrator?</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>User First Name</td>
                                <td>User Last Name</td>
                                <td>User Handler Level</td>
                                <td>User Email</td>
                                <td>Admin Y/N</td>
                                <td>
                                    <Link to={'/editdeleteuser'} type="button" className="btn" id="edit-del-btn">Edit/Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Link to={'/adduser'} type="button" className="btn" id="add-btn">Add New User</Link>

                </div>
            </div>
        )
    }
}