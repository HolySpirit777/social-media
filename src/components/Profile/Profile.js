import React from 'react';
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Profile = (props) => {
    return (
        <div>

            <h1 className="profile-tittle">Profile</h1> 

            <Router>
      <div>
        <ul className="profile-options">
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/posts">My Posts</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/profile">Myself</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/profile">Following</Link>
          </li>
          <li className="profile-options-element">
            <Link className="menu-nav-link" to="/profile">Followers</Link>
          </li>
        </ul>

        {/* <Switch>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch> */}
    
      </div>
    </Router>
            
        </div>
    )
}

export default Profile;