import React from 'react';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';


export class FeedSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: []
        };
    }

    componentDidMount() {
        if (this.props.horseID) {
            fetch(`/restapi/feed/${this.props.horseID}`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => this.setState({feed: data}))
            .catch(err => console.log("Error reading data: ", err))
        }
    }
    render() {
        const { feed } = this.state;
        console.log("feed = ", feed);

        return (
            <div className="section-wrapper">
            <h5 className="form-heading" id="feed-info-header">Feed Information</h5>

            {feed ? 
                (feed.map(currentFeed =>
                <div className="feed-info" key={currentFeed.horseFeedID}>
                    <div className="row">
                    <div className="col-sm">
                        <AmountsDropdown dropdownID="feed-amount" required="true" amount={currentFeed.amountID}></AmountsDropdown>
                    </div>
                    <div className="col-sm">
                        <UnitsDropdown dropdownID="feed-unit" required="true" unit={currentFeed.unitID}></UnitsDropdown>
                    </div>
                    <div className="col-sm">
                        <FeedDropdown dropdownID="feed-type" required="true" feed={currentFeed.feedID}></FeedDropdown>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="feed-notes">Special Notes</label>
                        <textarea className="form-control" id="feed-notes" defaultValue={currentFeed.feedNotes || ""}></textarea>
                    </div>
                    <hr></hr>
                </div>
            )) : (
                <div className="feed-info">
                    <div className="row">
                    <div className="col-sm">
                        <AmountsDropdown dropdownID="feed-amount" required="true"></AmountsDropdown>
                    </div>
                    <div className="col-sm">
                        <UnitsDropdown dropdownID="feed-unit" required="true"></UnitsDropdown>
                    </div>
                    <div className="col-sm">
                        <FeedDropdown dropdownID="feed-type" required="true"></FeedDropdown>
                    </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="feed-notes">Special Notes</label>
                        <textarea className="form-control" id="feed-notes"></textarea>
                    </div>
                    <hr></hr>
                </div>
            )}

            </div>
        )
    }
}