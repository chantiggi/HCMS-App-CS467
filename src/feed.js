import React from 'react';
import './stylesheets/feed_style.css';
import { FeedList } from './feedList.js';
import { HorseMedsModal } from './horseMedsModal';
import { NavBar } from './navbar';
import { Footer } from './footer';

export class FeedPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            horses: []
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
            <div>
            <NavBar />
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
                                <td>{horse.hasFeed ? (<FeedList horseID={horse.horseID}></FeedList>) : ("N/A")}</td>
                                <td>
                                    {horse.hasMeds ? (<HorseMedsModal horseID={horse.horseID} horseName={horse.horseName}></HorseMedsModal>)
                                    : ('')}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
            </div>
        )
    }
}
