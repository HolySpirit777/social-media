import React from 'react';
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Followers from './Followers/Followers';
import MyPosts from './My Posts/MyPosts';
import Myself from './Myself/Myself';
import Following from './Following/Following';

const Profile = (props) => {
    return (
        <div>

            <h1 className="profile-tittle">Profile</h1> 

            <Router>
      <div>
        <ul className="profile-options">
        <li className="profile-options-element">
            <Link className="menu-nav-link" to="/myself">Myself</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/myposts">My Posts</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/following">Following</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/followers">Followers</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/myself">
            <Myself />
          </Route>
          <Route path="/myposts">
            <MyPosts />
          </Route>
          <Route path="/followers">
            <Followers />
          </Route>
          <Route path="/following">
            <Following />
          </Route>
        </Switch>
    
      </div>
    </Router>
            
        </div>
    )
}

export default Profile;