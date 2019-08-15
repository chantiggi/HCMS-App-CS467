import React from 'react';

export class PMMedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pmmeds: []
        };
    }

    componentDidMount() {
        const horseID = this.props.horseID;
        fetch(`/restapi/pm-meds/${horseID}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({pmmeds: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {pmmeds} = this.state;

        return (
            <ul>
            {pmmeds.map(currentMed =>
                <li key={currentMed.horseMedID}>{currentMed.amount} {currentMed.unit} {currentMed.medName} {currentMed.medNotes ? ('(Notes: ' + currentMed.medNotes + ')') : ''}</li>
            )}
            </ul>
        )
    }
}