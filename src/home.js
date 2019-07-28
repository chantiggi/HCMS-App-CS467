import React from 'react';
import './landing_page.css';
import image from './horse.jpg';

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <img src={image} />
                <h3><span> Welcome to the Horse Care Management System.</span></h3>
                <h5> HCMS is an information keeping system that provides support for the following:  </h5>
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
        )
    }
}