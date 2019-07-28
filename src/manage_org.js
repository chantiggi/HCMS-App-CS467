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
						<label for="onanme"><i className="fa fa-envelope"></i>Name</label>
						<input type="text" id="oname" name="oname" />

						<label for="oaddress"><i className="fa fa-envelope"></i>Address</label>
						<input type="text" id="oaddress" name="oaddress" />
				
					<div className="row">
						<div className="col-25">
							<label for="city">City</label>
							<input type="text" id="city" name="city" />
						</div>
						<div className="col-25">
							<label for="state">State</label>
							<input type="text" id="state" name="state" />
						</div>
						<div className="col-25">
							<label for="zip">Zip Code</label>
							<input type="text" id="zip" name="zip" />
						</div>
					</div>
					<input type="submit" value="Submit Changes" className="btns addbtn" />
					</form>

			 		<form>
					<h5>Feed Information</h5>
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Amount
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Amount</button>
					</div>


					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Unit
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Unit</button>
					</div>

					<div className="dropdown last">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Type
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Type</button>
					</div>
					</form>

					<form>
					<h5>Medicine Information</h5>
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Timing
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>AM</li>
							<li>PM</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Amount</button>
					</div>
				
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Amount
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Amount</button>
					</div>


					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Unit
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Unit</button>
					</div>

					<div className="dropdown last">
						<button className="btn btn-secondary dropdown-toggle div-inline" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Type
						</button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<li>Type 1</li>
							<li>Type 2</li>
							<li>Type 3</li>
						</div>
						<button type="submit" className="btn btn-xs btn-default add">Add New Type</button>
					</div>
					</form>                                    
				</div>
			</div>
		)
	}
}