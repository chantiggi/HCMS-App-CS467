import React from 'react';
import './feed_style.css';

export class FeedPage extends React.Component {
    render() {
        return (
            <div class="container">
                <h1>Horse Feed</h1>
                <table class="table table-striped">
                    <thead class="table-head">
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
                        <tr class="meds">
                            <td>Abigail</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1 scoop Strategy</td>
                            <td>Mix together and soak with 1/2 c warm water</td>
                            <td>
                                <button type="button" class="btn" id="med-btn" data-toggle="modal" data-target=".dialog-box">MEDS</button>
                                <div class="modal fade dialog-box">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h6>Horse Medications - Abigail</h6>
                                                <button type="button" class="close" aria-label="Close" data-dismiss="modal">X</button>
                                            </div>
                                            <div class="modal-body modal-sm">
                                                <h6>AM</h6>
                                                <ul class="am-meds">
                                                    <li>1 scoop probiotic</li>
                                                </ul>

                                                <h6>PM</h6>
                                                <ul class="pm-meds">
                                                    <li>1/2 scoop glucosamine</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="no-meds">
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
