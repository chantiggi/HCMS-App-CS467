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
        this.getTimingData = this.getTimingData.bind(this);
        this.getAmountData = this.getAmountData.bind(this);
        this.getUnitData = this.getUnitData.bind(this);
        this.getMedTypeData = this.getMedTypeData.bind(this);
        this.getMedData = this.getMedData.bind(this);
    }

    getTimingData(val) { this.setState({timingID: Number(val)}); }
    getAmountData(val) { this.setState({amountID: Number(val)}); }
    getUnitData(val) { this.setState({unitID: Number(val)}); }
    getMedTypeData(val) { this.setState({medID: Number(val)}); }
    
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    getMedData(val) {
        let medsToAddTo = this.state.meds;
        // Make a temporary horseMedID to use as key for initial display. We will ignore
        // this in the query so that the database autogenerates its own HorseMedID
        val.horseMedID = new Date().getUTCMilliseconds();
        val.isNew = true;
        medsToAddTo.push(val);
        this.setState({meds: medsToAddTo});
        this.props.sendData(this.state.meds);
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
                            <AmountsDropdown dropdownID="med-amount" required="false" amount={currentMed.amountID} sendData={this.getAmountData}></AmountsDropdown>
                        </div>
                        <div className="col-sm">
                            <UnitsDropdown dropdownID="med-unit" required="false" unit={currentMed.unitID} sendData={this.getUnitData}></UnitsDropdown>
                        </div>
                        <div className="col-sm">
                            <MedsDropdown med={currentMed.medID} sendData={this.getMedTypeData}></MedsDropdown>
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