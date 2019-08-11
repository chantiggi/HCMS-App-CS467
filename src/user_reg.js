import React from 'react';
import { PublicMenu } from './publicMenu';

export class UserReg extends React.Component {
    render() {
        return (
            <div>
            <PublicMenu />
            <div className="container">
                <p>
                    <form>
                        <div className="row">
                            <div className="col-50">
                                <h3>User Registration</h3><br />

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


                                <div className="row">
                                    <div className="col-50">
                                        <label for="pass">Password</label>
                                        <input type="text" id="pass" name="pass" />
                                    </div>
                                    <div className="col-50">
                                        <label for="repass">Re-enter Password</label>
                                        <input type="text" id="repass" name="repass" />
                                    </div>
                                </div>
                                <br />

                                <label for="email"><i className="fa fa-envelope"></i> Email Address</label>
                                <input type="text" id="email" name="email" placeholder="{{email}}" />


                                <label for="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                <input type="text" id="org" name="org" placeholder="{{orgname}}" />
                                <input type="submit" value="Submit" className="btns submitbtn" />
                            </div>
                        </div>
                    </form>
                </p>
                <p></p>
            </div>
    
            </div>
        )
    }
}