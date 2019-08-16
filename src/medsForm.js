import React from 'react';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { MedsDropdown } from './dropdownMenus/medsDropdown';
import { TimingDropdown } from './dropdownMenus/timingDropdown';
import { AddNewMedsModal } from './addNewMedsModal';

export class MedsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meds: []
        };
        this.getMedData = this.getMedData.bind(this);
    }

    getMedData(val) {
        let medsToAddTo = this.state.meds;
        // Make a temporary horseMedID to use as key for initial display. We will ignore
        // this in the query so that the database autogenerates its own HorseMedID
        val.horseMedID = new Date().getUTCMilliseconds();
        medsToAddTo.push(val);
        this.setState({meds: medsToAddTo});
        this.props.sendData(this.state.meds);
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
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

        return (
            <div>
                {meds.map(currentMed =>                     
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
                        <textarea className="form-control" id="med-notes" name="medNotes" value={currentMed.medNotes ? currentMed.medNotes : ""} onChange={this.handleChange}></textarea>
                    </div>
                    <hr></hr>
                </div>
                )}
                <AddNewMedsModal sendData={this.getMedData}></AddNewMedsModal>
            </div>
        )
    }
}