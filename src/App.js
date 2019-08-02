import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavBar } from './navbar';
import { Home } from './home';
import { OrgReg } from './org_reg';
import { UserReg } from './user_reg';
import { AdminHomePage } from './admin_home';
import { UserHomePage } from './user_home';
import { AddUserPage } from './add_user';
import { ManageOrg } from './manage_org';
import { ManageUsers } from './manage_users';
import { ManageHorses } from './manage_horses';
import { AddEditHorse } from './manage_horses_addedit';
import { EditDeleteUser } from './editdelete_user';
import { MedPage } from './med';
import { FeedPage } from './feed';
import { ViewHorsesPage } from './viewHorses';
import { ViewIndivHorsePage } from './viewIndivHorse';
import { Footer } from './footer';
import { LogoutPage } from './logout';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div id="bodyContent">
                    <NavBar />

                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/orgregistration' component={OrgReg} />
                        <Route path='/userregistration' component={UserReg} />
                        <Route path='/adminhome' component={AdminHomePage} />
                        <Route path='/userhome' component={UserHomePage} />
                        <Route path='/adduser' component={AddUserPage} />
                        <Route path='/manageorg' component={ManageOrg} />
                        <Route path='/manageusers' component={ManageUsers} />
                        <Route path='/managehorses' component={ManageHorses} />
                        <Route path='/addedithorse' component={AddEditHorse} />
                        <Route path='/editdeleteuser' component={EditDeleteUser} />
                        <Route path='/viewhorses' component={ViewHorsesPage} />
                        <Route path='/feed' component={FeedPage} />
                        <Route path='/meds' component={MedPage} />
                        <Route path='/viewindivhorse' component={ViewIndivHorsePage} />
                        <Route path='/logout' component={LogoutPage} />
                    </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}
