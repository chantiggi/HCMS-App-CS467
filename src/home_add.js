import React from 'react';
import { Modal } from 'react-bootstrap';
import './stylesheets/admin_home.css';
import Moment from 'react-moment';

export class AddPost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            isOpen: false
        };
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var date = new Date();
        if (this.state.post === null) {
            fetch(`restapi/home`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orgNote: this.state.orgNote,
                    userID: 2,
                    orgID: 1,
                    datetime: date.toISOString()
                })
            })
            .then(response => response.json())
            .then(data => console.log("Data = ", data))
            .catch(err => console.log("Error reading data: ", err))
        }
        this.setState({isOpen: false});

    }    

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        let {post} = this.state;
        if (post) {
          post = post[0];
        }

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
              
              <form className="no-border">
                
                <div>
                <div className="col-8 col-sm-6">Post:</div>
                
                <div className="col-8 col-sm-9"><textarea cols="70" rows="25" name="orgNote" value={post ? post.orgNote : undefined} onChange={this.handleChange}></textarea> </div>
                </div>

                <button type="submit" className="btn btn-solid submit" id="submit-post" onClick={this.handleSubmit}>Submit</button>
              </form>
              
              </Modal.Body>
            </Modal>
          </div>

        )

    }
}
