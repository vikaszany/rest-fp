import React from "react"
import {render} from "react-dom"

import {Header} from "../app/components/Header"
import {Home} from  "../app/components/Home"
class App extends React.Component{
    render(){
        return(
            <div className="container"> 
            <div className="row"><Header/>
            </div>
            <div><h1><Home/></h1>
            </div>
            </div>
        
        );

    }
}

render(<App/>, window.document.getElementById('app'));
