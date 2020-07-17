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
        <div className="profile">

    <Router>

        <nav class="nav">
        <Link to="/contents"><a class="nav-link">Contents</a></Link>
        <Link to="/myself"><a class="nav-link active">Myself</a></Link>
        <Link to="/myposts"><a class="nav-link">My Posts</a></Link>
        <Link to="/following"><a class="nav-link">Following</a></Link>
        <Link to="/followers"><a class="nav-link">Followers</a></Link>
        </nav>

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
    
    </Router>
            
        </div>
    )
}

export default Profile;