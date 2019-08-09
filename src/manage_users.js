import React from 'react';
import './stylesheets/manage_users.css';
import './stylesheets/add_user.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';
import { AddUserForm } from './add_user';
import { EditUserForm } from './editdelete_user';

export class ManageUsers extends React.Component {
    render() {
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
                                <td className="edit-del-user">
                                    <button type="button" className="btn btn-solid" id="edit-user-btn" data-toggle="modal" data-target=".edit-user-modal">Edit</button>

                                    <div className="modal fade edit-user-modal" data-backdrop="static">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6>Edit User - [User]</h6>
                                                    <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                                </div>
                                                <div className="modal-body">

                                                  <EditUserForm />

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                                <td>

                                  <button type="button" className="btn btn-border" id="inactivate-user-btn" data-toggle="modal" data-target=".inactivate-user">Inactivate</button>

                                  <div className="modal fade inactivate-user">
                                      <div className="modal-dialog">
                                          <div className="modal-content">
                                              <div className="modal-header">
                                                  <h6>Inactivate User - [User] </h6>
                                                  <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                              </div>
                                              <div className="modal-body modal-sm">
                                                <p>Are you sure you want to inactivate <b>[User]</b>?</p>
                                              </div>
                                              <div className="modal-footer">
                                                <button type="button" class="btn inactivate-btn">Inactivate</button>
                                                <button type="button" class="btn btn-border" data-dismiss="modal">Cancel</button>
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <button type="button" className="btn btn-solid" id="add-user-btn" data-toggle="modal" data-target=".add-user-modal">Add User</button>

                    <div className="modal fade add-user-modal" data-backdrop="static">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6>Add New User </h6>
                                    <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                </div>
                                <div className="modal-body">

                                  <AddUserForm />

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
