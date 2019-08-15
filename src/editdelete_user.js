import React from 'react';
import './stylesheets/editdelete_user.css';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { Modal } from 'react-bootstrap';

export class EditUserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            isOpen: false
        };
    }

    componentDidMount() {
        var currentUserID;
        if (this.props.userID)
        {
          let currentUserID = this.props.userID;
          fetch(`/restapi/users/${currentUserID}`, {
              method: "GET"
          })

          .then(response => response.json())
          .then(data => this.setState({user: data}))
          .catch(err => console.log("Error reading data: ", err))
        }
        else {
          currentUserID = null;
        }
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
                        <form className="no-border">
                            <div className="row">
                                <div className="col-50">
                                    <h5>Edit User</h5>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="fname">First Name</label>
                                            <input type="text" id="fname" name="fname" placeholder="John" defaultValue={someUser.fname || ""}/>
                                        </div>
                                        <div className="col">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" id="lname" name="lname" placeholder="Smith" defaultValue={someUser.lname || ""}/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="email"><i className="fa fa-envelope"></i> Email Address</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com" defaultValue={someUser.email || ""} />
                                        </div>
                                    </div>

                                    <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={someUser.handlerLevelID || null} required="true"></HandlersDropdown>

                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" htmlFor="exampleCheck1">Is the user an <a href="#" title="User is given access to Manage Preferences" data-toggle="popover" data-trigger="hover" data-content="Some content">Administrator</a>?</label>
                                    </div>


                                    <div className="row">
                                        <div className="col-50">
                                            <label htmlFor="org"><i className="fa fa-envelope"></i> Organization Name</label>
                                            <input type="text" id="org" name="org" placeholder="Organization Name" defaultValue={someUser.orgName}/>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Edit User" className="btns addbtn" />
                            </div>
                        </form>
                    )}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}
