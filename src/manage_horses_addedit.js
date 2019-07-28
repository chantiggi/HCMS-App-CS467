import React from 'react';
import { ManagementTabs } from './managementtabs';

export class AddEditHorse extends React.Component {
    render() {
        return (
            <div className="container">

                <ManagementTabs />

                <div id="manage-horses-add-edit">
                    <form>

                        <div className="section-wrapper">
                            <h5 className="form-heading" id="horse-info-header">Horse Information</h5>
                            <div className="horse-info form-row">
                                <div className="col-sm">
                                    <div className="form-group">
                                        <label for="horse-name">Horse Name<span className="required-input">*</span></label>
                                        <input type="text" className="form-control" id="horse-name" placeholder="Enter name" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="handler-level">Handler Level<span className="required-input">*</span></label>
                                        <select className="form-control" id="handler-level" required>
                                            <option value="" disabled selected>Select level</option>

                                            <option value="">Yellow</option>
                                            <option value="">Red</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="daytime-location">Daytime Location<span className="required-input">*</span></label>
                                        <select className="form-control" id="daytime-location" required>
                                            <option value="" disabled selected>Select location</option>

                                            <option>1</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="nighttime-location">Nighttime Location<span className="required-input">*</span></label>
                                        <select className="form-control" id="handler-level" required>
                                            <option value="" disabled selected>Select location</option>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="birth-year">Estimated Birth Year</label>
                                        <select className="form-control" id="birth-year">
                                            <option value="">Select year</option>

                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">

                                    <img id="photo" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" style="width:200px; height:auto; display: block; margin-left: auto; margin-right: auto;" />
                                    <div className="custom-file">
                                        <label className="custom-file-label" for="upload-photo">Upload New Photo</label>
                                        <input className="custom-file-input" id="upload-photo" type="file" name="photo" accept="image/png, image/jpeg" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="form-group">
                                        <label for="horse-name">Description</label>
                                        <textarea className="form-control" id="description"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="special-notes">Special Notes or Requirements</label>
                                        <textarea type="text" className="form-control" id="special-notes"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="history">History</label>
                                        <textarea type="text" className="form-control" id="history"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-wrapper">
                            <h5 className="form-heading" id="feed-info-header">Feed Information</h5>
                            <div className="feed-info form-row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="feed-amount">Amount<span className="required-input">*</span></label>
                                        <select className="form-control" id="feed-amount" required>
                                            <option value="" disabled selected>Select amount</option>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="feed-unit">Unit<span className="required-input">*</span></label>
                                        <select className="form-control" id="feed-unit" required>
                                            <option value="" disabled selected>Select unit</option>

                                            <option value="Scoop">Scoop</option>
                                            <option value="Cup">Cup</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="feed-type">Type<span className="required-input">*</span></label>
                                        <select className="form-control" id="feed-type" required>
                                            <option value="" disabled selected>Select type</option>

                                            <option value="Strategy">Strategy</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <label for="feed-notes">Special Notes</label>
                                        <textarea className="form-control" id="feed-notes"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn" id="add-feed-btn">+ New Feed</button>
                        </div>

                        <div className="section-wrapper">
                            <h5 className="form-heading" id="med-info-header">Medicine Information</h5>
                            <div className="med-info form-row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label for="med-timing">Timing</label>
                                        <select className="form-control" id="med-amount">
                                            <option value="" selected>Select Timing</option>

                                            <option value="1">AM</option>
                                            <option value="2">PM</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="med-amount">Amount</label>
                                        <select className="form-control" id="med-amount">
                                            <option value="" selected>Select amount</option>

                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="med-unit">Unit</label>
                                        <select className="form-control" id="med-unit">
                                            <option value="" selected>Select unit</option>

                                            <option value="tablet">tablet</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label for="med-type">Type</label>
                                        <select className="form-control" id="med-type">
                                            <option value="" selected>Select type</option>

                                            <option value="Strategy">antibiotic</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <label for="med-notes">Special Notes</label>
                                        <textarea className="form-control" id="med-notes"></textarea>
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="btn" id="add-med-btn">+ New Medicine</button>
                        </div>

                        <button type="submit" className="btn" id="submit-horse">Submit Horse</button>
                    </form>
                </div>
            </div>
        )
    }
}