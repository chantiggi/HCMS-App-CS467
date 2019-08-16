import React from 'react';
import { Modal } from 'react-bootstrap';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';
import { TimingDropdown } from './dropdownMenus/timingDropdown';

export class AddNewMedsModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timingID: '',
            amountID: '',
            unitID: '',
            medID: '',
            medNotes: null
        }
        this.getTimingData = this.getTimingData.bind(this);
        this.getAmountData = this.getAmountData.bind(this);
        this.getUnitData = this.getUnitData.bind(this);
        this.getMedData = this.getMedData.bind(this);
    }

    getTimingData(val) { this.setState({timingID: Number(val)}); }
    getAmountData(val) { this.setState({amountID: Number(val)}); }
    getUnitData(val) { this.setState({unitID: Number(val)}); }
    getMedData(val) { this.setState({medID: Number(val)}); }
    handleNotesChange = (event) => { this.setState({medNotes: event.target.value}); }

    handleSubmit = () => {
        let newMed = this.state;
        this.props.sendData(newMed);
        this.setState({isOpen: false});
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })

        return (
          <div>
            <button type="button" className="btn btn-border" id="add-med-btn" onClick={openModal}>+ Additional Med</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>Add New Medication</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="feed-info">
                    <div className="row">
                    <div className="col-sm">
                            <TimingDropdown required="true" sendData={this.getTimingData}></TimingDropdown>
                        </div>
                        <div className="col-sm">
                            <AmountsDropdown dropdownID="med-amount" required="true" sendData={this.getAmountData}></AmountsDropdown>
                        </div>
                        <div className="col-sm">
                            <UnitsDropdown dropdownID="med-unit" required="true" sendData={this.getUnitData}></UnitsDropdown>
                        </div>
                        <div className="col-sm">
                            <MedsDropdown dropdownID="med-type" required="true" sendData={this.getMedData}></MedsDropdown>
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="med-notes">Special Notes</label>
                            <textarea className="form-control" id="med-notes" onChange={this.handleNotesChange}></textarea>
                        </div>
                    <hr></hr>
                    </div>
                <button type="submit" className="btn btn-solid submit-feed-btn" id="submit-med" onClick={this.handleSubmit}>Add New Med</button>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}