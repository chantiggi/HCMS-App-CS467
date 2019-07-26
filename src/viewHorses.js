import React from 'react';
import { Link } from 'react-router-dom';
import { ViewIndivHorsePage } from './viewIndivHorse';
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
                        <div className="col">
                            <Link to={'/viewhorses/:horseid'} className="horse-link">
                                <div className="horse-image">
                                    <img src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                </div>
                                <p>Name: HorseName</p>
                                <p>Age: HorseAge </p>
                                <p>Handler Level: HorseHandlerLevel </p>
                            </Link>
                        </div>
                        <div className="col">
                            <a href="/#HORSE" className="horse-link">
                                <div className="horse-image">
                                    <img src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                </div>
                                <p>Name: HorseName</p>
                                <p>Age: HorseAge </p>
                                <p>Handler Level: HorseHandlerLevel </p>
                            </a>
                        </div>
                        <div className="col">
                            <a href="#HORSE" className="horse-link">
                                <div className="horse-image">
                                    <img src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                                </div>
                                <p>Name: HorseName</p>
                                <p>Age: HorseAge </p>
                                <p>Handler Level: HorseHandlerLevel </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
