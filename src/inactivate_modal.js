import React from 'react';
import { Modal } from 'react-bootstrap';

export class InactivateModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false
        };
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })

        return(
            <div className="inactivate-container">
                <button type="button" className="btn btn-border" id="inactivate-user-btn" onClick={openModal}>Inactivate</button>
                <Modal show={this.state.isOpen} onHide={closeModal}>
                    <Modal.Header closeButton>
                        <h6>Inactivate {this.props.targetType}</h6>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to inactivate <b>{this.props.targetName}</b>?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button type="button" className="btn inactivate-btn" onClick={closeModal}>Inactivate</button>
                        <button type="button" className="btn btn-border" onClick={closeModal}>Cancel</button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
