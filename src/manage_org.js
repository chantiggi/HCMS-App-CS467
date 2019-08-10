import React from 'react';
import './stylesheets/manage_org.css';
import { ManagementTabs } from './managementtabs';

export class ManageOrg extends React.Component {
	render() {
		return (
			<div className="container">

				<ManagementTabs />

				<div className="tab-content org" id="">
					<form className="form-org">
						<h5 className="otitle">Organization Information</h5>
						<div className="row">
							<div className="col">
								<div className="form-group">
									<label for="oname"><i className="fa fa-envelope"></i>Name</label>
									<input type="text" className="form-control org-name" id="oname" name="oname" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<div className="form-group">
									<label for="oaddress"><i className="fa fa-envelope"></i>Address</label>
									<input type="text" className="form-control org-address" id="oaddress" name="oaddress" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-4">
								<div className="form-group">
									<label for="city">City</label>
									<input type="text" className="form-control" id="city" name="city" />
								</div>
							</div>
							<div className="col-2">
								<div className="form-group">
									<label for="state">State</label>
									<input type="text" className="form-control" id="state" name="state" />
								</div>
							</div>
							<div className="col-4">
								<div className="form-group">
									<label for="zip">Zip Code</label>
									<input type="text" className="form-control" id="zip" name="zip" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<input type="submit" value="Submit Changes" className="btn btn-solid submit-org" />
							</div>
						</div>

					</form>

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
				</div>
			</div>
		)
	}
}
