import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="container" id="footerCont">
                    <div id="navLinks">
                        <label for="">Navigation</label>
                        <ul>
                            <li><a href="#HORSES">View Horses</a></li>
                            <li><a href="#FEED">View Feed</a></li>
                            <li><a href="#MEDICATIONS">View Medications</a></li>
                            <li><a href="#LOGOUT">Log Out</a></li>
                        </ul>
                    </div>

                    <div id="devLinks">
                        <label for="">Development</label>
                        <ul>
                            <li><a href="https://github.com/chantiggi/HCMS-App-CS467">GitHub</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                            <li><a href="#">Link to some framework</a></li>
                        </ul>
        
                    </div>
                    
                    <div id="contributors">
                        <label for="">Contributors</label>
                        <ul>
                            <li><a href="#github/linkedin/email">Jennifer Aldover</a></li>
                            <li><a href="#github/linkedin/email">Chantel Higginbotham</a></li>
                            <li><a href="#github/linkedin/email">Ann Kostecki</a></li>
                        </ul>
                    </div>
                    
                    <div id="sponsors">
                        <label for="">Sponsors</label>
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