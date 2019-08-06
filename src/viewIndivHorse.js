import React from 'react';
import './stylesheets/horse_individual_style.css';
import { Link } from 'react-router-dom';
import { FeedList } from './feedList.js';
import { MedList } from './medList.js';

export class ViewIndivHorsePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horse: []
        };
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        fetch(`/restapi/horses/${params.horseID}`, {
            method: "GET",
        })
            .then(response => response.json())
            .then(data => this.setState({ horse: data }))
            .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {horse} = this.state;

        return (
            <div className="container">
                <div id="back-to-horses">
                    <Link to={'/viewhorses'}>Back to Horses</Link>
                </div>
                <div id="horse-image">
                    <img src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                </div>
                {horse.map(currentHorse =>
                    <div className="horse-profile" key={currentHorse.horseID}>
                        <h5>Name: {currentHorse.horseName} </h5>
                        <h5>Handler Level: {currentHorse.handlerLevelName} </h5>
                        <h5>Description: {currentHorse.description || "N/A"} </h5>
                        <h5>Age: {(new Date()).getFullYear() - currentHorse.birthYear + " years" || "Unknown"} </h5>
                        <h5>Special Notes: {currentHorse.specialNotes || "N/A"} </h5>
                        <h5>History: {currentHorse.history || "N/A"} </h5>
                        <h5>Daytime Location: {currentHorse.dayLocationName} </h5>
                        <h5>Nighttime Location: {currentHorse.nightLocationName} </h5>
                        <h5>Feed: <FeedList horseID={currentHorse.horseID}></FeedList> </h5>
                        <h5>Meds: {currentHorse.horseMedArray ? (<MedList horseID={currentHorse.horseID}></MedList>) : ("None")} </h5>
                    </div>
                )}
            </div>
        )
    }
}