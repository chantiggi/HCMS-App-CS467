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
            horses: [],
            isOpen: false
        };
    }

    toggleModal = (e, horse) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (horse) {
            this.setState({
                selectedHorseID: horse.horseID || null,
                selectedHorseName: horse.horseName || null
            });
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
                                <td><FeedList horseID={horse.horseID}></FeedList></td>
                                <td>
                                    {horse.horseMedArray ? (<button type="button" className="btn" id="med-btn" onClick={(e) => this.toggleModal(e, horse)}>MEDS</button>)
                                    : ( '-' )}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <HorseMedsModal show={this.state.isOpen} onClose={(e) => this.toggleModal(e, null)} horseID={this.state.selectedHorseID} horseName={this.state.selectedHorseName}></HorseMedsModal>
            </div>
            <Footer />
            </div>
        )
    }
}
