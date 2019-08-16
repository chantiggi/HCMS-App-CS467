import React from 'react';

export class UnitsDropdown extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.unit) {
            this.state = {
                units: [],
                value: this.props.unit
            };
        }
        else {
            this.state = {
                units: [],
                value: ''
            };
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
            if(this.props.sendData) {
                this.props.sendData(this.state.value);
            }
        }
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
                <select className="form-control" id={this.props.dropdownID} value={this.state.value} onChange={this.handleChange} required={required}>
                    <option value="">Select Unit</option>
                    {units.map(unit =>
                        <option key={unit.unitID} value={unit.unitID}>{unit.unit}</option>
                    )}
                </select>
            </div>
        )
    }
}