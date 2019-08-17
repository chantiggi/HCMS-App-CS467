import React from 'react';
import './stylesheets/add_user.css';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { Modal } from 'react-bootstrap';

export class AddUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isOpen: false,
            isAdminChecked: false,
        };

        this.getHandlerData = this.getHandlerData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getHandlerData(val) {
        this.setState({handlerLevelID: val});
    }

    handleChange(event) {
        var currentValue;
        if (event.target.type == 'checkbox') {
            console.log("Before change state: Is admin checked?: " + this.state.isAdminChecked + ", isAdmin: " + this.state.isAdmin);
            currentValue = event.target.checked;
            console.log("Current checkbox value: " + currentValue + ", isAdmin status before change state: " + this.state.isAdmin);

            // Change User to admin
            if (currentValue) {
                this.setState({
                    [event.target.name]: currentValue,
                    isAdmin: 1
                });
            }

            // Change User to general user
            else {
                this.setState({
                    [event.target.name]: currentValue,
                    isAdmin: 0
                });
            }
        }

        else {
            currentValue = event.target.value;
            this.setState({...this.state, [event.target.name]: currentValue});
            console.log(this.state[event.target.name]);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit: ', this.state);


        fetch('restapi/users', {
            method: "POST",
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                fname: this.state.fname,
                lname: this.state.lname,
                username: this.state.username,
                email: this.state.email,
                handlerLevelID: this.state.handlerLevelID,
                isAdmin: this.state.isAdmin,
                isActive: 1,
                orgID: 1
            })
        })
        .then(response => response.json())
        .then(data => console.log("User Data: ", data))
        .catch(err => console.log("Error submitting data: ", err));

        this.setState({isOpen: false});
        this.props.reloadParent();
    }


    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        let {user} = this.state;
        if (user) {
            user = user[0];
        }

        return (
            <div className="edit-container">
                <button type="button" className="btn btn-solid" id="edit-user-btn" onClick={openModal}>{this.props.modeTitle}</button>

                <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h6>Manage User - {this.props.modeTitle}</h6>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form className="no-border" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-50">
                                    <h5>Add User</h5>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="fname" placeholder="John" value={this.state.fname} onChange={this.handleChange} required/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" name="lname" placeholder="Smith" value={this.state.lname} onChange={this.handleChange} required/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" id="username" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} required/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com" value={this.state.email} onChange={this.handleChange} required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={null} required="true" sendData={this.getHandlerData} ></HandlersDropdown>
                                        </div>
                                    </div>
                                    <div className="form-group form-inline">
                                        <label className="isAdmin-label" htmlFor="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Administrator</a>?</label>
                                        <input name="isAdminChecked" type="checkbox" className="" id="exampleCheck1" checked={this.state.isAdminChecked} onChange={this.handleChange} />
                                    </div>

                                    {/*
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                                <input type="text" id="org" name="org" placeholder="Organization Name" onChange={this.handleChange}/>
                                            </div>
                                        </div>
                                    */}

                                </div>
                                <input type="submit" value="Add User" className="btn-solid addbtn" />
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
