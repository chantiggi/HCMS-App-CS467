import React from 'react';

export class HandlersDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            handlers: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/allhandlerlevels', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({handlers: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {handlers} = this.state;
        var required;
        if (this.props.required === "true") { required = true; }
        else { required = false; }

        return (
            <div className="form-group">
                <label htmlFor={this.props.dropdownID}>Handler Level{required ? (<span className="required-input">*</span>) : ("")}</label>
                <select className="form-control" id={this.props.dropdownID} required={required}>
                    <option value="" defaultValue>Select Handler Level</option>
                    {handlers.map(handlerLevel =>
                        <option key={handlerLevel.handlerLevelID} value={handlerLevel.handlerLevelID}>{handlerLevel.handlerLevelName}</option>
                    )}
                </select>
            </div>
        )
    }
}