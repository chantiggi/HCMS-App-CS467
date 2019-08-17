import React from 'react';
import './stylesheets/manage_users.css';
import './stylesheets/add_user.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';

import { AddUserForm } from './add_user';
import { EditUserForm } from './editdelete_user';

import { NavBar } from './navbar';
import { Footer } from './footer';
import { InactivateModal } from './inactivate_modal.js'

export class ManageUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
    }

  reloadPage = () => {
        window.location.reload();
  }

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('/restapi/users', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({users: data}))
        .catch(err => console.log("Error reading data: ", err))
    }

    render() {
        const {users} = this.state;

        return (
            <div>
            <NavBar />

            <div className="container manage-users-container">

                <ManagementTabs />

                {/*<div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Show Inactive Users</label>
                </div>*/}
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
                                {/*<th>&nbsp;</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user =>
                            <tr key={user.userID}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.handlerLevelName}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin ? "Yes" : "No"}</td>
                                <td className="edit-del-user">
                                    <EditUserForm modeTitle="Edit" userID={user.userID} reloadParent={this.reloadPage}/>
                                </td>
                                {/*<td>
                                    <InactivateModal targetType="User" targetID={user.userID} targetName={user.username}/>
                                </td>*/}
                            </tr>
                            )}
                        </tbody>
                    </table>

                    <AddUserForm modeTitle="Add User" />

                </div>
            </div>
            <Footer />
            </div>
        )
    }
}
