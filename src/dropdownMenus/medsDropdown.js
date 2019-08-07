import React from 'react';

export class MedsDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meds: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/allmeds', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({meds: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {meds} = this.state;

        return (
            <div className="form-group">
                <label htmlFor="med-type">Type</label>
                <select className="form-control" id="med-type">
                <option value="" defaultValue>Select Medicine Type</option>
                    {meds.map(med =>
                        <option key={med.medID} value={med.medID}>{med.medName}</option>
                    )}
                </select>
            </div>
        )
    }
}