import React from 'react';

export class TimingDropdown extends React.Component {
    constructor(props) {
        super(props);

        if(this.props.time) {
            this.state = {
                times: [],
                value: this.props.time
            };
        }
        else {
            this.state = {
                times: [],
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
        fetch('/restapi/alltimes', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({times: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {times} = this.state;

        return (
            <div className="form-group">
                <label htmlFor="med-timing">Timing</label>
                <select className="form-control" id="med-amount" value={this.state.value} onChange={this.handleChange}>
                    <option value="">Select Timing</option>
                    {times.map(time =>
                        <option key={time.timingID} value={time.timingID}>{time.timingName}</option>
                    )}
                </select>
            </div>
        )
    }
}