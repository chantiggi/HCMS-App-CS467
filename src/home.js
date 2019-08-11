import React, { Component, Fragment } from 'react';
import './stylesheets/landing_page.css';
import image from './horse.jpg';
import { PublicMenu } from './publicMenu';
import { NavLink } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
            <div>
            <PublicMenu />

    
            <div className="container">
                <Fragment>
                <h3 className="lp-heading"><span> Welcome to the Horse Care Management System.</span></h3>
                <h5 className="lp-subheading">HCMS is an information keeping system that provides support for the following:</h5>
                </Fragment>
                <ul className="list">
                    <li> Managing Horses </li>
                    <li> Manging Feeds </li>
                    <li> Managing Medications </li>
                    <li> Managing Handlers </li>
                </ul>
                <div className="moreinfo">
                    For more information or a trial account, contact our HCMS representatives at (800) 555-5555
                </div>
            </div>
            </div>

        )
    }
}
