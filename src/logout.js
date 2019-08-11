import React from 'react';
import { PublicMenu } from './publicMenu';


export class LogoutPage extends React.Component {
    render() {
        return (

        	<div>
        	<PublicMenu />
            <h3>You have been successfully logged out!</h3>

            </div>
        )
    }
}