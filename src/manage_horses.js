import React from 'react';
import './stylesheets/manage_horses_style.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { LocationsDropdown } from './dropdownMenus/locationsDropdown';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';

export class ManageHorses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horses: [],
        };
    }

    componentDidMount() {
        const {match: {params}} = this.props;
        fetch('/restapi/horses', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => this.setState({horses: data}))
        .catch(err => console.log("Error reading data: ", err))
    }

    render() {
        const {horses} = this.state;

        return (
            <div className="container">

                <ManagementTabs />

                <div className="tab-content" id="manage-horses-tab">

                    <div id="manage-horses-main">
                        <h5>To view a horse's full profile, including history, feed, medications, click Edit/Delete for the appropriate horse.</h5>
                        <table className="table table-striped table-bordered" id="manage-horses-table">
                            <thead className="table-head">
                                <tr>
                                    <th>Horse Name</th>
                                    <th>Handler Level</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Daytime Location</th>
                                    <th>Nighttime Location</th>
                                    <th>Estimated Age</th>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {horses.map(horse =>
                                <tr key={horse.horseID}>
                                    <td>{horse.horseName}</td>
                                    <td>{horse.handlerLevelName}</td>
                                    <td>{horse.description || "N/A"}</td>
                                    <td>photo</td>
                                    <td>{horse.dayLocationName}</td>
                                    <td>{horse.nightLocationName}</td>
                                    <td>{(new Date()).getFullYear() - horse.birthYear + " years" || "Unknown"}</td>
                                    <td>
                                        <button type="button" className="btn btn-solid" id="edit-horse-btn" data-toggle="modal" data-target=".edit-horse-modal">Edit</button>

                                        <div className="modal fade edit-horse-modal" data-backdrop="static">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h6>Edit Horse - {horse.horseName} </h6>
                                                        <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                                    </div>
                                                    <div className="modal-body">
                                                      <form>

                                                      {/****General Horse Information****/}
                                                        <div className="section-wrapper">
                                                            <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                                                            <div className="horse-info">
                                                              <div className="form-group">
                                                                  <label htmlFor="horse-name">Horse Name<span className="required-input">*</span></label>
                                                                  <input type="text" className="form-control" id="horse-name" required />
                                                              </div>
                                                              <HandlersDropdown dropdownID="handler-level" required="true"></HandlersDropdown>
                                                              <LocationsDropdown dropdownID="daytime-location" required="true" time="AM"></LocationsDropdown>
                                                              <LocationsDropdown dropdownID="nighttime=location" required="true" time="PM"></LocationsDropdown>
                                                              <div className="form-group">
                                                                  <label htmlFor="birth-year">Estimated Birth Year</label>
                                                                  <input type="number" className="form-control" id="birth-year" min="1900" max="9999" placeholder="Enter Year"></input>
                                                              </div>
                                                              <div className="form-group">
                                                                  <label htmlFor="horse-name">Description</label>
                                                                  <textarea className="form-control" id="description"></textarea>
                                                              </div>
                                                              <div className="form-group">
                                                                  <label htmlFor="special-notes">Special Notes or Requirements</label>
                                                                  <textarea type="text" className="form-control" id="special-notes"></textarea>
                                                              </div>
                                                              <div className="form-group">
                                                                  <label htmlFor="history">History</label>
                                                                  <textarea type="text" className="form-control" id="history"></textarea>
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
                                                                    <label htmlFor="feed-notes">Special Notes</label>
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
                                                                  <textarea className="form-control" id="med-notes"></textarea>
                                                              </div>
                                                            </div>

                                                            <button type="button" className="btn btn-border" id="add-med-btn">+ Additional Medicine</button>

                                                        </div>

                                                        <button type="submit" className="btn btn-solid submit-horse-btn" id="submit-horse">Submit Horse</button>

                                                      </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-border" id="inactivate-horse-btn" data-toggle="modal" data-target=".inactivate-horse">Inactivate</button>

                                        <div className="modal fade inactivate-horse">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h6>Inactivate - {horse.horseName}</h6>
                                                        <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                                    </div>
                                                    <div className="modal-body modal-sm">
                                                      <p>Are you sure you want to inactivate <b>{horse.horseName}</b>?</p>
                                                    </div>
                                                    <div className="modal-footer">
                                                      <button type="button" class="btn inactivate-btn">Inactivate</button>
                                                      <button type="button" class="btn btn-border" data-dismiss="modal">Cancel</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>

                        <button type="button" className="btn btn-solid" id="add-btn" data-toggle="modal" data-target=".add-horse-modal">Add New Horse</button>

                        <div className="modal fade add-horse-modal" data-backdrop="static">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h6>Add New Horse</h6>
                                        <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                    </div>
                                    <div className="modal-body">
                                      <form>

                                      {/****General Horse Information****/}
                                        <div className="section-wrapper">
                                            <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                                            <div className="horse-info">
                                              <div className="form-group">
                                                  <label htmlFor="horse-name">Horse Name<span className="required-input">*</span></label>
                                                  <input type="text" className="form-control" id="horse-name" placeholder="Enter Name" required />
                                              </div>
                                              <HandlersDropdown dropdownID="handler-level" required="true"></HandlersDropdown>
                                              <LocationsDropdown dropdownID="daytime-location" required="true" time="AM"></LocationsDropdown>
                                              <LocationsDropdown dropdownID="nighttime=location" required="true" time="PM"></LocationsDropdown>
                                              <div className="form-group">
                                                  <label htmlFor="birth-year">Estimated Birth Year</label>
                                                  <input type="number" className="form-control" id="birth-year" min="1900" max="9999" placeholder="Enter Year"></input>
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="horse-name">Description</label>
                                                  <textarea className="form-control" id="description"></textarea>
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="special-notes">Special Notes or Requirements</label>
                                                  <textarea type="text" className="form-control" id="special-notes"></textarea>
                                              </div>
                                              <div className="form-group">
                                                  <label htmlFor="history">History</label>
                                                  <textarea type="text" className="form-control" id="history"></textarea>
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
                                                    <label htmlFor="feed-notes">Special Notes</label>
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
                                                  <textarea className="form-control" id="med-notes"></textarea>
                                              </div>
                                            </div>
                                            <button type="button" className="btn btn-border" id="add-med-btn">+ Additional Medicine</button>
                                        </div>
                                        <button type="submit" className="btn btn-solid submit-horse-btn" id="submit-horse">Submit Horse</button>
                                      </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
