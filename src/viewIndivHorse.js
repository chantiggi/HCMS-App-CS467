import React from 'react';
import './horse_individual_style.css';
import { Link } from 'react-router-dom';

export class ViewIndivHorsePage extends React.Component {
    render() {
        return (
            <div class="container">
                <div id="back-to-horses">
                    <Link to={'/viewhorses'}>Back to Horses</Link>
                </div>
                <div id="horse-image">
                    <img src="https://images.unsplash.com/photo-1553284965-5dd8352ff1bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                </div>
                <div class="horse-profile">
                    <h5>Name: </h5>
                    <h5>Handler Level: </h5>
                    <h5>Description:</h5>
                    <h5>Age: </h5>
                    <h5>Special Notes: </h5>
                    <h5>History: </h5>
                    <h5>Daytime Location: </h5>
                    <h5>Nighttime Location: </h5>
                    <h5>Feed:</h5>
                    <h5>Meds:</h5>
                </div>
                <div class="horse-nav">
                    <nav aria-label="Individual Horse Navigation">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}