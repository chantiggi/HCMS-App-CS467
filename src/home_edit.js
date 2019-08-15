import React from 'react';
import { Modal } from 'react-bootstrap';
import './stylesheets/admin_home.css';

export class EditPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: [],
            isOpen: false,
            postupdate: ''
        };
    }


    componentDidMount() {
        var currentPostID;
        if (this.props.orgNoteID)
        {
          let currentPostID = this.props.orgNoteID;
          fetch(`/restapi/home/${currentPostID}`, {
              method: "GET"
          })

          .then(response => response.json())
          .then(data => this.setState({post: data}))
          .catch(err => console.log("Error reading data: ", err))
        }
        else {
          currentPostID = null;
        }
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        const {post} = this.state;
        console.log(post);

        return (
          <div className="add-edit-container">
            <button type="button" className="btn btn-solid" id="edit-post-btn" onClick={openModal}>{this.props.modeTitle}</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>Edit Post</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              
              <form className="no-border" onSubmit={this.handleEdit} method="POST">
                
                {post.map(apost =>
                <div>
                <div className="col-8 col-sm-6" key={apost.orgNoteID}>Post:</div>
                
                <div className="col-8 col-sm-9"><textarea cols="70" rows="25" defaultValue={apost.orgNote}></textarea> </div>
                </div>
                )}

                <button type="submit" className="btn btn-solid submit" id="submit-post">Submit Changes</button>
              </form>
              
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
