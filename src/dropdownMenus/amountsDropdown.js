import React from 'react';

export class AmountsDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amounts: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/allamounts', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({amounts: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {amounts} = this.state;
        var required;
        if (this.props.required == "true") { required = true; }
        else { required = false; }

        return (
            <div className="form-group">
                <label htmlFor={this.props.dropdownID}>Amount{required ? (<span className="required-input">*</span>) : ("")}</label>
                <select className="form-control" id={this.props.dropdownID} required={required}>
                    <option value="" defaultValue>Select Amount</option>
                    {amounts.map(amount =>
                        <option key={amount.amountID} value={amount.amountID}>{amount.amount}</option>
                    )}
                </select>
            </div>
        )
    }
}