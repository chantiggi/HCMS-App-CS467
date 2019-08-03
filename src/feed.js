import React from 'react';
import './feed_style.css';

export class FeedPage extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            horse: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/feed')
            .then(response => response.json())
            .then(data => this.setState({horse: data.horse}));
    }
    
    render() {
        return (
            <div className="container">
                <h1>Horse Feed</h1>
                <table className="table table-striped">
                    <thead className="table-head">
                        <tr>
                            <th>Horse Name</th>
                            <th>AM Location</th>
                            <th>PM Location</th>
                            <th>Feed</th>
                            <th>Special Notes</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="meds">
                            <td>Abigail</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1 scoop Strategy</td>
                            <td>Mix together and soak with 1/2 c warm water</td>
                            <td>
                                <button type="button" className="btn" id="med-btn" data-toggle="modal" data-target=".dialog-box">MEDS</button>
                                <div className="modal fade dialog-box">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3>Horse Medications - Abigail</h3>
                                                <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                            </div>

                                            <div className="modal-body modal-sm">
                                                <h4>AM</h4>
                                                <ul className="am-meds">
                                                    <li>1 scoop probiotic</li>
                                                </ul>

                                                <h4>PM</h4>
                                                <ul className="pm-meds">
                                                    <li>1/2 scoop glucosamine</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="no-meds">
                            <td>Buttercup</td>
                            <td>2</td>
                            <td>2</td>
                            <td>2 scoop Strategy</td>
                            <td> - </td>
                            <td>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}