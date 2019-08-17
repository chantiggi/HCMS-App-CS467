import React from 'react';

import { Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

export class LogInModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isOpen: false,
            isValid: false,
            showError: false,
            errorMsg: "Username and/or Password is incorrect. Please try again."
        };
    }

    handleUsernameChange = (event) => {
        this.setState({ showError: false, username: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ showError: false, password: event.target.value });
    }

    validateLogIn = () => {
        console.log("this.state = ", this.state);
        const username = this.state.username;
        const password = this.state.password;

        fetch(`/restapi/validateLogIn/${username}/${password}`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.handleValidationResults(data))
        .catch(err => console.log(err));
    }

    handleValidationResults(data) {
        this.setState({isValid: data});
        console.log("this.state.isValid = ", this.state.isValid);
        if (this.state.isValid) {
            console.log("Here's where we'll redirect you...");
        }
        else {
            this.setState({showError: true})
        }  
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false, showError: false })
        let openModal = () => this.setState({ isOpen: true, showError: false })

        if (this.state.isValid) {
            return <Redirect to="/adminhome"></Redirect>
        }

        return (
            <div>
                <button type="button" className="btn" onClick={openModal}>Log In</button>

                <Modal
                    show={this.state.isOpen}
                    onHide={closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h6>Log In</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="row login">
                                <label className="col-md-4" htmlFor="username">Username: </label>
                                <input className="col-md-6" id="username" type="text" onChange={this.handleUsernameChange} autoComplete="username" />
                            </div>
                            <div className="row login">
                                <label className="col-md-4" htmlFor="password">Password:</label>
                                <input className="col-md-6" id="password" type="password" onChange={this.handlePasswordChange} autoComplete="current-password" />
                            </div>
                            {this.state.showError ? <div className="error-msg">{this.state.errorMsg}</div> : ""}
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<button type="button" className="btn btn-secondary">Forgot Password?</button>*/}
                        <button type="button" className="btn btn-secondary" onClick={this.validateLogIn}>Log In</button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}