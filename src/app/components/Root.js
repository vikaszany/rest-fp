import React from "react";
import {Header} from "../components/Header";

export class Root extends React.Component{

    render(){
        return(
        <div className="container">
            <div className="row">
                    <div className="">
                    <Header/>
                     </div>
            </div>
            <div className="row">
                <div>
                {this.props.children}
                </div>
            </div>
        </div>
        
    )
};
}