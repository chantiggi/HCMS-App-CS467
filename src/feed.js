import React from 'react';
import './stylesheets/feed_style.css';
import { FeedList } from './feedList.js';
import { MedList } from './medList.js';

export class FeedPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            horses: [],
        };
    }

    componentDidMount() {
        fetch('/restapi/horses', {
            method: "GET"
        })
            .then(response => response.json())
            .then(data => this.setState({horses: data}))
            .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {horses} = this.state;

        return (
            <div className="container">
                <h1>Horse Feed</h1>
                <table className="table table-striped">
                    <thead className="table-head">
                        <tr>
                            <th>Horse Name</th>
                            <th>AM Location</th>
                            <th>PM Location</th>
                            <th>Feed</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {horses.map(horse =>
                            <tr className="meds" key={horse.horseID}>
                                <td>{horse.horseName}</td>
                                <td>{horse.dayLocationName}</td>
                                <td>{horse.nightLocationName}</td>
                                <td><FeedList horseID={horse.horseID}></FeedList></td>
                                <td>
                                    {horse.horseMedArray ? (
                                        <button type="button" className="btn" id="med-btn" data-toggle="modal" data-target=".dialog-box">MEDS</button>
                                    ) : ( '-' )}

                                    <div className="modal fade dialog-box">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h6>Horse Medications - {horse.horseName}</h6>
                                                    <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                                </div>
                                                <div className="modal-body modal-sm">
                                                    *Need to pull this out into separate component so that it loads for the correct horse*
                                                    <MedList horseID={horse.horseID}></MedList>
                                                    <h6>AM</h6>
                                                    <ul className="am-meds">
                                                        <li>1 scoop probiotic</li>
                                                    </ul>

                                                    <h6>PM</h6>
                                                    <ul className="pm-meds">
                                                        <li>1/2 scoop glucosamine</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}
