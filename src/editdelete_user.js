import React from 'react';
import './editdelete_user.css';

export class EditDeleteUser extends React.Component {
    render() {
        return (
            <div className="container">

                <ul className="nav nav-tabs" id="management-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" id="manage-users" href="./manage_users.html">Manage Users</a>
                    </li>
                    <li className="nav-item" id="manage-horses" href="#">
                        <a className="nav-link" id="manage-horses" href="#">Manage Horses</a>
                    </li>
                    <li className="nav-item" id="manage-organization" href="#">
                        <a className="nav-link" id="manage-organization" href="./manage_org.html">Manage Organization</a>
                    </li>
                </ul>

                <div className="tab-content" id="">
                <div className="container">
                    <p>
                        <form>
                            <div className="row">
                                <div className="col-50">
                                <h3>Edit User</h3><br/>

                                <div className="row">
                                    <div className="col-50">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" name="fname" placeholder="{{fname}}" />
                                    </div>
                                    <div className="col-50">
                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" name="lname" placeholder="{{lname}}" />
                                    </div>
                                </div>

                                <label for="email"><i className="fa fa-envelope"></i> Email Address</label>
                                <input type="text" id="email" name="email" placeholder="{{email}}" />

                                <select className="handlerdropdown">
                                    <option value= "level">Select Handler Level</option>
                                    <option value= ""></option>
                                    <option value= ""></option>
                                    <option value= ""></option>
                                    <option value= ""></option>
                                </select>

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" for="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Administrator</a>?</label>
                                </div>

                                <p></p>

                                <label for="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                <input type="text" id="org" name="org" placeholder="{{Organization Name}}" />

                                <div className="row">
                                    <div className="col-25">
                                        <input type="submit" value="Delete User" className="btns delete" />
                                    </div>
                                
                                    <div className="col-25">
                                    </div>                                  
                                
                                    <div className="col-50">
                                        <input type="submit" value="Submit Changes" className="btns" />
                                    </div>
                                </div>
                                </div>
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