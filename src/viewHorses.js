import React from 'react';
import { Link } from 'react-router-dom';
import './view_horses_style.css';

export class ViewHorsesPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="input-group">
                    <input type="text" placeholder="Search horses..." />
                    <div className="input-group-append">
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </div>
                </div>
                <div className="all-horses">
                    <div className="row">
                        <div className="card horseCard">
                            <Link to={'/viewindivhorse'} className="horse-link">
                                <img className="card-img-top horse-image" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                <div className="card-body profile-preview">
                                  <p className="card-text">Name: HorseName</p>
                                  <p className="card-text">Age: HorseAge </p>
                                  <p className="card-text">Handler Level: HorseHandlerLevel </p>
                                </div>
                            </Link>
                        </div>
                        <div className="card horseCard">
                            <Link to={'/viewindivhorse'} className="horse-link">
                                <img className="card-img-top horse-image" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                <div className="card-body profile-preview">
                                  <p className="card-text">Name: HorseName</p>
                                  <p className="card-text">Age: HorseAge </p>
                                  <p className="card-text">Handler Level: HorseHandlerLevel </p>
                                </div>
                            </Link>
                        </div>
                        <div className="card horseCard">
                            <Link to={'/viewindivhorse'} className="horse-link">
                                <img className="card-img-top horse-image" src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                <div className="card-body profile-preview">
                                  <p className="card-text">Name: HorseName</p>
                                  <p className="card-text">Age: HorseAge </p>
                                  <p className="card-text">Handler Level: HorseHandlerLevel </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
