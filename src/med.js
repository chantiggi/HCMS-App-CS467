import React from 'react';
import './stylesheets/med_style.css';

export class MedPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Horse Medications</h1>
                <div className="toggle row">
                    <div className="col">
                        <h5>Time of Day:</h5>
                    </div>
                    <div className="col">
                        <div className="custom-switch">
                            <input type="checkbox" className="custom-control-input" id="switch-time" />
                            <label className="custom-control-label" for="switch-time" id="label-time"></label>
                        </div>
                    </div>
                </div>
                <div className="toggle row">
                    <div className="col">
                        <h5>View Horses:</h5>
                    </div>
                    <div className="col">
                        <div className="custom-switch">
                            <input type="checkbox" className="custom-control-input" id="switch-horses" />
                            <label className="custom-control-label" for="switch-horses" id="label-horses"></label>
                        </div>
                    </div>
                </div>

                <table className="table table-striped">
                    <thead className="table-head">
                        <tr>
                            <th>Horse Name</th>
                            <th>Location</th>
                            <th>Medication</th>
                            <th>Special Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="med-horse all-horses">
                            <td>Abigail</td>
                            <td>1</td>
                            <td>1 scoop Strategy</td>
                            <td>Mix together and soak with 1/2 c warm water</td>
                        </tr>
                        <tr className="all-horses">
                            <td>Daisy</td>
                            <td>2</td>
                            <td>1 scoop mare magic</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}