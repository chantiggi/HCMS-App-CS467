import React from 'react';
import './stylesheets/org_reg.css';
import { PublicMenu } from './publicMenu';
import { Modal } from 'react-bootstrap';

export class OrgReg extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            org: null,
            isOpen: false
        };
        this.getAdminfname = this.getAdminfname.bind(this);
        this.getAdminlname = this.getAdminlname.bind(this);
        this.getAdminemail = this.getAdminemail.bind(this);
    }	

    getAdminfname(val) {this.setState({fname: val}); }
    getAdminlname(val) {this.setState({lname: val}); }
    getAdminemail(val) {this.setState({email: val}); }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        confirm("Organization added")
        if (this.state.org === null) {
            fetch(`restapi/org`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orgName: this.state.orgName,
                    streetAddress: this.state.streetAddress,
                    city: this.state.city,
                    state: this.state.state,
                    zipCode: this.state.zipCode,
                    fname: this.state.fname,
                    lname: this.state.lname,
                    email: this.state.email,
                    isAdmin: 1,
                    isActive: 1,
                    username: this.state.email,
                    handlerLevelID: 1
                })
            })
            .then(response => response.json())
            .then(data => console.log("Data = ", data))
            .catch(err => console.log("Error reading data: ", err))
        }
        this.setState({isOpen: false});
    }    

	render() {
		let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        let {org} = this.state;
        if (org) {
            org = org[0];
        }


		return (
          <form className="no-border">
              <div className="row">
                  <div className="col-50">
                      <h5>Organization Information</h5>
	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="org"><i className="fa fa-envelope"></i> Name</label>
	                              <input type="text" id="org" name="orgName" placeholder="Organization Name" value={org ? org.orgName : undefined} onChange={this.handleChange} />
	                          </div>
	                      </div>                      

	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="orgadd"><i className="fa fa-envelope"></i> Address</label>
	                              <input type="text" id="orgadd" name="streetAddress" placeholder="Street Address" value={org ? org.streetAddress : undefined} onChange={this.handleChange} />
	                          </div>
	                      </div> 

	                      <div className="row">
	                          <div className="col-50">
	                              <label htmlFor="city"><i className="fa fa-envelope"></i> City</label>
	                              <input type="text" id="city" name="city" placeholder="City" value={org ? org.city : undefined} onChange={this.handleChange} />
	                          </div>
	                          <div className="col-25">
	                              <label htmlFor="state"><i className="fa fa-envelope"></i> State</label>
	                              <input type="text" id="state" name="state" placeholder="State" value={org ? org.state : undefined} onChange={this.handleChange} />
	                          </div>	 
	                          <div className="col-25">
	                              <label htmlFor="zipcode"><i className="fa fa-envelope"></i> Zip Code</label>
	                              <input type="text" id="zipcode" name="zipCode" placeholder="Zip Code" value={org ? org.zipCode : undefined} onChange={this.handleChange} />
	                          </div>	                                                   
	                      </div> 	                      

                      <h5>Administrator Information</h5>
                      <div className="row">
                          <div className="col">
                              <label htmlFor="fname">First Name</label>
                              <input type="text" id="fname" name="fname" placeholder="John" value={org ? org.fname : undefined} onChange={this.handleChange}/>
                          </div>
                          <div className="col">
                              <label htmlFor="lname">Last Name</label>
                              <input type="text" id="lname" name="lname" placeholder="Smith" value={org ? org.lnanme : undefined} onChange={this.handleChange}/>
                          </div>
                      </div>

                      <div className="row">
                          <div className="col">
                              <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                              <input type="text" id="email" name="email" placeholder="john@example.com" value={org ? org.email : undefined} onChange={this.handleChange}/>
                          </div>
                      </div>



                  </div>
                  <input type="submit" value="Add New Organization" className="btns addbtn" onClick={this.handleSubmit} data-dismiss="modal"/>
              </div>
          </form>
        )
    }
}
