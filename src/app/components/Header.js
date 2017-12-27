import React from 'react';
import { BrowserRouter as Router, Route, NavLink, browserHistory, Routerchange  } from 'react-router-dom'
export const  Header =(props)=> {
    return (
       
        <div className="container">
        <div className="navbar-header">
        <ul className="nav navbar-nav">        
            <li>
                <NavLink to="/home" activeClassName="activeNav">Home</NavLink>
                </li>
                <li>
                <NavLink to="/User" activeClassName="activeNav">User</NavLink>
                </li>
            </ul>      

        </div>
        </div>
        
    );
}
