import React, { Component, Fragment } from 'react';
import './stylesheets/landing_page.css';
import { PublicMenu } from './publicMenu';
import { NavLink } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <PublicMenu />
                <div className="container">
                    <div className="jumbotron align-items-center">
                        <div className="container">
                            <h1 className="display-4">Horse Care Management System</h1>
                            <p className="lead">HCMS is an application designed to support you in managing the care of your horse or horses. This includes managing each horse's feed, medications, handling requirements, and other history information.</p>
                        </div>
                    </div>
                    <Fragment>
                    </Fragment>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card text-center">
                                <h5 className="card-header">Medications</h5>
                                <img className="card-img-top" src={'/images/HorseMeds.jpg'}></img>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-center">
                                <h5 className="card-header">Feed</h5>
                                <img className="card-img-top" src={'/images/HorseFeed.jpg'}></img>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-center">
                                <h5 className="card-header">Handlers</h5>
                                <img className="card-img-top" src={'/images/HorseHandler.jpg'}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
