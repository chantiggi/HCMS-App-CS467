import React from 'react';
import './stylesheets/med_style.css';
import { NavBar } from './navbar';
import { Footer } from './footer';
import { MedList } from './medList';
import { AMMedList } from './AMMedList';
import { PMMedList } from './PMMedList';

export class MedPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            horses: [],
            selectedOption: "AllMeds"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
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
                <h1>Horse Medications</h1>

                <form>
                    <div className="switch-field">
                        <input type="radio" 
                            value="AllMeds" 
                            id="AllMeds" 
                            checked={this.state.selectedOption === "AllMeds"} 
                            onChange={this.handleChange} />
                            <label htmlFor="AllMeds">All Meds</label>
                        <input type="radio" 
                            value="AM" 
                            id="AM" 
                            checked={this.state.selectedOption === "AM"} 
                            onChange={this.handleChange}/>
                            <label htmlFor="AM">View AM Meds</label>
                        <input type="radio" 
                            value="PM" 
                            id="PM" 
                            checked={this.state.selectedOption === "PM"} 
                            onChange={this.handleChange}/>
                            <label htmlFor="PM">View PM Meds</label>
                    </div>
                </form>

                <table className="table table-striped">
                    <thead className="table-head">
                        <tr>
                            <th>Horse Name</th>
                            <th>Daytime Location</th>
                            <th>Nighttime Location</th>
                            <th>Medication</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horses.map(horse =>
                        <tr className="med-horse all-horses" key={horse.horseID}>
                            <td>{horse.horseName}</td>
                            <td>{horse.dayLocationName}</td>
                            <td>{horse.nightLocationName}</td>
                            <td>{((this.state.selectedOption === "AllMeds") ? (<MedList horseID={horse.horseID}></MedList>) 
                            : ((this.state.selectedOption === "AM") ? (<AMMedList horseID={horse.horseID}></AMMedList>) : (<PMMedList horseID={horse.horseID}></PMMedList>)))}
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