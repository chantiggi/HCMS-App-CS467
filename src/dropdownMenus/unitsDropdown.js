import React from 'react';

export class UnitsDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            units: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/allunits', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({units: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {units} = this.state;
        var required;
        if (this.props.required == "true") { required = true; }
        else { required = false; }

        return (
            <div className="form-group">
                <label htmlFor={this.props.dropdownID}>Unit{required ? (<span className="required-input">*</span>) : ("")}</label>
                <select className="form-control" id={this.props.dropdownID} required={required}>
                    <option value="" defaultValue>Select Unit</option>
                    {units.map(unit =>
                        <option key={unit.unitID} value={unit.unitID}>{unit.unit}</option>
                    )}
                </select>
            </div>
        )
    }
}