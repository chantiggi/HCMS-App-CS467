import React from 'react';
import './manage_horses_style.css';
import { ManagementTabs } from './managementtabs';
import { Link } from 'react-router-dom';

export class ManageHorses extends React.Component {
    render() {
        return (
            <div className="container">
                
                <ManagementTabs />
                
                <div className="tab-content" id="manage-horses-tab">
                    
                    <div id="manage-horses-main">
                        <h5>To view a horse's full profile, including history, feed, medications, click Edit/Delete for the appropriate horse.</h5>
                        <table className="table table-striped table-bordered" id="manage-horses-table">
                            <thead className="table-head">
                                <tr>
                                    <th>Horse Name</th>
                                    <th>Handler Level</th>
                                    <th>Description</th>
                                    <th>Photo</th>
                                    <th>Daytime Location</th>
                                    <th>Nighttime Location</th>
                                    <th>Estimated Age</th>
                                    <th>&nbsp;</th>
                                </tr> 
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <td>horseName</td>
                                    <td>handlerLevel</td>
                                    <td>description</td>
                                    <td>photo</td>
                                    <td>dayLocation</td>
                                    <td>nightLocation</td>
                                    <td>age</td>
                                    <td>
                                        
                                        <Link to={'/edithorse'} type="button" className="btn" id="edit-del-btn">Edit/Delete</Link>
                                    </td>
                                </tr>
                            </tbody>                       
                        </table>
                        
                        <button type="button" className="btn" id="add-btn">Add New Horse</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}