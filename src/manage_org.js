import React from 'react';
import './stylesheets/manage_org.css';
import { ManagementTabs } from './managementtabs';
import { NavBar } from './navbar';
import { Footer } from './footer';
import { EditOrg } from './org_edit'


export class ManageOrg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            org: []
        };
    }

  reloadPage = () => {
        window.location.reload();
  }

    handleSubmit = (event) => {
        event.preventDefault();
        confirm("Changes made")
        fetch(`restapi/org/${this.props.orgID}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              orgID: 1,
              orgName: this.state.orgName || this.state.org[0].orgName,
              streetAddress: this.state.streetAddress || this.state.org[0].streetAddress,
              city: this.state.city || this.state.org[0].city,
              state: this.state.state || this.state.org[0].state,
              zipCode: this.state.zipCode || this.state.org[0].zipCode
            })
        })
        .then(response => response.json())
        .then(data => console.log("Data = ", data))
        .catch(err => console.log("Error reading data: ", err))
        //this.props.reloadParent();
    }    

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    componentDidMount() {
        fetch('/restapi/org', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({org: data}))
        .catch(err => console.log("Error reading data: ", err))

    }

	render() {
		let {org} = this.state;
		if (org) {
			org = org[0];
		}
		console.log(org);
		return (
			<div>
			<div>
			<NavBar />
			<div className="container">

				<ManagementTabs />
				
				<div className="tab-content org" id="">
				

					<form className="form-org">
						
						<h5 className="otitle" >Organization Information </h5>
						
						<div className="row">
							
							<div className="col">
							
								<div className="form-group">
									
									<label for="oname"><i className="fa fa-envelope"></i>Name</label>

									<input type="text" className="form-control org-name" id="oname" name="orgName" value={org ? org.orgName : undefined} onChange={this.handleChange} readonly/>

								</div>
								
							</div>
							
						</div>
						<div className="row">
							<div className="col">
								<div className="form-group">
									<label for="oaddress"><i className="fa fa-envelope"></i>Address</label>
									<input type="text" className="form-control org-address" id="oaddress" name="streetAddress" readonly value={org ? org.streetAddress : undefined} onChange={this.handleChange} />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-4">
								<div className="form-group">
									<label for="city">City</label>
									<input type="text" className="form-control" id="city" name="city" value={org ? org.city : undefined} onChange={this.handleChange} readonly/>
								</div>
							</div>
							<div className="col-2">
								<div className="form-group">
									<label for="state">State</label>
									<input type="text" className="form-control" id="state" name="state" value={org ? org.state : undefined} onChange={this.handleChange} readonly/>
								</div>
							</div>
							<div className="col-4">
								<div className="form-group">
									<label for="zip">Zip Code</label>
									<input type="text" className="form-control" id="zip" name="zipCode" value={org ? org.zipCode : undefined} onChange={this.handleChange} readonly/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<EditOrg modeTitle="Edit Organization" orgID="1" reloadParent={this.reloadPage}/>

								
							</div>
						</div>

					</form>

{/*
					<form className="form-feed">
						<h5>Feed Information</h5>
						<div className="row">
						    <div className="col">
						      <label for="org-feed-amount">Amount</label>
						      <div className="input-group mb-2">
						        <select className="form-control" id="org-feed-amount">
						            <option value="" disabled selected>Select amount</option>
						            <option>Type 1</option>
						            <option>Type 2</option>
						            <option>Type 3</option>
						        </select>
						        <button type="submit" className="btn btn-solid add-new-btn">Add New Amount</button>
						      </div>
						    </div>
						</div>
						<div className="row">
						    <div className="col">
						      <label for="org-feed-unit">Unit</label>
						      <div className="input-group mb-2">
						        <select className="form-control" id="org-feed-unit">
						            <option value="" disabled selected>Select unit</option>
						            <option>Type 1</option>
						            <option>Type 2</option>
						            <option>Type 3</option>
						        </select>
						        <button type="submit" className="btn btn-solid add-new-btn">Add New Unit</button>
						      </div>
						    </div>
						</div>
						<div className="row">
						    <div className="col">
						      <label for="org-feed-type">Type</label>
						      <div className="input-group mb-2">
						        <select className="form-control" id="org-feed-type">
						            <option value="" disabled selected>Select type</option>
						            <option>Type 1</option>
						            <option>Type 2</option>
						            <option>Type 3</option>
						        </select>
						        <button type="submit" className="btn btn-solid add-new-btn">Add New Type</button>
						      </div>
						    </div>
						</div>
					</form>

					<form>
						<h5>Medicine Information</h5>
						<div className="row">
								<div className="col">
									<label for="org-med-timing">Timing</label>
									<div className="input-group mb-2">
										<select className="form-control" id="org-med-amount">
												<option value="" disabled selected>Select timing</option>
												<option>AM</option>
												<option>PM</option>
										</select>
										<button type="submit" className="btn btn-solid add-new-btn">Add New Timing</button>
									</div>
								</div>
						</div>
						<div className="row">
								<div className="col">
									<label for="org-med-unit">Amount</label>
									<div className="input-group mb-2 mr-10">
										<select className="form-control" id="org-med-amount">
												<option value="" disabled selected>Select amount</option>
												<option>Type 1</option>
												<option>Type 2</option>
												<option>Type 3</option>
										</select>
										<button type="submit" className="btn btn-solid add-new-btn">Add New Amount</button>
									</div>
								</div>
						</div>
						<div className="row">
								<div className="col">
									<label for="org-med-unit">Unit</label>
									<div className="input-group mb-2 mr-sm-2">
										<select className="form-control" id="org-med-unit">
												<option value="" disabled selected>Select unit</option>
												<option>Type 1</option>
												<option>Type 2</option>
												<option>Type 3</option>
										</select>
										<button type="submit" className="btn btn-solid add-new-btn">Add New Unit</button>
									</div>
								</div>
						</div>
						<div className="row">
								<div className="col">
									<label for="org-med-type">Type</label>
									<div className="input-group mb-2 mr-sm-2">
										<select className="form-control" id="org-med-type">
												<option value="" disabled selected>Select type</option>
												<option>Type 1</option>
												<option>Type 2</option>
												<option>Type 3</option>
										</select>

										<button type="submit" className="btn btn-solid add-new-btn">Add New Type</button>
									</div>
								</div>
						</div>

					</form>
*/}
				</div>
			</div>
			</div>
			<Footer />
			</div>
		)
	}
}
