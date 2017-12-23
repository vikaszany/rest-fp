import React from "react"
import {render} from "react-dom"

import {Header} from "../app/components/Header"
import {Home} from  "../app/components/Home"
class App extends React.Component{
    constructor(){
        super();
this.state= {
    homeLink: "Home"
};
    }

onChangeLinkName(newLink)
{
    alert(newLink);
    this.setState(
        {
            homeLink:newLink 
        })
}

    
    onGreet()
    {
        alert("hello");
    }
    render(){
        var users   = {
            Name:"vikas",
            Hobbies :["sports", "Heading"]
        };
        return(
            <div className="container"> 
            <div className="row"><Header homelink={this.state.homeLink} ></Header>
            </div>
            <div>
                <Home name = {"vik"} 
                initialAge={27}  
                greet={this.onGreet}
                newlink={this.onChangeLinkName.bind(this)}
                >
            
            </Home> 
            </div>
            </div>
        
        );

    }
}

render(<App/>, window.document.getElementById('app'));
