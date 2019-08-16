import React from 'react';

export class MedsDropdown extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.med) {
            this.state = {
                meds: [],
                value: this.props.med
            };
        }
        else {
            this.state = {
                meds: [],
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
                <label htmlFor="med-type">Med Type</label>
                <select className="form-control" id="med-type" value={this.state.value} onChange={this.handleChange}>
                <option value="">Select Medicine Type</option>
                    {meds.map(med =>
                        <option key={med.medID} value={med.medID}>{med.medName}</option>
                    )}
                </select>
            </div>
        )
    }
}