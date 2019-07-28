import React from 'react';

export class UserHomePage extends React.Component {
    render() {
        return (
            <div className="container">

                <h3>OrgName goes here</h3>
                <h5>Welcome, UserFirstName UserLastName!</h5>
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
                </div>

            </div>
        )
    }
}