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
            newFeed: '',
            amountName: null,
            unitName: null,
            feedName: null,
            specialNotes: null
        };

        //this.getAmountData = this.getAmountData.bind(this);
        //this.getUnitData = this.getUnitData.bind(this);
        //this.getFeedTypeData = this.getFeedTypeData.bind(this);
        this.getFeedData = this.getFeedData.bind(this);
    }

/*    getAmountData(val) {
        let currFeed = this.state;
        console.log("currFeed = ", currFeed);
        currFeed.amountID = Number(val);
        this.setState({feed: currFeed});
        //this.props.sendData(this.state.feed);
        console.log("this.state in feedForm's getAmountData", this.state);
    }
    getUnitData(val) { 
        this.setState({unitID: Number(val)}); 
        this.props.sendData(this.state.feed.unitID);
        console.log("this.state in feedForm's getUnitData", this.state);
    }
    getFeedTypeData(val) {
        this.setState({feedID: Number(val)}); 
        this.props.sendData(this.state.feed.feedID);
        console.log("this.state in feedForm's getFeedTypeData", this.state);
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({...this.state, [event.target.name]: value});
    }
*/
    getFeedData(val) {
        this.getAmountName(val.amountID);
        this.getUnitName(val.unitID);
        this.getFeedName(val.feedID);

        this.setState({newFeed: val});
    }
/*
    componentDidUpdate(prevProps, prevState) {
        if (prevState.newFeed !== this.state.newFeed) {
            console.log("in componentDidUpdate, this.state = ", this.state);
        }
    }
*/
    componentDidMount() {
        this.getHorseInfo();
    }

    getAmountName(amountID) {
        fetch(`/restapi/amount/${amountID}`)
        .then(response => response.json())
        .then(data => { this.setState({amountName: data[0].amount})})
        .catch(err => console.log("Error fetching amount: ", err))
    }

    getUnitName(unitID) {
        fetch(`/restapi/unit/${unitID}`)
        .then(response => response.json())
        .then(data => this.setState({unitName: data[0].unit}))
        .catch(err => console.log("Error fetching unit: ", err))
    }

    getFeedName(feedID) {
        fetch(`/restapi/feed/${feedID}`)
        .then(response => response.json())
        .then(data => this.setState({ feedName: data[0].feedName}))
        .catch(err => console.log("Error fetching feed: ", err))
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

        return (
            <div>
                {feed.length > 0 ?
                (<table className="table table-striped table-bordered">
                    <thead className="table-head">
                        <tr>
                            <th>Feed Info</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                    {feed.map(currentFeed =>
                        <tr key={currentFeed.horseFeedID}>
                            <td>{currentFeed.amount} {currentFeed.unit} {currentFeed.feedName}</td>
                            <td>{currentFeed.feedNotes ? currentFeed.feedNotes : '-'}</td>
                        </tr>
                    )}
                    </tbody>
                </table>) : ('')}
                <AddNewFeedModal sendData={this.getFeedData}></AddNewFeedModal>
            </div>
        )
    }
} 