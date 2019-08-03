import React from 'react';
import './manage_org.css';
import { ManagementTabs } from './managementtabs';

export class ManageOrg extends React.Component {
	render() {
		return (
			<div className="container">

				<ManagementTabs />

				<div className="tab-content org" id="">
					<form>
						<h5>Organization Information</h5>
						<div className="form-group">
							<label for="oname"><i className="fa fa-envelope"></i>Name</label>
							<input type="text" id="oname" name="oname" />
						</div>

						<div className="form-group">
							<label for="oaddress"><i className="fa fa-envelope"></i>Address</label>
							<input type="text" id="oaddress" name="oaddress" />
						</div>

						<div className="form-group">
							<label for="city">City</label>
							<input type="text" id="city" name="city" />
						</div>

						<div className="form-group">
							<label for="state">State</label>
							<input type="text" id="state" name="state" />
						</div>

						<div className="form-group">
							<label for="zip">Zip Code</label>
							<input type="text" id="zip" name="zip" />
						</div>

						<input type="submit" value="Submit Changes" className="btns" />
					</form>

					<form>
						<h5>Feed Information</h5>
						<div class="row">
							<div class="col">
								<div className="form-group">
										<label for="org-feed-amount">Amount</label>
										<select className="form-control" id="org-feed-amount">
												<option value="" disabled selected>Select feed amount</option>
												<option>Type 1</option>
												<option>Type 2</option>
												<option>Type 3</option>
										</select>
								</div>
							</div>
								<div class="col">
									<button type="submit" className="btns add-org">Add New Amount</button>
								</div>
						</div>

						<div className="form-group">
								<label for="org-feed-unit">Unit</label>
								<select className="form-control" id="org-feed-unit">
										<option value="" disabled selected>Select feed unit</option>
										<option>Type 1</option>
										<option>Type 2</option>
										<option>Type 3</option>
								</select>
								<button type="submit" className="btns add-org">Add New Unit</button>
						</div>
						<div className="form-group">
								<label for="org-feed-type">Type</label>
								<select className="form-control" id="org-feed-type">
										<option value="" disabled selected>Select feed type</option>
										<option>Type 1</option>
										<option>Type 2</option>
										<option>Type 3</option>
								</select>
								<button type="submit" className="btns add-org">Add New Unit</button>
						</div>
					</form>

					<form>
						<h5>Medicine Information</h5>
						<div className="form-group">
						    <label for="org-med-amount">Amount</label>
						    <select className="form-control" id="org-med-amount">
						        <option value="" disabled selected>Select med amount</option>
						        <option>Type 1</option>
						        <option>Type 2</option>
						        <option>Type 3</option>
						    </select>
						    <button type="submit" className="btns add-org">Add New Amount</button>
						</div>
						<div className="form-group">
						    <label for="org-med-unit">Unit</label>
						    <select className="form-control" id="org-med-unit">
						        <option value="" disabled selected>Select med unit</option>
						        <option>Type 1</option>
						        <option>Type 2</option>
						        <option>Type 3</option>
						    </select>
						    <button type="submit" className="btns add-org">Add New Unit</button>
						</div>
						<div className="form-group">
						    <label for="org-med-type">Type</label>
						    <select className="form-control" id="org-med-type">
						        <option value="" disabled selected>Select med type</option>
						        <option>Type 1</option>
						        <option>Type 2</option>
						        <option>Type 3</option>
						    </select>
						    <button type="submit" className="btns add-org">Add New Unit</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
