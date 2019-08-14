import React from 'react';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { LocationsDropdown } from './dropdownMenus/locationsDropdown';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';
import { Modal } from 'react-bootstrap';

export class AddEditHorse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horse: [],
            isOpen: false
        };
    }

    componentDidMount() {
        var currentHorseID;
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
          currentHorseID = null;
        }
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })
        const {horse} = this.state;
        

        return (
          <div className="add-edit-container">
            <button type="button" className="btn btn-solid" id="edit-horse-btn" onClick={openModal}>{this.props.modeTitle}</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>Manage Horse - {this.props.modeTitle}</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
              {horse.map(someHorse =>
              <form className="no-border" key={someHorse.horseID}>

              {/****General Horse Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                    <div className="horse-info">
                      <div className="form-group">
                          <label htmlFor="horse-name">Horse Name<span className="required-input">*</span></label>
                          <input type="text" className="form-control" id="horse-name" placeholder="Enter Name" defaultValue={someHorse.horseName || ""} required />
                      </div>
                      <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={someHorse.handlerLevelID || null} required="true"></HandlersDropdown>
                      <LocationsDropdown dropdownID="daytime-location" required="true" time="AM"></LocationsDropdown>
                      <LocationsDropdown dropdownID="nighttime=location" required="true" time="PM"></LocationsDropdown>
                      <div className="form-group">
                          <label htmlFor="birth-year">Estimated Birth Year</label>
                          <input type="number" className="form-control" id="birth-year" min="1900" max="9999" placeholder="Enter Year" defaultValue={someHorse.birthYear || null}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="horse-name">Description</label>
                          <textarea className="form-control" id="description" defaultValue={someHorse.description || ""}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="special-notes">Special Notes or Requirements</label>
                          <textarea type="text" className="form-control" id="special-notes" defaultValue={someHorse.specialNotes || ""}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="history">History</label>
                          <textarea type="text" className="form-control" id="history" defaultValue={someHorse.history || ""}></textarea>
                      </div>
                    </div>
                </div>

                {/****Horse Feed Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="feed-info-header">Feed Information</h5>
                    <div className="feed-info">
                        <AmountsDropdown dropdownID="feed-amount" required="true"></AmountsDropdown>
                        <UnitsDropdown dropdownID="feed-unit" required="true"></UnitsDropdown>
                        <FeedDropdown dropdownID="feed-type" required="true"></FeedDropdown>
                        <div className="form-group">
                            <label htmlFor="feed-notes" defaultValue={someHorse.feedNotes || ""}>Special Notes</label>
                            <textarea className="form-control" id="feed-notes"></textarea>
                        </div>
                    </div>
                    <button type="button" className="btn btn-border" id="add-feed-btn">+ Additional Feed</button>
                </div>

                {/****Horse Med Information****/}
                <div className="section-wrapper">
                    <h5 className="form-heading" id="med-info-header">Medicine Information</h5>
                    <div className="med-info">
                      <div className="form-group">
                          <label htmlFor="med-timing">Timing</label>
                          <select className="form-control" id="med-amount">
                              <option value="" defaultValue>Select Timing</option>
                              <option value="1">AM</option>
                              <option value="2">PM</option>
                          </select>
                      </div>
                      <AmountsDropdown dropdownID="med-amount" required="false"></AmountsDropdown>
                      <UnitsDropdown dropdownID="med-unit" required="false"></UnitsDropdown>
                      <MedsDropdown></MedsDropdown>
                      <div className="form-group">
                          <label htmlFor="med-notes">Special Notes</label>
                          <textarea className="form-control" id="med-notes" defaultValue={someHorse.medNotes || ""}></textarea>
                      </div>
                    </div>
                    <button type="button" className="btn btn-border" id="add-med-btn">+ Additional Medicine</button>
                </div>
                <button type="submit" className="btn btn-solid submit-horse-btn" id="submit-horse">Submit Horse</button>
              </form>
              )}
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
