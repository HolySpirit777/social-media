import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Profile from '../Profile/Profile';
import Posts from '../Posts/Posts';
import './Menu.css';


const Menu = () => {
    return (
            <Router>
      <div className="menu">
        <ul className="menu-nav">
          <li className="menu-nav-element">
            <Link className="menu-nav-link" to="/posts">Posts</Link>
          </li>
          <li className="menu-nav-element">
            <Link className="menu-nav-link" to="/profile">Profile</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
    
      </div>
    </Router>
    )
}

export default Menu;