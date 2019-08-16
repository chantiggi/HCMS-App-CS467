import React from 'react';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { LocationsDropdown } from './dropdownMenus/locationsDropdown';
import { Modal } from 'react-bootstrap';
import { FeedForm } from './feedForm';
import { MedsForm } from './medsForm';

export class AddEditHorse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horse: null,
            isOpen: false
        };

        this.getHandlerData = this.getHandlerData.bind(this);
        this.getAMLocData = this.getAMLocData.bind(this);
        this.getPMLocData = this.getPMLocData.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
        this.getMedData = this.getMedData.bind(this);
    }

    getHandlerData(val) {
        console.log("Handler val in add/edit page is: ", val);
        this.setState({handlerLevelID: val});
    }

    getAMLocData(val) {
        console.log("AM location val in add/edit page is: ", val);
        this.setState({dayLocationID: val});
    }

    getPMLocData(val) {
        console.log("PM location val in add/edit page is: ", val)
        this.setState({nightLocationID: val});
    }

    getFeedData(val) {
        console.log("feed val in add/edit page is: ", val);
    }

    getMedData(val) {
        console.log("med val in add/edit page is: ", val);
    }

    getAllHorseInfo() {
        if (this.props.horseID)
        {
          let currentHorseID = this.props.horseID;
          fetch(`/restapi/horses/${currentHorseID}`, {
              method: "GET"
          })
          .then(response => response.json())
          .then(data => this.setState({horse: data}))
          .catch(err => console.log("Error reading data: ", err))
        }
        else {
            this.setState({horse: null});
        }
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.horse === null) {
            console.log("horse is null - you must have hit submit from the add horse modal");
            console.log("this.state = ", this.state);
            fetch(`restapi/horses`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    horseName: this.state.horseName,
                    description: this.state.description || null,
                    birthYear: this.state.birthYear || null,
                    specialNotes: this.state.specialNotes || null,
                    history: this.state.history || null,
                    isActive: 1,
                    handlerLevelID: this.state.handlerLevelID,
                    dayLocationID: this.state.dayLocationID,
                    nightLocationID: this.state.nightLocationID,
                    orgID: 1
                })
            })
            .then(response => response.json())
            .then(data => console.log("Data = ", data))
            .catch(err => console.log("Error reading data: ", err))
        }
        else {
            console.log("horse not null - you must have hit submit from the edit modal");
            console.log("this.state = ", this.state);
            fetch(`restapi/horses/${this.props.horseID}`, {
                method: "PUT"
            })
        }
    }

    componentDidMount() {
        this.getAllHorseInfo();
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        let {horse} = this.state;
        if (horse) {
            horse = horse[0];
        }
        
        return (
          <div className="add-edit-container">
            <button type="button" className="btn btn-solid" id="edit-horse-btn" onClick={openModal}>{this.props.modeTitle}</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>{this.props.modeTitle} {horse ? ('- ' + horse.horseName) : ""} </h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              <form className="no-border">

              {/****General Horse Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                    <div className="horse-info">
                      <div className="form-group">
                          <label htmlFor="horse-name">Horse Name<span className="required-input">*</span></label>
                          <input type="text" className="form-control" name="horseName" id="horse-name" placeholder="Enter Name" value={horse ? horse.horseName : undefined} onChange={this.handleChange} required />
                      </div>
                      <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={horse ? horse.handlerLevelID : null} required="true" sendData={this.getHandlerData}></HandlersDropdown>
                      <LocationsDropdown dropdownID="daytime-location" required="true" time="AM" location={horse ? horse.dayLocationID : null} sendData={this.getAMLocData}></LocationsDropdown>
                      <LocationsDropdown dropdownID="nighttime=location" required="true" time="PM" location={horse ? horse.nightLocationID : null} sendData={this.getPMLocData}></LocationsDropdown>
                      <div className="form-group">
                          <label htmlFor="birth-year">Estimated Birth Year</label>
                          <input type="number" className="form-control" name="birthYear" id="birth-year" min="1900" max="9999" placeholder="Enter Year" value={horse ? (horse.birthYear ? horse.birthYear : undefined) : undefined} onChange={this.handleChange}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="horse-name">Description</label>
                          <textarea className="form-control" name="description" id="description" value={horse ? (horse.description ? horse.description : undefined) : undefined} onChange={this.handleChange}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="special-notes">Special Notes or Requirements</label>
                          <textarea type="text" className="form-control" name="specialNotes" id="special-notes" value={horse ? (horse.specialNotes ? horse.specialNotes : undefined) : undefined} onChange={this.handleChange}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="history">History</label>
                          <textarea type="text" className="form-control" name="history" id="history" value={horse ? (horse.history ? horse.history : undefined) : undefined} onChange={this.handleChange}></textarea>
                      </div>
                    </div>
                </div>

                {/****Horse Feed Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="feed-info-header">Feed Information</h5>
                        <FeedForm horseID={horse ? horse.horseID : null} sendData={this.getFeedData}></FeedForm>
                </div>

                {/****Horse Med Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="med-info-header">Medicine Information</h5>
                        <MedsForm horseID={horse ? horse.horseID : null} sendData={this.getMedData}></MedsForm>
                        <button type="button" className="btn btn-border" id="add-med-btn">+ Additional Medicine</button>
                    <br></br><br></br>
                </div>
                
                <button type="submit" className="btn btn-solid submit-horse-btn" id="submit-horse" onClick={this.handleSubmit}>Submit Horse</button>
              </form>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
