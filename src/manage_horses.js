import React from 'react';
import './stylesheets/manage_horses_style.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';
import { NavBar } from './navbar';
import { Footer } from './footer';

import { AddEditHorse } from './manage_horses_addedit'

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

            <div>
            <NavBar />
            <div className="container">

                <ManagementTabs />

                <div className="tab-content" id="manage-horses-tab">

                    <div id="manage-horses-main">
                        <h5>To view a horse's full profile, including history, feed, medications, click the Edit button for the appropriate horse.</h5>
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
                                          <AddEditHorse dialogTitle="Edit Horse" horseID={horse.horseID} />
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
                                                      <button type="button" className="btn inactivate-btn">Inactivate</button>
                                                      <button type="button" className="btn btn-border" data-dismiss="modal">Cancel</button>
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
                          <AddEditHorse dialogTitle="Add New Horse" horseID={null}/>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}
