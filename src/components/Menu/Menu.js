import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './Menu.css';

const Menu = () => {
    return (
        <div className="menu">
            <ul className="menu-nav">
                <li className="menu-nav-element"><a className="menu-nav-link" href="#">Posts</a> </li>
                <li className="menu-nav-element"><a className="menu-nav-link" href="#">Profile</a></li>
            </ul>
        </div>
    )
}

export default Menu;