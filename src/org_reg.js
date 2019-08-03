import React from 'react';
import './org_reg.css';

export class OrgReg extends React.Component {
	render() {
		return (
			<div className="container orgRegForm">
				<p>
					<form>
						<div className="row">
							<div className="col-50">
								<h3>Organization Registration</h3>
								<h4>Organization Information</h4>
								<label for="oname"><i className="fa fa-user"></i>Name</label>
								<input type="text" id="oname" name="oname" placeholder="Mountain Valley Horse Rescue" />

								<label for="adr"><i className="fa fa-address-card-o"></i>Address</label>
								<input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />
								<label for="city"><i className="fa fa-institution"></i> City</label>
								<input type="text" id="city" name="city" placeholder="New York" />
							</div>

							<div className="row">
								<div className="col-50">
									<label for="state">State</label>
									<input type="text" id="state" name="state" placeholder="NY" />
								</div>
								<div className="col-50">
									<label for="zip">Zip</label>
									<input type="text" id="zip" name="zip" placeholder="10001" />
								</div>
							</div>

							<h4>Administrator Information</h4>
							<div className="row">
								<div className="col-50">
									<label for="fname">First Name</label>
									<input type="text" id="fname" name="fname" placeholder="John" />
								</div>
								<div className="col-50">
									<label for="lname">Last Name</label>
									<input type="text" id="lname" name="lname" placeholder="Smith" />
								</div>
							</div>

							<label for="email"><i className="fa fa-envelope"></i>Email Address</label>
							<input type="text" id="email" name="email" placeholder="john@example.com" />


							<div className="row">
								<div className="col-50">
									<label for="pass">Password</label>
									<input type="text" id="pass" name="pass" />
								</div>
								<div className="col-50">
									<label for="repass">Re-enter Password</label>
									<input type="text" id="repass" name="repass" />
								</div>
								<div className="col-25">
									<input type="submit" value="Submit" className="btns submitbtn" />
								</div>
							</div>
						</div>
					</form>
				</p>
				<p></p>
			</div>
		)
	}
}
