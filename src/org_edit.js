import React from 'react';
import { Modal } from 'react-bootstrap';

export class EditOrg extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            org: null, 
            isOpen: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        confirm("Changes made")
        fetch(`restapi/org/1`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              orgID: 1,
              orgName: this.state.orgName || this.state.org[0].orgName,
              streetAddress: this.state.streetAddress || this.state.org[0].streetAddress,
              city: this.state.city || this.state.org[0].city,
              state: this.state.state || this.state.org[0].state,
              zipCode: this.state.zipCode || this.state.org[0].zipCode
            })
        })
        .then(response => response.json())
        .then(data => console.log("Data = ", data))
        .catch(err => console.log("Error reading data: ", err))
        this.props.reloadParent();
        this.setState({isOpen: false});
    }    

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    componentDidMount() {
        fetch('/restapi/org', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({org: data}))
        .catch(err => console.log("Error reading data: ", err))

    }    

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        let {org} = this.state;
        console.log(org);
        if (org) {
            org = org[0];
        }
        
        return (
          <div className="add-edit-container">
            <button type="button" className="btn btn-solid add" id="add-post-btn" onClick={openModal}>{this.props.modeTitle}</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>{this.props.modeTitle}</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              
              <form className="no-border">
                
                        <h5 className="otitle" >Organization Information </h5>
                        
                        <div className="row">
                            
                            <div className="col">
                            
                                <div className="form-group">
                                    
                                    <label for="oname"><i className="fa fa-envelope"></i>Name</label>

                                    <input type="text" className="form-control org-name" id="oname" name="orgName" defaultValue={org ? org.orgName : undefined} onChange={this.handleChange}/>

                                </div>
                                
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="oaddress"><i className="fa fa-envelope"></i>Address</label>
                                    <input type="text" className="form-control org-address" id="oaddress" name="streetAddress" defaultValue={org ? org.streetAddress : undefined} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-group">
                                    <label for="city">City</label>
                                    <input type="text" className="form-control" id="city" name="city" defaultValue={org ? org.city : undefined} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="form-group">
                                    <label for="state">State</label>
                                    <input type="text" className="form-control" id="state" name="state" defaultValue={org ? org.state : undefined} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-group">
                                    <label for="zip">Zip Code</label>
                                    <input type="text" className="form-control" id="zip" name="zipCode" defaultValue={org ? org.zipCode : undefined} onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                <button type="submit" className="btn btn-solid submit" id="submit-post" onClick={this.handleSubmit}>Submit</button>
                </div>
              </form>
              
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
