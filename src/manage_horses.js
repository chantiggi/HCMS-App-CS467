import React from 'react';
import './stylesheets/manage_horses_style.css';
import { ManagementTabs } from './managementtabs';
import { NavBar } from './navbar';
import { Footer } from './footer';

import { AddEditHorse } from './manage_horses_addedit'
import { InactivateModal } from './inactivate_modal.js'

export class ManageHorses extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          horses: []
      };
  }

  getAllHorses() {
    fetch('/restapi/horses', {
        method: "GET"
    })
        .then(response => response.json())
        .then(data => this.setState({horses: data}))
        .catch(err => console.log("Error reading data: ", err))
  }

    reloadPage = () => {
        window.location.reload();
    }

    componentDidMount() {
        this.getAllHorses();
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
                                    <td>{horse.dayLocationName}</td>
                                    <td>{horse.nightLocationName}</td>
                                    <td>{horse.birthYear ? (new Date().getFullYear() - horse.birthYear) + " years" : "Unknown"}</td>
                                    <td>
                                        <AddEditHorse modeTitle="Edit" horseID={horse.horseID} reloadParent={this.reloadPage}/>
                                    </td>
                                    <td>
                                        <InactivateModal targetType="Horse" targetID={horse.horseID} targetName={horse.horseName}/>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                        <AddEditHorse modeTitle="Add Horse" reloadParent={this.reloadPage}/>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
        )
    }
}
