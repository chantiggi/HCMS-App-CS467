import React from 'react';
import './stylesheets/org_reg.css';
import { PublicMenu } from './publicMenu';

export class OrgReg extends React.Component {
	render() {
		return (
          <form className="no-border" onSubmit={this.onSubmit}>
              <div className="row">
                  <div className="col-50">
                      <h5>Organization Information</h5>
	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="org"><i className="fa fa-envelope"></i> Name</label>
	                              <input type="text" id="org" name="org" placeholder="Organization Name" />
	                          </div>
	                      </div>                      

	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="orgadd"><i className="fa fa-envelope"></i> Address</label>
	                              <input type="text" id="orgadd" name="orgadd" placeholder="Street Address" />
	                          </div>
	                      </div> 

	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="city"><i className="fa fa-envelope"></i> City</label>
	                              <input type="text" id="city" name="city" placeholder="City" />
	                          </div>
	                          <div className="col-25">
	                              <label htmlFor="state"><i className="fa fa-envelope"></i> State</label>
	                              <input type="text" id="state" name="state" placeholder="State" />
	                          </div>	 
	                          <div className="col-25">
	                              <label htmlFor="zipcode"><i className="fa fa-envelope"></i> Zip Code</label>
	                              <input type="text" id="zipcode" name="zipcode" placeholder="Zip Code" />
	                          </div>	                                                   
	                      </div> 	                      

                      <h5>Administrator Information</h5>
                      <div className="row">
                          <div className="col">
                              <label htmlFor="fname">First Name</label>
                              <input type="text" id="fname" name="fname" placeholder="John" />
                          </div>
                          <div className="col">
                              <label htmlFor="lname">Last Name</label>
                              <input type="text" id="lname" name="lname" placeholder="Smith" />
                          </div>
                      </div>

                      <div className="row">
                          <div className="col">
                              <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                              <input type="text" id="email" name="email" placeholder="john@example.com" />
                          </div>
                      </div>



                  </div>
                  <input type="submit" value="Add New Organization" className="btns addbtn" />
              </div>
          </form>
        )
    }
}
