import React from 'react';
import './stylesheets/admin_home.css';
import { NavBar } from './navbar';
import { Footer } from './footer';
import { EditPost } from './home_edit'
import { AddPost } from './home_add'
import Moment from 'react-moment';
import { Modal } from 'react-bootstrap';

export class AdminHomePage extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          posts: []
      };
  }

  reloadPage = () => {
        window.location.reload();
  }

  componentDidMount() {
      fetch('/restapi/home', {
          method: "GET"
      })
          .then(response => response.json())
          .then(data => this.setState({posts: data}))
          .catch(err => console.log("Error reading data: ", err))
  }    
    render() {
        const {posts} = this.state;

        //newest post on top
        posts.sort(function(a, b) {
            var dateA = new Date(a.datetime), dateB = new Date(b.datetime);
            return dateB - dateA;
        });        

        return (

            <div>
                <NavBar />

                <div className="homepage">
                    <h3 className="title"> Welcome to the Horse Care Management System </h3>

                    <h5 className="subtitle"> Here is what is new and upcoming: </h5>

                    <table className="table" id="manage-posts-table">
 
                        <div>
                        {posts.map(post =>
                        <tbody>
                            
                            <tr key={post.orgNoteID}>
                                <td className="date">
                                    <Moment format=" ddd   YYYY MMM DD">
                                        {post.datetime}
                                    </Moment>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="author">Posted By: {post.fname} {post.lname}</td>
                                <td></td>
                            </tr>
                            <tr className="blogPost">
                                <td className="col-sm-6">{post.orgNote}</td>
                                <td width="10%">
                                    <EditPost modeTitle="Edit" orgNoteID={post.orgNoteID} reloadParent={this.reloadPage} />
                                </td>
                            </tr> 
                                                                               
                        </tbody>
                        )}    
                        </div>
                    </table>
                    <AddPost modeTitle="Add New Post" reloadParent={this.reloadPage}/>
                </div>


                <Footer />
            </div>
        )
    }
}