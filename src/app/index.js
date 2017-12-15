import React from "react"
import {render} from "react-dom"

import {Header} from "../app/components/Header"
import {Home} from  "../app/components/Home"
class App extends React.Component{
    render(){
        var users   = {
            Name:"vikas",
            Hobbies :["sports", "Heading"]
        };
        return(
            <div className="container"> 
            <div className="row"><Header/>
            </div>
            <div>
                <Home name = {"vik"} age={27} user ={users} >
              <p>this is awesome!</p>
            </Home> 
            </div>
            </div>
        
        );

    }
}

render(<App/>, window.document.getElementById('app'));
