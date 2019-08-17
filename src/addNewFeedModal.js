import React from 'react';
import { Modal } from 'react-bootstrap';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';

export class AddNewFeedModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amountID: '',
            unitID: '',
            feedID: '',
            feedNotes: null
        }
        this.getAmountData = this.getAmountData.bind(this);
        this.getUnitData = this.getUnitData.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
    }

    getAmountData(val) { this.setState({amountID: val}); }
    getUnitData(val) { this.setState({unitID: Number(val)}); }
    getFeedData(val) { this.setState({feedID: Number(val)}); }
    handleNotesChange = (event) => { this.setState({feedNotes: event.target.value}); }
 
    handleSubmit = () => {
        let newFeed = this.state;
        this.props.sendData(newFeed);
        this.setState({isOpen: false});
    }

    render() {
        let closeModal = () => this.setState({ isOpen: false })
        let openModal = () => this.setState({ isOpen: true })

        return (
          <div>
            <button type="button" className="btn btn-border" id="add-feed-btn" onClick={openModal}>+ Additional Feed</button>

            <Modal show={this.state.isOpen} onHide={closeModal} size="lg" backdrop="static">
              <Modal.Header closeButton>
                  <Modal.Title>
                    <h6>Add New Feed</h6>
                  </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div className="feed-info">
                    <div className="row">
                        <div className="col-sm">
                            <AmountsDropdown dropdownID="feed-amount" required="true" sendData={this.getAmountData}></AmountsDropdown>
                        </div>
                        <div className="col-sm">
                            <UnitsDropdown dropdownID="feed-unit" required="true" sendData={this.getUnitData}></UnitsDropdown>
                        </div>
                        <div className="col-sm">
                            <FeedDropdown dropdownID="feed-type" required="true" sendData={this.getFeedData}></FeedDropdown>
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="feed-notes">Special Notes</label>
                            <textarea className="form-control" id="feed-notes" onChange={this.handleNotesChange}></textarea>
                        </div>
                    <hr></hr>
                    </div>
                <button type="submit" className="btn btn-solid submit-feed-btn" id="submit-feed" onClick={this.handleSubmit}>Add New Feed</button>
              </Modal.Body>
            </Modal>
          </div>
        )
    }
}