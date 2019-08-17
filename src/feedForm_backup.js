import React from 'react';
import { AmountsDropdown } from './dropdownMenus/amountsDropdown';
import { UnitsDropdown } from './dropdownMenus/unitsDropdown';
import { FeedDropdown } from './dropdownMenus/feedDropdown';
import { AddNewFeedModal } from './addNewFeedModal';


export class FeedForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: [],
        };

        this.getAmountData = this.getAmountData.bind(this);
        this.getUnitData = this.getUnitData.bind(this);
        this.getFeedTypeData = this.getFeedTypeData.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
    }

    getAmountData(val) {
        console.log("amount val = ", val);
        console.log("this.state.feed in feedForm's getAmountData = ", this.state.feed);
        //let currFeed = this.state;
        //console.log("currFeed = ", currFeed);
        //currFeed.amountID = Number(val);
        //this.setState({feed: currFeed});
        //this.props.sendData(this.state.feed);
        //console.log("this.state in feedForm's getAmountData", this.state);
    }
    getUnitData(val) {
        console.log("unit val  = ", val)
        //this.setState({unitID: Number(val)}); 
        //this.props.sendData(this.state.feed.unitID);
        console.log("this.state in feedForm's getUnitData", this.state);
    }
    getFeedTypeData(val) {
        console.log("feedtype val  = ", val)
        //this.setState({feedID: Number(val)}); 
        //this.props.sendData(this.state.feed.feedID);
        console.log("this.state in feedForm's getFeedTypeData", this.state);
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }

    getFeedData(val) {
        let feedToAddTo = this.state.feed;
        // Make a temporary horseFeedID to use as key for initial display. We will ignore 
        // this in the query so that the database autogenerates its own horseFeedID
        val.horseFeedID = new Date().getUTCMilliseconds();
        val.isNew = true;
        feedToAddTo.push(val);
        this.setState({feed: feedToAddTo});
        this.props.sendData(this.state.feed);
    }

    componentDidMount() {
        this.getHorseInfo();
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

    render() {
        const { feed } = this.state;
        console.log("this.state in feedForm's render() = ", this.state);

        return (
            <div>
                {feed.map(currentFeed =>
                    <div className="feed-info" key={currentFeed.horseFeedID}>
                        <div className="row">
                        <div className="col-sm">
                            <AmountsDropdown dropdownID="feed-amount" required="true" amount={currentFeed.amountID} sendData={this.getAmountData}></AmountsDropdown>
                        </div>
                        <div className="col-sm">
                            <UnitsDropdown dropdownID="feed-unit" required="true" unit={currentFeed.unitID} sendData={this.getUnitData}></UnitsDropdown>
                        </div>
                        <div className="col-sm">
                            <FeedDropdown dropdownID="feed-type" required="true" feed={currentFeed.feedID} sendData={this.getFeedTypeData}></FeedDropdown>
                        </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="feed-notes">Special Notes</label>
                            <textarea className="form-control" id="feed-notes" name="feedNotes" value={currentFeed.feedNotes ? currentFeed.feedNotes : undefined} onChange={this.handleChange}></textarea>
                        </div>
                        <hr></hr>
                    </div>
                )}
                <AddNewFeedModal sendData={this.getFeedData}></AddNewFeedModal>
            </div>
        )
    }
}