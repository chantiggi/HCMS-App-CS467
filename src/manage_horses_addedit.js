import React from 'react';
import { ManagementTabs } from './managementtabs';
import { HandlersDropdown } from './dropdownMenus/handlersDropdown';
import { LocationsDropdown } from './dropdownMenus/locationsDropdown';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';


export class AddEditHorse extends React.Component {
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

                <div id="manage-horses-add-edit">
                    <form>
                        {/****General Horse Information****/}
                        <div className="section-wrapper">
                            <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                            <div className="horse-info form-row">
                                <div className="col-sm">
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
                                </div>
                                <div className="col-sm">
                                    <img id="photo" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                    <div className="custom-file">
                                        <label className="custom-file-label" htmlFor="upload-photo">Upload New Photo</label>
                                        <input className="custom-file-input" id="upload-photo" type="file" name="photo" accept="image/png, image/jpeg" />
                                    </div>
                                </div>
                                <div className="col-sm">
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
                        </div>
                        {/****Horse Feed Information****/}
                        <div className="section-wrapper">
                            <h5 className="form-heading" id="feed-info-header">Feed Information</h5>
                            <div className="feed-info form-row">
                                <div className="col-sm-4">
                                    <AmountsDropdown dropdownID="feed-amount" required="true"></AmountsDropdown>
                                    <UnitsDropdown dropdownID="feed-unit" required="true"></UnitsDropdown>
                                    <FeedDropdown dropdownID="feed-type" required="true"></FeedDropdown>
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <label htmlFor="feed-notes">Special Notes</label>
                                        <textarea className="form-control" id="feed-notes"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn" id="add-feed-btn">+ Additional Feed</button>
                        </div>

                        {/****Horse Med Information****/}
                        <div className="section-wrapper">
                            <h5 className="form-heading" id="med-info-header">Medicine Information</h5>
                            <div className="med-info form-row">
                                <div className="col-sm-4">
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
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <label htmlFor="med-notes">Special Notes</label>
                                        <textarea className="form-control" id="med-notes"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn" id="add-med-btn">+ Additional Medicine</button>
                        </div>

                        <button type="submit" className="btn" id="submit-horse">Submit Horse</button>
                    </form>
                </div>
            </div>
        )
    }
}