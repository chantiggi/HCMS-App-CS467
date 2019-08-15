import React from 'react';
import { Modal } from 'react-bootstrap';
import './stylesheets/admin_home.css';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        return (
          <div className="add-edit-container">
            <button type="button" className="btn btn-solid add" id="add-post-btn" onClick={openModal}>{this.props.modeTitle}</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>Add Post</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              
              <form className="no-border" onSubmit={this.handleEdit} method="POST">
                
                <div>
                <div className="col-8 col-sm-6">Post:</div>
                
                <div className="col-8 col-sm-9"><textarea cols="70" rows="25"></textarea> </div>
                </div>

                <button type="submit" className="btn btn-solid submit" id="submit-post">Submit</button>
              </form>
              
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
