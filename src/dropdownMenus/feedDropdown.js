import React from 'react';

export class FeedDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/allfeed', {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({feed: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {feed} = this.state;
        var required;
        if (this.props.required == "true") { required = true; }
        else { required = false; }

        return (
            <div className="form-group">
                <label htmlFor={this.props.dropdownID}>Feed Type{required ? (<span className="required-input">*</span>) : ("")}</label>
                <select className="form-control" id={this.props.dropdownID} required={required}>
                <option value="" defaultValue>Select Feed Type</option>
                    {feed.map(currentFeed =>
                        <option key={currentFeed.feedID} value={currentFeed.feedID}>{currentFeed.feedName}</option>
                    )}
                </select>
            </div>
        )
    }
}