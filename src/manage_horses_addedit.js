import React from 'react';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { LocationsDropdown } from './dropdownMenus/locationsDropdown';
import { Modal } from 'react-bootstrap';
import { FeedSection } from './feedSection';
import { MedsSection } from './medsSection';

export class AddEditHorse extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horse: null,
            isOpen: false,
            feedSection: []
        };
    }

    componentDidMount() {
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
                          <input type="text" className="form-control" id="horse-name" placeholder="Enter Name" defaultValue={horse ? horse.horseName : ""} required />
                      </div>
                      <HandlersDropdown dropdownID="handler-level" currentHandlerLevel={horse ? horse.handlerLevelID : null} required="true"></HandlersDropdown>
                      <LocationsDropdown dropdownID="daytime-location" required="true" time="AM" location={horse ? horse.dayLocationID : null}></LocationsDropdown>
                      <LocationsDropdown dropdownID="nighttime=location" required="true" time="PM" location={horse ? horse.nightLocationID : null}></LocationsDropdown>
                      <div className="form-group">
                          <label htmlFor="birth-year">Estimated Birth Year</label>
                          <input type="number" className="form-control" id="birth-year" min="1900" max="9999" placeholder="Enter Year" defaultValue={horse ? horse.birthYear : null}></input>
                      </div>
                      <div className="form-group">
                          <label htmlFor="horse-name">Description</label>
                          <textarea className="form-control" id="description" defaultValue={horse ? horse.description : ""}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="special-notes">Special Notes or Requirements</label>
                          <textarea type="text" className="form-control" id="special-notes" defaultValue={horse ? horse.specialNotes : ""}></textarea>
                      </div>
                      <div className="form-group">
                          <label htmlFor="history">History</label>
                          <textarea type="text" className="form-control" id="history" defaultValue={horse ? horse.history : ""}></textarea>
                      </div>
                    </div>
                </div>

                {/****Horse Feed Information****/}
                <FeedSection horseID={horse ? horse.horseID : null}></FeedSection>
                <button type="button" className="btn btn-border" id="add-feed-btn" onClick={this.addAnotherFeedSection}>+ Additional Feed</button>

                {/****Horse Med Information****/}
                <MedsSection horseID={horse ? horse.horseID : null}></MedsSection>
                <button type="button" className="btn btn-border" id="add-med-btn">+ Additional Medicine</button>
                
                
                <button type="submit" className="btn btn-solid submit-horse-btn" id="submit-horse">Submit Horse</button>
              </form>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}
