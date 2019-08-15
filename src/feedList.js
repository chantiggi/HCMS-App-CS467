import React from 'react';

export class FeedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: []
        };
    }

    componentDidMount() {
        const horseID = this.props.horseID;
        fetch(`/restapi/feed/${horseID}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({feed: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {feed} = this.state;

        return (
            <ul>
                {feed.map(currentFeed =>
                    <li key={currentFeed.horseFeedID}>{currentFeed.amount} {currentFeed.unit} {currentFeed.feedName} {currentFeed.feedNotes ? ('(Notes: ' + currentFeed.feedNotes + ')') : ''}</li>
                )}
            </ul>
        )
    }
}