import React from 'react';
import { Link } from 'react-router-dom';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container" id="footerCont">
                    <div id="navLinks">
                        <label>Navigation</label>
                        <ul>
                            <li><Link to={'/viewhorses'}>View Horses</Link></li>
                            <li><Link to={'/feed'}>View Feed</Link></li>
                            <li><Link to={'/meds'}>View Medications</Link></li>
                            <li><Link to={'/logout'}>Log Out</Link></li>
                        </ul>
                    </div>

                    <div id="devLinks">
                        <label>Development</label>
                        <ul>
                            <li><a href="https://github.com/chantiggi/HCMS-App-CS467">GitHub</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                        </ul>

                    </div>

                    <div id="contributors">
                        <label>Contributors</label>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/jennifer-aldover-6b0943101/">Jennifer Aldover</a></li>
                            <li><a href="https://www.linkedin.com/in/chantelhigginbotham/">Chantel Higginbotham</a></li>
                            <li><a href="https://www.linkedin.com/in/ann-kostecki-aaa345133/">Ann Kostecki</a></li>
                        </ul>
                    </div>

                    <div id="sponsors">
                        <label>Sponsors</label>
                        <ul>
                            <li><a href="">Link to some sponsor</a></li>
                            <li><a href="">Link to some sponsor</a></li>
                            <li><a href="">Link to some sponsor</a></li>
                            <li><a href="">Link to some sponsor</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}