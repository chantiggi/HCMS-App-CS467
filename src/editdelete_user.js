import React from 'react';
import './stylesheets/editdelete_user.css';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { Modal } from 'react-bootstrap';

export class EditUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            isOpen: false,
        };

        this.getHandlerData = this.getHandlerData.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getUserData = this.getUserData.bind(this);
    }

    getHandlerData(val) {
        this.setState({handlerLevelID: val});
    }

    getUserData(){
        if (this.props.userID)
        {
          let currentUserID = this.props.userID;
          fetch(`restapi/users/${currentUserID}`, {
              method: "GET"
          })

          .then(response => response.json())
          .then(data => this.setState({user: data}))
          .catch(err => console.log("Error reading data: ", err))
        }
        else {
          this.setState({user: null});
        }
    }

    handleChange = (event) => {
        if (event.target.type == 'checkbox') {
            const checked = event.target.checked;

            // Change User to general user
            if (checked) {
                this.setState({
                    [event.target.name]: currentValue,
                    isAdmin: 1
                });
            }

            // Change User to admin
            else {
                this.setState({
                    [event.target.name]: checked,
                    isAdmin: 0
                });
            }
        }

        else {
            const value = event.target.value;
            this.setState({...this.state, [event.target.name]: value});
            console.log(this.state[event.target.name]);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit: ', this);
        fetch(`restapi/users/${this.props.userID}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: this.state.fname,
                lname: this.state.lname,
                username: this.state.username,
                email: this.state.email,
                handlerLevelID: this.state.handlerLevelID,
                isAdmin: this.state.isAdmin,
                orgID: 1
            })
        })
        .then(response => response.json())
        .then(data => console.log("Data = ", data))
        .catch(err => console.log("Error reading data: ", err))

        this.setState({isOpen: false});
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        const {user} = this.state;

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
                    {user.map(someUser =>
                        <form className="no-border" onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-50">
                                    <h5>Edit User</h5>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="fname" placeholder="John" defaultValue={ user ? someUser.fname : undefined} onChange={this.handleChange}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" name="lname" placeholder="Smith" defaultValue={ user ? someUser.lname : undefined} onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" id="username" name="username" placeholder="username" defaultValue={ user ? someUser.username : undefined} onChange={this.handleChange}  required/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com" defaultValue={ user ? someUser.email : undefined} onChange={this.handleChange}  required/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={someUser.handlerLevelID} required="true" sendData={this.getHandlerData} ></HandlersDropdown>
                                        </div>
                                    </div>
                                    <div className="form-group form-inline">
                                        <label className="isAdmin-label" htmlFor="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Administrator</a>?</label>
                                        <input name="isAdminChecked" type="checkbox" className="" id="exampleCheck1" defaultChecked={someUser.isAdmin === 1 ? true : false} onChange={this.handleChange} />
                                    </div>

                                    {/*
                                        <div className="row">
                                            <div className="col-50">
                                                <label htmlFor="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                                <input type="text" id="org" name="org" placeholder="Organization Name" defaultdefaultValue={someUser.orgName}/>
                                            </div>
                                        </div>

                                    */}

                                </div>
                                <input type="submit" value="Edit User" className="btn-solid addbtn" />
                            </div>
                        </form>
                    )}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
