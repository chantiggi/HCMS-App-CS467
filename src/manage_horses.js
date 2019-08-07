import React from 'react';
import './stylesheets/manage_horses_style.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';

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
                                        <Link to={'/addedithorse'} className="btn btn-solid" id="edit-del-btn">Edit/Delete</Link>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>

                        <button type="button" className="btn btn-solid" id="add-btn">Add New Horse</button>
                    </div>

                </div>
            </div>
        )
    }
}
