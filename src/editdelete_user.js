import React from 'react';
import './stylesheets/editdelete_user.css';

export class EditUserForm extends React.Component {
    render() {
        return (
          <form class="no-border">
              <div className="row">
                  <div className="col-50">
                      <h5>Edit User</h5>
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
                          <label className="form-check-label" for="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Administrator</a>?</label>
                      </div>


                      <div className="row">
                          <div className="col-50">
                              <label for="org"><i className="fa fa-envelope"></i> Organization Name</label>
                              <input type="text" id="org" name="org" placeholder="Organization Name" />
                          </div>
                      </div>
                  </div>
                  <input type="submit" value="Add New User" className="btns addbtn" />
              </div>
          </form>
        )
    }
}
