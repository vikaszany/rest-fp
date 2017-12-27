import React from "react"
import {render} from "react-dom"

import { BrowserRouter as Router, Route, Link, browserHistory, Routerchange  } from 'react-router-dom'
import {Switch} from 'react-router'; 

import {Root} from "../app/components/Root"
import {Home} from  "../app/components/Home"
import {User} from  "../app/components/User"

import createHistory from 'history/createBrowserHistory'
import { createHashHistory } from 'history'
export const history = createHashHistory()

class App extends React.Component{
    render(){
return(
    
    <Router >
               
            <div> 
               <Route path= {"/"} component={Root} />  
               <Switch>
        <Route path= {"/Home"} component={Home} />       
        <Route path= {"/user/:id"} component={User} history={history} />
      

        </Switch>
      </div>
        </Router>
);
       
    }
}

render(<App/>, window.document.getElementById('app'));
