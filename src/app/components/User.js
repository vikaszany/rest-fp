import React from "react"
import {  browserHistory} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'
export const history = createHashHistory()
export class User extends React.Component{
    constructor(props){
        super(props);
        this.submit =this.submit.bind(this);
    }
    submit()
    {
     console.log(this.props);
     
    this.props.history.push("/Home")
    
    }
    
        render(){
return(
    
    <div>
       
        <h3> user name:  </h3>
        <h3> user id: {this.props.match.params.id}</h3>
       <h4><button onClick={this.submit}> submit </button>
           </h4>
        </div>
);

        }
    }