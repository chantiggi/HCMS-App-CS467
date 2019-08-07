import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


import './view_horses_style.css';

export class ViewHorsesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            horses: [],
        };
    }

    componentDidMount() {
        const { match: {params} } = this.props;
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
                <div className="input-group">
                    <input type="text" placeholder="Search horses..." />
                    <div className="input-group-append">
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /><FontAwesomeIcon icon={faEnvelope} /></button>
                    </div>
                </div>
                <div className="all-horses">
                    <div className="row">
                        {horses.map(horse =>
                            <div className="card horseCard" key={horse.horseID}>
                                <Link to={`/viewindivhorse/${horse.horseID}`} className="horse-link">
                                    <img className="card-img-top horse-image" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                    <div className="card-body profile-preview">
                                    <p className="card-text">Name: {horse.horseName}</p>
                                    <p className="card-text">Age: {(new Date()).getFullYear() - horse.birthYear} years</p>
                                    <p className="card-text">Handler Level: {horse.handlerLevelName} </p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                 </div>
            </div>
        )
    }
}
