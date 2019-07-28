import React from 'react';
import './admin_home.css';

export class AdminHomePage extends React.Component {
    render() {
        return (
            <div className="container">

                <h3>Organization Name</h3>

                <h5>Welcome, AdminFirstName AdminLastName!</h5>
                <h6>Here's what is new for Organization Name:</h6>

                <div className="blogpost">
                    <div className="blogdate">
                        blogdate here
                    </div>
                    <div className="blogauthor">
                        Posted by: AdminName
                    </div>
                    <div className="post">
                        Most recent post #1
                    </div>
                    <input type="submit" value="Edit/Delete" className="btns submitbtn" />
                </div>

                <div className="blogpost">
                    <div className="blogdate">
                        blogdate here
                    </div>
                    <div className="blogauthor">
                        Posted by: AdminName
                    </div>
                    <div className="post">
                        Most recent post #2
                    </div>
                    <input type="submit" value="Edit/Delete" className="btns submitbtn" />
                </div>

                <div className="blogpost">
                    <div className="blogdate">
                        blogdate here
                    </div>
                    <div className="blogauthor">
                        Posted by: AdminName
                    </div>
                    <div className="post">
                        Most recent post #3
                    </div>
                    <input type="submit" value="Edit/Delete" className="btns submitbtn" />
                </div>

                <div className="newpost">
                    <a href="#INSERT LINK TO POST NEW BLOG" data-toggle="modal" data-target=".dialog-box">Add New Post</a>
                    <div className="modal fade dialog-box">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6>New Blog Post</h6>
                                    <button type="button" className="close" aria-label="Close" data-dismiss="modal">X</button>
                                </div>

                                <div className="modal-body modal-lg">

                                    <div className="row login">
                                        <div className="col-8 col-sm-6">Date:</div>
                                        <div className="col-8 col-sm-9"><input type="date" name="date" /> </div>
                                    </div>
                                    <div className="row login">
                                        <div className="col-8 col-sm-6">Post:</div>
                                        <div className="col-8 col-sm-9"><textarea cols="100" rows="10" ></textarea> </div>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}