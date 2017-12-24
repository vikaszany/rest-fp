import React from 'react';

export const  Header =(props)=> {
    return (
       
        <div className="container">
        <div className="navbar-header">
        <ul className="nav navbar-nav">        
            <li>
                <a href="#">{props.homelink}</a>
                </li>
            </ul>      

        </div>
        </div>
        
    );
}
