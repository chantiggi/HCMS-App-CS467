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
        //this.getTimingData = this.getTimingData.bind(this);
        //this.getAmountData = this.getAmountData.bind(this);
        //this.getUnitData = this.getUnitData.bind(this);
        //this.getMedTypeData = this.getMedTypeData.bind(this);
        this.getMedData = this.getMedData.bind(this);
    }

    //getTimingData(val) { this.setState({timingID: Number(val)}); }
    //getAmountData(val) { this.setState({amountID: Number(val)}); }
    //getUnitData(val) { this.setState({unitID: Number(val)}); }
    //getMedTypeData(val) { this.setState({medID: Number(val)}); }
    
    /*handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }*/

    getMedData(val) {
        //let medsToAddTo = this.state.meds;
        // Make a temporary horseMedID to use as key for initial display. We will ignore
        // this in the query so that the database autogenerates its own HorseMedID
        //val.horseMedID = new Date().getUTCMilliseconds();
        //val.isNew = true;
        //medsToAddTo.push(val);
        //this.setState({meds: medsToAddTo});
        //this.props.sendData(this.state.meds);
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
                {meds.length > 0 ?
                (<table className="table table-striped table-bordered">
                    <thead className="table-head">
                        <tr>
                            <th>Timing</th>
                            <th>Med Info</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meds.map(currentMed =>
                            <tr key={currentMed.horseMedID}>
                                <td>{currentMed.timingName}</td>
                                <td>{currentMed.amount} {currentMed.unit} {currentMed.medName}</td>
                                <td>{currentMed.medNotes ? currentMed.medNotes : '-'}</td>
                            </tr>                      
                        )}
                    </tbody>
                </table>) : ('')}
                <AddNewMedsModal sendData={this.getMedData}></AddNewMedsModal>
            </div>
        )
    }
}