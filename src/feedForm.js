import React from 'react';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';
import { AddNewFeedModal } from './addNewFeedModal';


export class FeedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: []
        };
        this.getFeedData = this.getFeedData.bind(this);
    }

    getHorseInfo() {
        if (this.props.horseID) {
            fetch(`/restapi/feed/${this.props.horseID}`, {
                method: "GET",
            })
            .then(response => response.json())
            .then(data => this.setState({feed: data}))
            .catch(err => console.log("Error reading data: ", err))
        }
    }

    getFeedData(val) {
        let feedToAddTo = this.state.feed;
        // Make a temporary horseFeedID to use as key for initial display. We will ignore this in the query
        // so that the database autogenerates its own horseFeedID
        val.horseFeedID = new Date().getUTCMilliseconds();
        feedToAddTo.push(val);
        this.setState({feed: feedToAddTo});
        this.props.sendData(this.state.feed);
    }

    componentDidMount() {
        this.getHorseInfo();
    }

    render() {
        const { feed } = this.state;

        return (
            <div>
                {feed ? (feed.map(currentFeed =>
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
                <AddNewFeedModal sendData={this.getFeedData}></AddNewFeedModal>
            </div>
        )
    }
}