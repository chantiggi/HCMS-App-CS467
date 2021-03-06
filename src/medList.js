import React from 'react';

export class MedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            meds: []
        };
    }

    componentDidMount() {
        const horseID = this.props.horseID;
        fetch(`/restapi/meds/${horseID}`, {
            method: "GET",
        })
        .then(response => response.json())
        .then(data => this.setState({meds: data}))
        .catch(err => console.log("Error reading data: ", err))
    }
    render() {
        const {meds} = this.state;

        return (
            <ul>
            {meds.map(currentMed =>
                <li key={currentMed.horseMedID}>{currentMed.timingName}: {currentMed.amount} {currentMed.unit} {currentMed.medName} {currentMed.medNotes ? ('(Notes: ' + currentMed.medNotes + ')') : ''}</li>
            )}
            </ul>
        )
    }
}