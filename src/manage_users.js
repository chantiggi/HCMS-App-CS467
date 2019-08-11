import React from 'react';
import './stylesheets/manage_users.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';

export class ManageUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
        };
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
            <div className="container manage-users-container">

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
                            {users.map(user =>
                            <tr key={user.userID}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.handlerLevelID}</td>
                                <td>{user.email}</td>
                                <td>{user.isAdmin}</td>
                                <td className="edit-del-user">
                                    <Link to={'/editdeleteuser'} className="btn btn-solid edit-del-user" id="edit-del-btn">Edit/Delete</Link>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>

                    <Link to={'/adduser'} className="btn add-user btn-solid" id="add-btn">Add New User</Link>

                </div>
            </div>
        )
    }
}

