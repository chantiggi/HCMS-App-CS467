import React from 'react';

export class LocationsDropdown extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.location) {
          this.state = {
              locations: [],
              value: this.props.location
          };
        }
        else {
          this.state = {
              locations: [],
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
        fetch('/restapi/alllocations', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({locations: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {locations} = this.state;
        var required;
        if (this.props.required == "true") { required = true; }
        else { required = false; }

        return (
            <div className="form-group">
                <label htmlFor={this.props.dropdownID}>{this.props.time === "AM" ? "Daytime" : "Nighttime"} Location{required ? (<span className="required-input">*</span>) : ("")}</label>
                <select className="form-control" id={this.props.dropdownID} value={this.state.value} onChange={this.handleChange} required={required}>
                    <option value="">Select Location</option>
                    {locations.map(location =>
                        <option key={location.locationID} value={location.locationID}>{location.locationName}</option>
                    )}
                </select>
            </div>
        )
    }
}
