import React from 'react';
import { AMMedList } from './AMMedList';
import { PMMedList } from './PMMedList';

import { Modal } from 'react-bootstrap';

export class HorseMedsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })

        return (
            <div>
                <button type="button" className="btn" id="med-btn" onClick={openModal}>MEDS</button>

                <Modal
                    show={this.state.isOpen}
                    onHide={closeModal}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h6>Horse Medications - {this.props.horseName}</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>AM Meds:</h6>
                        <AMMedList horseID={this.props.horseID}></AMMedList>
                        <h6>PM Meds:</h6>
                        <PMMedList horseID={this.props.horseID}></PMMedList>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}