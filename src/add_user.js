import React from 'react';
import './add_user.css';

export class AddUserPage extends React.Component {
    render() {
        return (
            <div className="container">

                <ul className="nav nav-tabs" id="management-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" id="manage-users" href="./manageusers">Manage Users</a>
                    </li>
                    <li className="nav-item" id="manage-horses">
                        <a className="nav-link" id="manage-horses" href="./managehorses">Manage Horses</a>
                    </li>
                    <li className="nav-item" id="manage-organization">
                        <a className="nav-link" id="manage-organization" href="./manageorg">Manage Organization</a>
                    </li>
                </ul>

                <div className="tab-content" id="">
                    <div className="container adduser">
                        <p>
                            <form>
                                <div className="row">
                                    <div className="col-50">
                                        <h3>Add New User</h3>

                                        <div className="row">
                                            <div className="col">
                                                <label for="fname">First Name</label>
                                                <input type="text" id="fname" name="fname" placeholder="John" />
                                            </div>
                                            <div className="col">
                                                <label for="lname">Last Name</label>
                                                <input type="text" id="lname" name="lname" placeholder="Smith" />
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col">
                                                <label for="email"><i className="fa fa-envelope"></i> Email Address</label>
                                                <input type="text" id="email" name="email" placeholder="john@example.com" />
                                            </div>
                                        </div>

                                        <select className="form-control handlerdropdown">
                                            <option value="level">Select Handler Level</option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                            <option value=""></option>
                                        </select>

                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Admnistrator</a>?</label>
                                        </div>


                                        <div className="row">
                                            <div className="col-50">
                                                <label for="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                                <input type="text" id="org" name="org" placeholder="{{Organization Name}}" />
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value="Add New User" className="btns addbtn" />
                                </div>
                            </form>
                        </p>
                        <p></p>
                    </div>
                </div>
            </div>

        )
    }
}
