import React from 'react';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';
import { TimingDropdown } from './dropdownMenus/timingDropdown';


export class MedsSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meds: []
        };
    }

    componentDidMount() {
        if (this.props.horseID) {
            fetch(`/restapi/meds/${this.props.horseID}`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => this.setState({meds: data}))
            .catch(err => console.log("Error reading data: ", err))
        }
    }

    render() {
        const { meds } = this.state;
        console.log("meds = ", meds);

        return (
            <div className="section-wrapper">
                    <h5 className="form-heading" id="med-info-header">Medicine Information</h5>
                    
                    {meds ? (meds.map(currentMed =>                     
                    <div className="med-info" key={currentMed.horseMedID}>
                        <div className="row">
                            <div className="col-sm">
                                <TimingDropdown time={currentMed.timingID}></TimingDropdown>
                            </div>
                            <div className="col-sm">
                                <AmountsDropdown dropdownID="med-amount" required="false" amount={currentMed.amountID}></AmountsDropdown>
                            </div>
                            <div className="col-sm">
                                <UnitsDropdown dropdownID="med-unit" required="false" unit={currentMed.unitID}></UnitsDropdown>
                            </div>
                            <div className="col-sm">
                                <MedsDropdown med={currentMed.medID}></MedsDropdown>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="med-notes">Special Notes</label>
                            <textarea className="form-control" id="med-notes" defaultValue={currentMed.medNotes || ""}></textarea>
                        </div>
                        <hr></hr>
                    </div>
                    )) : (
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
                        <hr></hr>
                      </div>
                    )}
                </div>
        )
    }
}