import React from 'react';
import PropTypes from 'prop-types';
import { setTimeout } from 'timers';


export class Home extends React.Component{

    constructor(props){
    super();
    console.log(props.initialAge);
     this.state= {
    age: props.initialAge,
    status: 0,
    homeLink:props.initiallink
     };
     setTimeout(()=>{
         this.setState({
          status:1
         })
     }, 30000);
}

onMakeOldAge()
{
    console.log(this.state.age);
    this.setState({
       age: this.state.age +3
    });
   
}    

onchangeLink()
{
    alert(this.state.homeLink);
    this.props.newlink(this.state.homeLink);
}
onChangeHandler(event)
{
    alert(event.target.value);
 this.setState ({     
    homeLink: event.target.value
 });
 alert(this.state.homeLink)
}
render(){
    return(        
        <div>
        <p> in a new component </p> 
        <p> your name : {this.props.name}, your age is : {this.state.age} </p>
        <p> your status : {this.state.status}</p>
       <button onClick ={this.onMakeOldAge.bind(this)} className="btn btn-primary">Make me older!</button>
       <button onClick ={()=>this.onMakeOldAge() } className="btn btn-primary">Make me older another!</button>        
        <hr/>
        <h4>hi</h4>  
        <button onClick={this.props.greet}>Greet</button> 
        <hr/>   
        <input type ="text" value={this.state.homeLink} 
        onChange={(event)=>this.onChangeHandler(event)}>
        </input>
        <hr/>   
        <button onClick={this.onchangeLink.bind(this)}>Change header</button>  
        </div>
        );
    }
}
Home.propTypes= {

    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func,
    onchangeLink: PropTypes.func,
    initiallink:PropTypes.string
   
}